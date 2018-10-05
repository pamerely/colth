$(function(){
	$(".orderRight>ol>li").eq(0).hover(function(){
		$(this).stop().toggleClass("orderCurrent").children("ul").stop().toggle(300);
	})
	$(".orderRight>ol>li").eq(4).hover(function(){
		$(this).stop().toggleClass("orderCurrent1").children("ul").stop().toggle(300);
	})
	/*客服的JQ*/
	$(".con-left>li>span").click(function(){
		$(this).siblings("ol").show();
	})
	$(".con-right>li>span").click(function(){
		$(this).siblings("ol").show();
	})
	$(".retract").click(function(){
		$(this).parent("ol").hide();
	})
	//回到顶部
	$(window).scroll(function(){
		if ($(window).scrollTop()>$(".top-page").scrollTop()) {
			$(".top-page").show()
		}else{
			$(".top-page").hide()
		}
	})
	$(".top-page").click(function(){
		$("html,body").animate({'scrollTop':'0px'})
	})
		//去掉开头和结尾的空格
	function removeSpace (str) {
	while (str[0]===' '){
	str = str.slice(1,str.length);
		
	}
	while (str[str.length-1]===' '){
			str = str.slice(0,str.length-1);
		}
		return str;
	}
	//客服对话框
	var date1 = new Date();
	var time = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}&nbsp;${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`
	$(".content p").eq(1).html(time);
	$(".input-box>button").eq(1).click(function(){
		var val = removeSpace($(".tex").val());
		if (val=='') {
			alert("输入的内容不能为空！");
			$(".tex").val('');
		} else{
			var date1 = new Date();
	var time = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}&nbsp;${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`
			var li = $("<li></li>");
			li.html('<p>'+time+'</p><span>'+val+'</span><svg class="icon kefupic" aria-hidden="true"><use xlink:href="#icon-photo"></use></svg>');
			li.addClass("con-left");
			$("ul").append(li);
			$(".tex").val('');
		}
	})
    //监听回车键
    $(".tex").keydown(function(e){
    	if(e.keyCode==13){
    	$(".input-box>button").eq(1).click();
    	}
    })

	//新品到站
	$(".new-pic").hover(function(){
		$(this).children("img").eq(1).stop().fadeIn(500);
	},function(){
		$(this).children("img").eq(1).stop().fadeOut(500);
	})
	
	
	
})