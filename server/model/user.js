const mongoose = require('mongoose');
var Schema = mongoose.Schema;   //  创建模型
var userScheMa = new Schema({
    email: String,
    password: String
}); //  定义了一个新的模型，但是此模式还未和user集合有关联
module.exports = userScheMa;