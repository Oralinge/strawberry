/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

window.onload = function(){
	//获取页面元素
	var oLogin = document.getElementById("login");
	var oGoRegister = document.getElementById("goRegister");
	var oUserName = document.getElementById("username");
	var oPass = document.getElementById("password");
	//给登录按钮加点击事件
	oLogin.onclick = function(){
		//获取用户输入的用户名和密码
		var usn = oUserName.value;
		var pwd = oPass.value;
		
		//校验用户名和密码是否正确
		//获取到cookie中的用户信息
		var users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
		//将字符串转为对象
		users = convertStrToObj(users);
		
		if(users[usn] == pwd){
			//登录成功
			setCookie("loginedUsers",usn,7);
			console.log("登录成功!");
			location.href = "index.html";
		}else{
			//登录失败
			alert("用户名和密码不匹配，请确认后重试！");
		}
	};
	oGoRegister.onclick = function(){
		//跳转到注册页
		location.href = "registered.html";
	};
};
//将字符串转为对象
function convertStrToObj(str){
	if(!str){ //如果是空字符串
		return {}; //返回空对象
	}
	var users = str.split(":");
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var userData = users[i].split(",");
		obj[userData[0]] = userData[1];
	}
	return obj;
}

//将对象转为字符串
function convertObjToStr(obj){
	var str = "";
	//遍历对象
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}


/***/ })
/******/ ]);