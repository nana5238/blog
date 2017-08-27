const mongoose = require('mongoose')
const Schema = mongoose.Schema


mongoose.connect('mongodb://localhost:27017/blog')



mongoose.connection.on('error', function(error){
  console.log('数据库test_nodeVue连接失败：' + error)
  return
})
mongoose.connection.once('open', function(){
  console.log('数据库test_nodeVue连接成功')
  // callback()
})

// const init = function (callback) {
//   // const mongoose = require('mongoose')
//   database = mongoose.connect('mongodb://127.0.0.1:27017/test_nodeVue')
//   database.connection.on('error', function(error){
//     console.log('数据库test_nodeVue连接失败：' + error)
//     // return
//   })
//   database.connection.on('open', function(){
//     console.log('数据库test_nodeVue连接成功')
//     callback()
//   })
// }

//用来定义 userSchema 骨架
const userSchema = mongoose.Schema({
  name: {type: String},
  password: {type: String},
})

const listSchema = mongoose.Schema({
  title: {type: String},
  date: {type: Date,default: Date.now },
  desc: {type: String},
})



var db = {
  User : mongoose.model('users', userSchema),
  List : mongoose.model('list', listSchema),
}

module.exports = db
