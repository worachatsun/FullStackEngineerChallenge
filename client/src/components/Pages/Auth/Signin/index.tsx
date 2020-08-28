import React, { FunctionComponent, useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { SIGNIN_API } from "../../../../constants/routes";
import { UserActionType, UserContext } from "../../../../context/UserContext";
import Button from "../../../commons/Button";
import Input from "../../../commons/Input";
import { HttpMethod, mutator } from "../../../commons/utils/client";
import { Container, Label } from "./Signin.styled";
import { yupResolver } from "@hookform/resolvers";
import { SigninSchema } from "../../../../schemas/signin";

interface ISignin {
    username: string;
    password: string;
}

const Signin: FunctionComponent = () => {
    const { register, handleSubmit, errors } = useForm<ISignin>({ resolver: yupResolver(SigninSchema) });
    const { dispatch } = useContext(UserContext);
    const history = useHistory();

    const onSubmit = async (user: ISignin) => {
        try {
            const { username, password } = user;
            const { response } = await mutator(SIGNIN_API, HttpMethod.POST, undefined, { username, password });
            if (!response?.ok) throw new Error(`${response?.status}: ${response?.statusText}`);
            const data = await response?.json();
            localStorage.setItem("token", data.user.token);
            dispatch({ type: UserActionType.ADD_USER, payload: data.user.user });
            history.push("/list");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Signin</Label>
                <Input title={"Username"} name="username" errors={errors.username} register={register} />
                <Input
                    title={"Password"}
                    name="password"
                    errors={errors.password}
                    register={register}
                    type={"password"}
                />
                <Button>Signin</Button>
            </form>
        </Container>
    );
};

export default Signin;
