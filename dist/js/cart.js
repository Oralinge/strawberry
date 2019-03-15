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
    


 
 $(function(){
     //获取cookie
     let cookieStr = $.cookie('cart') ? $.cookie('cart') : "";
     //判断购物车是否为空
     if(!cookieStr){
         $('.blank').css('display','block');
     }else{
         //转对象
         let cookieObj = convertCookieStrToCookieObj(cookieStr);
         //遍历对象
         /*
          *   {
          * 		"sp1" : {
          * 	        "name" : "...",
          *   		"price" : "...",
          * 			"src" : "...",
          * 			"num" : "..."
          *       },
          * 		"sp2" : {
          * 	        "name" : "...",
          *   		"price" : "...",
          * 			"src" : "...",
          * 			"num" : "..."
          *       },
          * 		"sp3" : {
          * 	        "name" : "...",
          *   		"price" : "...",
          * 			"src" : "...",
          * 			"num" : "..."
          *       }
          * 	}
          * 
          */
         for(let key in cookieObj){
             //记录商品ID
             let obj = cookieObj[key];
             let str = `
                 <ul class="goodInfo" data-good-id="${key}">
                     <li class = 'shoplis1'><img src="${obj.src}" /></li>
                     <li  class = 'shoplis2'>${obj.name}</li>
                     <li  class = 'shoplis3'>￥${obj.price}</li>
                     <li class="num">
                         <a href="javascript:;" class="minus">-</a><input type="text" name="" id="" class = 'hu' value="${obj.num}" /><a href="javascript:;" class="plus">+</a>
                     </li>
                     <li class="total">${obj.num * obj.price}</li>
                     <li class="total1"><a href="javascript:;" class="del">删除</a></li>
                 </ul>
             `;
             $('.cartList').append(str);
         }
         //获取所有的减号
         $minus = $('.goodInfo .minus');
         //遍历加事件
         $minus.each(function(){
             $(this).click(function(){
                 //获取当前操作的商品ID
                 let id = $(this).parents('.goodInfo').attr('data-good-id');
                 //修改cookie
                 let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
                 let cookieObj = convertCookieStrToCookieObj(cookieStr);
                 cookieObj[id].num --;
                 if(cookieObj[id].num > 0){
                     //重新写入cookie
                     $.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
                     //数量框
                     $(this).next().val(cookieObj[id].num);
                     //小计
                     $(this).parent().next().html(cookieObj[id].num * cookieObj[id].price);
                 }
             })
         })
         //获取所有的加号
         let $plus = $('.goodInfo .plus');
         //遍历加事件
         $.each($plus,function(){
             $(this).click(function(){
                 //获取当前操作的商品ID
                 let id = $(this).parents('.goodInfo').attr('data-good-id');
                 //修改cookie
                 let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
                 let cookieObj = convertCookieStrToCookieObj(cookieStr);
                 cookieObj[id].num ++;
                 //重新写入cookie
                 $.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
                 //数量框
                 $(this).prev().val(cookieObj[id].num);
                 //小计
                 $(this).parent().next().html(cookieObj[id].num * cookieObj[id].price);
             })
         })
         //获取所有的数量框
         let $numInput = $('.goodInfo .num input');
         //遍历加事件
         $numInput.each(function(){
             $(this).blur(function(){
                 //获取当前操作的商品ID
                 let id = $(this).parents('.goodInfo').attr('data-good-id');
                 //修改cookie
                 let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
                 let cookieObj = convertCookieStrToCookieObj(cookieStr);
                 if(/^\d+$/.test($(this).val()) && $(this).val() > 0){
                     cookieObj[id].num = $(this).val();
                 }else{
                     cookieObj[id].num = 1;
                 }
                 //重新写入cookie
                 $.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
                 //数量框
                 $(this).val(cookieObj[id].num);
                 //小计
                 $(this).parent().next().html(cookieObj[id].num * parseInt(cookieObj[id].price));
                
             })
         })
         //获取所有的删除按钮
         let $del = $('.goodInfo .del');
         //遍历加事件
         $del.each(function(){
             $(this).click(function(){
                 let id = $(this).parents('.goodInfo').remove().attr('data-good-id');
                 //修改cookie
                 let cookieStr = $.cookie('cart') ? $.cookie('cart') : '';
                 let cookieObj = convertCookieStrToCookieObj(cookieStr);
                 delete cookieObj[id]; //删除当前对象中的某个属性
                 //重新写入cookie
                 $.cookie('cart',JSON.stringify(cookieObj),{expires : 7,path : '/'});
             })
         })
     }
     
     
 })
 //将cookie字符串转为cookie对象
 function convertCookieStrToCookieObj(str){
     if(!str){
         return {};
     }
     return JSON.parse(str);
 }


/***/ })
/******/ ]);