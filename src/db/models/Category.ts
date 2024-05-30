import db from '../../connection'
import { v4 as uuidv4 } from 'uuid'
import { DataTypes, Model, Optional } from 'sequelize'

export interface CategoryAttributes {
  category_id: string
  category_name: string
  description: Text
  createdAt: Date
  updatedAt: Date
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, 'category_id' | 'createdAt' | 'updatedAt'> {}

class Category extends Model<CategoryAttributes, CategoryCreationAttributes> implements CategoryAttributes {
  declare category_id: string
  declare category_name: string
  declare description: Text
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
}

Category.init(
  {
    category_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
      defaultValue: () => uuidv4()
    },
    category_name: {
      allowNull: true,
      type: DataTypes.STRING
    },
    description: {
      allowNull: true,
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: true,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE
    }
  },
  {
    timestamps: true,
    sequelize: db,
    underscored: false,
    modelName: 'Category',
    tableName: 'Categories'
  }
)

export default Category
