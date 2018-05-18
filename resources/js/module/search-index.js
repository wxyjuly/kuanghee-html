	
	$(function() {	//page init
		addKeyEnterPressBtn() ;
		initBrand() ;
		initParams() ;
	});
	
	function subRedirect() { //submit data

		var bId = $('#bId').val();
		var bName = $('#bName').val();
		if(isEmpty(bId) || isEmpty(bName)){
			alert('请选择查询的品牌');
			return false;
		}
		
		var key = "";
		var caterInput1 ;
		var caterInput2 ;
		var caterInput3 ;
		if(bId=='2' || bName=='卡特'){
			var inputSpliter = '$$';
			caterInput1 = $("#cater-input1").val();
			caterInput2 = $("#cater-input2").val();
			caterInput3 = $("#cater-input3").val();
			if (isEmpty(caterInput1)) {
				alert('请先输入[卡特]1');
				return false;
			}
			if (isEmpty(caterInput2)) {
				alert('请先输入[卡特]2');
				return false;
			}
			if (isEmpty(caterInput3)) {
				alert('请先输入[卡特]3');
				return false;
			}
			
			key = caterInput1 + inputSpliter 
				+ caterInput2 + inputSpliter
				+ caterInput3 ;
			
		} else {
			key = $(".search-context-input").val();
			if (isEmpty(key)) {
				alert('请先输入搜索内容');
				return false;
			}
		}
		
		
		var uId= $('#uId').val() ;
		var lng = $('#lng').val();
		var lat = $('#lat').val();
		
		location.href = "search-list.html?version=2&"
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
				+ lat
				+ "&from=" 
				+ $('#from').val();
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
		if(isEmpty(addrVal)){
			return ;
		}
		$(".search-context-input").val(addrVal); //初始化输入框
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
	