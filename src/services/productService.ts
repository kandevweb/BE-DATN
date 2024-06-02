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
  async isProductNameDuplicate(productName: string): Promise<boolean> {
    const product = await models.Product.findOne({ where: { product_name: productName } });
    return !!product; // Trả về true nếu có sản phẩm trùng, false nếu không
  }
  // Thêm mới Sản Phẩm
  async addNewProduct(product: ProductInput) {
    // Kiểm tra trùng lặp tên sản phẩm
    const isDuplicate = await this.isProductNameDuplicate(product.product_name);
    if (isDuplicate) {
      throw new CustomErrorHandler(StatusCodes.CONFLICT, 'Tên sản phẩm đã tồn tại!');
    }

    const newProduct = await models.Product.create(product);
    return {
      message: 'Thêm Sản Phẩm thành công',
      data: {
        newProduct
      }
    };
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
