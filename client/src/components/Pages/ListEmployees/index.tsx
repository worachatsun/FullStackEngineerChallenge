import React, { FunctionComponent } from 'react';
import Header from '../../commons/Header';
import Button from '../../commons/Button';
import { Container, ListHeader, Wrapper } from './ListEmployees.styled';
import useModal from '../../Hook/useModal';
import Modal from '../../commons/Modal/Modal';

const ListEmployees: FunctionComponent = () => {
  const { isShowing, toggle, close } = useModal();

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <ListHeader>
            <div>List Employees</div>
            <Button onClick={toggle}>Add Employee</Button>
          </ListHeader>
          <table>
            <tr>sadf</tr>
            <td>asdf</td>
          </table>
        </Wrapper>
      </Container>
      <Modal isShowing={isShowing}>
        <div>asdf</div>
      </Modal>
    </>
  );
};

export default ListEmployees;
