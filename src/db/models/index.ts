import Category from './Category'
import Notification from './Notification'
import Order from './Order'
import OrderDetail from './OrderDetail'
import Product from './Product'
import Shipping from './Shipping'
import Story from './Story'
import User from './User'

// User Relationships
const userRelationships = () => {
  User.hasMany(Notification, {
    foreignKey: 'user_id',
    as: 'notifications'
  });

  User.hasMany(Order, {
    foreignKey: 'user_id',
    as: 'orders'
  });
};

// Order Relationships
const orderRelationships = () => {
  Order.hasMany(OrderDetail, {
    foreignKey: 'order_id',
    as: 'order_details'
  });

  Order.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });

  Order.hasMany(Shipping, {
    foreignKey: 'shipping_id',
    as: 'shippings'
  });
};

// Shipping Relationships
const shippingRelationships = () => {
  Shipping.belongsTo(Order, {
    foreignKey: 'shipping_id',
    as: 'order'
  });
};

// Order Detail Relationships
const orderDetailRelationships = () => {
  OrderDetail.belongsTo(Order, {
    foreignKey: 'order_id',
    as: 'order'
  });

  OrderDetail.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
  });
};

// Product Relationships
const productRelationships = () => {
  Product.hasMany(OrderDetail, {
    foreignKey: 'product_id',
    as: 'order_details'
  });

  Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
  });
};

// Notification Relationships
const notificationRelationships = () => {
  Notification.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });
};

// Category Relationships
const categoryRelationships = () => {
  Category.hasMany(Product, {
    foreignKey: 'category_id',
    as: 'products'
  });
};

// Story Relationships
const storyRelationships = () => {
  Story.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });
};

export const setupModelRelationships = () => {
  userRelationships();
  categoryRelationships();
  notificationRelationships();
  orderRelationships();
  orderDetailRelationships();
  productRelationships();
  shippingRelationships();
  storyRelationships();
};

const models = { User, Order, Category, Notification, OrderDetail, Product, Shipping, Story };

export default models;
