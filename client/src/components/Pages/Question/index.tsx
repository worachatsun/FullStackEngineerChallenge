import React, { FunctionComponent } from 'react';
import {
  Lable,
  QuestionContainer,
  QuestionText,
  AnswerContainer,
  ButtonContainer,
  Radio,
  HeaderContainer,
} from './Question.styled';
import { useForm } from 'react-hook-form';
import { IReviewModel } from '../ListReviews';
import Button from '../../commons/Button';

interface IProps {
  review: IReviewModel;
}

const Question: FunctionComponent<IProps> = ({ review }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
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
        {questions.map(({ question }, index: number) => (
          <QuestionContainer key={index}>
            <QuestionText>{question}</QuestionText>
            <AnswerContainer>
              <Radio
                type='radio'
                value='1'
                name={question}
                ref={register({ required: true })}
              />
              <Radio
                type='radio'
                value='2'
                name={question}
                ref={register({ required: true })}
              />
              <Radio
                type='radio'
                value='3'
                name={question}
                ref={register({ required: true })}
              />
              <Radio
                type='radio'
                value='4'
                name={question}
                ref={register({ required: true })}
              />
              <Radio
                type='radio'
                value='5'
                name={question}
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
  );
};

const questions = [
  { question: 'Quality of work' },
  { question: 'Productivity' },
  { question: 'Knowledge of job' },
];

export default Question;
