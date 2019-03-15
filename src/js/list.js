
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




/*-------------- 倒计时 --------------*/

       
  
     
window.show_time=function (){ 
    var time_start = new Date().getTime(); //设定当前时间
    var time_end =  new Date("2019/03/16 00:00:00").getTime(); //设定目标时间
    // 计算时间差 
    var time_distance = time_end - time_start; 
   
    // 时
    var int_hour = Math.floor(time_distance/3600000) 
    time_distance -= int_hour * 3600000; 
    // 分
    var int_minute = Math.floor(time_distance/60000) 
    time_distance -= int_minute * 60000; 
    // 秒 
    var int_second = Math.floor(time_distance/1000) 
    // 时分秒为单数时、前面加零 
   
    if(int_hour < 10){ 
        int_hour = "0" + int_hour; 
    } 
    if(int_minute < 10){ 
        int_minute = "0" + int_minute; 
    } 
    if(int_second < 10){
        int_second = "0" + int_second; 
    } 
    // 显示时间 
  
    $(".hour").html(int_hour); 
    $(".min").html(int_minute); 
    $(".seconds").html(int_second); 
    // 设置定时器
    setTimeout("show_time()",1000); 
   
} 
show_time();
/*-------------- 倒计时end --------------*/

    

