
	$(function() {	//page init
		initParams() ;
		redirectSearchIndex() ;
		initProfessionInfo(); 
	});
	
	/**
	 * 设置需要拼接地址栏的变量
	 * @returns
	 */
	function setAppendLocationParams() {
		var arrSelectorKeys = new Array() ;
		arrSelectorKeys[0] = "uId" ;
		renderLocationParamsByArray(arrSelectorKeys, ID_TYPE) ;
	}
	
	/**
	 * 显示隐藏，大的域
	 * @param param
	 * @returns
	 */
	function showDivByResult(param){
		if("error-flag"==param){
			$(".error-flag").show() ;
			$(".success-flag").hide() ;
			
		} else if("success-flag"==param) {
			$(".success-flag").show() ;
			$(".error-flag").hide() ;	
		}
	}
	
	/**
	 * 按照数组中的值，批量初始化隐藏域
	 * @returns
	 */
	function initParams() {
		var arrSelectorKeys = new Array() ;
		arrSelectorKeys[0] = "uId" ;
		renderHiddenParamsByArray(arrSelectorKeys, ID_TYPE) ;
	}
	
	function initProfessionInfo() {
		var uId = $('#uId').val();
		
		//ajax 查询数据
		var url = baseProjectPath+"/queryProfList" ;
		var data = {} ;
		data["userId"] = uId ;
		data["page"] = 1 ;
		data["rows"] = 50 ;
		
		//ajax
		$.post(url,data,function(data){
			if(!isEmpty(data)
					&&('000000'==data.status||'0'==data.status)
					&& !isEmpty(data.data)) { //成功，显示
				var showErrorFlag = false ;
				var beans = data.data ; 
				if (!isEmpty(beans)) {
					var htmlOutput ;
					var template = $.templates("#profession-div-content-script");
					htmlOutput = template.render(beans);
					$("#profession-div-content").html(htmlOutput);
					setAppendLocationParams(); //所有href添加对应参数
				} else {
					showErrorFlag = true ;
				}
				
			} else { //error，给提示
				showErrorFlag = true ;
			}
			bindSaveOrder() ;
		});
	}
	/**
	 * Order
	 * @returns
	 */
	function bindSaveOrder(){
		$(".show-phone").bind("click",function(e){
			var pId = $(this).attr("id") ;
			var uId = $('#uId').val() ;
			
			var url = baseProjectPath+"/createOrder" ;
			var data = {} ;
			data["uId"] = uId ;
			data["pId"] = pId ;
			
			//ajax
			$.post(url,data,function(data){
				if(!isEmpty(data)
						&&('000000'==data.status||'0'==data.status)
						&& !isEmpty(data.data)) { //成功，显示
					var showErrorFlag = false ;
					var beans = data.data ; 
					
					if (!isEmpty(beans)) {
						var orderId = beans.id ;
						var phone = beans.phone ;
						window.location.href = "order-pay-success.html?uId=" 
							+ uId + "&orderId=" + orderId +"&phone="+phone ;
					} else {
						showErrorFlag = true ;
					}
					
				} else { //error，给提示
					showErrorFlag = true ;
				}
				if(showErrorFlag){
					alert("网络繁忙，请稍后重试...");
				}
			});
			
		});
	}
	