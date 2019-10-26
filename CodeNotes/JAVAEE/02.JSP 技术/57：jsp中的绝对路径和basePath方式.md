## 资源路径总结

### Jsp中路径

相对路径:../../资源

绝对路径:/虚拟项目名/资源路径

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
     <base href="<%=basePath%>">
    <title>My JSP 'path.jsp' starting page</title>

```jsp
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
System.out.println(basePath);
%>
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">    
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!-- 
	问题：
		在jsp页面中进行资源之间的跳转时，如果书写的是相对路径
		这样会造成如果当前文件的路径发生变更，从当前路径查找资源的相对路径
		都要重新进行书写。
	解决：
		将相对路径编程绝对路径
	使用:
		在jsp中路径中的第一个/表示服务器根目录。
	示例：
			<a href="/虚拟项目名/资源路径">访问关键字</a>

	注意：
		在Myeclipse中创建的jsp页面会自动生成路径处理代码basePath
		而basePath的值为当前项目根目录，并且在head标签中使用了<base href="<%=basePath%>">
		相当于将当前页面的资源全部默认定位为从项目根目录开始查找，我们就不需要写第一个/了
	注意：
		basePath方式和添加/方法只能二选一。
 -->
 </head>

  <body>
   	我是path.jsp
   	<a href="a/a.jsp">a.jsp</a>
   	
   	
   	
  </body>
</html>
```
  
