<%--
  Created by IntelliJ IDEA.
  User: qianlong
  Date: 2017/3/31
  Time: 上午10:35
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>工作台</title>
    <%@include file="/inc/inc.jsp" %>
</head>
<body>
<!--头部-->
<div class="l-hd">
    <!--主导航-->
    <div class="m-nav">
        <div class="m-nav-lg"><img src="${_base}/template/images/logo.png"></div>
        <!--右侧操作区-->
        <div class="m-nav-user" id="m-nav-user">
            <ul>
                <li class="pr-30" id="sd-notice1-portalnotice">
                    <i class="icon iconfont sm">&#xe60d;</i><label id="unreadnoticecount" class="z-mr"> </label>
                </li>
                <li class="pr-30" id="sd-notice2">
                    <i class="icon iconfont">&#xe602;</i><label>22</label>
                    <!--侧栏2-->
                    <div class="m-nav-sd" id="m-list2">
                        <ul>
                            <li class="tt">公告信息</li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont red">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont yellow">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont green">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li class="tt">我的培训</li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont red">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont yellow">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont green">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li class="tt">我的考试</li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont red">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont yellow">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="icon iconfont green">&#xe601;</i>
                                    <span>核心版本V.0月底上线</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- /侧栏2-->
                </li>
                <li class="usr">
                    <p class="headp"><img src="${_base}/template/images/user.jpg"></p>
                    <p id="userRealName">${_userInfo.realName}</p>
                    <p class="xil"><i class="icon-angle-down"></i></p>
                    <div class="uer-lt">
                        <ul>
                            <a href="#">
                                <li>
                                    <p><i class="icon iconfont">&#xe61f;</i></p>
                                    <p id="userJobNumber">156236</p>
                                </li>
                            </a>
                            <%--<a href="#">--%>
                                <%--<li>--%>
                                    <%--<p><i class="icon iconfont">&#xe639;</i></p>--%>
                                    <%--<p id="userRole">省公司管理员</p>--%>
                                <%--</li>--%>
                            <%--</a>--%>
                            <a href="#">
                                <li>
                                    <p><i class="icon iconfont">&#xe622;</i></p>
                                    <p id="userOffficeName">省渠道管理部</p>
                                </li>
                            </a>
                            <%--<a href="#">--%>
                                <%--<li>--%>
                                    <%--<p><i class="icon iconfont">&#xe634;</i></p>--%>
                                    <%--<p>湖南－长沙</p>--%>
                                <%--</li>--%>
                            <%--</a>--%>
                            <a href="#">
                                <li>
                                    <p><i class="icon iconfont">&#xe62e;</i></p>
                                    <p id="userMobile">18788993234</p>
                                </li>
                            </a>
                            <a href="#">
                                <li>
                                    <p><i class="icon iconfont">&#xe63a;</i></p>
                                    <p id="userEmail">husx@139.com</p>
                                </li>
                            </a>
                        </ul>
                    </div>
                </li>
                <li><i class="icon iconfont">&#xe609;</i></li>
            </ul>
        </div>
        <!-- /右侧操作区-->
    </div>
    <!-- /主导航-->
    <div class="m-snav">
        <div class="m-snav-main">
            <div class="m-snav-left">
                <ul>
                    <li class="m-home" id="m-home-portalnotice"><i class="icon iconfont">&#xe605;</i></li>
                    <li class="m-work" id="m-work-portalnotice">我的工作<i class="icon-caret-down"></i></li>
                </ul>
            </div>
            <div class="m-ejwk" id="startmenu">

            </div>
            <div class="m-snav-right">
                <ul>
                    <li><input type="text" class="int-text int-large4 radius intbj " placeholder=""><a href="#"><i class="icon iconfont">&#xe603</i></a></li>
                </ul>
            </div>
        </div>
    </div>

</div>
<!-- /头部-->
<script type="text/javascript">
    var pager;
    (function () {
        seajs.use('app/jsp/frame/header', function (catAddPager) {
            pager = new catAddPager({element: document.body});
            pager.render();
        });
    })();
</script>
</body>
</html>
