import { DataTypes, Model, Optional } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import db from '../../connection';

export interface OrderDetailAttributes {
  order_detail_id: string
  order_id: string
  quantity: number 
  unit_price: number 
  total_price: string 
  product_name:string;
  product_img : string;
  createdAt: Date
  updatedAt: Date
}

interface OrderDetailCreationAttributes extends Optional<OrderDetailAttributes, 'order_detail_id' | 'createdAt' | 'updatedAt'> {}

class OrderDetail extends Model<OrderDetailAttributes, OrderDetailCreationAttributes> {
  declare order_detail_id: string
  declare order_id: string
  declare quantity: number 
  declare unit_price: number 
  declare total_price: string 
  declare product_name: string
  declare product_img: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

OrderDetail.init(
  {
    order_detail_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4(),
    },
    order_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'user_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    quantity: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    unit_price: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    total_price: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    product_name :{
      allowNull:true,
      type: DataTypes.STRING,
    },
    product_img :{
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
    modelName: 'Order_Detail',
    tableName: 'Order_Details',
    timestamps: true,
  }
);

export default OrderDetail;
