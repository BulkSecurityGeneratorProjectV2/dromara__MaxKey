<%@ page 	language="java"   import="java.util.*" 	pageEncoding="UTF-8"%>
<%@ taglib prefix="c"       	uri="http://java.sun.com/jsp/jstl/core"  %>
<%@ taglib prefix="fn"     	 	uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring"  	uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="s" 			uri="http://www.connsec.com/tags" %> 

<div class="container">	
  <c:if test="${0 == emailsend}">
  	user email ${email} not find,<br>
  	<input type="button"  class="button"  value="后退"  onclick="javascript:history.go(-1);"> 
  </c:if>
  <c:if test="${1 == emailsend}">
  	please check you email ${email},to Reset Password.
  </c:if>
</div>
  
  