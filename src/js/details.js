
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
    
/*------------------------小轮播start-----------------------*/

// var timer = setInterval(auto,5000); //取消自动轮播
   
    var index = 0;
    function auto(){
        index++;
        // if( index == $("ol li").size() ){
        //     index = 0;
        // }
        $("ol li").eq(index).addClass("current").siblings().removeClass("current");
        $(".shuffling-list li ").eq(index).show().siblings().hide();
    }
               
    //鼠标 操作
    $("ol li").mouseenter(function(){
        // clearInterval(timer);
        index = $(this).index()-1;
        
        auto();
    });
    // $("ol li").mouseout(function(){
    //     timer = setInterval(auto,5000);
    // })
    
/*------------------------小轮播end-----------------------*/

/*------------------------小轮播信息start-----------------------*/ 


var deff=$.ajax({
	type:"get",
	url:"../js/json.json",
	async:true
});
deff.done(function(json){
	
	var str="";
		for(var i=0;i<json.list1.length;i++){
			var pro=json.list1[i];
			str += `
			
				<div class = LIST-BOX>
                
                <a href=" ">
                <img src="../img/${pro.src}"/>
				<h1>${pro.name1}</h1>
                <h2>${pro.name2}</h2>
                <p>${pro.name3}</p>
				<h3>${pro.advice}</h3>
                <h4>
                   <i>￥</i>
                   <i>${pro.price2}</i> 
                   <i>${pro.price3}</i>
                   <i>${pro.price4}</i>
                </h4>
                
                </a>
                
                </div>
				
								
			`;
		}	
	
    $(".shuffling-list li").first().html(str);
    
    var str1="";
		for(var i=0;i<json.list2.length;i++){
			var pro1=json.list2[i];
			str1 += `
			
				<div class = LIST-BOX1>
                
                <a href=" ">
                <img src="../img/${pro1.src}"/>
				<h1>${pro1.name1}</h1>
                <h2>${pro1.name2}</h2>
                <p>${pro1.name3}</p>
				<h3>${pro1.advice}</h3>
                <h4>
                   <i>￥</i>
                   <i>${pro1.price2}</i> 
                   <i>${pro1.price3}</i>
                   <i>${pro1.price4}</i>
                </h4>
                
                </a>
                
                </div>
				
								
			`;
		}	
	
    $(".shuffling-list li").eq(1).html(str1);


    var str2="";
    for(var i=0;i<json.list3.length;i++){
        var pro2=json.list3[i];
        str2 += `
        
            <div class = LIST-BOX2>
            
            <a href=" ">
            <img src="../img/${pro2.src}"/>
            <h1>${pro2.name1}</h1>
            <h2>${pro2.name2}</h2>
            <p>${pro2.name3}</p>
            <h3>${pro2.advice}</h3>
            <h4>
               <i>￥</i>
               <i>${pro2.price2}</i> 
               <i>${pro2.price3}</i>
               <i>${pro2.price4}</i>
            </h4>
            
            </a>
            
            </div>
            
                            
        `;
    }	

$(".shuffling-list li").eq(2).html(str2);
console.log($(".shuffling-list li").eq(2))

    })
/*------------------------小轮播信息end-----------------------*/ 

// "src":"su1.jpg",
// "name1":"缪缪 Miu Miu",
// "name2":"玫瑰之水淡香水喷雾  50ml/1.7oz",
// "advice":"建议零售价&nbsp <s>¥565.50</s> 节省 2%",
// "price2":"556",
// "price3" :".50",
// "price4" :"含税"


/* -------------放大镜start-------------- */


// $('.three span').eq(0).css('border', '2px solid #4a067d');
// 	$('.zhezhao').mousemove(function(e){
//         // let e = evt || window.event;
//         $('.big-img').css("display","block");
// 		$('.magnifier').css("display","block");
        
//         // let left = e.pageX -$('.zhezhao').offsetLeft - parseInt($('.magnifier').width()) / 2;
//         // let top = e.pageY - $('.zhezhao').offsetTop - parseInt($('.magnifier').height()) / 2;


//         var left = e.offsetX -$('.zhezhao').offsetLeft- parseInt($('.magnifier').width()) / 2;
// 		var top = e.offsetY -  $('.zhezhao').offsetTop - parseInt($('.magnifier').height()) / 2;

//         console.log(e.offsetX);
      
// 	left = left < 0 ? 0 : left;
// 		left = left > (parseInt($('#zhezhao').outerWidth()) - parseInt($('#magnifier').outerWidth())) ? (parseInt($('#zhezhao').outerWidth()) - parseInt($('#magnifier').outerWidth())) : left;
// 		top = top < 0 ? 0 : top;
// 		top = top > (parseInt($('#zhezhao').outerHeight()) - parseInt($('#magnifier').outerHeight())) ? (parseInt($('#zhezhao').outerHeight()) - parseInt($('#magnifier').outerHeight())) : top;

// 		$('#magnifier').css('left', left + 'px');
// 		$('#magnifier').css('top', top + 'px');



		// var leftRate = left / parseInt($('.zhezhao').outerWidth());
		// var bigLeft = leftRate * parseInt($('.big-img img').outerWidth());
		// $('.big-img img').css('margin-left', -bigLeft + 'px');

		// var topRate = top / parseInt($('.zhezhao').outerHeight());
		// var bigTop =  topRate * parseInt($('.big-img img').outerHeight());
        // $('.big-img img').css('margin-top', -bigTop + 'px');
        
        //求移动比例
	// 	let pX = left / ($('#zhezhao').offsetWidth - $('.magnifier').offsetWidth);
	// 	let pY = top / ($('#zhezhao').offsetHeight - $('.magnifier').offsetHeight);
	// 	//设置大图移动
	// 	$('.big-img img').style.left = pX * - ($('.big-img img').offsetWidth - $('.big-img').offsetWidth) + 'px';
	// 	$('.big-img img').style.top = pY * -($('.big-img img').offsetHeight - $('.big-img').offsetHeight) + 'px';
	// })
	// $('#zhezhao').mouseleave(function(){
    //     $('.big-img').css("display","none");
	// 	$('.magnifier').css("display","none");
	// })

	// $('.three span').mouseover(function(){
	// 	$(this).css('border', '2px solid #4a067d').siblings().css('border', '2px solid red');
	// 	$('#mediumContainer img').eq(0).attr('src', 'http://img3m3.ddimg.cn/2/21/22628333-' + ($(this).index()+1) + '_w_2.jpg');
	// 	$('#img_u img').eq(0).attr('src', 'http://img3m3.ddimg.cn/2/21/22628333-' + ($(this).index()+1) + '_u_2.jpg');
	// })




/* -------------放大镜end-------------- */

window.onload = function(){
    //1. 获取大盒子
    const oBigBox = byEle('#div1')[0];
    //2. 获取小图
    const oSmallPic = byEle('.little-img')[0];
    //3. 获取遮罩
    const oMark = byEle('.zhezhao')[0];
    //4. 获取滑块
    const oFloat = byEle('.magnifier')[0];
    //5. 获取大图所在的盒子
    const oBigPic = byEle('.big-img')[0];
    //6. 获取大图
    const oBigImg = byEle('.big-img img')[0];
    //添加事件
    //7.给遮罩层添加移入事件
    oMark.onmouseenter = function(){
        oFloat.style.display = 'block';
        oBigPic.style.display = 'block';
    }
    //8. 给遮罩层添加移出事件
    oMark.onmouseleave = function(){
        oFloat.style.display = 'none';
        oBigPic.style.display = 'none';
    }
    //鼠标跟随
    //9. 给遮罩层添加移动事件
    oMark.onmousemove = function(evt){
        let e = evt || window.event;
        let left = e.pageX - oBigBox.offsetLeft - oSmallPic.offsetLeft- oFloat.offsetWidth / 2;
        let top = e.pageY - oBigBox.offsetTop - oSmallPic.offsetTop - oFloat.offsetHeight / 2;
        console.log
        if(left <= 0){
            left = 0;
        }else if(left >= this.offsetWidth - oFloat.offsetWidth){
            left = this.offsetWidth - oFloat.offsetWidth;
        }
        if(top <= 0){
            top = 0;
        }else if(top >= this.offsetHeight - oFloat.offsetHeight){
            top = this.offsetHeight - oFloat.offsetHeight;
        }
        oFloat.style.left = left  + 'px';
        oFloat.style.top = top + 'px';
        
        //求移动比例
        let pX = left / (this.offsetWidth - oFloat.offsetWidth);
        let pY = top / (this.offsetHeight - oFloat.offsetHeight);
        //设置大图移动
        oBigImg.style.left = pX * - (oBigImg.offsetWidth - oBigPic.offsetWidth) + 'px';
        oBigImg.style.top = pY * -(oBigImg.offsetHeight - oBigPic.offsetHeight) + 'px';
        
    }
    function byEle(select){
       return document.querySelectorAll(select);
    }
}
