import { Response, Request } from 'express'
import productService from '../services/productService'
import { sendResponseSuccess } from '../utils/response'
import { ProductInput } from '../types/product.type'


class productController {
    // Danh sách danh mục
  async fetchAllProduct(req: Request, res: Response) {
    const data = await productService.fetchAllProduct()
    sendResponseSuccess(res, data)
  }
  // THêm mới danh mục
  async addNewProduct(req: Request, res: Response){
    const productData: ProductInput = req.body
    const data = await productService.addNewProduct(productData)
    sendResponseSuccess(res, data)
  }
  // update Product 
  async updateProduct(req: Request, res: Response) {
    const { productId } = req.params
    const productData: ProductInput = req.body
    const data = await productService.updateProduct(productId, productData)
    sendResponseSuccess(res, data)
  }
   // Xóa Product
   async deleteProduct(req: Request, res: Response) {
    const { productId } = req.params
    const data = await productService.deleteProduct(productId)
    sendResponseSuccess(res, data)
  }
  // CHi tiết sản phẩm
  
  async productDetail(req: Request, res: Response) {
    const { productId } = req.params
    const data = await productService.productDetail(productId)
    sendResponseSuccess(res, data)
  }
  

}
export default new productController()
