
	$(function() {	//page init
		initParams() ;
		redirectToIndex() ;
	});
	
	/**
	 * 重定向到首页
	 * @returns
	 */
	function redirectToIndex() {
		$(".to-index").click(function(){
			window.location.href="search-index.html?uId="+getAttr(ID_TYPE,'uId') ;
		}) ;
	}
	
	/**
	 * 按照数组中的值，批量初始化隐藏域
	 * @returns
	 */
	function initParams() {
		var arrSelectorKeys = new Array() ;
		arrSelectorKeys[0] = "uId" ;
		arrSelectorKeys[1] = "orderId" ;
		arrSelectorKeys[2] = "phone" ;
		renderHiddenParamsByArray(arrSelectorKeys, ID_TYPE) ;
		var phone = getURLParamVal(arrSelectorKeys[2]);
		if(isEmpty(phone)){
			return ;
		}
		$(".mui-counsult").attr("href","tel:"+phone); //初始化输入框
	}
	
	