<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<title>404</title>
	<%@ include file="inc.jsp" %>
</head>
<body>
<!--头部-->
<%-- <%@ include file="indexHeader.jsp" %> --%>
<!-- /头部-->

<!--主体-->
<%-- <div class="l-bd">
	<div class="errors-wrap">
		<p><img src="${uedroot}/images/404.png"><span class="wd">抱歉！无法找到文件！</span></p>
		<p></p>
	</div>
</div> --%>

<div class="errors-wrap">
	<ul>
		<li><img src="${uedroot}/images/404.png"></li>
		<li class="rt">
			<p class="bt"> 糟糕!迷路了!</p>
			<p><i class="icon iconfont">&#xe601;</i>网络信号弱</p>
			<p><i class="icon iconfont">&#xe601;</i>找不到请求页面</p>
			<p><i class="icon iconfont">&#xe601;</i>输入的网址不正确</p>
			<!-- <p>
				<span><a href="#" class="ash">刷新</a></span>
				<span><a href="#" class="green">返回首页</a></span>
			</p> -->
		</li>
	</ul>
</div>
<!-- /主体-->
<%-- <%@ include file="indexFooter.jsp" %> --%>

<%@ include file="incJs.jsp" %>
</body>
</html>
