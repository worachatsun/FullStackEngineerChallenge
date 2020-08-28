import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import { ANSWER_API, LIST_QUESTIONS_API } from "../../../constants/routes";
import Button from "../../commons/Button";
import { fetcher, HttpMethod, mutator } from "../../commons/utils/client";
import {
    AnswerContainer,
    ButtonContainer,
    HeaderContainer,
    Lable,
    QuestionContainer,
    QuestionText,
    Radio,
} from "./Question.styled";
import { IPerformanceModel } from "../Performance";

interface IProps {
    review: IPerformanceModel;
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
    const reviewedAns = new Map(review.answers.map((ans) => [ans.questionId, ans.answer]));

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
                            <Radio
                                type="radio"
                                value="1"
                                name={`${id}`}
                                defaultChecked={reviewedAns.get(id) == "1" ? true : false}
                                ref={register({ required: true })}
                            />
                            <Radio
                                type="radio"
                                value="2"
                                name={`${id}`}
                                defaultChecked={reviewedAns.get(id) == "2" ? true : false}
                                ref={register({ required: true })}
                            />
                            <Radio
                                type="radio"
                                value="3"
                                name={`${id}`}
                                defaultChecked={reviewedAns.get(id) == "3" ? true : false}
                                ref={register({ required: true })}
                            />
                            <Radio
                                type="radio"
                                value="4"
                                name={`${id}`}
                                defaultChecked={reviewedAns.get(id) == "4" ? true : false}
                                ref={register({ required: true })}
                            />
                            <Radio
                                type="radio"
                                value="5"
                                name={`${id}`}
                                defaultChecked={reviewedAns.get(id) == "5" ? true : false}
                                ref={register({ required: true })}
                            />
                        </AnswerContainer>
                    </QuestionContainer>
                ))}
                <ButtonContainer>
                    <Button>Submit</Button>
                </ButtonContainer>
            </form>
        </>
    ) : (
        <div />
    );
};

export default Question;
