import React, { FunctionComponent, useEffect } from "react";
import { useForm } from "react-hook-form";
import useSWR, { mutate } from "swr";
import { ANSWER_API, LIST_QUESTIONS_API, REVIEW_LIST_API } from "../../../constants/routes";
import Button from "../../commons/Button";
import { fetcher, HttpMethod, mutator } from "../../commons/utils/client";
import { IReviewModel } from "../ListReviews";
import {
    AnswerContainer,
    ButtonContainer,
    HeaderContainer,
    Lable,
    QuestionContainer,
    QuestionText,
    Radio,
} from "./Question.styled";

interface IProps {
    review: IReviewModel;
    close: () => void;
}

interface IQuestionList {
    question: string;
    id: number;
}

const Question: FunctionComponent<IProps> = ({ review, close }) => {
    const { register, handleSubmit, errors } = useForm();
    const token = localStorage.getItem("token");
    const { data: questions } = useSWR<IQuestionList[]>([LIST_QUESTIONS_API, token], fetcher);

    const onSubmit = async (reviews: any) => {
        const answers: any[] = [];
        Object.entries(reviews).forEach(([questionId, answer]) => {
            answers.push({ questionId, answer, reviewId: review.id });
        });
        try {
            const { response } = await mutator(ANSWER_API, HttpMethod.POST, token as string, {
                answers,
            });
            if (!response?.ok) throw new Error(`${response?.status}: ${response?.statusText}`);
            close();
        } catch (error) {
            console.error(error);
        }
    };

    return questions ? (
        <>
            <Lable>Review to {review.reviewTo}</Lable>
            <HeaderContainer>
                <QuestionText>Questions</QuestionText>
                <AnswerContainer>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                </AnswerContainer>
            </HeaderContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                {questions.map(({ question, id }, index: number) => (
                    <QuestionContainer key={index}>
                        <QuestionText>{question}</QuestionText>
                        <AnswerContainer>
                            <Radio type="radio" value="1" name={`${id}`} ref={register({ required: true })} />
                            <Radio type="radio" value="2" name={`${id}`} ref={register({ required: true })} />
                            <Radio type="radio" value="3" name={`${id}`} ref={register({ required: true })} />
                            <Radio type="radio" value="4" name={`${id}`} ref={register({ required: true })} />
                            <Radio type="radio" value="5" name={`${id}`} ref={register({ required: true })} />
                        </AnswerContainer>
                    </QuestionContainer>
                ))}
                <ButtonContainer>
                    <Button>Submit</Button>
                </ButtonContainer>
            </form>
        </>
    ) : (
        <div></div>
    );
};

export default Question;
