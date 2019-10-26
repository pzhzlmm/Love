内容

## 使用

JSP负责页面展现，Servlet负责业务逻辑处理。

JSP里做网页数据的展现非常的方便,我们可以根据用户请求的内容不同,打印不同的内容给浏览器,意味着我们的jsp中是可以做逻辑判断,同时意味着servlet可以进行逻辑判断

```jsp

   		<h3>jsp的页面</h3>
   		<hr/>
   		<%
   			//设置请求编码格式
   			//获取请求信息
   			//处理请求信息
   			int a=1;
   			if(a>2){
   		%>
   			<b>使用jsp页面的展现非常舒服</b>
   		<% 
   			}else{
   		%>
   			<b>但是在jsp中进行业务逻辑处理很不方便(读难受,因为要带着转义视角去看)</b>
   		<%} %>

```

转义而成的Java代码:

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712105821.png)

写的时候自带转义功能地去看,就能顺畅地写出来

希望servlet处理完之后再把一个jsp响应给我,因此对应的功能也越来越明确

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712110539.png)