
	var now = 1 ;
	var num = 1;
	
	$(function() {	//page init
//		brandInitAndChange() ; 		
		addKeyEnterPressBtn() ;
		initParams() ;
		redirectSearchIndex() ;
//		sub() ; //初始化提交搜索
		
		scrollLoading('search-success-errorcode-match-div') ;
	});
	
	
	function subRedirect() {
		var key = $(".search-context-input").val();
		if (isEmpty(key)) {
			alert('请先输入搜索内容');
			return false;
		}
		var uId= $('#uId').val() ;
		var bId = $('#bId').val();
		var bName = $('#bName').val();
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		
		location.href = "./search-result.html?"
				+"uId="
				+ uId
				+"&key="
				+ key
				+ "&bId="
				+ bId
				+ "&bName="
				+ bName
				+ "&lng="
				+ lng 
				+ "&lat=" 
				+ lat;
	}
	
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
		data["userToken"] = uId ;
		//ajax
		$.post(url,data,function(data){
			if(!isEmpty(data)
					&&('000000'==data.status||'0'==data.status)) { //成功，显示
				
				var showErrorFlag = false ;
				var beans = data.result ; 
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
	
	
	function loadProfessionDetail() {
		var uId = $('#uId').val();
		//ajax 查询数据
		var url = baseProjectPath+"/queryProfList" ;
		var data = {} ;
		data["userToken"] = uId ;
		//ajax
		$.post(url,data,
				function(data){
			if(!isEmpty(data)
					&&('000000'==data.status||'0'==data.status)) { //成功，显示
				
				var showErrorFlag = false ;
				var beans = data.result ; 
				if (!isEmpty(beans)) {
					var htmlOutput ;
					var template = $.templates("#profession-list-data");
					htmlOutput = template.render(beans);
					$("#profession-list-div").html(htmlOutput);
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
	
	function sub() {
		var uId = $('#uId').val();
		var bId = $('#bId').val();
		var bName = $('#bName').val();
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		
		//ajax 查询数据
		var url = baseProjectPath+"/query" ;
		var data = {} ;
		data["userToken"] = uId ;
		data["brandId"] = bId ;
		data["brandName"] = bName ;
		data["longitude"] = lng ;
		data["latitude"] = lat ;
		
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
					var template = $.templates("#search-success-errorcode-match-js");
					htmlOutput = template.render(beans);
					$("#search-success-errorcode-match-div").html(htmlOutput);
					setParam2Href('uId',$('#uId').val()); //所有href添加对应参数
					$(".container-search-success-brand").html($('#bName').val()) ; //品牌名
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
	 * 通过Ajax加载数据
	 * :TODO ----
	 * @returns
	 */
	function loadingBackDataByAjax() {
		var key = "测试";
		if (isEmpty(key)) {
			alert('请先输入搜索内容');
			return false;
		}
		var uId = $('#uId').val();
		var bId = $('#bId').val();
		var bName = $('#bName').val();
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		
		//ajax 查询数据
		var url = baseProjectPath+"/query" ;
		var data = {} ;
		data["originalContent"] = key ;
		data["userToken"] = uId ;
		data["brandId"] = bId ;
		data["brandName"] = bName ;
		data["longitude"] = lng ;
		data["latitude"] = lat ;
		data["page"] = now ;
		data["rows"] = 1 ;
		
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
					var template = $.templates("#search-success-errorcode-match-js");
					htmlOutput = template.render(beans);
					$("#search-success-errorcode-match-div").append(htmlOutput);
					 //如果当前页大于等于总页数就提示没有更多数据
		             if(now>=num){
		                 $('#search-success-errorcode-match-div a').text('没有更多数据');
		                 //并把状态设置为假，下次下滑滚动时不再通过ajax获取数据
		                 state=false;
		             }else{
		                    // 否则继续
		                 state=true;
		             }
					
					$(".container-search-success-brand").html($('#bName').val()) ;
//					setAppendLocationParams(); //所有href添加对应参数
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
	 * 通过Ajax加载[文章详情页]数据
	 * 
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
	function redirectSearchIndex() {
		$("#redirect-search-index").click(function(){
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
		arrSelectorKeys[1] = "articleId" ;
		arrSelectorKeys[2] = "bId" ;
		arrSelectorKeys[3] = "bName" ;
		arrSelectorKeys[4] = "lng" ;
		arrSelectorKeys[5] = "lat" ;
		renderHiddenParamsByArray(arrSelectorKeys, ID_TYPE) ;
		
		var addrVal = getURLParamVal(arrSelectorKeys[1]);
		if(isEmpty(addrVal)){
			return ;
		}
		$(".search-context-input").val(addrVal); //初始化输入框
	}
	
	function brandInitAndChange(){
		//init first
		//change brand cells
		$(".container-brand-outter-div").click(function(){
			var curBrandDiv = $(this);
			curBrandDiv.addClass('active').siblings().removeClass('active');
			curBrandDiv.children('span').show().siblings().hide();
			
			var brandId = curBrandDiv.attr("brand_id");
			var brandName = curBrandDiv.attr("brand_name");
			
			//setter cur brandId,brandName
			$("#bId").val(brandId) ;
			$("#bName").val(brandName) ;
		});
	}
	