	var now = 1 ;
	var num = 1;
	$(function() {	//page init
		addKeyEnterPressBtn() ;
		initParams() ;
		redirectURL() ;
		loadArticleDetail() ;
		initProfessionInfo(); 
	});
	
	function loadArticleDetail() {
		var articleId = $('#articleId').val();
		var uId = $('#uId').val();
		var bId = $('#bId').val();
		var bName = $('#bName').val();
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		
		//ajax 查询数据
		var url = baseProjectPath+"/qryArticleDetail" ;
		var data = {} ;
		data["articleId"] = articleId ;
		data["tokenId"] = uId ;
		//ajax
		$.post(url,data,function(data){
			if(!isEmpty(data)
					&&('000000'==data.status||'0'==data.status)) { //成功，显示
				
				var showErrorFlag = false ;
				var beans = data.data ; 
				if (!isEmpty(beans)) {
					var htmlOutput ;
					var template = $.templates("#article-detail-data");
					htmlOutput = template.render(beans);
					$("#article-detail-div").html(htmlOutput);
					showDivByResult("success-flag") ;
					
				} else {
					showErrorFlag = true ;
				}
				
			} else { //error，给提示
				showErrorFlag = true ;
			}
			
			if(showErrorFlag==true){
				showDivByResult("error-flag") ;
			}
		});
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
	 * :TODO
	 * 实现Ajax滑动分页效果：
	 * 滑动分页，效果：http://zixuephp.net/article-181.html
	 * @returns
	 */
	function scrollLoading(divParam) {
		//记录状态
		var state=true;
		//滚动条滚动的时候
		$(window).scroll(function(){
		        //获取当前加载更多按钮距离顶部的距离
		    var bottomsubmit = $('#'+divParam).offset().top;
		    //获取当前页面底部距离顶部的高度距离
		    var nowtop = $(document).scrollTop()+$(window).height();
		    //获取当前页数，默认第一页
		    var now = $('#'+divParam).attr('now');
		    //获取总页数，分页的总页数
		    var num = $('#'+divParam).attr('num');
		    //当当前页面的高度大于按钮的高度的时候开始触发加载更多数据
		    if(nowtop>bottomsubmit){
		            //如果为真继续执行，这个是用于防止滚动获取过多的数据情况
		        if(state==true){
		            //执行一次获取数据并停止再进来获取数据
		            state=false;
		            //定时器
		            setTimeout(function(){
		                  //当前页数++
		                now++;
		                //记录当前为第二页
		                $('#'+divParam).attr('now',now);
		                loadingBackDataByAjax() ;
		            },500);
		        }
		    }
		});
	}
	
	/**
	 * 通过Ajax加载[文章详情页]数据
	 * @returns
	 */
	function loadingArticleDetailByAjax() {
		
		var articleId = $('#articleId').val();
		//ajax 查询数据
		var url = baseProjectPath+"/articleDetail" ;
		var data = {} ;
		data["articleId"] = articleId ;
		
		//ajax
		$.post(url,data,function(data){
			if(!isEmpty(data)
					&&('000000'==data.status||'0'==data.status) 
					&& !isEmpty(data.data)) { //成功，显示
				var showErrorFlag = false ;
				var beans = data.data.result ; 
				var searchType = data.data.searchStatus ;
				if (!isEmpty(beans)) {
					var htmlOutput ;
					var template = $.templates("#article-detail-success-div");
					htmlOutput = template.render(beans);
					
					$(".container-search-success-brand").html($('#bName').val()) ;
					showDivByResult("success-flag") ;
				} else {
					showErrorFlag = true ;
				}
				
			} else { //error，给提示
				showErrorFlag = true ;
			}
			if(showErrorFlag==true){
				showDivByResult("error-flag") ;
			}
		});
	}
	
	/**
	 * 重定向到首页
	 * @returns
	 */
	function redirectURL() {
		$("#profession-list").click(function(){
			window.location.href="profession-list.html?version=4&uId="+getAttr(ID_TYPE,'uId') 
									+"&lat="+getAttr(ID_TYPE,'lat')
									+"&lng="+getAttr(ID_TYPE,'lng');
		}) ;
		$(".error-flag").click(function(){
			history.go(-1) ;
		}) ;
	}
	
	/**
	 * 按照数组中的值，批量初始化隐藏域
	 * @returns
	 */
	function initParams() {
		var arrSelectorKeys = new Array() ;
		arrSelectorKeys[0] = "uId" ;
		arrSelectorKeys[1] = "articleId" ;
		arrSelectorKeys[2] = "bId" ;
		arrSelectorKeys[3] = "bName" ;
		arrSelectorKeys[4] = "lng" ;
		arrSelectorKeys[5] = "lat" ;
		renderHiddenParamsByArray(arrSelectorKeys, ID_TYPE) ;
	}
	
	/**
	 * 
	 * @returns
	 */
	function initProfessionInfo() {
		var uId = $('#uId').val();
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		
		//ajax 查询数据
		var url = baseProjectPath+"/queryProfList" ;
		var data = {} ;
		data["userId"] = uId ;
		data["longitude"] = lng ;
		data["latitude"] = lat ;
		data["page"] = 1 ;
		data["rows"] = 10 ;
		
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
						window.location.href = "order-pay-success.html?version=4&uId=" 
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
	