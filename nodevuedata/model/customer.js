var mongoose =require("mongoose");
// 用schema 约束模型 存储的域（字段） 还有每个域存储的类型
var Schema = mongoose.Schema;


var obj = {
	customername:String,
	customersex:String,
	customertel:String,
    customeraddress:String,
	// salesmanID:{type:Schema.ObjectId, ref:'salesman'},
	createTime:Date
	// path:[]
	// Array Number , Date,Object
}

var customerModel = mongoose.model("customer",new Schema(obj))

//blog 这个模型， 将来会 映射成blogs 这个集合
module.exports = customerModel;