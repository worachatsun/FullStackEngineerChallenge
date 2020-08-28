import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { mutate } from "swr";
import { LIST_EMPLOYEES_API, SIGNUP_API } from "../../../../constants/routes";
import Button from "../../../commons/Button";
import Input from "../../../commons/Input";
import { HttpMethod, mutator } from "../../../commons/utils/client";
import { Container, Label } from "./Signup.styled";

interface ISignup {
    username: string;
    password: string;
}

const Signup: FunctionComponent = () => {
    const { register, handleSubmit, errors } = useForm<ISignup>();

    const onSubmit = async (user: ISignup) => {
        try {
            const token = localStorage.getItem("token") || "";
            const { username, password } = user;
            const { response } = await mutator(SIGNUP_API, HttpMethod.POST, undefined, { username, password });
            if (!response?.ok) throw new Error(`${response?.status}: ${response?.statusText}`);
            mutate([LIST_EMPLOYEES_API, token]);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Label>Signup</Label>
                <Input title={"Username"} name="username" errors={errors.username} register={register} />
                <Input
                    title={"Password"}
                    name="password"
                    errors={errors.password}
                    register={register}
                    type={"password"}
                />
                <Button>Signup</Button>
            </form>
        </Container>
    );
};

export default Signup;
