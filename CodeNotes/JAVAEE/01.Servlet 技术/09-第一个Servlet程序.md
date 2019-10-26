# 09-第一个Servlet程序

<a name="0dde8a3c"></a>
# 课程介绍
在学习了服务器并成功安装后，我们知道当浏览器发送请求给服

务器后，服务器会调用并执行对应的逻辑代码进行请求处理。逻辑代

码是由程序员自己编写然后放进服务器进行运行，其实就是 Servlet

程序。

myEclipse的安装破解与字体格式设置<br />通过一个简单的Servlet程序学习Servlet的思想与程序的配置部署<br />思想:配置好相关环境后,服务器会自行调用程序员写好的servlet程序<br />配置部署步骤

<a name="c7e74520"></a>
# 第一个 Web 程序



<a name="2c509530"></a>
## 开发工具

Myeclipse

<a name="41110b6c"></a>
## Myeclipse 安装

双击执行安装软件，然后一路 next(位数根据电脑的操作系统位数自行选

择)。

<a name="f674d36d"></a>
## Myeclipse 的破解

根据破解文档自行破解。<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418738952-e5045b6a-e117-409f-b52d-27fb9c8a7ce2.png#align=left&display=inline&height=853&originHeight=963&originWidth=1018&status=done&width=902)

<a name="efde90cf"></a>
## 第一个 Web 项目

1、	打开 Myeclipse 并创建工作空间

2、	点击 file 选择—>new—>web project—>输入项

目名，点击 finish<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739032-68e41962-6eee-4863-915e-f4ba39d2801e.png#alt=&height=179&originHeight=248&originWidth=1249&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739113-0ca7a75f-c987-4dfb-8d8a-710cbc448ad4.png#align=left&display=inline&height=405&originHeight=444&originWidth=990&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739190-cf289b89-3c87-4f23-93bf-6aeea6ea1247.png#alt=&height=512&originHeight=348&originWidth=613&width=902)<br />会自动编译到WEB-INF的classes文件夹下,这个文件夹对我们不可见,工作目录可以看到<br />Webroot存放项目相关所有运行代码,前端的东西也会存放在这里<br />3、	在 src 下创建包 com.bjsxt.servlet.

4、	在包下创建一个普通 java 类 MyServlet，并继承

[]()<br />HttpServlet<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739295-e1a3388a-ce34-4144-b373-f2998690fe8e.png#alt=&height=319&originHeight=452&originWidth=1279&width=902)<br />父类可实现其接口,变相地相当于MyServlet也实现了<br />5、	在 MyServlet 类中覆写 service 方法。<br />覆写后这就是一个servlet<br />



**package **com.bjsxt.servlet;


**import **java.io.IOException;


**import **javax.servlet.ServletException;

**import **javax.servlet.http.HttpServlet;

**import **javax.servlet.http.HttpServletRequest;

**import **javax.servlet.http.HttpServletResponse;


**public class **MyServlet** extends **HttpServlet{

@Override

**protected void **service(HttpServletRequest req,** **HttpServletResponse resp)

**throws **ServletException, IOException {


resp.getWriter().write("this is my first servlet."); System._out_.println("this is my first servlet.");




}

}







![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739366-4d7c02a2-3c57-4753-a239-c3bd6414103e.png#alt=&height=799&originHeight=576&originWidth=553&width=931)6、	在 webRoot 下的 WEB-INF 下找到 web.xml 文件并配置，如下。<br />
<br />这个相当于servlet的一个路径说明书![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739451-3a6d8f80-5384-4e7b-b7f0-5840db59c083.png#alt=&height=319&originHeight=427&originWidth=1208&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739548-453c9572-49ee-4351-bc4f-d6ad45642fb9.png#alt=&height=284&originHeight=402&originWidth=1275&width=902)<br />



<?xml version=_"1.0"_ encoding=_"UTF-8"_?>

<web-app xmlns:xsi=_"http://www.w3.org/2001/XMLSchema-instance"_ xmlns=_"http://java.sun.com/xml/ns/javaee"_ xsi:schemaLocation=_"http://java.sun.com/xml/ns/javaee_ _http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" _id=_"WebApp_ID" _version=_"2.5"_><br /><!--配置Servlet	-->

<!--配置servlet类路径	-->

<servlet>

<servlet-name>my</servlet-name>


[]()<br /><servlet-class>com.bjsxt.servlet.MyServlet</servlet-

class>

</servlet>

<!--配置访问方式	-->

<servlet-mapping>

<servlet-name>my</servlet-name>

<url-pattern>/my</url-pattern>

</servlet-mapping>

</web-app>

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739653-d7883711-b98c-4fbc-9e22-115537dbd67b.png#alt=&height=298&originHeight=847&originWidth=2562&width=902)


7、	打开 tomcat 的安装目录，在 webapps 目录下新

建文件夹，文件夹名为 project，并将项目源码

webRoot 下的内容全部复制到该文件夹下。<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739801-a67a1dc6-88b2-4852-880b-4ae2504c8cd2.png#alt=&height=577&originHeight=414&originWidth=647&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739867-d6e8ed3d-ef14-4149-a9a6-d3399d419bc6.png#alt=&height=221&originHeight=363&originWidth=1484&width=902)<br />8、	启动 tomcat 服务器，并在地址栏中输入：

localhost:8080/project/my<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418739945-7d049cac-0be4-403c-8131-eda721fb5668.png#alt=&height=159&originHeight=168&originWidth=952&width=902)<br />总结:

MyEclipse 是开发工具，通过此工具便于程序员的代码编写。

真正运行的代码不是 MyEclipse 中编写的代码，而是 tomcat 服务器中

部署好的代码。Tomcat 会根据请求自动调用对应的代码进行请求处

理。
<a name="27b91bc3"></a>
#### MyEclipse调节字体格式
![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418740008-0a7c631b-809f-477a-ba1d-fe1770113548.png#alt=&height=1010&originHeight=673&originWidth=482&width=723)








































更改<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418740121-a0c6388d-bc24-461f-8f50-57114eefa6b1.png#alt=&height=601&originHeight=830&originWidth=1245&width=902)
