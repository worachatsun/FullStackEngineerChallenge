import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';
import { Question } from './Question';

export interface IAnswerModel {
  id: number;
  answer: string;
  reviewId: number;
  questionId: number;
  createdAt: Date;
  UpdatedAt: Date;
}

export class Answer extends Model {
  id!: number;
  answer!: string;
  reviewId!: number;
  questionId!: number;
  createdAt!: Date;
  UpdatedAt!: Date;
}

Answer.init(
  {
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Answer',
    freezeTableName: true,
  }
);

Question.hasMany(Answer, { foreignKey: 'questionId', sourceKey: 'id' });
