/*var article=require('./request/article.js');
console.log(article);*/

/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */
var request=[{
	module:'user',
	name:'用户管理',
	list:require('./request/user.js')
},{
	module:'article',
	name:'文章管理',
	list:require('./request/article.js')
},{
	module:'order',
	name:'订单管理',
	list:require('./request/order1.js')
},{
	module:'system',
	name:'系统设置',
	list:require('./request/system.js')
},{
	module:'open',
	name:'第三方接入',
	list:require('./request/open.js')
},{
    module:'shorts',
    name:'短租模块',
    list:require('./request/shorts.js')
},{
    module:'identity',
    name:'认证管理',
    list:require('./request/identity.js')
},{
    module:'withdrawals',
    name:'提现管理',
    list:require('./request/withdrawals.js')
},{
    module:'orders',
    name:'订单管理',
    list:require('./request/order.js')
}];

module.exports=request;


