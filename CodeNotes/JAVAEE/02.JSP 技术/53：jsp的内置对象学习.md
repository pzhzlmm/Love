# Jsp的内置对象

##概念:

jsp在转译成其对应的java文件(也就是Servlet)时,

会默认在_jspService方法中声明创建几个对象

除了几个全局的内容,其他的都默认在这里。

转义之前自动创建,而我们在jsp里写好的代码会自动到_jspService里,因此我们直接在jsp中拿过来用就可以了

## 特点:

​	我们可以在jsp页面中声明java局部代码块，在代码块中直接使用内置对象。

## 注意：

对象的名字必须是转译好的java文件中声明的对象名

## 对象：

​	pageContext：页面上下文对象，此对象封存了另外8个对象。

​		注意:

​		一个jsp页面一个pageContext对象。

​		pageContext对象每次请求都会重新创建。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712104846.png)

​		底层每次都会创建新的返回回来,它的作用域只有当前jsp内(每次都是新的,和request很像)

​	**request**：封存了请求相关数据，由服务器创建/作用域:一次请求
​	**session**:解决了同一个不同请求之间的数据共享问题(访问一次,创建sessionID,再次访问的时候会带着sessionID过来)
​	**application**:ServletContext对象，解决了不同用户之间的数据共享问题
​	out:响应数据的对象，交于response对象，不能设置响应头,out对象底层使用了缓冲区。out对象的效率高于response
​	**response**:响应对象，设置编码格式,响应数据,设置响应头
​	page:servlet每次转义都会创建新的,[age代表当次请求被执行的jsp转译的java文件的对象
​	config：ServletConfig对象，使用此对象完成资源的初始化。
​	exception：jsp页面的异常对象，封存了异常信息。

```xml
<%@ page language="java" import="java.util.*" pageEncoding="utf-8" isErrorPage="true"%>
<%	
	//获取请求数据
	String uname=request.getParameter("uname");
	System.out.println(uname);
	int a=3;
	session.setAttribute("str", "我是session");
%>

```

servlet里怎么使用,这里也同样这么进行使用