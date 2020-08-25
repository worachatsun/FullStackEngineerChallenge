import React, { FunctionComponent } from 'react';
import { Container, Label } from './Signin.styled';
import Input from '../../../commons/Input';
import Button from '../../../commons/Button';
import { useForm } from 'react-hook-form';
import { SignupSchema } from '../../../../schemas/signin';
import { SIGNUP_API } from '../../../../constants/routes';
import { mutator, HttpMethod } from '../../../commons/utils/client';
import { useHistory } from 'react-router-dom';

interface ISignin {
  username: string;
  password: string;
}

const Signin: FunctionComponent = () => {
  const { register, handleSubmit, errors } = useForm<ISignin>();
  let history = useHistory();

  const onSubmit = async (user: ISignin) => {
    try {
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
      localStorage.setItem('token', data.user.token);
      history.push('/list');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>Signin</Label>
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
        <Button>Signin</Button>
      </form>
    </Container>
  );
};

export default Signin;
