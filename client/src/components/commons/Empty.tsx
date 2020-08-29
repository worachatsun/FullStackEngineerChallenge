import React, { FunctionComponent } from "react";
import { EmptyReview } from "./Empty.styled";

interface IProps {
    title: string;
}

const Empty: FunctionComponent<IProps> = ({ title }) => {
    return <EmptyReview>{title}</EmptyReview>;
};

export default Empty;
