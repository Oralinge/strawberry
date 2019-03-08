

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
	
   