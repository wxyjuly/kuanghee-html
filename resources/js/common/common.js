//var baseProjectPath = "/kuangkee-search" ;
var baseProjectPath = "" ;
var IMG_PRE_URL = "http://search.wajiyisheng.com/resources" ;	


//选择器类型
var CLASS_TYPE = "CLASS_TYPE" ;
var ID_TYPE = "ID_TYPE" ;

/**
 * 根据选择器设置元素
 * @param selectorType
 * @param key
 * @param val
 * @returns
 */

function setAttr(selectorType,key,val){
	if(CLASS_TYPE==selectorType){
		$('.'+key).val(val) ;
	} else if(ID_TYPE==selectorType){
		$('#'+key).val(val) ;
	}
}
/**
 * 根据选择器获取元素 
 * @param selectorType
 * @param key
 * @returns
 */
function getAttr(selectorType,key){
	if(CLASS_TYPE==selectorType){
		return $('.'+key).val() ;
	} else if(ID_TYPE==selectorType){
		return $('#'+key).val() ;
	}
}

/*------common part -------*/
/**
 * 为每个页面面包屑href添加时间戳
 * @private
 */
function setHtmlUrlTimestamps() {
	$('a[href]').each(function() {
		var href = $(this).attr('href');
		var time = getTime();
		//判断url不为# 或者 javascript:void(0)
		if (href.length > 1 && href.indexOf('javascript') == -1) {
			//若当前url已经加入了时间戳，去掉当前加入的时间戳
			if (href.indexOf('time=') != -1) {
				var idx = href.indexOf('time=');
				href = href.substring(0, idx - 1);
			}
			//若当前url已带有参数采用& 未带有参数采用?
			if (href.indexOf('?') != -1) {
				$(this).attr('href', href + '&time=' + time);
			} else {
				$(this).attr('href', href + '?time=' + time);
			}
		}
	})
}

/**
 * 为每个页面href添加指定，变量对应数据
 * @private
 */
function setParam2Href(paramKey,paramVal) {
	
	if(isEmpty(paramKey)||isEmpty(paramVal)){
		return ;
	}
	
	$('a[href]').each(function() {
		var href = $(this).attr('href');
		var paramIndexVal = paramKey+'=' ;
		//判断url不为# 或者 javascript:void(0)
		if (href.length > 1 && href.indexOf('javascript') == -1) {
			//若当前url已经加入了时间戳，去掉当前加入的时间戳
			if (href.indexOf(paramIndexVal) != -1) {
				var idx = href.indexOf(paramIndexVal);
				href = href.substring(0, idx - 1);
			}
			//若当前url已带有参数采用& 未带有参数采用?
			if (href.indexOf('?') != -1) {
				$(this).attr('href', href + '&'+ paramIndexVal + paramVal);
			} else {
				$(this).attr('href', href + '?'+ paramIndexVal + paramVal);
			}
		}
	})
}

/**
 * 获取时间戳
 * @returns {number}
 * @private
 */
function getTime() {
	var time = (new Date()).getTime();
	return time;
}
/**
 * 获取地址栏参数
 * @param name
 * @returns {null}
 * @private
 */
function getURLParamVal(name) {
	// //但是在使用的过程中，发现其在获取中文参数的时候，获取到的值是乱码的
	//解决办法:将解码方式unscape换为decodeURI
	//原因:浏览器会将url中的中文参数进行encodeURI编码，所以要通过js使用decodeURI进行解码
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r = window.location.search.substr(1).match(reg);
	if (r != null) return decodeURI(r[2]);
	return null;
}

/**
 * 按照数组标识的key类型和选择器类型，批量将地址栏数据初始化到对应的位置。
 * 批量支持Id选择器或者class选择的[数组]
 */
function renderHiddenParamsByArray(arrSelectorKeys, selectorType) {
	if(isEmpty(arrSelectorKeys)
			||isEmpty(selectorType)) {
		return ;
	}
	var tmpSelectorKey ;
	var addrVal ;
	for(var i=0; i<arrSelectorKeys.length; i++){
		tmpSelectorKey = arrSelectorKeys[i] ;
		if(isEmpty(tmpSelectorKey)){
			continue ;
		}
		addrVal = getURLParamVal(tmpSelectorKey);
		if(isEmpty(addrVal)){
			continue ;
		}
		if(CLASS_TYPE==selectorType){
			$('.'+tmpSelectorKey).val(addrVal);
		} else if(ID_TYPE==selectorType){
			$('#'+tmpSelectorKey).val(addrVal);
		}
	}
}

/**
 * 按照数组中的key，从隐藏域中批量插入数据
 */
function renderLocationParamsByArray(arrSelectorKeys, selectorType) {
	if(isEmpty(arrSelectorKeys)
			||isEmpty(selectorType)) {
		return ;
	}
	var tmpSelectorKey ;
	var addrVal ;
	for(var i=0; i<arrSelectorKeys.length; i++){
		tmpSelectorKey = arrSelectorKeys[i] ;
		if(isEmpty(tmpSelectorKey)){
			continue ;
		}
		addrVal = getAttr(selectorType,tmpSelectorKey);
		if(isEmpty(addrVal)){
			continue ;
		}
		
		var appendData ;
		if(CLASS_TYPE==selectorType){
			appendData = $('.'+tmpSelectorKey).val();
		} else if(ID_TYPE==selectorType){
			appendData = $('#'+tmpSelectorKey).val();
		}
		if(isEmpty(appendData)){
			continue ;
		}
		setParam2Href(tmpSelectorKey,appendData) ;
	}
}

/**
 * 校验JS元素是否为空
 * @param param
 * @returns
 */
function isEmpty(param){
	if(null==param||undefined==param
			||""==param||"null"==param) {
		return true ;
	} else {
		return false ;
	}
}

/**
 * 整个页面添加Enter键响应
 * @returns
 */
function addKeyEnterPressBtn() {
	$("body").keydown(function() {
		if (event.keyCode == "13") {
			subRedirect() ;
		}
	});
}

/**
 * 校验是否登陆
 * @param userToken
 * @returns
 */
function checkIsLogin(userToken) { 
	var flag = false ;
	if(!isEmpty(userToken)){
		//ajax
	}
	return flag ;
}

/**
 * 重定向到首页
 * @returns
 */
function redirectSearchIndex() {
	$(".redirect-search-index").click(function(){
		window.location.href="search-list.html?version=5&uId="+getAttr(ID_TYPE,'uId')
							+"&lat="+getAttr(ID_TYPE,'lat')
							+"&lng="+getAttr(ID_TYPE,'lng');
	}) ;
}
/*------common part end-------*/

//init common part
$(function() {
	redirectSearchIndex() ; //
	setHtmlUrlTimestamps() ; //add timestamp for all url
}) ;

/**---------:TODO 添加
	1. Ajax  
	2. JSRender	
*/

//计算距离
function renderDistance(){
	$(".pro-distance").each(function(){
		var distance = 0 ;
		var $curSpan = $(this) ;
		var proLat = $curSpan.attr("lat");
		var proLng = $curSpan.attr("lng");
		var lat = $("#lat").val();
		var lng = $("#lng").val();
		if(isEmpty(proLat) || isEmpty(proLng)
				|| isEmpty(lat) || isEmpty(lng)) {
			distance = getRandomDistance(1000) ;
		} else {
			distance = getDistance(lat,lng,proLat,proLng);
		}
		
		$curSpan.html(distance + "km");
	}) ;
}

function getDistance(lat1,lng1, lat2, lng2){
	var distance
	try{
		var map = new BMap.Map("");
		var pointA = new BMap.Point(lat1,lng1);  // 创建点坐标A--大渡口区
		var pointB = new BMap.Point(lat2,lng2);  // 创建点坐标B--江北区
		distance = (map.getDistance(pointA,pointB)/1000).toFixed(2) ;
	} catch(e){
		
	}
//	alert('从大渡口区到江北区的距离是：'+distance+' 米。');  //获取两点距离,保留小数点后两位
	return distance ;
}

function getRandomDistance(seed) { //随机生成一个
	if(isEmpty(seed)){
		seed = 899 ;
	}
	return (Math.random()*seed+seed/2).toFixed(2) ;
}


