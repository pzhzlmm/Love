# 分析

功能:用户名是否被注册校验:当前页面去做,因此要使用到AJAX

判断是否使用Ajax:看是否要在**当前页面**显示新的

思路:
			1、用户书写用户名信息，在失去焦点时进行用户校验
			2、失去焦点发送请求到服务器，服务器根据用户名信息去数据库中查询该用户名是否存在
			3、将校验结果响应给客户端
			4、在当前页面，也就用户名输入框后显示提示语

技术：
			使用ajax技术(局部刷新)

# jsp

声明js代码域后声明用户名校验函数

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717105817.png)里面再编写Ajax的代码

创建

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717105935.png)

监听

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717110058.png)

创建并发送请求

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717110204.png)

这次新写个servlet为data

因为我们要拿用户名信息,所以之前要获取用户名信息(给用户名设置id)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717110336.png)

再拼再用户名里

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717110447.png)

现在没有DataServlet,也没有进行任何形式的处理

# servlet

对应的servlet我们还没写,new一个DataServlet,别名为data(与上对应)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717113401.png)

然后就是对MVC进行分层:service,dao,util,配置文件(db.properies)

mysql的jar包

```jsp
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'reg.jsp' starting page</title>
      
	 <!--声明js代码域  -->
	 <!--  -->
	  <script type="text/javascript" src="js/AjaxUtil.js"></script>
	 <script type="text/javascript">
	 	//声明用户名校验函数
	 	function checkUname(){
	 		var uname=document.getElementById("uname").value;
	 		myAjax("get", "data","uname="+uname,function(data){
	 			if(eval(data)){
						//获取Span对象
						var span=document.getElementById("unameSpan");
						//设置span颜色
						span.style.color="red";
						//将数据填充到span中
						span.innerHTML="用户名已被注册";
					}else{
						//获取Span对象
						var span=document.getElementById("unameSpan");
						//设置span颜色
						span.style.color="green";
						//将数据填充到span中
						span.innerHTML="用户名ok";
					}
	 		})
	 		/* //获取用户名信息
	 		var uname=document.getElementById("uname").value;
	 		//创建ajax引擎对象
	 			var ajax;
	 			if(window.XMLHttpRequest){
	 				ajax=new XMLHttpRequest();
	 			}else if(window.ActiveXObject){
	 				ajax=new ActiveXObject("Msxml2.XMLHTTP");
	 			}
	 		//声明监听函数
	 			ajax.onreadystatechange=function(){
	 				//判断ajax状态码
	 				if(ajax.readyState==4){
	 					//判断响应状态码
	 					if(ajax.status==200){
	 						//获取响应数据（普通字符串或者json格式的字符串）
	 						var data=ajax.responseText;
 							//处理响应数据
 								if(eval(data)){
 									//获取Span对象
 	 								var span=document.getElementById("unameSpan");
 									//设置span颜色
 									span.style.color="red";
 	 								//将数据填充到span中
 	 								span.innerHTML="用户名已被注册";
 								}else{
 									//获取Span对象
 	 								var span=document.getElementById("unameSpan");
 	 								//设置span颜色
 									span.style.color="green";
 	 								//将数据填充到span中
 	 								span.innerHTML="用户名ok";
 								}
 								
	 					}	
	 				}	
	 			}
	 		//创建并发送请求	
	 			//创建请求
	 			 ajax.open("get","data?uname="+uname);
	 			//发送请求
	 			ajax.send(null); */
	 	}
	 </script>
  </head>
  
  <body>
   		用户名 : <input type="text" name="uname" id="uname" value="" onblur="checkUname()"/><span id="unameSpan"></span>
  </body>
</html>

```