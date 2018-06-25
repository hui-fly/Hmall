/*
* @Author: hui-fly
* @Date:   2018-06-25 16:26:36
* @Last Modified by:   hui-fly
* @Last Modified time: 2018-06-25 17:59:31
*/
var conf = {
	serverHost:'',
}
var _mm = {
	request:function(param){
		$.ajax({
			type      :param.method||'get',
			url       :param.url||'',
			dataType  :param.type||"json",
			data      :param.data||'',
			success   :function(res){
				if(0===res.status){
					typeof param.success==='function'&&param.success(res.data,res.msg);
				}
				else if(10===res.status){
					doLogin();
				}
				else{
					typeof param.error==='function'&&param.error(res.msg);
				}
			},
			error     :function(){
				typeof param.error==='function'&&param.error(res.statusText);
			}
		})
	},
	 //获取服务器地址
    getServerUrl : function(path){
    	return conf.serverHost + path;//conf是一个对象，在上边定义
    },
	getUrlParam:function(name){
		var reg    = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var result = window.location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	},
	goHome:function(){
		window.location.href='/dist/view/index.html';
	},
	successTips:function(msg){
		alert(msg||'恭喜操作成功');
	},
	errorTips  :function(msg){
		alert(msg||'哪里不对了');
	},
	//验证输入格式
	validate:function(value,type){
		var value = $.trim(value);
		if('required'===type){
			return !!value;
		};
		if('phone'===type){
			return /^1[3,4,5,7,8]\d{9}$/.test(value);
		}
		if('email'===type){
			return /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value); 
		}
	},

	doLogin:function(){
		window.location.href = '';
	}
};
module.exports = _mm;