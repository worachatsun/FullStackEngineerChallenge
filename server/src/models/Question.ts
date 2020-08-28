import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';

export class Question extends Model {
  id!: number;
  question!: string;
}

Question.init(
  {
    question: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Question',
    freezeTableName: true,
  }
);
