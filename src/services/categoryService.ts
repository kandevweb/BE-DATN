import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { CategoryInput, CategoryUpdate } from '../types/category.type '
import { CustomErrorHandler } from '../utils/ErrorHandling'

class categoryService {
  // Lấy danh sách
  async fetchAllCategory() {
    const category = await models.Category.findAll()
    return {
      message: 'Thanh cong',
      data: {
        category
      }
    }
  }
  // Phương thức kiểm tra trùng lặp tên danh mục
  async isCategoryNameDuplicate(categoryName: string): Promise<boolean> {
    const category = await models.Category.findOne({ where: { category_name: categoryName } });
    return !!category; 
  }
  // Thêm mới category
  async addNewCategory(category: CategoryInput) {
    // Kiểm tra trùng lặp tên danh mục
    const isDuplicate = await this.isCategoryNameDuplicate(category.category_name);
    if (isDuplicate) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Tên danh mục đã tồn tại!');
    }

    const newCategory = await models.Category.create(category);
    return {
      message: 'Thêm Danh Mục thành công',
      data: {
        newCategory
      }
    };
  }
     // Cập nhật danh mục
  async updateCategory(category_id: string, data: CategoryUpdate) {
    const category = await models.Category.findByPk(category_id)

    if (!category) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Danh mục  không tồn tại!')
    }

    await category.update(data)

    return {
      message: 'Cập nhật bài viết thành công',
      data: {
         category
      }
    }
  }
   // Xóa danh mục
   async deleteCategory(category_id: string) {
    const category = await models.Category.findByPk(category_id)

    if (!category) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Danh mục không tồn tại!')
    }

    await category.destroy()

    return {
      message: 'Xóa danh mục thành công',
      data: {
        category
      }
    }
  }
}

export default new categoryService()
