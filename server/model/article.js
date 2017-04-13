const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleScheMa = new Schema({
    title: String,
    content: String,
    contentText: String
});
module.exports = articleScheMa;