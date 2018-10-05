			var oname = document.forms.mynumber;
			var secrect = document.forms.code;
			var onsecrect = document.forms.oncode;
			var me = document.forms.usename;
			var onphone = document.forms.usephone;
			text.onsubmit=function(a){
	        var flag = true;
			if(oname.value==''||oname.value.length<4||oname.value.length>16){
				flag = false;
				nametip.innerHTML="数字或者下划线，长度为4-16个字符且不能为空"
				nametip.style.fontSize='2px'
				nametip.style.color='red';
			}else{
				nametip.innerHTML="ok"
				nametip.style.color='lime'
			}
			
			
			if(secrect.value==''||secrect.value.length<6||secrect.value.length>16){
				flag = false;
				secrecttip.innerHTML="数字或者下划线，长度为6-16个字符且不能为空";
				secrecttip.style.color='red';
				secrecttip.style.fontSize='2px'
			}else{
				secrecttip.innerHTML="ok";
				secrecttip.style.color='lime';
			}
			
			
			
	
	    	if(onsecrect.value!=secrect.value||onsecrect.value==''||onsecrect.value.length<6||onsecrect.value.length>16){
	    		flag = false;
				ontip.innerHTML="请保持密码一致";
				ontip.style.color='red';
				ontip.style.fontSize='2px'
			}else{
				ontip.innerHTML="ok";
				ontip.style.color='lime';
			}	
	    
	    

			if(me.value==''){
				flag = false;
				metip.innerHTML='请输入名字'
				metip.style.color='red'
				metip.style.fontSize='2px'
			}else{
				metip.innerHTML="ok"
				metip.style.color='lime'
			}
//			
//			
			if(onphone.value==''||isNaN(onphone.value)){
				flag = false;
				onetip.innerHTML='请输入准确的手机号'
				onetip.style.color='red'
				onetip.style.fontSize='2px'
			}else{
				onetip.innerHTML="ok"
				onetip.style.color='lime'
			}
////			
			if(!flag){
				a.preventDefault()
			}
		}	
		
		
	
	
	
	
			accont.onblur=function(){
			if(oname.value==''||oname.value.length<4||oname.value.length>16){
				nametip.innerHTML="数字或者下划线，长度为4-16个字符且不能为空"
				nametip.style.color='red';
				nametip.style.fontSize='2px'
				nametip.style.color='red';
			}else{
				nametip.innerHTML="ok"
				nametip.style.color='lime'
			}
//
	}	
	
	


		myword.onblur=function(){
			if(secrect.value==''||secrect.value.length<6||secrect.value.length>16){
				secrecttip.innerHTML="数字或者下划线，长度为6-16个字符且不能为空";
				secrecttip.style.color='red';
				secrecttip.style.fontSize='2px'
				
			}else{
				secrecttip.innerHTML="ok";
				secrecttip.style.color='lime';
			}
	}
	

	
	    omyword.onblur=function(){
	    	if(onsecrect.value!=secrect.value||onsecrect.value==''||onsecrect.value.length<6||onsecrect.value.length>16){
				ontip.innerHTML="请保持密码一致";
				ontip.style.color='red';
				ontip.style.fontSize='2px'
			}else{
				ontip.innerHTML="ok";
				ontip.style.color='lime';
			}	
	    }
	
	

		myname.onblur=function(){
			if(me.value==''){
				metip.innerHTML='请输入名字'
				metip.style.color='red'
				metip.style.fontSize='2px'
			}else{
				metip.innerHTML="ok"
				metip.style.color='lime'
			}
	}	
	
		myphone.onblur=function(){
			if(onphone.value==''||isNaN(onphone.value)){
				
				onetip.innerHTML='请输入准确的手机号'
				onetip.style.color='red'
				onetip.style.fontSize='2px'
			}else{
				onetip.innerHTML="ok"
				onetip.style.color='lime'
			}
	}	