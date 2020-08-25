import React, { FunctionComponent } from 'react';
import { Lable } from './Question.styled';
import Layout from '../../Layout';
import { useForm } from 'react-hook-form';

const Question: FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <Layout>
      <Lable>Review questions</Lable>
      <Question>
        <input type='number' min='0' max='5' />
      </Question>
    </Layout>
  );
};

const questions = ['Question 1', 'Question 2', 'Question 3'];

export default Question;
