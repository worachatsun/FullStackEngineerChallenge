import React, { FunctionComponent } from 'react';
import Header from '../../commons/Header';
import Button from '../../commons/Button';
import {
  Container,
  ListHeader,
  Wrapper,
  Table,
  Th,
  Tr,
  ButtonContainer,
  Hr,
  Lable,
  ThText,
} from './ListEmployees.styled';
import useModal from '../../Hook/useModal';
import Modal from '../../commons/Modal';
import Signin from '../Auth/Signin';
import useSWR from 'swr';
import { fetcher } from '../../commons/utils/client';
import { LIST_EMPLOYEES_API } from '../../../constants/routes';
import Assign from '../Assign';
import { FaUserTie } from 'react-icons/fa';
import Layout from '../../Layout';

interface IListModel {
  id: number;
  username: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ListEmployees: FunctionComponent = () => {
  const { isShowing, toggle, close } = useModal();
  const token = localStorage.getItem('token');
  const { data } = useSWR<IListModel[]>([LIST_EMPLOYEES_API, token], fetcher);
  return (
    <Layout>
      <ListHeader>
        <Lable>List Employees</Lable>
        <Button onClick={toggle}>Add Employee</Button>
      </ListHeader>
      <Table>
        <Th>
          <FaUserTie size={'1.5em'} color='#ff0033' />
          <ThText>Name</ThText>
        </Th>
        {data?.map((user: IListModel) => (
          <>
            <Hr />
            <Tr>
              <div>{user.username}</div>
              <ButtonContainer>
                <Assign id={user.id} />
                <Button>Remove</Button>
              </ButtonContainer>
            </Tr>
          </>
        ))}
        <Hr />
      </Table>
      <Modal isShowing={isShowing} close={close}>
        <Signin />
      </Modal>
    </Layout>
  );
};

export default ListEmployees;
