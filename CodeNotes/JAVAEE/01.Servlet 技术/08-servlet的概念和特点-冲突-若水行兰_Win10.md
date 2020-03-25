# 08-servlet的概念和特点

[]()

<a name="7e6d234a"></a>
# Servlet 介绍:
米:业务规则<br />釭:service方法<br />电饭煲:服务器<br />无论电饭煲里装的是什么,它只认釭,也只加热釭,只对釭进行一系列的操作

红色代码我们正常写,里面的一系列处理代码命名为servlet

<a name="d303267a"></a>
## 问题：

服务器在接收到浏览器的请求后，会自动调用对应的逻辑代码进行请求

处理。但是逻辑代码是由程序员编写并放到服务器中，那么服务器怎么知道该怎

么调用并调用哪个类和哪个方法来进行请求处理。

<a name="9252c8c0"></a>
## 解决：

程序员在编写代码的时候如果能够按照服务器能够识别的规则进行编写，

浏览器按照指定的规则进行发送请求，那么服务器就可以调用并执行响应的逻辑

代码进行请求处理了。

<a name="2b9f4fde"></a>
# 实现：

Servlet 技术

<a name="a46d568b"></a>
# 概念：

狭义的 Servlet 是指 Java 语言实现的一个**接口(实现了特定接口的类都可叫servlet)**，广义的 Servlet 是

指任何**实现了这个 Servlet 接口的子类**，一般情况下，人们将 Servlet 理解为后者。

Servlet 运行于支持 Java 的应用服务器中。从原理上讲，Servlet 可以响应任何

类型的请求，但绝大多数情况下 Servlet 只用来扩展基于 HTTP 协议的 Web 服

务器

<a name="04c4a90b"></a>
# 特点：

运行在支持 java 的应用服务器上

Servlet 的实现遵循了服务器能够识别的规则，也就是服务器会自动

的根据请求调用对应的 servlet 进行请求处理。

[]()<br />简单方便，可移植性强

<a name="c766d0a5"></a>
# 使用：

1、	创建普通的 java 类并继承 HttpServlet

2、	覆写 service 方法

3、	在 service 方法中书写逻辑代码即可

4、	在 webRoot 下的 WEB-INF 文件夹下的 web.xml(servlet的说明书,有servlet的存放地址)

文件中配置 servlet<br />
<br />相当于servlet是我们程序的入口<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418720540-906ac634-6403-41cf-a537-2bbf1a92c1fb.png#align=left&display=inline&height=357&originHeight=1027&originWidth=2596&status=done&width=902)
