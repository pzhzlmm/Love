# 目 录

[TOC]

# ﻿课程介绍

在WEB项目开发中JSP占据着举足轻重的地位，虽然其使用很简单，但是非常的重要。本节课开始学习JSP。

# JSP学习

## 问题

在学习了Servlet之后，使用Servlet进行页面的展现，代码书写过于繁琐。极大的影响了开发的效率，那么有没有一种方式可以让我们像以前写网页一样来进行网页的编程工作呢?

## 解决

使用JSP技术

## 概念

JSP全名为JavaServerPages，中文名叫java服务器页面，其根本是一个简化的Servlet设计，它[1]是由SunMicrosystems公司倡导、许多公司参与一起建立的一种**动态网页技术**标准。

**本质上仍然是servlet**

## 特点

本质上还是Servlet

跨平台，一次编写处处运行

组件跨平台

健壮性和安全性

ps.

健壮性:如果对很多的情况都能进行逻辑上的处理,代码的逻辑很缜密

安全性:对代码数据的保护做得很好

## 使用

JSP目录在WEBROOT下,servlet资源在src下

JSP负责页面展现，Servlet负责业务逻辑处理。

资源路径总结：

Jsp中路径：

相对路径:../../资源

绝对路径:/虚拟项目名/资源路径

# 步骤

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711170657.png)

## design模式
默认打开方式是design模式

即通过托拉拽的方式来玩,比方说可以把这个button拖过切

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711170726.png)

成这样的效果

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711170823.png)
但是很low,也没有我们写代码写得快,因此不建议使用

## Editor模式
切换到Editor模式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711170847.png)

前面不认识不要紧,认识真句话就可以了

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711171131.png)

项目部署下,取个别名就可以看到效果了

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711171225.png)

能够快速地进行网页的开发

# 源码

```xml
<%@ page language="java" import="java.util.*" pageEncoding="ISO-8859-1"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'my.jsp' starting page</title>
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
  </head>
  <body>
    	hello jsp <br>
    	hello jsp <br>
  </body>
</html>

```

