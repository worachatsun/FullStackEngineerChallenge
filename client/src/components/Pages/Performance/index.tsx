import React, { FunctionComponent } from 'react';
import {
  Container,
  Lable,
  Table,
  Wrapper,
  Hr,
  Th,
  ThText,
  Tr,
} from './Performance.styled';
import Layout from '../../Layout';

const Performance: FunctionComponent = () => {
  return (
    <Layout>
      <Lable>Performance reviews</Lable>
      <Table>
        <Th>
          <ThText>Name</ThText>
        </Th>
        <Hr />
        <Tr>
          <div>username</div>
        </Tr>
        <Hr />
      </Table>
    </Layout>
  );
};

export default Performance;
