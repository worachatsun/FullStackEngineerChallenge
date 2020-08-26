import React, { FunctionComponent } from 'react';
import { Container, Label } from './Signup.styled';
import Input from '../../../commons/Input';
import Button from '../../../commons/Button';
import { useForm } from 'react-hook-form';
import { SignupSchema } from '../../../../schemas/signin';
import { SIGNUP_API, LIST_EMPLOYEES_API } from '../../../../constants/routes';
import { mutator, HttpMethod } from '../../../commons/utils/client';
import { useHistory } from 'react-router-dom';
import { mutate } from 'swr';

interface ISignup {
  username: string;
  password: string;
}

const Signup: FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm<ISignup>();
  let history = useHistory();

  const onSubmit = async (user: ISignup) => {
    try {
      const token = localStorage.getItem('token') || '';
      const { username, password } = user;
      const { response } = await mutator(
        SIGNUP_API,
        HttpMethod.POST,
        undefined,
        { username, password }
      );
      if (!response?.ok)
        throw new Error(`${response?.status}: ${response?.statusText}`);
      const data = await response?.json();
      mutate([LIST_EMPLOYEES_API, token]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Signup</Label>
        <Input
          title={'Username'}
          name='username'
          errors={errors.username}
          register={register}
        />
        <Input
          title={'Password'}
          name='password'
          errors={errors.password}
          register={register}
          type={'password'}
        />
        <Button>Signup</Button>
      </form>
    </Container>
  );
};

export default Signup;
