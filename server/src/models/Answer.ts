import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';

export interface IUserModel {
  id: number;
  answer: string;
}

export class Answer extends Model {
  id!: number;
  answer!: string;
}

Answer.init(
  {
    answer: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'answer',
    freezeTableName: true,
  }
);
