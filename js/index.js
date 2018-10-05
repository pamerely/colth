/*首页轮播图*/
var num = 0;
setInterval(function () {
	num++;
	if (num>1) {
		num = 0;
	}
	$('.boxRight>ul>li').eq(num).show().siblings().hide();
	$('.circle span').eq(num).css('background','white').siblings().css('background','#c2c2c2');
},2000)


$(function () {
	//首页侧栏详情
	$('.boxLeft>ul>li').hover(function () {
		$(this).children('ul').eq(0).stop().fadeIn(500);
		$(this).css({'border-color':'#1e50ae','border-right-color':'#f1f1f1'}).siblings().css({'border-color':'#f1f1f1','border-right-color':'#1e50ae'});
	},function () {
		$(this).children('ul').eq(0).stop().fadeOut(100);
		$(this).css('border-color','#f1f1f1');
	})
	$('.boxLeft>ul>li>ul>li').hover(function () {
		$(this).css('color','#1e50ae');
	},function () {
		$(this).css('color','black');
	})
	
	//每日产品推荐
	$('.next').click(function () {
		$('.clothes').css('margin-left',-1100);
	})
	$('.pre').click(function () {
		$('.clothes').css('margin-left',50);
	})
	$('.cloSearch').hover(function () {
		$(this).children('.find').stop().fadeIn(500);
	},function () {
		$(this).children('.find').stop().fadeOut(500);
	})
	
	//购物车
	$('.topNavRight>a').eq(5).hover(function () {
		$('.topNavRight a li').css('display','block');
	},function () {
		$('.topNavRight a li').css('display','none');
	})
	
	//商品分类下拉条
	$('nav>ul>li').eq(0).hover(function () {
		$('.pulldown').slideDown();
	},function () {
		$('.pulldown').slideUp();
	})
	$('.pulldown>li').hover(function () {
		$(this).children('ul').eq(0).stop().show();
		$(this).css({'border-color':'#1e50ae','border-right-color':'#f1f1f1'}).siblings().css({'border-color':'#f1f1f1','border-right-color':'#1e50ae'});
	},function () {
		$(this).children('ul').eq(0).stop().hide();
		$(this).css('border-color','#f1f1f1');
	})
	$('.pulldown>li>ul>li').hover(function () {
		$(this).css('color','#1e50ae');
	},function () {
		$(this).css('color','black');
	})
	
	//小图放大
	$('.detailsSection>img').hover(function () {
		$(this).mousemove(function () {
			$('.bigPic').css('display','block');
			var x = -(event.pageX-100)+125;
			var y = -(event.pageY-225)+125;
			$('.bigPic img').css({'transform':'scale(1.5)','left':x,'top':y});
		})		
	},function () {
		$('.bigPic').css('display','none');
	})
	
	//商品购买数量
	var num = 1;
	$('.addNum').click(function () {
		num++;
		$('.buyNum input').attr('value',num);
	})
	$('.subtractNum').click(function () {
		num--;
		if (num==1) {
			$(this).css('cursor','default');
			$('.buyNum input').attr('value',num);
		} 
		else if (num<1) {
			$('.buyNum input').attr('value',1);
			num = 1;
		}
		else{
			$('.buyNum input').attr('value',num);
		}
	})
	
	//收藏
	$('.collect').hover(function () {
		$(this).css('color','#1e50ae');
	},function () {
		$(this).css('color','#666666');
	})
	
	//分享
	$('.share').hover(function () {
		$(this).css({'color':'#1e50ae','border':'1px solid #eaeaea'});
		$(this).children('ul').css({'display':'block','border':'1px solid #eaeaea'});
	},function () {
		$(this).css({'color':'#666666','border':'1px solid transparent'});
		$(this).children('ul').css('display','none');
	})
	
	//产品详情评论销量
	$('.goodDetails li').eq(0).click(function () {
		$(this).attr('class','gdCurrent').siblings().removeAttr('class','gdCurrent');
		$('.detailsOne').show();
		$('.detailsTwo').hide();
		$('.detailsThree').hide();
	})
	$('.goodDetails li').eq(1).click(function () {
		$(this).attr('class','gdCurrent').siblings().removeAttr('class','gdCurrent');
		$('.detailsOne').hide();
		$('.detailsTwo').show();
		$('.detailsThree').hide();
	})
	$('.goodDetails li').eq(2).click(function () {
		$(this).attr('class','gdCurrent').siblings().removeAttr('class','gdCurrent');
		$('.detailsOne').hide();
		$('.detailsTwo').hide();
		$('.detailsThree').show();
	})
	
	//产品评星
	$('.star').click(function () {
		$(this).css('color','#1e50ae');
		$(this).prevAll($(this).index()).css('color','#1e50ae');
		$(this).nextAll($(this).index()).css('color','#e3e3e3');
		$('.starTxt').show();
		if ($(this).index()==0) {
			var num = $(this).index()+1;
			$('.starTxt').html(num+'分差评').css('color','#1e50ae');
		} 
		else if ($(this).index()==1||$(this).index()==2) {
			var num = $(this).index()+1;
			$('.starTxt').html(num+'分中评').css('color','#1e50ae');
		}
		else {
			var num = $(this).index()+1;
			$('.starTxt').html(num+'分好评').css('color','#1e50ae');
		}
		$('.star').unbind('mouseenter');
		$('.star').unbind('mouseleave');
	})
	$('.star').hover(function () {
		$(this).css('color','#1e50ae');
		$(this).prevAll($(this).index()).css('color','#1e50ae');
		$(this).nextAll($(this).index()).css('color','#e3e3e3');
		$('.starTxt').show();
		if ($(this).index()==0) {
			var num = $(this).index()+1;
			$('.starTxt').html(num+'分差评').css('color','#1e50ae');
		} 
		else if ($(this).index()==1||$(this).index()==2) {
			var num = $(this).index()+1;
			$('.starTxt').html(num+'分中评').css('color','#1e50ae');
		}
		else {
			var num = $(this).index()+1;
			$('.starTxt').html(num+'分好评').css('color','#1e50ae');
		}
	},function () {
		$('.star').css('color','#e3e3e3');
		$('.starTxt').hide();
	})	
	
	//验证码
	$('.code').click(function () {
		var code = '';
		var codelength = 4;
		var codeArr = ['0','1','2','3','4','5','6','7','8','9',
					   'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
					   'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
		for (var i=0;i<codelength;i++) {
			var codeindex = Math.floor(Math.random()*62);
			code += codeArr[codeindex];
		}	
		$('.code').html(code);
	})
		
	//图片搜索
	$('.cloimg').hover(function () {
		$(this).children('.find').stop().fadeIn(500);
	},function () {
		$(this).children('.find').stop().fadeOut(500);
	})
	
	//换一批
	var clicknum = 0;
	$('.change').click(function () {
		clicknum++;
		if (clicknum%2==0) {
			$('.likeOne').css('display','block');
			$('.likeTwo').css('display','none');
		} else{
			$('.likeOne').css('display','none');
			$('.likeTwo').css('display','block');
		}
	})
	
	//我的资料
	var arr = [
		{
			"src":"../img/AD0I4IycCBACGAAg17br2gUooZmk0gEwpAQ4pAQ!200x200.jpg",
			"txt":"NBA 马刺队 男子球衣2",
			"new":280,
			"old":"￥300.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg27br2gUoi42JjwMwpAQ4pAQ!300x300.jpg",
			"txt":"NBA 火箭队 男子球衣13",
			"new":580,
			"old":"￥600.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg2Lbr2gUovpL7kgIwpAQ4pAQ!200x200.jpg",
			"txt":"NBA 骑士队 GO系列",
			"new":380,
			"old":"￥400.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg4Lbr2gUohPv6ogQwpAQ4pAQ!200x200.jpg",
			"txt":"NBA 勇士队 男子球衣11",
			"new":580,
			"old":"￥600.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg47br2gUo4vTEiQEwpAQ4pAQ!200x200.jpg",
			"txt":"汤普森3代签名 男子篮球鞋",
			"new":780,
			"old":"￥800.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg47br2gUouvS4-wQwpAQ4pAQ!200x200.jpg",
			"txt":"汤普森3代季后赛战靴",
			"new":780,
			"old":"￥800.00"
		}
	]
	var res = [
		{
			"src":"../img/AD0I4IycCBACGAAg4bbr2gUogKnzwgQwpAQ4pAQ!200x200.jpg",
			"txt":"安德玛 库里 男子篮球鞋",
			"new":780,
			"old":"￥800.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg4Lbr2gUopdX9hAYwpAQ4pAQ!200x200.jpg",
			"txt":"安德玛 Fortis3 男子跑步鞋",
			"new":780,
			"old":"￥800.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg2Lbr2gUotJqY-QYwpAQ4pAQ!200x200.jpg",
			"txt":"NBA 马刺队 男子球衣00",
			"new":280,
			"old":"￥300.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg3bbr2gUoopLkzQEwpAQ4pAQ!200x200.jpg",
			"txt":"NBA 火箭队 定制款",
			"new":780,
			"old":"￥800.00"
		},
		{
			"src":"../img/AD0I4IycCBACGAAg3rbr2gUo-9jr3AIwpAQ4pAQ!200x200.jpg",
			"txt":"NBA 骑士队 定制款",
			"new":580,
			"old":"￥600.00"
		},
		{
			"src":"../img/AD0I4IycCBAEGAAg1Nrr2gUo3NLi6AUwxAE42AE.png",
			"txt":"NBA 勇士队 定制款",
			"new":680,
			"old":"￥700.00"
		}
	]
	for (var i in arr) {
		if (i==0) {
			$('.likeOne li').eq(0).children('img').attr('src',arr[0].src);
			$('.likeOne li').eq(0).children('.clotxt').html(arr[0].txt);
			$('.likeOne li').eq(0).children('h1').children('.big').html(arr[0].new);
			$('.likeOne li').eq(0).children('h1').children('.del').html(arr[0].old);
		} else{
			var tag = $('.likeOne li').eq(0).clone(true);
			tag.children('img').attr('src',arr[i].src);
			tag.children('.clotxt').html(arr[i].txt);
			tag.children('h1').children('.big').html(arr[i].new);
			tag.children('h1').children('.del').html(arr[i].old);
			$('.likeOne').append(tag);
		}
	}
	for (var i in res) {
		if (i==0) {
			$('.likeTwo li').eq(0).children('img').attr('src',res[0].src);
			$('.likeTwo.likeTwoli').eq(0).children('.clotxt').html(res[0].txt);
			$('.likeTwo li').eq(0).children('h1').children('.big').html(res[0].new);
			$('.likeTwo li').eq(0).children('h1').children('.del').html(res[0].old);
		} else{
			var tag = $('.likeTwo li').eq(0).clone(true);
			tag.children('img').attr('src',res[i].src);
			tag.children('.clotxt').html(res[i].txt);
			tag.children('h1').children('.big').html(res[i].new);
			tag.children('h1').children('.del').html(res[i].old);
			$('.likeTwo').append(tag);
		}
	}
})



