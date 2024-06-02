import { Response, Request } from 'express'
import categoryService from '../services/categoryService'
import { sendResponseSuccess } from '../utils/response'
import { CategoryInput } from '../types/category.type '


class categoryController {
    // Danh sách danh mục
  async fetchAllCategory(req: Request, res: Response) {
    const data = await categoryService.fetchAllCategory()
    sendResponseSuccess(res, data)
  }
  // THêm mới danh mục
  async addNewCategory(req: Request, res: Response){
    const categoryData: CategoryInput = req.body
    const data = await categoryService.addNewCategory(categoryData)
    sendResponseSuccess(res, data)
  }
  // update Category 
  async updateCategory(req: Request, res: Response) {
    const { categoryId } = req.params
    const categoryData: CategoryInput = req.body
    const data = await categoryService.updateCategory(categoryId, categoryData)
    sendResponseSuccess(res, data)
  }
   // Xóa Category
   async deleteCategory(req: Request, res: Response) {
    const { categoryId } = req.params
    const data = await categoryService.deleteCategory(categoryId)
    sendResponseSuccess(res, data)
  }
  

}
export default new categoryController()
