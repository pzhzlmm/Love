# 15-servlet的生命周期

[]()

**Servlet 的生命周期**



**Servlet 的单例创建：**<br />![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562675705727-bd4f73e3-44b7-49ec-982f-9a7372ff8776.jpeg#align=left&display=inline&height=413&originHeight=518&originWidth=1043&status=done&width=831)



























**代码证明:**




package com.bjsxt.servlet;


import java.io.IOException;


import javax.servlet.ServletException;

import javax.servlet.http.HttpServlet;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletResponse;

/**

*Servlet 的生命周期:

- 结论：

- 从第一次被调用到服务器关闭

- 验证：

- init 方法 :servlet 被初始化创建的时候调用

- service 方法:处理请求的时候

- destory 方法 :servlet 被销毁的时候。

*	当服务器关闭的时候销毁 servlet，触发 destroy 方法的执行

[]()

- 注意：

- 我们可以在 web.xml 中配置 load-on-startup 来设置 Servlet 的加载时机为服务器启动。

- 生命周期就变为从服务器开启到服务器关闭

*/

public class LifeServlet extends HttpServlet {

@Override

public void init() throws ServletException { System.out.println("LifeServlet.init(我被初始化了)");

}

@Override

protected void service(HttpServletRequest req, HttpServletResponse resp)

throws ServletException, IOException {

System.out.println("LifeServlet.service(被执行了)");

}

@Override

public void destroy() {

System.out.println("LifeServlet.destroy(我被销毁了)");

}}


**Web.xml 配置：**




<?xml version="1.0" encoding="UTF-8"?>

<web-app	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

xmlns="http://java.sun.com/xml/ns/javaee"

xsi:schemaLocation="http://java.sun.com/xml/ns/javaee

http://java.sun.com/xml/ns/javaee/web-app_2_5.xsd" id="WebApp_ID" version="2.5">

<display-name>03-Servlet</display-name>

<servlet>

<description>This is the description of my J2EE component</description> <display-name>This is the display name of my J2EE component</display-name> <servlet-name>LifeServlet</servlet-name> <servlet-class>com.bjsxt.servlet.LifeServlet</servlet-class> <load-on-startup>1</load-on-startup><!-- 配置 servlet 服务器启动时完成加载和

初始化创建 -->

</servlet>


<servlet-mapping>

<servlet-name>LifeServlet</servlet-name>

<url-pattern>/life</url-pattern>

</servlet-mapping>

<welcome-file-list>

[]()<br /><welcome-file>index.html</welcome-file>

<welcome-file>index.htm</welcome-file>

<welcome-file>index.jsp</welcome-file>

<welcome-file>default.html</welcome-file>

<welcome-file>default.htm</welcome-file>

<welcome-file>default.jsp</welcome-file>

</welcome-file-list>

</web-app>


![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675705805-23b15db5-6a7a-438e-844a-2a0dfe905835.png#align=left&display=inline&height=767&originHeight=1362&originWidth=1601&status=done&width=902)Servlet只会创建一次,那什么时候创建什么时候销毁,<br />接着部署一下



![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675705905-ac1f1791-de50-4fa1-84b9-1987c67dc216.png#align=left&display=inline&height=377&originHeight=522&originWidth=1248&status=done&width=902)<br />创建包<br />在![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675705986-7309a005-a852-41a6-a2f8-f071e37d677a.png#align=left&display=inline&height=424&originHeight=474&originWidth=1008&status=done&width=902)Myeclipse里可以直接创建servlet类![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706053-f28e6d52-584b-41d2-a210-afbe463d9e6f.png#align=left&display=inline&height=447&originHeight=501&originWidth=1012&status=done&width=902)<br />然后<br />接着修改urlmapping![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706121-34515bb9-8c5b-4dd7-9e2b-eba675a0bebf.png#align=left&display=inline&height=588&originHeight=733&originWidth=1125&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706227-daad1487-e64f-464a-9dae-397657196bc5.png#align=left&display=inline&height=517&originHeight=1147&originWidth=2001&status=done&width=902)改成life后帮我们生成的<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706351-6b354d2a-513f-43cb-84eb-9564a238d994.png#align=left&display=inline&height=329&originHeight=842&originWidth=2308&status=done&width=902)现在只需要重写我们service方法就可以了<br />先init进行初始化,再执行service初始化最后销毁<br />点击后可以看到这条语句被执行![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706525-bc460b59-4c89-48b0-afcc-e4eb8956aa4a.png#align=left&display=inline&height=229&originHeight=418&originWidth=1646&status=done&width=902)<br />即销毁的时候执行![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706624-498f3279-b6cc-4379-8fdd-e445706d8f0b.png#align=left&display=inline&height=104&originHeight=165&originWidth=1432&status=done&width=902)<br />配置加载顺序![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706694-49b7b92b-acb6-4839-822f-53bab430f87d.png#align=left&display=inline&height=212&originHeight=386&originWidth=1645&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675706775-eb3896fc-b94b-47cb-882f-e4534a12daba.png#align=left&display=inline&height=87&originHeight=156&originWidth=1615&status=done&width=902)



