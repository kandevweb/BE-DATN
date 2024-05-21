import { DataTypes, Model, Optional } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import db from '../../connection';


export interface ShippingAttributes {
  shipping_id: string
  order_id: string
  username: number 
  shipping_address: number 
  shipping_status: string 
  shipping_note: Text
  shipping_cost : string
  estimated_delivery_date: Date
  createdAt: Date
  updatedAt: Date
}

interface ShippingCreationAttributes extends Optional<ShippingAttributes, 'shipping_id' | 'createdAt' | 'updatedAt'> {}

class Shipping extends Model<ShippingAttributes, ShippingCreationAttributes> {
  declare shipping_id: string
  declare order_id: string
  declare username: string 
  declare shipping_address: number 
  declare shipping_status: string 
  declare shipping_note: Text
  declare shipping_cost: string
  declare estimated_delivery_date : Date
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Shipping.init(
  {
    shipping_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4(),
    },
    order_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Orders',
        key: 'order_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    username: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    shipping_address: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    shipping_status: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    shipping_note :{
      allowNull:true,
      type: DataTypes.TEXT,
    },
    shipping_cost :{
      allowNull: true,
      type: DataTypes.STRING,
    },
    estimated_delivery_date:{
        allowNull: true,
        type: DataTypes.DATE
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
    modelName: 'Shipping',
    tableName: 'Shippings',
    timestamps: true,
  }
);

export default Shipping;
