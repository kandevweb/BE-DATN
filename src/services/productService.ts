import { StatusCodes } from 'http-status-codes'
import models from '../db/models'
import { ProductInput, ProductUpdate } from '../types/product.type'
import { CustomErrorHandler } from '../utils/ErrorHandling'

class productService {
  // Lấy danh sách Sản Phẩm
  async fetchAllProduct() {
    const product = await models.Product.findAll()
    return {
      message: 'Thanh cong',
      data: {
        product
      }
    }
  }
  // Thêm mới Sản Phẩm
  async addNewProduct(product: ProductInput) {
    const newProduct = await models.Product.create(product)
    return {
      message: 'Thêm Sản Phẩm thành công',
      data: {
         newProduct
      }
    }
    }
     // Cập nhật Sản Phẩm
  async updateProduct(product_id: string, data: ProductUpdate) {
    const product = await models.Product.findByPk(product_id)

    if (!product) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Sản Phẩm  không tồn tại!')
    }

    await product.update(data)

    return {
      message: 'Cập nhật Sản Phẩm thành công',
      data: {
        product
      }
    }
  }
   // Xóa Sản Phẩm
   async deleteProduct(product_id: string) {
    const product = await models.Product.findByPk(product_id)

    if (!product) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Sản Phẩm không tồn tại!')
    }

    await product.destroy()

    return {
      message: 'Xóa sản phẩm thành công',
      data: {
        product
      }
    }
  }
  // CHi tiết sản phẩm
  async productDetail(product_id: string) {
    const productDetail = await models.Product.findByPk(product_id)
    if (!productDetail) {
      throw new CustomErrorHandler(StatusCodes.NOT_FOUND, 'Không tìm thấy product!')
    }
    return {
      message: 'Chi tiết product.',
      data: {
        productDetail
      }
    }
  }
}

export default new productService()
