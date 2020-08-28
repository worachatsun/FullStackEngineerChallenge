import { yupResolver } from "@hookform/resolvers";
import React, { FunctionComponent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { SIGNIN_API } from "../../../../constants/routes";
import { UserContext } from "../../../../context/UserContext";
import { SigninSchema } from "../../../../schemas/auth";
import Button from "../../../commons/Button";
import Input from "../../../commons/Input";
import { HttpMethod, mutator } from "../../../commons/utils/client";
import { Container, ErrorMessage } from "./Signin.styled";
import { UserType } from "../../../../context/types";

interface ISignin {
    username: string;
    password: string;
}

const Signin: FunctionComponent = () => {
    const { register, handleSubmit, errors } = useForm<ISignin>({ resolver: yupResolver(SigninSchema) });
    const { dispatch } = useContext(UserContext);
    const [error, setError] = useState<string>("");
    const history = useHistory();

    const onSubmit = async (user: ISignin) => {
        try {
            const { username, password } = user;
            const { response } = await mutator(SIGNIN_API, HttpMethod.POST, undefined, { username, password });
            const data = await response?.json();
            if (!response?.ok) {
                setError(data.error as string);
                throw new Error(`${response?.status}: ${response?.statusText}`);
            }
            localStorage.setItem("token", data.user.token);
            dispatch({ type: UserType.addUser, payload: data.user.user });
            history.push("/list");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            <ErrorMessage>{error}</ErrorMessage>
        </Container>
    );
};

export default Signin;
