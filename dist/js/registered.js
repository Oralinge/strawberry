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



/*------------CNY特效start-------------*/
$(function(){
    $(".CNY").hide();
    var _timeout;
    $('.select-menu').hover(function(){
        clearTimeout(_timeout);
        $('.CNY').fadeIn(250);
    },function(){
       _timeout=setTimeout(function(){
            $('.CNY').fadeOut(250);
        },100)
    });
     
    //内容也做hover事件
    $(".CNY").hover(function(){
        clearTimeout(_timeout);
        $('.CNY').css("display","block");
    },function(){
        
        $('.CNY').fadeOut(250);
        
    });
     
});


   
   
  /*------------CNY特效end------------*/




/*------------language特效start-------------*/
$(function(){
    $(".language").hide();
    var _timeout;
    $('.language-menu').hover(function(){
        clearTimeout(_timeout);
        $('.language').fadeIn(250);
    },function(){
       _timeout=setTimeout(function(){
            $('.language').fadeOut(250);
        },100)
    });
     
    //内容也做hover事件
    $(".language").hover(function(){
        clearTimeout(_timeout);
        $('.language').css("display","block");
    },function(){
        
        $('.language').fadeOut(250);
        
    });
     
});


/*------------language特效end-------------*/

  
  /*-----------促销活动二级菜单start --------------*/
  $(function(){
    $(".Sales-promotion-activity").hide();
    var _timeout;
    $('.gift-indent').hover(function(){
       
       
        $('.gift-indent').css("background","#fff");
        $('.gift-indent a').css('color','#51216b');
        $('.gift').css('background','url(../img/gift.jpg) no-repeat');
       
       
        clearTimeout(_timeout);
        $('.Sales-promotion-activity').slideDown(250);
    },function(){
       
        _timeout=setTimeout(function(){
            $('.Sales-promotion-activity').slideUp(250);
            $('.gift-indent').css("background","#9f307c");
            $('.gift-indent a').css({'color':'#fff','text-decoration': 'underline'});
            $('.gift').css('background','url(../img/giftblue.jpg) no-repeat'); 
        },100)
    });
     
    //内容也做hover事件
    $(".Sales-promotion-activity").hover(function(){
        clearTimeout(_timeout);
        $('.Sales-promotion-activity').css("display","block");
        $('.gift-indent').css("background","#fff");
        $('.gift-indent a').css('color','#51216b');
        $('.gift').css('background','url(../img/gift.jpg) no-repeat');
    },function(){
       
        $('.gift-indent').css("background","#9f307c");
        $('.gift-indent a').css('color','#fff');
        $('.gift').css('background','url(../img/giftblue.jpg) no-repeat');
        _timeout=setTimeout(function(){
            $('.Sales-promotion-activity').slideUp(250);
        },100)
    });
     
});
   
 /*-----------促销活动二级菜单end --------------*/


//  .gift-indent:hover{
//     background:#fff;
//     a{
//         color:#51216b;
//         text-decoration: underline;
//         .gift{
//             background:url(../img/gift.jpg) no-repeat;
//         }
//     }
// }

/*----------- 品牌导航start --------------*/

    
    $(function(){
        $(".brand").hide();
        var _timeout;
        $('.brand-nav').hover(function(){
            $('.brand-nav').css("background","#fff");
            $('.brand-nav a').css('color','#51216b');
            $('.brand-nav a i').css('background','url(../img/integration.png) no-repeat -279px -185px');
            clearTimeout(_timeout);
            $('.brand').slideDown(250);
        },function(){
            _timeout=setTimeout(function(){
                $('.brand').slideUp(250);
                $('.brand-nav').css("background","#9f307c");
                $('.brand-nav a').css({'color':'#fff','text-decoration': 'underline'});
                $('.brand-nav a i').css('background','url(../img/integration.png) no-repeat -262px -185px');
            },100)
        });
         
        //内容也做hover事件
        $(".brand").hover(function(){
            clearTimeout(_timeout);
            $('.brand').css("display","block");
            $('.brand-nav').css("background","#fff");
            $('.brand-nav a').css('color','#51216b');
            $('.brand-nav a i').css('background','url(../img/integration.png) no-repeat -279px -185px');
        },function(){
            _timeout=setTimeout(function(){
            $('.brand').slideUp(250);
                $('.brand-nav').css("background","#9f307c");
                $('.brand-nav a').css({'color':'#fff','text-decoration': 'underline'});
                $('.brand-nav a i').css('background','url(../img/integration.png) no-repeat -262px -185px');
            },100)
        });
         
    });

/*----------- 品牌导航end --------------*/


/*-------------------------------注册----------------------- */ 


/*-------------------------------注册start----------------------- */ 

	

    
/*-------------------------------注册end----------------------- */ 



window.onload = function(){
	//获取页面元素
	var oRegister = document.getElementById("register");
	var oGoLogin = document.getElementById("goLogin");
	var oUserName = document.getElementById("username");
	var oPass = document.getElementById("password");
	var oConPass = document.getElementById("conPwd");
	//给注册按钮加事件
	oRegister.onclick = function(){
		//获取用户名和密码
		var usn = oUserName.value;
		var pwd = oPass.value;
		var con = oConPass.value; //确认密码
		
		//用户不能为空
		// if(!usn){
		// 	alert("用户名不能为空！");
		// 	return;
		// }
		
		// //检测密码是否相同
		// //密码不能为空，密码规则
		// if(pwd !== con){
		// 	alert("两次输入的密码不相同，请重试!");
		// 	return;
		// }
		
		//检测一下用户是否已经存在
		//假设："test1,123:test2,abc:test3,888"
		/*转为对象
		 * {
		 * 	test1:123,
		 *  test2:abc,
		 *  test3:888
		 * }
		 */
		
		//获取cookie中的用户信息
		var users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
		
		//将字符串转为对象
		users = convertStrToObj(users);
		if(usn in users){ //判断usn属性是否在users对象中。
			alert("用户名已经被注册");
			return;
		}else{
			//注册成功，设置用户信息的cookie
			//test1 123  test2 abc  test3 888
			//"test1,123:test2,abc:test3,888"设置cookie的value值
			//registerUsers 设置cookie的name(key)值
			//将用户添加到已注册用户列表对象中
			users[usn] = pwd;
			//假设users[李涛] = 123
			
			
			//将用户信息对象转化回字符串，以便于设置cookie
			userStr = convertObjToStr(users);
			//设置用户信息cookie
			setCookie("registerUsers",userStr,7);
			console.log(decodeURIComponent(document.cookie))
			alert("注册成功！");
			location = "login.html";
		}
	};
	
	//给增登录按钮添加点击事件
	oGoLogin.onclick = function(){
		//转到登录页面
		location.href = "login.html";
	};
};
//将字符串转为对象
function convertStrToObj(str){
	if(!str){
		return {};
	}
	//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
	var obj = {};
	/*
	 * var obj = new Object();
	 * obj["name"] = "zhangsan";
	 * 
	 */
	//遍历数组
	for(var i = 0; i < users.length; i ++){
		//将字符串转为数组
		var userData = users[i].split(",");
		//["test1",123] ["test2","abc"] ["test3",888]
		obj[userData[0]] = userData[1];
		/*转为对象如下：
		 * obj = {
		 * 	test1 : 123,
		 *  test2 : abc,
		 *  test3 : 888
		 * }
		 */
	}
	return obj;
}

//将对象转为字符串
function convertObjToStr(obj){
	////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
	var str = "";
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}



/***/ })
/******/ ]);