<%@page import="com.ai.channel.common.util.StringUtil"%>
<%@page import="java.util.Locale"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<c:set var="rootRes" value="${_base}/resources"/>
<c:set var="htmlRes" value="${_base}/resources/html"/>
<c:set var="cssRes" value="${_base}/resources/css"/>
<c:set var="jsRes" value="${_base}/resources/js"/>
<%
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
    response.setHeader("Pragma", "No-cache");
%>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<%-- <link href="${uedroot}/css/bootstrap/font-awesome.css" rel="stylesheet" type="text/css"> --%>

<script type="text/javascript">
var _base = "${_base}";
var rootRes = "${rootRes}";
var htmlRes="${htmlRes}";
var cssRes = "${cssRes}";
var jsRes = "${jsRes}";

alert(_base);
</script>