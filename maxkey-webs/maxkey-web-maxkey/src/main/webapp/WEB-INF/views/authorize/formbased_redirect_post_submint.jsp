<!DOCTYPE html>
<%@ page 	language="java"   import="java.util.*" 	pageEncoding="UTF-8"%>
<%@ taglib 	prefix="c" 		uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib  prefix="s"  uri="http://www.connsec.com/tags" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
  	<title>Form-Based SSO Submit</title>
 	<link type="text/css" rel="stylesheet" href="<s:Base />/css/base.css"/>
  	<link rel="shortcut icon" type="image/x-icon" href="<s:Base />/images/favicon.ico"/>
	<base href="<s:BasePath/>"/>

  	<script type="text/javascript" src="<s:Base/>/jquery/jquery-1.11.2.min.js"></script>
  
  	<script type="text/javascript">
	$(function(){
			<c:if test="${true==isExtendAttr}">
				var attrIndex = 0;
	
				function addExtendAttr(attribute,attributeValue){
					var html = '<tr  id="extendTr_' + attrIndex + '"><th><s:Locale code="common.text.parameter"/>：';   
					html += '</th><td>';   
					html += attribute;   
			        html += '</span></td><th><s:Locale code="common.text.parameter.value"/>：</th>	<td><span class="intspan">';
			        html += '<input type="text" id="attributeValue_' + attrIndex + '" name="'+attribute+'" class="int" title="" value="'+attributeValue+'"/>';
			        html += '</span>';
			       
			        html += '</td></tr>'; 
					$('#extendAttrBody').append(html);
					attrIndex++;
				}
				
				
				var extendAttrJson = eval("("+'${extendAttr}'+")");
				for(extendAttrIndex in extendAttrJson){
					addExtendAttr(extendAttrJson[extendAttrIndex].attr,extendAttrJson[extendAttrIndex].value);
				};
			</c:if>;
				
			$("#formbasedsubmit").submit();
	

	});
	</script>
</head>

<body  style="display:none">
	<form id="formbasedsubmit" name="formbasedsubmit" action="${action}" method="post">
		<table  style="width:100%" class="datatable">
			<tbody>
			<tr>
				<td>username</td>
				<td><input type="text" id="identity_formbased_username" name="${usernameMapping}" value="${username}" /></td>
			</tr>
			<tr>
				<td>password</td>
				<td><input type="password" id="identity_formbased_password" name="${passwordMapping}" value="${password}" /></td>
			</tr>
			</tbody>
			<tbody id="extendAttrBody"></tbody>
			<tr>
				<td colspan="2"><input style="width:90%" id="formbasedsubmitbutton" class="button" type="submit" value="<s:Locale code="button.text.submit"/>"/></td>
			</tr>
		</table>
	</form>
</body>
</html>
