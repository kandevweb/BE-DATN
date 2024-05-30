import Category from './Category';
import Notification from './Notification';
import Product from './Product';
import Story from './Story';
import User from './User';
import Interest from './Interest';
import Profile from './Profile';
import Review from './Review';
import Friendship from './Friendship'
import Order from './Order';
import Shipping from './Shipping';
import OrderDetail from './OrderDetail';

// User Relationships
const userRelationships = () => {
  User.hasOne(Profile, {
    foreignKey: 'user_id'
  })
  User.hasMany(Notification, {
    foreignKey: 'user_id',
    as: 'notifications'
  });
  User.belongsToMany(Interest, {
    through: 'UserInterests',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  User.hasMany(Review, {
    foreignKey: 'user_id',
    as: 'reviews'
  });
  User.belongsToMany(User, {
    through: 'Friendships',
    as: 'Friends',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  })

  User.belongsToMany(User, {
    through: 'Friendships',
    as: 'UserFriends',
    foreignKey: 'friend_id',
    onDelete: 'CASCADE'
  })
};

// Profile Relationships
const profileRelationships = () => {
  Profile.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'user_id',
    onDelete: 'CASCADE'
  });
};

// Interest Relationships
const interestRelationships = () => {
  Interest.belongsToMany(User, {
    through: 'UserInterests',
    foreignKey: 'interest_id',
    onDelete: 'CASCADE'
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
// Review Relationships
const reviewRelationships = () => {
  Review.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
  });

  Review.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
  });
};

// Product Relationships
const productRelationships = () => {
  Product.belongsTo(Category, {
    foreignKey: 'category_id',
    as: 'category'
  });

  Product.hasMany(Review, {
    foreignKey: 'product_id',
    as: 'reviews'
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
  productRelationships();
  orderRelationships();
  orderDetailRelationships();
  shippingRelationships();
  storyRelationships();
  profileRelationships();
  interestRelationships();
  reviewRelationships();
};

const models = { User, Category,Friendship, Notification, Product, 
  Story, Interest, Profile, Review,Order,OrderDetail, Shipping };

export default models;
