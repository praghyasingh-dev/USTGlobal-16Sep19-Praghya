<%@page import="com.ustglobal.shoppingwebapp.dto.RetailerBean"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%
	RetailerBean bean = (RetailerBean) session.getAttribute("bean");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<a href="./changepassword">Change Password</a>
	<a href="./updateprofile">Update Profile</a>
	<a href="./delete">Delete Profile</a>
	<a href="./logout" style="float: right;">Logout</a>
	<h2>
		Welcome  <%=bean.getName()%></h2>

	<fieldset>
		<legend>Search  Product</legend>
		<form action="./search">
			<table >
				<tr>
					<th>Order Id:</th>
					<th>Product Name:</th>
					<th>Price Per Unit:</th>
					<th>Quantity:</th>
					<th>Amount payable:</th>
					<th>Retailer Id:</th>
					
				</tr>
				<tr>
				<td>........</td>
				<td>P1</td>
				<td>56</td>
				<td>.........</td>
				<td>.........</td>
				<td>.........</td>
				</tr>
				<tr>
				<td>........</td>
				<td>P2</td>
				<td>86</td>
				<td>.........</td>
				<td>.........</td>
				<td>.........</td>
				</tr>
				<tr>
				<td>........</td>
				<td>P3</td>
				<td>72</td>
				<td>.........</td>
				<td>.........</td>
				<td>.........</td>
				</tr>
			</table>
		</form>
	</fieldset>
	<%RetailerBean RetailerBean =(RetailerBean)request.getAttribute("bean");
	%>
	<%if(RetailerBean!=null){ 
	%>
	<table>
		<tr>
			<th>Name</th>
			<th>Email</th>
		</tr>

		<tr>
			<td><%=RetailerBean.getName() %></td>
			<td><%=RetailerBean.getEmail() %></td>
			
		</tr>
	</table>
	<%
	}%>
	<h3>${msg}</h3>

</body>
</html>