import React, { FunctionComponent } from 'react';
import Button from '../../../commons/Button';
import { Container, Lable, ButtonContainer } from './Remove.styled';
import useModal from '../../../Hook/useModal';
import Modal from '../../../commons/Modal';
import { REMOVE_API, LIST_EMPLOYEES_API } from '../../../../constants/routes';
import { mutator, HttpMethod } from '../../../commons/utils/client';
import { mutate } from 'swr';

interface Props {
  username: string;
  mutate?: () => void;
}

const Remove: FunctionComponent<Props> = ({ username }) => {
  const { isShowing, toggle, close } = useModal();

  const onSubmit = async () => {
    const token = localStorage.getItem('token') || '';
    try {
      const { response } = await mutator(REMOVE_API, HttpMethod.POST, token, {
        username,
      });
      if (!response?.ok)
        throw new Error(`${response?.status}: ${response?.statusText}`);
      const data = await response?.json();
      if (data.error) throw new Error(`Unable to remove user`);
      mutate([LIST_EMPLOYEES_API, token]);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={toggle}>Remove</Button>
      <Modal isShowing={isShowing} close={close}>
        <Container>
          <Lable>Are you sure you want to delete this account?</Lable>
          <ButtonContainer>
            <Button onClick={onSubmit}>Remove</Button>
          </ButtonContainer>
        </Container>
      </Modal>
    </>
  );
};

export default Remove;
