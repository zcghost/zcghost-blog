/*
 * @:author:王震川
 * @:descoration:后台登陆页js
 * @:time:2016-5-24日周二
 
 * */
window.onload = function(){
	  var left = (document.documentElement.clientWidth-500)/2;  // 获取弹窗(登陆框)左右的浏览器的宽度
      var top = (document.documentElement.clientHeight-470)/2; // 获取登陆窗居中的浏览器的高度
	  var oLogin = document.getElementById("Login");           // 获取登陆框的id
	  var oUser = document.getElementById("user");             // 获取用户名的id
	  var oPassword = document.getElementById("password");     // 获取密码框的id
	  
	  oLogin.style.top = top+"px";    // 把浏览器获取登陆框的距离顶部的距离赋给登陆框
	  oLogin.style.left = left+"px";  // 把浏览器获取登陆框的距离左边的距离赋给登陆框
	  // 当浏览器的尺寸变化时，登陆框始终保持居中，随着浏览器的大小而变化自适应
	  window.onresize = function(){
	  	    var left = (document.documentElement.clientWidth-500)/2;  // 获取弹窗(登陆框)左右的浏览器的宽度
	  	    var top = (document.documentElement.clientHeight-470)/2; // 获取登陆窗居中的浏览器的高度
	  	    oLogin.style.top = top+"px";    // 把浏览器获取登陆框的距离顶部的距离赋给登陆框
	        oLogin.style.left = left+"px";  // 把浏览器获取登陆框的距离左边的距离赋给登陆框
	  };
	  /*表单输入时焦点的时*/
	 // 当鼠标的焦点移到用户名表单时
	  oUser.onfocus = function(){   // 用户名的地止框获地鼠标的焦点
	  	 var txt_value = oUser.value;  // 定义一个txt_value的变量，将表单的value值赋给txt_value，注意javascrpt中后面没有括号
	  	 if(txt_value == oUser.value){
	  	 	 oUser.value = "";      // 如果符合条件，则清空文本框的内容
	  	 }
	  };
	  oUser.onblur = function(){
	  	 var txt_value = oUser.value; // 定义一个txt_value的变量，将表单的value值赋给txt_value，注意javascrpt中后面没有括号
	  	 if(txt_value ==""){
	  	 	oUser.value="请输入用户名/电子邮箱/手机";
	  	 }
	  };
	  oPassword.onfocus = function(){
	  	   var txt_value = oPassword.value;
	  	   if(txt_value == oPassword.value ){
	  	   	   oPassword.value="";
	  	   }
	  }
	  oPassword.onblur = function(){
	  	   var txt_value = oPassword.value;
	  	   if(txt_value==""){
	  	   	   oPassword.value = "请输入密码"; 
	  	   }
	  	
	  };
};

