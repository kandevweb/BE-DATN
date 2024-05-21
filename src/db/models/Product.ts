import { DataTypes, Model, Optional } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import db from '../../connection';

export interface ProductAttributes {
  product_id: string
  product_name: string 
  price: number 
  description: string 
  quantity:string
  image : string
  category_id :string
  createdAt: Date
  updatedAt: Date
}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'product_id' | 'createdAt' | 'updatedAt'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes> {
  declare product_id: string
  declare product_name: string
  declare description :string
  declare quantity: number 
  declare price: number 
  declare category_id: string
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Product.init(
  {
    product_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4(),
    },
    category_id: {
      allowNull: false,
      type: DataTypes.STRING,
      references: {
        model: 'Categories',
        key: 'category_id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    product_name :{
        allowNull:true,
        type: DataTypes.STRING,
      },
    quantity: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    price: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    
    image :{
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
    modelName: 'Product',
    tableName: 'Products',
    timestamps: true,
  }
);

export default Product;
