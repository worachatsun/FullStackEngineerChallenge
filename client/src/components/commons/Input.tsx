import React, { FunctionComponent } from "react";
import { FieldErrors } from "react-hook-form";
import { InputContainer } from "./Input.styled";

interface Props {
    title: string;
    name: string;
    errors?: FieldErrors<any>;
    register?: () => {};
    control?: any;
    type?: string;
    lable?: string;
    placeholder?: string;
}

const Input: FunctionComponent<Props> = ({
    title,
    name,
    errors,
    register,
    type = "text",
    lable = title,
    placeholder,
}) => (
    <div>
        <label htmlFor={title}>
            {lable}:
            <InputContainer placeholder={placeholder} type={type} name={name} ref={register} />
        </label>
        {errors && <p>{errors.message}</p>}
    </div>
);

export default Input;
