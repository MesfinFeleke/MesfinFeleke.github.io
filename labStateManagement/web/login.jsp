<%--
  Created by IntelliJ IDEA.
  User: mesfindejene
  Date: 2020-06-12
  Time: 00:58
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title>Title</title>
</head>
<body>
<form action="login" method="post">
       user name: <input type="text" value="${cookie.user.value}" name="user_name"/> <br/>
       password: <input type="password" name="pass"/> <br/>
       Remeber Me: <input type="checkbox" <c:if test="${cookie.containsKey('user')}" >checked </c:if> name="remember" value="yes"> <br/>
       <input type="submit">

</form>
<span style="color: red"> ${err_msg}</span>

</body>
</html>
