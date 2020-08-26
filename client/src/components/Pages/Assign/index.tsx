import React, { FunctionComponent, useState } from 'react';
import Button from '../../commons/Button';
import Modal from '../../commons/Modal';
import useModal from '../../Hook/useModal';
import {
  Container,
  Lable,
  ButtonContainer,
  Tag,
  TagContainer,
} from './Assign.styled';
import Select from 'react-select';
import { IListModel } from '../ListEmployees';
import { REVIEW_API, REVIEW_USERS_API } from '../../../constants/routes';
import { HttpMethod, mutator, fetcher } from '../../commons/utils/client';
import useSWR from 'swr';
import { filterOptions } from './utils';
interface IAssign {
  username: string;
  users: IListModel[];
  token: string;
}

interface IOption {
  value: string;
  label: string;
}

const Assign: FunctionComponent<IAssign> = ({ username, users, token }) => {
  const { isShowing, toggle, close } = useModal();
  const [option, setOption] = useState();
  const [assignUsers, setAssignUsers] = useState<IOption[]>();
  const { data: reviewed = [], mutate } = useSWR<string[]>(
    [REVIEW_USERS_API, token, `reviewTo=${username}`],
    fetcher
  );

  const handleChange = (selectedOption: any) => {
    setOption(selectedOption);
  };

  const onSubmit = async () => {
    try {
      const token = localStorage.getItem('token') || '';
      const { response } = await mutator(REVIEW_API, HttpMethod.POST, token, {
        users: option,
        assignee: username,
      });
      if (!response?.ok)
        throw new Error(`${response?.status}: ${response?.statusText}`);
      const data = await response?.json();
      mutate(reviewed);
      setAssignUsers(filterOptions(users, reviewed));
      close();
      if (data.error) throw new Error(`Unable to add user`);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickAssign = () => {
    toggle();
    mutate(reviewed);
    setAssignUsers(filterOptions(users, reviewed));
  };

  return (
    <>
      <Button onClick={onClickAssign}>Assign</Button>
      <Modal isShowing={isShowing} close={close}>
        <Container>
          <Lable>Assign to: {username}</Lable>
          <Select options={assignUsers} isMulti onChange={handleChange} />
          <TagContainer>
            {reviewed?.map((user, index: number) => (
              <Tag key={index}>{user}</Tag>
            ))}
          </TagContainer>
          <ButtonContainer>
            <Button onClick={onSubmit}>Assign</Button>
          </ButtonContainer>
        </Container>
      </Modal>
    </>
  );
};

export default Assign;
