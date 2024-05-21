import { CategoryAttributes } from '../db/models/Category'

export interface Category extends CategoryAttributes {}

export type CategoryInput = Omit<Category, 'category_id' | 'createdAt' | 'updatedAt'>

export type CategoryUpdate = Pick<Category, 'category_name'| 'description' >
