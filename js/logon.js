			var oname = document.forms.accont;
			var secrect = document.forms.code;
			
			txt.onsubmit=function(a){
	        var flag = true;
			if(oname.value==''){
				flag = false;
				nametip.innerHTML="请输入帐号"
				nametip.style.color='red';
			}else{
				nametip.innerHTML="ok"
				nametip.style.color='lime'
			}
			
			
			if(secrect.value==''){
				flag = false;
				codetip.innerHTML='请输入密码'
				codetip.style.color='red'
			}else{
				codetip.innerHTML="ok"
				codetip.style.color='lime'
			}
			if(!flag){
				a.preventDefault()
			}
		}	
		
		myname.onblur=function(){
		if(oname.value=='')	{
			    nametip.innerHTML="请输入帐号";
				nametip.style.color='red';
		}else{
				nametip.innerHTML="ok";
				nametip.style.color='lime';
			}
		}	

        myword.onblur=function(){
		if(secrect.value=='')	{
			    codetip.innerHTML="请输入密码";
				codetip.style.color='red';
		}else{
				codetip.innerHTML="ok";
				codetip.style.color='lime';
			}
		}	
