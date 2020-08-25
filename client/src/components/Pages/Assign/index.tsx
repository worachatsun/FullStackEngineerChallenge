import React, { FunctionComponent } from 'react';
import Button from '../../commons/Button';
import Input from '../../commons/Input';
import { useForm } from 'react-hook-form';
import Modal from '../../commons/Modal';
import useModal from '../../Hook/useModal';
import { ButtonWrapper, Container } from './Assign.styled';

interface IAssign {
  id: number;
}

const Assign: FunctionComponent<IAssign> = () => {
  const { register, handleSubmit, errors } = useForm();
  const { isShowing, toggle, close } = useModal();
  const onSubmit = async () => {
    close();
  };

  return (
    <>
      <Button onClick={toggle}>Assign</Button>
      <Modal isShowing={isShowing} close={close}>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              title={'Assign to'}
              name='assign'
              errors={errors.assign}
              register={register}
            />
            <ButtonWrapper>
              <Button>Assign reviews</Button>
            </ButtonWrapper>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default Assign;
