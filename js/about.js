function go(n){
	return $('.navlist>li').eq(n).addClass('back').siblings().removeClass('back')
}



$(window).scroll(function(){
	var st=$(window).scrollTop()+$(window).height();
	if( st>= $('.weone').eq(0).offset().top){
		$('.navlist').stop().fadeIn(300)}else{
			$('.navlist').stop().fadeOut(300)
		}
	
})

$(window).scroll(function(){
	var st=$(window).scrollTop()+$(window).height()
	if(st>=$('.ftxt').eq(0).offset().top){
		go(3)
	}else
	  if(st>=$('.aboutu').eq(0).offset().top){
		go(2);
	}else  
	  if(st>=$('.divthree').eq(0).offset().top){
		go(1)
		
	}else 
	   if(st>=$('.divone').eq(0).offset().top){
		go(0)
	}
})


$('.navlist>li').click(function(){
	var index = $(this).index()
	if(index==0){
		$('html,body').animate({'scrollTop':$('.divone').eq(0).offset().top})
	}else 
	if(index==1){
		$('html,body').animate({'scrollTop':$('.divthree').eq(0).offset().top})
		
	}else 
	if(index==2){
		$('html,body').animate({'scrollTop':$('.aboutu').eq(0).offset().top})
	}else
		if(index==3){
		$('html,body').animate({'scrollTop':'0px'}),1000}
	
	
	
})


$('.formu').submit(function(a){
	var flag = true;
	if($('.paget').val()==''){
		flag=false;	
	}
	
	if(!flag){
		a.preventDefault()
		$('.paget').attr('placeholder','请留下您宝贵的意见')
	
	}
})