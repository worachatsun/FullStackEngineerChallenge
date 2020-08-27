import React, { FunctionComponent, useContext, useState } from 'react';
import useModal from '../../Hook/useModal';
import Modal from '../../commons/Modal';
import useSWR from 'swr';
import { fetcher } from '../../commons/utils/client';
import { REVIEW_LIST_API } from '../../../constants/routes';
import Layout from '../../Layout';
import { UserContext } from '../../../context/UserContext';
import { ListHeader, Lable, Table, Tr, Th, TrText } from './ListReviews.styled';
import Question from '../Question';

export interface IReviewModel {
  id: number;
  reviewTo: string;
  reviewBy: string;
  isReview: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ListReviews: FunctionComponent = () => {
  const { isShowing, toggle, close } = useModal();
  const [review, setReview] = useState<IReviewModel>();
  const token = localStorage.getItem('token') || '';
  const { state } = useContext(UserContext);
  const { data } = useSWR<IReviewModel[]>(
    [REVIEW_LIST_API, token, `username=${state.username}`],
    fetcher
  );

  return data ? (
    <Layout>
      <ListHeader>
        <Lable>List Employees</Lable>
      </ListHeader>
      <Table>
        <Th>Waiting for reviews</Th>
        {data.map((review: IReviewModel, index: number) => {
          const onClick = () => {
            setReview(review);
            toggle();
          };
          return (
            <Tr onClick={onClick} key={index}>
              <TrText>{review.reviewTo}</TrText>
            </Tr>
          );
        })}
      </Table>
      <Modal isShowing={isShowing} close={close}>
        <Question review={review as IReviewModel} />
      </Modal>
    </Layout>
  ) : (
    <div></div>
  );
};

export default ListReviews;
