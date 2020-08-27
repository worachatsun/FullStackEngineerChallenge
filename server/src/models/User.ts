import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../loaders/mysql';

export interface IUserModel {
  id: number;
  username: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export class User extends Model {
  id!: number;
  username!: string;
  password!: string;
  isAdmin!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'User',
    freezeTableName: true,
  }
);
