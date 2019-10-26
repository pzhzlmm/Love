# 01-04-浏览器和服务器的交互模式和HTTP协议的介绍


![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562419709222-8e697fc1-77a1-40e4-a2d8-8e9e88c1ed03.png)
<a name="oERPW"></a>
# 课程介绍
互联网的发展非常迅速，但是万变不离其宗。学习 web 开发，需要我们对互

联的交互机制有一定的了解。为了更好的理解并掌握 Servlet，在正式学习 Servlet

之前需要对 web 开发中客户端和服务器的交互机制以及所涉及的规范(HTTP)进

行学习。



**HTTP 协议详解**



<a name="45b371d6"></a>
# 1、  web 交互的基本流程
![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562418643686-a0f8e5e8-83a5-4ff1-91d4-333eaf85610b.jpeg#align=left&display=inline&height=289&originHeight=199&originWidth=572&status=done&width=831)
















图片介绍：

客户端根据用户输入的地址信息请求服务器，服务器在接收到用户

的请求后进行处理，然后将处理结果响应给客户端，客户端将响应结果展

示给用户。

专业术语:

请求：客户端根据用户地址信息将数据发送给服务器的过程

响应：服务器将请求的处理结果发送给浏览器的过程

[]()
<a name="d303267a"></a>
## 问题：

客户端也就是浏览器的版本是有很多的，服务器的版本也是有很多

的，如何实现不同版本的浏览器和不同版本的服务器之间的数据交互呢？<br />url:统一资源占位符,域名,底层映射的是IP,要网络中哪个资源,去根据这个去找这个资源,再把接收的结果展现给用户

<a name="9252c8c0"></a>
## 解决：

规范浏览器和服务器的数据交互的格式。

<a name="2b9f4fde"></a>
## 实现：

HTTP 协议

<a name="c4ea0a95"></a>
# 2、  HTTP 的概念和介绍

<a name="a46d568b"></a>
## 概念：

超文本传输协议（Hyper Text Transfer Protocol）

<a name="8076e5d8"></a>
## 作用：

[]()规范了浏览器和服务器的数据交互(进行相同的规则进行交互,你发的我认识,我发的你也认识,类似于语言<br />规范了无论什么版本的浏览器,无论是请求还是响应,都遵循这个协议进行交互<br />解决了数据交互格式的问题)
<a name="04c4a90b"></a>
## 特点：

[]()**简单快速**：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有 GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于 HTTP 协议**简单**，使得 HTTP 服务器的程序规模小，因而通信速度很快

**灵活**：HTTP 允许传输**任意类型的数据对象**。正在传输的类型由 Content-Type 加以标记(规定怎么发,但并不规范什么类型的数据,意为什么类型都能发,什么类型都能响应)。

**无连接**：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间(一次请求处理完后连接通道就关闭了,即**一问一答**,每次请求都是独立的,再次连接的时候会建立新的连接通道)。

[]()<br />**无状态**：HTTP 协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。(规范数据传输但并不会把传输的数据给记下来,类似快递员,我把包裹给你就完事儿了) <br />支持 B/S 及 C/S 模式。

HTTP1.1 版本后支持可持续连接: 通道频繁开关,效率不高但资源占用率也不高,服务器同时处理的连接数有数量限制,http1.1之后开始执行可持续连接,既不会立马关闭,也不会让它一直开着(如计时五分钟),延迟关闭

<a name="cf961562"></a>
# 3、  HTTP 的交互流程：

HTTP 的交互流程一般分为四个步骤(一次完整的请求)：

<a name="f1054629"></a>
## 步骤一

[]()客户端和服务器端建立连接

<a name="7d1cce80"></a>
## 步骤二

[]()客户端发送请求数据到服务器端(HTTP 协议)
<a name="73e8816f"></a>
## 步骤三

[]()服务器端接收到请求后，进行处理，然后将处理结果响应客户端(HTTP 协议)
<a name="bd45b794"></a>
## 步骤四
[]()关闭客户端和服务器端的连接(HTTP1.1 后不会立即关闭)
<a name="d2c43b05"></a>
# 4、  HTTP 协议之请求格式
<a name="195cfd67"></a>
## 请求格式的结构


**请求行**：发给谁,请求方式、请求的地址和 HTTP 协议版本

**请求头**：消息报头，一般用来说明客户端要使用的一些附加信息(非用户写,浏览器自行添加,浏览器的地址版本,给的是什么格式的数据)<br />**空行**： 位于请求行和请求数据之间，空行是必须的。

[]()<br />**请求数据/请求实体**：用户数据(如账号密码)非必须。<br />![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562418643775-c1999fae-e823-441f-a686-23412af35448.jpeg#align=left&display=inline&height=264&originHeight=176&originWidth=499&status=done&width=748)














键值对,短小精悍的方式去描述数据

<a name="138a6766"></a>
## 注意
 一张网页的内容是极其丰富的，浏览器会遵循 HTTP 请求的格式将有效数据发送给服务器。

<a name="dc2edbec"></a>
### 示例(get 请求方式)
Get没有请求数据/请求主体这一块儿

![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562418643840-348ee08d-88a5-4dc4-aa03-c3e86134fcf3.jpeg#align=left&display=inline&height=172&originHeight=186&originWidth=897&status=done&width=831)



	<br />	




![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418643975-6f979a1e-13a0-4be9-a309-8d8b0c4a8e8a.png#align=left&display=inline&height=339&originHeight=1019&originWidth=2712&status=done&width=902)<br />	









这些信息都是以键值对的形式呈现的<br />Accept:浏览器能接收什么版本的数据(*/*:啥都行)<br />Referer:当前的页面是从哪个页面跳转过来的<br />Accept-Encoding:接收的数据压缩格式<br />Accept-language:支持的语言
<a name="96b11efa"></a>
### 示例(post 请求方式):

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418644080-fcd06348-2d9c-4dd2-8b58-7d691663c74c.png#align=left&display=inline&height=211&originHeight=156&originWidth=667&status=done&width=902)









Host:服务器主机地址<br />Useragent:服务器版本信息<br />Contenttype:类型<br />Contentlenth:请求数据大小<br />Connection:保持连接(1.1以后,服务器不会立马挂)
<a name="d38a87d6"></a>
# 5、  HTTP 协议之请求方式

根据 HTTP 标准，HTTP 请求可以使用多种请求方法。

**HTTP1.0 **定义了三种请求方法：** GET, POST **和** HEAD **方法。

**HTTP1.1  **新增了五种请求方法：** OPTIONS, PUT, DELETE, TRACE  和**

**CONNECT **方法。

[]()![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562418644137-8df442b8-6b27-4ee5-80d2-ab85f0a6adb1.jpeg#align=left&display=inline&height=228&originHeight=221&originWidth=910&status=done&width=939)











报头:响应头<br />着重掌握get和post
<a name="e85e3f18"></a>
## get 和 post 请求方式的区别:

<a name="d04c7e75"></a>
### get 请求方式：

没有请求实体(请求数据),请求数据会以？的形式隔开拼接在请求头中，不安全，没有请求实体部分。不同数据之间会用&隔开,每一条数据都是键值对<br />所以get请求方式可理解为请求行,请求头,然后就没了

HTTP 协议虽然没有规定请求数据的大小，但是浏览器对 URL 的长度是有限制的，所以 get 请求不能携带大量的数据。<br />传输效率比较高,但不能携带大量数据<br />使用场景:数据量小,对数据安全性要求不高
<a name="ae2bcea8"></a>
### post 请求方式：

请求数据在请求实体中进行发送，在 URL 中看不到具体的请求数据，安全。适合**数据量大**的数据发送。效率高低于get<br />Get请求的数据是在请求行里面,post有单独的请求实体<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418644231-a4ee64de-63f0-4ae5-8818-0e4922d4ce25.png#align=left&display=inline&height=391&originHeight=964&originWidth=2223&status=done&width=902)

<a name="7780a9a4"></a>
# 6、  HTTP 协议之响应
拿到先看谁发的,再拆包,然后分析一下,再由收件人转为发件人,进而把包裹发送出去
<a name="0a93ed4f"></a>
## 响应的内容
响应的内容包括:html+css+js+数据<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418644371-b3845790-05df-4f07-bf1d-2c05b9d9de87.png#align=left&display=inline&height=228&originHeight=689&originWidth=2728&status=done&width=902)

<a name="11f22628"></a>
## 响应格式的结构：

响应行(状态行)：HTTP 版本、状态码、状态消息

响应头：消息报头，客户端使用的附加信息(除包裹以外的附加信息)

空行：响应头和响应实体之间的，必须的。

响应实体：正文，服务器返回给浏览器的信息

<a name="614fc656"></a>
##### 示例：

[]()![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562418644457-7dcac216-7c08-488c-8b84-8a884b3eb40a.jpeg#align=left&display=inline&height=381&originHeight=302&originWidth=659&status=done&width=831)




















<a name="96f0a7c7"></a>
## HTTP 常见响应状态码含义：

HTTP 状态码由三个十进制数字组成，第一个十进制数字定义了状态码的

类型，后两个数字没有分类的作用。HTTP 状态码共分为 5 种类型：<br />![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562418644514-31f20d93-06b8-48ed-a99e-400db63dbb66.jpeg#align=left&display=inline&height=284&originHeight=253&originWidth=739&status=done&width=831)

















给浏览器看

| 常见状态码： |  |  |
| --- | --- | --- |
| 200 | OK | //客户端请求成功 |
| 400 | Bad Request | //客户端请求有语法错误，不能被服务器所 |
| 理解 |  |  |
| 401 | Unauthorized | //请求未经授权，这个状态代码必须和 WWW- |
| Authenticate 报头域一起使用 |  |  |
| 403 | Forbidden | //服务器收到请求，但是拒绝提供服务 |
| 404 | Not Found | //请求资源不存在，eg：输入了错误的 URL(没找到) |
| 500 | Internal Server Error | //服务器发生不可预期的错误 |
| 503 | Server Unavailable | //服务器当前不能处理客户端的请求，一段 |


时间后可能恢复正常

[]()![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418644597-4236203c-dc32-463d-a0fb-4995d64f492d.png#align=left&display=inline&height=390&originHeight=1025&originWidth=2368&status=done&width=902)
