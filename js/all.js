for(var i = 0;i<data.length;i++){
	if(i==0){
		$('.liall li').eq(0).children('a').eq(0).children('img').eq(0).attr('src',data[0].cimg)
		$('.liall li').eq(0).children('p').eq(0).children('a').eq(0).html(data[0].cname)
		$('.liall li').eq(0).children('p').eq(1).children('span').eq(0).html(data[0].chead)
		$('.liall li').eq(0).children('p').eq(1).children('span').eq(1).html(data[0].cnew)
		$('.liall li').eq(0).children('p').eq(1).children('span').eq(2).html(data[0].csmall)
		$('.liall li').eq(0).children('p').eq(1).children('span').eq(3).html(data[0].cold)
	}else{
		var clon=$('.liall li').eq(0).clone(true)
		clon.children('a').eq(0).children('img').eq(0).attr('src',data[i].cimg)
		clon.children('p').eq(0).children('a').eq(0).html(data[i].cname)
		clon.children('p').eq(1).children('span').eq(0).html(data[i].chead)
		clon.children('p').eq(1).children('span').eq(1).html(data[i].cnew)
		clon.children('p').eq(1).children('span').eq(2).html(data[i].csmall)
	    clon.children('p').eq(1).children('span').eq(3).html(data[i].cold)
	    $('.liall').append(clon)
	}
}


//价钱 输入框 

$('form .money').focus(function(){
	$('.btn').show()
	$('.fontclass').css('background','#FFFFFF')
	$('.fontclass').css('border','2px  #f1f1f1 solid')
	$('.money').css('border','solid 1px #1e50ae')
	$('.money').css('border-radius','4%')
	
})

$('form .money').blur(function(){
	$('.btn').hide()
	$('.fontclass').css('background','#f5f5f5')
	$('.fontclass').css('border','')
	$('.money').css('border','')
	$('.money').css('border-radius','')
	
})

$('div .name').hover(function(){
	$(this).css('background','url(../img/rise.gif) no-repeat right')
},function(){
	$(this).css('background','')
	
}
)

$('.liall li').hover(function(){
	$(this).children('.searchp').stop().show()
},function(){
	$(this).children('.searchp').stop().hide()
})



