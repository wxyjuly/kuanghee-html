	
	$(function() {	//page init
		brandInitAndChange() ; 		
		addKeyEnterPressBtn() ;
	});
	
	/**
	 * :ToDO -> 获取定位存在bug 
	 * 获取并显示定位，参数存放在
	 * lng , lat 隐藏域
	 * @returns
	 */
	/**
	function getAndSetGeo(){
		//get geolocation-获取地理位置
		var geolocation = new BMap.Geolocation();
		var gc = new BMap.Geocoder();
		geolocation.getCurrentPosition(function(r) { //定位结果对象会传递给r变量  
			// alert(this.getStatus());return false;
			if (this.getStatus() == BMAP_STATUS_SUCCESS) { //通过Geolocation类的getStatus()可以判断是否成功定位。  
				// var pt = r.point;    
				// gc.getLocation(pt, function(rs){    
				// var addComp = rs.addressComponents;    
				// console.log(r);
				var longitude = r.longitude ;
				var lantitude = r.latitude ;
				if(!isNaN(longitude)){
					$('#lng').val(longitude);
				}
				if(!isNaN(lantitude)){
					$('#lat').val(lantitude);
				}
				// $("#thecity").html(addComp.city);
				// });  
			} else {
				//关于状态码    
				//BMAP_STATUS_SUCCESS   检索成功。对应数值“0”。    
				//BMAP_STATUS_CITY_LIST 城市列表。对应数值“1”。    
				//BMAP_STATUS_UNKNOWN_LOCATION  位置结果未知。对应数值“2”。    
				//BMAP_STATUS_UNKNOWN_ROUTE 导航结果未知。对应数值“3”。    
				//BMAP_STATUS_INVALID_KEY   非法密钥。对应数值“4”。    
				//BMAP_STATUS_INVALID_REQUEST   非法请求。对应数值“5”。    
				//BMAP_STATUS_PERMISSION_DENIED 没有权限。对应数值“6”。(自 1.1 新增)    
				//BMAP_STATUS_SERVICE_UNAVAILABLE   服务不可用。对应数值“7”。(自 1.1 新增)    
				//BMAP_STATUS_TIMEOUT   超时。对应数值“8”。(自 1.1 新增)    
				switch (this.getStatus()) {
				case 2:
					alert('位置结果未知 获取位置失败.');
					break;
				case 3:
					alert('导航结果未知 获取位置失败..');
					break;
				case 4:
					alert('非法密钥 获取位置失败.');
					break;
				case 5:
					alert('对不起,非法请求位置  获取位置失败.');
					break;
				case 6:
					alert('对不起,当前 没有权限 获取位置失败.');
					break;
				case 7:
					alert('对不起,服务不可用 获取位置失败.');
					break;
				case 8:
					alert('对不起,请求超时 获取位置失败.');
					break;
				}
			}
		}, {
			enableHighAccuracy : true
		});
	}
	*/
	
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
			curBrandDiv.children('span').show().siblings().hide();
			
			var brandId = curBrandDiv.attr("brand_id");
			var brandName = curBrandDiv.attr("brand_name");
			
			//setter cur brandId,brandName
			$("#bId").val(brandId) ;
			$("#bName").val(brandName) ;
		});
		
	}