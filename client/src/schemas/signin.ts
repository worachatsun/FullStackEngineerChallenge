import * as yup from "yup";

export const SignupSchema = yup.object().shape({
    username: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required!"),
    password: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required!"),
});
