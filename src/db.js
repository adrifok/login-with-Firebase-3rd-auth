const { Sequelize } = require("sequelize");
require("dotenv").config();

const {User} = require("./models/user");
const {Product} = require("./models/user");
const {LoginUser} = require("./models/loginUser");

  User(sequelize);
  Product(sequelize);
  LoginUser(sequelize);

  //Product:
  products(sequelize);
  
 
  const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME_BD } = process.env;

  const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME_BD}`,
    { logging: false }
  );

  //Relaciono los modelos:

const { User, LoginUser, products } = sequelize.models;
  

//uno a muchos entre User y Producto:
User.hasMany(Product, { as: 'products' });//'as' se usa para especificar el nombre de la relacion en el modelo de la tabla "User"
Product.belongsTo(User);

//uno a uno entre user y login
User.hasOne(LoginUser, { as: 'login' });
LoginUser.belongsTo(User);

//muchos a muchos entre Users y Products
const UserProduct = sequelize.define('UserProduct', {});

User.belongsToMany(Product, { through: UserProduct });//tabla intermedia UserProduct 
Product.belongsToMany(User, { through: UserProduct });


  module.exports = { sequelize, ...sequelize.models };