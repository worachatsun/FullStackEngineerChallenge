import React, { FunctionComponent } from 'react';
import {
  Lable,
  Table,
  Hr,
  Th,
  ThText,
  Tr,
  TrText,
  AnswerContainer,
} from './Performance.styled';
import Layout from '../../Layout';
import useSWR from 'swr';
import { REVIEWED_LIST_API } from '../../../constants/routes';
import { fetcher } from '../../commons/utils/client';
import { IReviewModel } from '../ListReviews';
import { FaAngleRight } from 'react-icons/fa';

interface IPerformanceModel extends IReviewModel {
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
  const token = localStorage.getItem('token');
  const { data = [] } = useSWR<IPerformanceModel[]>(
    [REVIEWED_LIST_API, token],
    fetcher
  );
  console.log(data);
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
              {review.answers.map((answer: IAnswerPayload, index: number) => (
                <div key={index}>
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
    <div></div>
  );
};

export default Performance;
