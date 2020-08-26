import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';

export interface IReviewModel {
  id: number;
  reviewTo: string;
  reviewBy: string;
  isReview: boolean;
  createdAt: Date;
  UpdatedAt: Date;
}

export class Review extends Model {
  id!: number;
  reviewTo!: string;
  reviewBy!: string;
  isReview!: boolean;
  createdAt!: Date;
  UpdatedAt!: Date;
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
    tableName: 'review',
    freezeTableName: true,
  }
);
