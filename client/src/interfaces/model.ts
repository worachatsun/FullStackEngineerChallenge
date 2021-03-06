export interface IListModel {
    id: number;
    username: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export const UserMockup = {
    id: 1,
    username: "test",
    isAdmin: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};

export interface IReviewModel {
    id: number;
    reviewTo: string;
    reviewBy: string;
    isReview: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPerformanceModel extends IReviewModel {
    answers: IAnswerModel[];
}

export interface IAnswerModel {
    id: number;
    answer: string;
    reviewId: number;
    questionId: number;
    createdAt: Date;
    UpdatedAt: Date;
}
