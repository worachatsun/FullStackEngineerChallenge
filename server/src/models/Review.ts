import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';
import { Answer } from './Answer';

export interface IReviewModel {
  id: number;
  reviewTo: string;
  reviewBy: string;
  isReview: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class Review extends Model {
  id!: number;
  reviewTo!: string;
  reviewBy!: string;
  isReview!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

Review.init(
  {
    reviewTo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewBy: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isReview: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Review',
    freezeTableName: true,
  }
);

Review.hasMany(Answer, { as: 'answers', foreignKey: 'reviewId' });
