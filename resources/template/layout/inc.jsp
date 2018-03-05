<%@page import="com.ai.channel.common.util.StringUtil"%>
<%@page import="java.util.Locale"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<c:set var="rootRes" value="${_base}/resources"/>
<c:set var="spmRes" value="${_base}/resources/spm_modules"/>
<c:set var="uedroot" value="${_base}/resources/template"/>
<%
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);
    response.setHeader("Pragma", "No-cache");
%>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link href="${uedroot}/css/bootstrap/font-awesome.css" rel="stylesheet" type="text/css">
