	
	$(function() {	//page init
		addKeyEnterPressBtn() ;
		initBrand() ;
		initParams() ;
	});
	
	function subRedirect() {
		var key = $(".search-context-input").val();
		if (isEmpty(key)) {
			alert('请先输入搜索内容');
			return false;
		}
		var bId = $('#bId').val();
		var bName = $('#bName').val();
		if(isEmpty(bId) || isEmpty(bName)){
			alert('请选择查询的品牌');
			return false;
		}
		var uId= $('#uId').val() ;
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
			curBrandDiv.children('span').show().siblings().hide() ;
			
			var brandId = curBrandDiv.attr("brand_id");
			var brandName = curBrandDiv.attr("brand_name");
			
			//setter cur brandId,brandName
			$("#bId").val(brandId) ;
			$("#bName").val(brandName) ;
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
				} else {
					showErrorFlag = true ;
				}
				
			} else { //error，给提示
				showErrorFlag = true ;
			}
			brandInitAndChange() ; 
		});
	}
	