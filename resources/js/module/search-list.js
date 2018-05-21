	var inputSpliter = '$$';

	$(function() {	//page init
		addKeyEnterPressBtn() ;
		initParams() ;
		redirectSearchIndex() ;
		
		initProfessionInfo(); 
		initBrand() ;
	});
	
	function subRedirect() {
		sub(1) ;
	}
	
	function sub(type) {
		var key ;
		var bId = $('#bId').val();
		var bName = $('#bName').val();
		
		if(1==type) {
			if(bId=='2' || bName=='卡特'){
				var caterInput1 ;
				var caterInput2 ;
				var caterInput3 ;
				caterInput1 = $("#cater-input1").val();
				caterInput2 = $("#cater-input2").val();
				caterInput3 = $("#cater-input3").val();
				if (isEmpty(caterInput1)) {
					alert('请先输入[卡特]-MID');
					return false;
				}
				if (isEmpty(caterInput2)) {
					alert('请先输入[卡特]-CID');
					return false;
				}
				if (isEmpty(caterInput3)) {
					alert('请先输入[卡特]-FMI');
					return false;
				}
				key = caterInput1.split("\:")[1] + inputSpliter 
					+ caterInput2.split("\:")[1] + inputSpliter
					+ caterInput3.split("\:")[1] ;
				
			} else {
				key = $(".search-context-input").val();
				if (isEmpty(key)) {
					alert('请先输入搜索内容');
					return false;
				}
			}
		} else { //搜索中跳转数据
			key = $("#key").val();
		}
		
		if (isEmpty(key)) {
			alert('请先输入搜索内容');
			return false;
		}
		var uId = $('#uId').val();
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		var from = $('#from').val() ;
		
		//ajax 查询数据
		var url = baseProjectPath+"/query" ;
		var data = {} ;
		data["originalContent"] = key ;
		data["userId"] = uId ;
		data["brandId"] = bId ;
		data["brandName"] = bName ;
		data["longitude"] = lng ;
		data["latitude"] = lat ;
		data["from"] = from ;
		
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
					var bId = $("#bId").val() ;
					var bName = $("#bName").val() ;
					
					var template = "" ;
					if(bName=='卡特' || bId=='2'){
						
						showBrandSuccessDiv(bId, bName) ;// brand-data
						
						template = $.templates("#cater-search-success-errorcode-match-js");
						htmlOutput = template.render(beans);
						$("#cater-search-success-errorcode-match-div").html(htmlOutput);
						
					} else {
						
						showBrandSuccessDiv(bId, bName) ; // brand-data
						
						template = $.templates("#search-success-errorcode-match-js");
						htmlOutput = template.render(beans);
						$("#search-success-errorcode-match-div").html(htmlOutput);
					}
					
					setAppendLocationParams(); //所有href添加对应参数
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
	 * 设置需要拼接地址栏的变量
	 * @returns
	 */
	function setAppendLocationParams() {
		var arrSelectorKeys = new Array() ;
		arrSelectorKeys[0] = "uId" ;
		arrSelectorKeys[1] = "bId" ;
		arrSelectorKeys[2] = "bName" ;
		arrSelectorKeys[3] = "lng" ;
		arrSelectorKeys[4] = "lat" ;
		arrSelectorKeys[5] = "from" ;
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
	 * 显示域
	 * @param param
	 * @returns
	 */
	function showBrandSuccessDiv(bId, bName){
		if("2"==bId || "卡特"==bName){
			$(".cater-container").show() ;
			$(".other-container").hide() ;
			
		} else {
			$(".cater-container").hide() ;
			$(".other-container").show() ;
			
		}
	}
	
	/**
	 * :TODO
	 * 实现Ajax滑动分页效果：
	 * 滑动分页，效果：http://zixuephp.net/article-181.html
	 * @returns
	 */
	function scrollLoading() {
		//记录状态
		var state=true;
		//滚动条滚动的时候
		$(window).scroll(function(){
		        //获取当前加载更多按钮距离顶部的距离
		    var bottomsubmit = $('.caseud').offset().top;
		    //获取当前页面底部距离顶部的高度距离
		    var nowtop = $(document).scrollTop()+$(window).height();
		    //获取当前页数，默认第一页
		    var now = $('.caseud').attr('now');
		    //获取总页数，PHP分页的总页数
		    var num = $('.caseud').attr('num');
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
		                $('.caseud').attr('now',now);
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
		$.ajax({
            //通过ajax传页数参数获取当前页数的数据
         url:'ajax_more_case.php',
         type:'GET',
         cache:false,
         dataType:"html",
         success:function(data){
                 //把通过php处理的html和数据，写入容器底部
             $('.case').append(data);
             //如果当前页大于等于总页数就提示没有更多数据
             if(now>=num){
                 $('.caseud a').text('没有更多数据');
                 //并把状态设置为假，下次下滑滚动时不再通过ajax获取数据
                 state=false;
             }else{
                    // 否则继续
                 state=true;
             }
         },
         error:function(){
             $('.caseud a').text('加载错误,请刷新页面！');
         }
     });
	}
	
	/**
	 * 重定向到首页
	 * @returns
	 */
	function redirectSearchIndex() {
		$(".redirect-search-index").click(function(){
			window.location.href="search-list.html?version=3&uId="+getAttr(ID_TYPE,'uId') 
									+ "&lat=" + getAttr(ID_TYPE,'lat')
									+ "&lng=" + getAttr(ID_TYPE,'lng')
									+ "&from=" + getAttr(ID_TYPE,'from') ;
		}) ;
		
		$("#profession-list").click(function(){
			window.location.href="profession-list.html?version=3&uId="+getAttr(ID_TYPE,'uId') 
									+ "&lat=" + getAttr(ID_TYPE,'lat')
									+ "&lng=" + getAttr(ID_TYPE,'lng')
									+ "&from=" + getAttr(ID_TYPE,'from') ;
		}) ;
	}
	
	/**
	 * 按照数组中的值，批量初始化隐藏域
	 * @returns
	 */
	function initParams() {
		var arrSelectorKeys = new Array() ;
		arrSelectorKeys[0] = "uId" ;
		arrSelectorKeys[1] = "key" ;
		arrSelectorKeys[2] = "bId" ;
		arrSelectorKeys[3] = "bName" ;
		arrSelectorKeys[4] = "lng" ;
		arrSelectorKeys[5] = "lat" ;
		arrSelectorKeys[6] = "from" ;
		renderHiddenParamsByArray(arrSelectorKeys, ID_TYPE) ;
		
		var addrVal = getURLParamVal(arrSelectorKeys[1]);
		var bId = getURLParamVal(arrSelectorKeys[2]);
		var bName = getURLParamVal(arrSelectorKeys[3]);
		if(isEmpty(addrVal)){
			return ;
		} else {
			sub(2) ; //初始化包含搜索条件提交搜索
		}
		if(isEmpty(bId)){
			return ;
		}
		if(isEmpty(bName)){
			return ;
		}
		if(bId==2 || bName=='卡特') {
			if(addrVal.indexOf(inputSpliter)) {
				var data = addrVal.split(inputSpliter) ;
				
				var mid = data[0] ;
				var cid = data[1] ;
				var fmi = data[2] ;
				
				if(mid.indexOf("MID")==-1) {
					mid = "MID:" + mid ;
				}
				if(cid.indexOf("CID")==-1) {
					cid = "CID:" + cid ;
				}
				if(fmi.indexOf("FMI")==-1) {
					fmi = "FMI:" + fmi ;
				}
				
				$("#cater-input1").val(mid) ;
				$("#cater-input2").val(cid) ;
				$("#cater-input3").val(fmi) ;
			}
			showOrHiddenInputText(2, '卡特') ;
		} else {
			$(".search-context-input").val(addrVal); //初始化输入框
			showOrHiddenInputText('', '') ;
		}
	}
	
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
					setAppendLocationParams(); //所有href添加对应参数
				} else {
					showErrorFlag = true ;
				}
				
			} else { //error，给提示
				showErrorFlag = true ;
			}
			bindSaveOrder() ;
			renderDistance() ;
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
			
			var urlProf = baseProjectPath+"/updateProf" ;
			var dataProf = {} ;
			dataProf["tokenId"] = uId ;
			dataProf["id"] = pId ;
			
			//ajax profesion
			$.post(urlProf, dataProf, function(dataProf){ });
			
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
						window.location.href = "order-pay-success.html?version=3&uId=" 
							+ uId + "&orderId=" + orderId +"&phone="+phone 
							+ "&lat=" + getAttr(ID_TYPE,'lat')
							+ "&lng=" + getAttr(ID_TYPE,'lng')
							+ "&from=" + getAttr(ID_TYPE,'from') ;
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
	
	function initBrand() {
		//ajax 查询数据
		var url = baseProjectPath+"/qryAllBrands" ;
		//ajax
		$.post(url,"",function(data){
			if(!isEmpty(data)
					&&('000000'==data.status||'0'==data.status) 
					&& !isEmpty(data.data)) { //成功，显示
				var showErrorFlag = false ;
				var beans = data.data ; 
				if (!isEmpty(beans)) {
					var htmlOutput ;
					var template = $.templates("#brand-list-render");
					htmlOutput = template.render(beans);
					$("#brand-list").html(htmlOutput);
					selectedBrand() ; // select brand
					
				} else {
					showErrorFlag = true ;
				}
				
			} else { //error，给提示
				showErrorFlag = true ;
			}
			brandInitAndChange() ; 
		});
	}
	
	function brandInitAndChange(){
		//init first
		//change brand cells
		$(".container-brand-outter-div").click(function(){
			var curBrandDiv = $(this);
			curBrandDiv.addClass('active').siblings().removeClass('active');
			curBrandDiv.children('span').show().siblings().hide() ;
			
			var brandId = curBrandDiv.attr("brand_id");
			var brandName = curBrandDiv.attr("brand_name");
			
			//setter cur brandId,brandName
			$("#bId").val(brandId) ;
			$("#bName").val(brandName) ;
			
//			alert(brandId+"->"+brandName) ;
			showOrHiddenInputText(brandId, brandName) ;
		});
		
	}
	
	function showOrHiddenInputText(brandId, brandName) { 
		if(brandId=='2' || brandName=='卡特'){
			$('.search-context-block-cater').show();
			$('.search-context-block').hide();
		} else {
			$('.search-context-block-cater').hide();
			$('.search-context-block').show();
		}
	}
	
	function selectedBrand(){
		$('.container-brand-outter-div').each(function(index){
			var curElem = $(this) ;
			var curBId = curElem.attr('brand_id');
			var curBName = curElem.attr('brand_name') ;
			
			var choosenBId = $("#bId").val() ;
			var choosenBName = $("#bName").val() ;
			
			if(curBId==choosenBId 
					|| curBName==choosenBName){
				curElem.addClass('active') ;
			}
		}) ;
	}
	