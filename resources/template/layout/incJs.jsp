<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:set var="_base" value="${pageContext.request.contextPath}"/>
<c:set var="i18nRes" value="${_base}/resources/i18n/"/>
<c:set var="spmRes" value="${_base}/resources/spm_modules"/>
<script>
    var _base = "${_base}";
    var _spm_res = "${spmRes}";
    var uedroot="${uedroot}";
    var _i18n_res = "${i18nRes}";
</script>

<script src="${_base}/resources/spm_modules/seajs/2.3.0/dist/sea.js"></script>
<script type="text/javascript" src="${_base}/resources/template/scripts/modular/jquery.placeholder.js"></script>
