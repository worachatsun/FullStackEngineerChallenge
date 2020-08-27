import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';

export interface IUserModel {
  id: number;
  question: string;
}

export class Question extends Model {
  id!: number;
  question!: string;
}

Question.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'question',
    freezeTableName: true,
  }
);
