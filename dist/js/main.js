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



var $backButton=$('.back-to-top'); 
var $hideTop = $('.hide-Top');
var $round = $('.round');
//隐藏返回页首,不隐藏的话刷新页面会出现
$backButton.hide()

//点击scrollTop为0
$backButton.on('click',function() {  
    $('html,body').animate({  
        scrollTop: 0  
    }, 1);  
}); 
//点击叉号，完全移除;
$round.on('click',function(){
   $hideTop.remove();
});


//达到高度设定后淡入淡出   //吸顶
$(window).on('scroll', function () {/*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */  
    if ($(window).scrollTop() + $(window).height()  >$(window).height() ){  
        $backButton.fadeIn('2000');
        $hideTop.fadeOut('1000'); 
        // setTimeout(function(){$('.suck-the-top').css({'position':'fixed','top':'0px'})},1000)
       
    }else{  
        $backButton.fadeOut('2000');  
        $hideTop.fadeIn('');
        //   $('.suck-the-top').css({'position':'relative;'}) 
    }
    // console.log($(window).scrollTop())
    // if($(window).scrollTop() > 10){
       
    // }else{
      
    // }

});  

//点击logo刷新首页
$('.logo').on('click',function(){
    location.reload()
});


// 即时搜索
	
   

/***/ })
/******/ ]);