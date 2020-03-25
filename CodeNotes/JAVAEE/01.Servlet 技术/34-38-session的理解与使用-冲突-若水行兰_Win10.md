# 34-38-session的理解与使用

<a name="2e38303a"></a>
# 课程介绍:

学习 Cookie 之后，解决了不用发送请求的数据共享问题。Cookie 是

浏览器端的数据存储技术，本节课重点介绍另外一门重要的数据存储

技术，session 技术。<br />
<br />

<a name="eaa31c69"></a>
# Session 学习:


<a name="d303267a"></a>
## 问题：

Request 对象解决了一次请求内的不同 Servlet 的数据共享问

题，那么一个用户的不同请求的处理需要使用相同的数据怎么办呢?

<a name="9252c8c0"></a>
## 解决：

使用 session 技术。

<a name="400a1262"></a>
## 原理：

用户使用浏览器第一次向服务器发送请求，服务器在接受到请

求后，调用对应的 Servlet 进行处理。在处理过程中会给用户创建

一个 session 对象，用来存储用户请求处理相关的公共数据，并将

- session 对象的 JSESSIONID 以 Cookie 的形式存储在浏览器中(临

时存储，浏览器关闭即失效)。用户在发起第二次请求及后续请求时，请求信息中会附带 JSESSIONID，服务器在接收到请求后，调用对应的 Servlet 进行请求处理，同时根据 JSESSIONID 返回其对应的 session 对象。

<a name="779c593c"></a>
# session的概念
操作已经创建的数据<br />第二次请求要获得第一次请求创建的Object,给个唯一标识符进行标志(有一堆Object都有这个需求)<br />服务器里的Object标志位id1,告诉浏览器给我存储起来cookie1,浏览器对象id也为1,cookie帮我们存储对象的ID<br />这个技术就叫session<br />这个session到了时间仍然会销毁<br />浏览器一关闭,cookie就失效,重新登的时候再次重新创建<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762411797-481554af-57f2-48c0-b0b1-ee64b2ae8bdf.png#align=left&display=inline&height=370&originHeight=566&originWidth=1378&status=done&width=902)一个用户一个session
<a name="38164c8b"></a>
# 实现
创建![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762411896-e3772000-9469-4911-8a18-139957e4fdd5.png#alt=&height=265&originHeight=288&originWidth=979&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762411997-e5973cde-f991-40d7-a301-6bfcc4405c68.png#alt=&height=260&originHeight=642&originWidth=1563&width=634)别名

配置网络<br />创建两个servlet,起别名<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412095-51d79b7c-5be8-4341-9264-bb31944c1a09.png#alt=&height=252&originHeight=307&originWidth=1101&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412160-be71bfa2-73d6-452d-a176-192afc90d231.png#align=left&display=inline&height=84&originHeight=108&originWidth=1153&status=done&width=902)创建service方法<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412257-658ad72f-b7fb-4846-b8f4-d300b1a08022.png#alt=&height=245&originHeight=494&originWidth=1379&width=684)编写<br />A一结束,session就使用cookie存储到浏览器了<br />编写B,不获取数据,而获取A中的处理结果数据,并打印<br />A把它的值重定向到B

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412336-ea2fee88-6a27-4246-bd83-57d421e2676c.png#alt=&height=110&originHeight=143&originWidth=609&width=470)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412405-3c730519-6d59-4686-992c-c44888a85799.png#alt=&height=483&originHeight=1066&originWidth=1992&width=902)第一次发给![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412497-c92e1e0d-4747-495c-8aaf-b656b7498aad.png#alt=&height=354&originHeight=772&originWidth=1967&width=902)A,第二次重定向发给B<br />要求其他在处理的时候这个数据也能用<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412578-5d5eb1ba-a048-45e5-a51e-bf18623fb7a5.png#align=left&display=inline&height=143&originHeight=278&originWidth=1144&status=done&width=589)由此在真正响应创建之前,就要创建对应的session对象

再把数据存进去<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412670-8fb12fe2-fb8d-4f74-89db-b8a3b4f2c281.png#alt=&height=304&originHeight=396&originWidth=1174&width=902)我们只需要拿到session对象然后往里面放数据就可以了<br />剩下的底层都实现了

而在![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412785-805b363c-d052-44a8-908d-2814c6a47fd6.png#align=left&display=inline&height=516&originHeight=411&originWidth=719&status=done&width=902)B里,就要从cookie里拿到对应的钥匙(session的ID)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412871-ca0c517f-225e-4893-9cb2-8ca8ace05faf.png#align=left&display=inline&height=141&originHeight=247&originWidth=1576&status=done&width=902)这些底层仍然实现了,我们直接获取就好<br />效果<br />只录入A<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762412944-4d312a0d-deb4-43ef-9d0e-4ea672adf5f1.png#align=left&display=inline&height=126&originHeight=151&originWidth=1081&status=done&width=902)A里没有sessionID,创建新的session.并把数据也放session里,请求结束的时候告诉浏览器把sessionID存起来,浏览器存好后基于cookie的机制,下一次请求就会附带这次的请求信息,于是发给B的时候就带了这个sessionID,执行B的时候就拿到原来的sessionID,
<a name="04c4a90b"></a>
# 特点：
[]()[]()Session 技术是依赖 Cookie 技术的服务器端的数据存储技术。<br />由服务器进行创建<br />默认存储时间为 30 分钟<br />session解决了同一个用户不同请求的数据共享问题。<br />sess ion的作用域：一次会话<br />浏览器不关闭，session不失效， 则同一用户的任意请求获取的都是同一个session<br />每个用户独立拥有一个 session
<a name="8076e5d8"></a>
# 作用：

解决了一个用户的不同请求的数据共享问题。

<a name="c766d0a5"></a>
# 使用：

创建 Session 对象

存储数据到 session 对象

获取 session 对象

获取数据从 session 对象

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762413046-59904585-f88d-441f-8c65-65dfe1cbd130.png#alt=&height=222&originHeight=478&originWidth=1787&width=831)如果获取 session 中不存在的数据返回 null。
<a name="f630b9a4"></a>
# 流程
可以在B里判断A是否到期失去,如果到期重新访问一次A<br />开发中一般一个存一个取<br />A.浏览器发起请求到Aservlet，在AServlet中使用req . getSes sion（ ）获取Session对象，如果此次请求中没有SessionID则创建一个新的Session对象<br />B.如果有SessionID则将其对应的Ses sion对象返回（前提是该session对象没有到对象到期销毁了，就算有sess ionID也会重新创建一个Ses sion.<br />C.校验session是否失效，存储数据到ses sion对象中或者获取sess ion中的数据或者刪除sess ion中的数据
<a name="ba8d1dca"></a>
# 注意：

只要不关闭浏览器，并且 session 不失效的情况下，同一个用户的任意请求在项目的任意 Servlet 中获取到的都是同一个 session对象。<br />作用域：

一次会话


<a name="3a1a53db"></a>
# 生存周期
Web.xml中:![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762413138-54e7b3c4-49d7-481e-8587-1885ea373528.png#alt=&height=146&originHeight=177&originWidth=1008&width=831)<br />这是公共的,默认的,30分钟,也可以自己设置<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762413226-70642d46-b6d8-4f92-b148-72b898e49850.png#alt=&height=357&originHeight=525&originWidth=1221&width=831)
<a name="d6f9888e"></a>
# 强制销毁session
![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762413335-51e48e55-afad-4e40-8d1c-3723b08b5fc3.png#alt=&height=101&originHeight=98&originWidth=713&width=738)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762413433-8e1ff536-6ed4-4dc4-8e6a-6930c9029d77.png#align=left&display=inline&height=115&originHeight=299&originWidth=2156&status=done&width=831)网站退出的时候用
<a name="996da8e2"></a>
# 登录练习
使用，详见源码<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762413497-1f9594c1-3b85-4f0f-8a79-3188aa9b2993.png#align=left&display=inline&height=337&originHeight=552&originWidth=1360&status=done&width=831)
