$(function(){
	//全选事件
	
$(".cart-all").click(function(){
	$(".cart-check").prop('checked',true);
	$(this).siblings().show(300);
	var sum=parseFloat($(".cart-total-price").val());
	var totalNum = parseInt($(".cart-total-num").val());
	for (var i=0;i<$(".cart-check").length;i++) {
		sum+=parseFloat($(".cart-subtotal").eq(i).val());
		totalNum+=parseInt($(".cart-num").eq(i).val());
	}
	sum = sum.toFixed(2);
	$(".cart-total-price").val(sum) ;
	$(".cart-total-num").val(totalNum);
})
//全不选事件
$(".cart-allno").click(function(){
	$(".cart-check").prop('checked',false);
	$(this).hide();
	$(".cart-total-price").val(0.00) ;
	$(".cart-total-num").val(0);
	$(".cart-num").val(1);
	for (var i=0;i<$(".cart-check").length;i++) {
	$(".cart-subtotal").eq(i).val(parseFloat($(".cart-price").eq(i).val()))
	}
})
//数量点击事件
$(".cart-reduce").click(function  (){
	if ($(this).siblings(".cart-num").val()>1) {
		var price = parseFloat($(this).parent().prev().children().val());
		var num=parseInt($(this).siblings(".cart-num").val());
		$(this).siblings(".cart-num").val(--num);
		$(this).parent().next().children().val(num*price);
//		console.log(typeof($(this).parent().next().children().val(num*price)))
		if ($(this).parent().parent().children().eq(0).children().eq(0).prop('checked')) {
			var sum=parseFloat($(".cart-total-price").val());
			var totalNum = parseInt($(".cart-total-num").val());
			sum =sum-price;
			totalNum --;
			sum = sum.toFixed(2);
			$(".cart-total-price").val(sum) ;
			$(".cart-total-num").val(totalNum);
			}
	}else{
		alert("至少选择一件该商品，如果不需要，请直接删除！")
	}
}) 
$(".cart-add").click( function (){
	var totalNum = parseInt($(".cart-total-num").val())
	if (totalNum>200) {
		alert('亲，购物车最多只能加入200件商品哦！亲要是都很喜欢就先下单吧~')
	}else{
		var num=parseInt($(this).siblings(".cart-num").val());
		var price = parseFloat($(this).parent().prev().children().val());
		$(this).siblings(".cart-num").val(++num);
		$(this).parent().next().children().val(num*price);
			if ($(this).parent().parent().children().eq(0).children().eq(0).prop('checked')) {
			var sum=parseFloat($(".cart-total-price").val());
			var totalNum = parseInt($(".cart-total-num").val());
			sum +=price;
			totalNum ++;
			sum = sum.toFixed(2);
			$(".cart-total-price").val(sum) ;
			$(".cart-total-num").val(totalNum);
			}
	}
}
)
//失去焦点事件
$(".cart-num").blur(function(){
	var totalNum = parseInt($(".cart-total-num").val());
	var num=parseInt($(this).val());
	if (isNaN(num)) {
		alert('请输入正确的数值！')
	}
	else if (totalNum>200) {
		
		alert('亲，购物车最多只能加入200件商品哦！亲要是都很喜欢就先下单吧~');
	}else if (num<1) {
		$(this).val(1);
		alert("至少选择一件该商品，如果不需要，请直接删除！");
	}else{
	
	var price = parseFloat($(this).parent().prev().children().val());
	$(this).parent().next().children().val(num*price);}
})
    //监听回车键
    $(".cart-num").keydown(function(e){
    	if(e.keyCode==13){
    	$(".cart-num").blur();
    	}
    })
//删除事件
$(".cart-del").click(function(){
	if (confirm('确认删除此商品吗？')){
	$(this).parent().parent().remove();
	}
})
	//勾选事件

	$(".cart-check").click(function(){
	var sum=parseFloat($(".cart-total-price").val());
	var totalNum = parseInt($(".cart-total-num").val())
	var num = parseInt($(this).parent().parent().children().eq(3).children(".cart-num").val());
	var subtotal = parseFloat($(this).parent().parent().children().eq(4).children(".cart-subtotal").val());
		for (var i=0;i<$(".cart-check").length;i++) {
			if ($(this)[i].checked) {
			sum =sum+subtotal;
			totalNum +=num;
			sum = sum.toFixed(2);
			$(".cart-total-price").val(sum) ;
			$(".cart-total-num").val(totalNum);
			}else{
				sum =sum-subtotal;
				totalNum -=num;
				sum = sum.toFixed(2);
			$(".cart-total-price").val(sum); 
			$(".cart-total-num").val(totalNum);
	}
		}

})

//提交订单
//$(".cart-bottom-btn").click(function(){
//	var sum=parseFloat($(".cart-total-price").val());
//	for (var i=0;i<$(".cart-check").length;i++) {
//			if ($(".cart-check").prop('checked')) {
//			    var subtotal = parseFloat($(".cart-check")[i].parent().parent().children().eq(4).children(".cart-subtotal").val());
//				sum =sum-subtotal;
//			$(".cart-total-price").val(sum) 
//			$(".cart-check").parent().parent().remove();
//			i--
//		}
//		
//			
//		}
//	
//})
	









})

