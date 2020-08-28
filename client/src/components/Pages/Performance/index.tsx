import React, { FunctionComponent } from "react";
import { FaAngleRight } from "react-icons/fa";
import useSWR from "swr";
import { REVIEWED_LIST_API } from "../../../constants/routes";
import { fetcher } from "../../commons/utils/client";
import Layout from "../../Layout";
import { IReviewModel } from "../ListReviews";
import { AnswerContainer, Lable, Table, Tr, TrText } from "./Performance.styled";

export interface IPerformanceModel extends IReviewModel {
    answers: IAnswerPayload[];
}

interface IAnswerPayload {
    answer: string;
    createdAt: Date;
    id: number;
    questionId: number;
    reviewId: number;
    updatedAt: Date;
}

const Performance: FunctionComponent = () => {
    const token = localStorage.getItem("token");
    const { data = [] } = useSWR<IPerformanceModel[]>([REVIEWED_LIST_API, token], fetcher);

    return data ? (
        <Layout>
            <Lable>Performance reviews</Lable>
            <Table>
                {data.map((review: IPerformanceModel, index: number) => (
                    <Tr key={index}>
                        <TrText>
                            {review.reviewBy}
                            <FaAngleRight />
                            {review.reviewTo}
                        </TrText>
                        <AnswerContainer>
                            {review.answers.map((answer: IAnswerPayload) => (
                                <div key={answer.id}>
                                    {`Question${answer.questionId}: `}
                                    {answer.answer}
                                </div>
                            ))}
                        </AnswerContainer>
                    </Tr>
                ))}
            </Table>
        </Layout>
    ) : (
        <div />
    );
};

export default Performance;
