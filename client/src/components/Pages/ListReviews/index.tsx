import React, { FunctionComponent, useContext, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import useSWR from "swr";
import { REVIEW_LIST_API } from "../../../constants/routes";
import { UserContext } from "../../../context/UserContext";
import { IPerformanceModel, IReviewModel } from "../../../interfaces/model";
import Modal from "../../commons/Modal";
import { fetcher } from "../../commons/utils/client";
import useModal from "../../Hook/useModal";
import Layout from "../../Layout";
import Question from "../Question";
import { Lable, ListHeader, ReviewedTag, Table, Tr, TrText } from "./ListReviews.styled";

const ListReviews: FunctionComponent = () => {
    const { isShowing, toggle, close } = useModal();
    const [review, setReview] = useState<IReviewModel>();
    const token = localStorage.getItem("token");
    const { state } = useContext(UserContext);
    const { data = [], mutate } = useSWR<IReviewModel[]>(
        [REVIEW_LIST_API, token as string, `username=${state.username}`],
        fetcher
    );

    const closeModal = () => {
        close();
        mutate([...(data as IReviewModel[])]);
    };

    return data && data.length ? (
        <Layout>
            <ListHeader>
                <Lable>Waiting for reviews</Lable>
            </ListHeader>
            <Table>
                {data.map((payload: IReviewModel, index: number) => {
                    const onClick = () => {
                        setReview(payload);
                        toggle();
                    };
                    return (
                        <Tr onClick={onClick} key={index}>
                            <TrText>
                                {payload.reviewTo}
                                {payload.isReview ? (
                                    <ReviewedTag>
                                        <FaCheckCircle />
                                    </ReviewedTag>
                                ) : (
                                    ""
                                )}
                            </TrText>
                        </Tr>
                    );
                })}
            </Table>
            <Modal isShowing={isShowing} close={close}>
                <Question review={review as IPerformanceModel} close={closeModal} />
            </Modal>
        </Layout>
    ) : (
        <Layout>
            <Table>
                <Lable>No waiting list</Lable>
            </Table>
        </Layout>
    );
};

export default ListReviews;
