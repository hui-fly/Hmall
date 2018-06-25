/*
* @Author: hui-fly
* @Date:   2018-06-14 18:20:21
* @Last Modified by:   hui-fly
* @Last Modified time: 2018-06-25 18:39:16
*/
require('./index.css');
var _mm = require('util/mm.js');
_mm.request({
	url:'/product/list.do?keyword=1',
    success:function(res){
    	alert("chengg")
    },
    error:function(errMsg){
    	alert("哈哈")
    }
})