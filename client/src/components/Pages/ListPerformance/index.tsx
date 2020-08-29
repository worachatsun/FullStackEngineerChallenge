import React, { FunctionComponent } from "react";
import { FaAngleRight } from "react-icons/fa";
import useSWR from "swr";
import { REVIEWED_LIST_API } from "../../../constants/routes";
import { IAnswerModel, IPerformanceModel } from "../../../interfaces/model";
import Empty from "../../commons/Empty";
import { fetcher } from "../../commons/utils/client";
import Layout from "../../Layout";
import { AnswerContainer, Lable, Table, Tr, TrText } from "./ListPerformance.styled";

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
                            {review.answers.map((answer: IAnswerModel) => (
                                <div key={answer.id}>
                                    {`Question${answer.questionId}: `}
                                    {answer.answer}
                                </div>
                            ))}
                        </AnswerContainer>
                    </Tr>
                ))}
                {data.length === 0 ? <Empty title="No review yet. Please come back later." /> : <div />}
            </Table>
        </Layout>
    ) : (
        <div>Loading</div>
    );
};

export default Performance;
