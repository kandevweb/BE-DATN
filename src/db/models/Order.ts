import { DataTypes, Model, Optional } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import db from '../../connection';

export interface OrderAttributes {
  order_id: string
  user_id: string
  order_date: Date 
  total_amount: number 
  status: string 
  createdAt: Date
  updatedAt: Date
}

interface OrderCreationAttributes extends Optional<OrderAttributes, 'order_id' | 'createdAt' | 'updatedAt'> {}

class Order extends Model<OrderAttributes, OrderCreationAttributes> {
  declare order_id: string
  declare user_id: string
  declare order_date: Date 
  declare total_amount: number 
  declare status: string 
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Order.init(
  {
    order_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4(),
    },
    user_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'user_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    order_date: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    total_amount: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    status: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize: db,
    modelName: 'Order',
    tableName: 'Orders',
    timestamps: true,
  }
);

export default Order;
