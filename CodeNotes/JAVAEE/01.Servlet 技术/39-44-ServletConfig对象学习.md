# 39-44-ServletConfig对象学习



<a name="487e736d"></a>
# 课程介绍：



通过前面知识点的学习，我们对于请求的处理已经可以说比较灵

活了，但是还不够。我们再介绍两个重要的对象 ServletContext 对象

和	ServletConfig 对象


<a name="0f9ce144"></a>
# ServletContext 对象：
<a name="d303267a"></a>
## 问题：

Request 解决了一次请求内的数据共享问题，session 解决了用户不同请求的数据共享问题，那么不同的用户的数据共享该怎么办呢？

<a name="9252c8c0"></a>
## 解决：

使用 ServletContext 对象

<a name="8076e5d8"></a>
## 作用：

解决了不同用户的数据共享问题

<a name="400a1262"></a>
## 原理：

ServletContext 对象由服务器进行创建，一个项目只有一个对象。不管在项目的任意位置进行获取得到的都是同一个对象，那么不同用户发起的请求获取到的也就是同一个对象了，该对象由用户共同拥有。<br />本质上是不同请求拿到同一对象,即这个对象被所有用户所共享<br />现在就不区分用户了,任意用户都能拿到这个对象<br />这个对象一个项目只能有一个<br />不同用户session是不同的
<a name="04c4a90b"></a>
## 特点：
服务器进行创建<br />所有用户共享<br />一个项目只有一个(单例)


<a name="28d16b3c"></a>
## 生命周期：

服务器启动到服务器关闭

<a name="5342b742"></a>
## 作用域：

项目内

<a name="c766d0a5"></a>
## 使用：

获取 ServletContext 对象

使用作用域进行共享数据流转

获取 web.xml 中的全局配置

获取 webroot 下项目资源流对象

获取 webroot 下资源绝对路径

案例：网页浏览器次数统计，详见源码




<a name="4dd8f1fe"></a>
## ![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436072-da34ecd8-937b-4845-b455-71fd06744a19.png#align=left&display=inline&height=432&originHeight=965&originWidth=2017&status=done&width=902)实现
先存后取<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436183-428ccecc-5689-4290-917d-b8547a2bec75.png#align=left&display=inline&height=253&originHeight=495&originWidth=1766&status=done&width=902)


<a name="a39cf1ca"></a>
## 存储
每个对象都可以往取也可以放,可以都往这个对象中放点<br />在B中获取<br />访问![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436271-9bc7778d-6041-46cf-98ec-55e4c855fb76.png#align=left&display=inline&height=406&originHeight=291&originWidth=647&status=done&width=902)A(放值的)再访问B(取值的)即可<br />谁都能拿,谁都能取<br />没有会返回null
<a name="77b4468f"></a>
# 获取webxml 的全局配置
我们要改的时候就在webxml里面进行修改,就不需要改源码了@@@

注意一个紫色框是一组,如果需要再配别的,不可再紫色框里进而创建<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436372-a6323129-9fa5-4449-b628-ff8fed3724bb.png#align=left&display=inline&height=176&originHeight=336&originWidth=1721&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436493-0dadd88f-0342-481d-b5ad-4c65df8f76db.png#align=left&display=inline&height=347&originHeight=486&originWidth=1265&status=done&width=902)<br />**以此,我们只需要改变web-xml的值,服务器对应的值就会跟着修改,不然就得改源码**<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436609-f947a5ca-2c93-40e0-9128-c1a135fe0991.png#align=left&display=inline&height=35&originHeight=87&originWidth=2212&status=done&width=902)**配置文件好处:把一部分动作与代码进行解耦,我们只需要在配置文件里进行配置就可以了,源码不需要做出任何改变**

<a name="d303267a-1"></a>
## 问题：

使用 ServletContext 对象可以获取 web.xml 中的全局配置文件，

在web.xml 中,每个 Servlet 也可以进行单独的配置，那么该怎么获取配置信息呢？

<a name="9252c8c0-1"></a>
## 解决：

<a name="a74cdbca"></a>
# ![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436737-dd95dc08-efb0-4f19-a576-d339c89ef4c4.png#align=left&display=inline&height=67&originHeight=159&originWidth=2149&status=done&width=902)获取webroot下项目资源流对象
Stream流<br />Path:root,真正项目部署的位置<br />Tomcat不一定在D盘,如果不在D盘语句一就废了<br />这句话主要是用来动态地获取部署好资源的流对象
<a name="7651014e"></a>
# ![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436839-48610048-3eb9-4845-8618-2bb3b4161558.png#align=left&display=inline&height=243&originHeight=696&originWidth=2288&status=done&width=799)获取webroot下项目资源的绝对路径
服务器在哪儿,就会写哪儿

<a name="43566b07"></a>
# 使用 ServletConfig 对象
 

<a name="b59c9e0f"></a>
## 概念
这个属性servlet![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762436946-881e5a62-33a1-482f-8c70-bd349e8df4f1.png#align=left&display=inline&height=354&originHeight=440&originWidth=1120&status=done&width=902)Context去拿,公共属性,每个都能拿到,我们现在希望当前这个有效,别的servlet无效,拿不到,这时候就需要config对象



<a name="8076e5d8-1"></a>
## 作用：

ServletConfig 对象是 Servlet 的专属配置对象，每个 Servlet 都单独拥有一个 ServletConfig 对象，用来获取 web.xml 中的配置信息。

<a name="c766d0a5-1"></a>
## 使用：

获取 ServletConfig 对象

获取 web.xml 中 servlet 的配置信息
<a name="68fda12d"></a>
## ![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762437074-127d31df-14da-4a7d-9634-2043aede88df.png#align=left&display=inline&height=207&originHeight=654&originWidth=2011&status=done&width=636)实现
![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762437174-4c52bdcc-3643-47aa-9899-fd76bf7c30fe.png#align=left&display=inline&height=481&originHeight=847&originWidth=1588&status=done&width=902)

<a name="ecff77a8"></a>
## 使用
编码格式原来<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762437268-882b41b9-7015-4965-8e5f-6e6d63f57ebe.png#align=left&display=inline&height=95&originHeight=104&originWidth=984&status=done&width=902)<br />改为<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762437336-b371a1d6-41a6-43f3-9bba-64b450e3120d.png#align=left&display=inline&height=185&originHeight=186&originWidth=907&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562762437554-a23cd80f-d4c5-40d7-aa4d-ba569ef78773.png#align=left&display=inline&height=126&originHeight=201&originWidth=1434&status=done&width=902)<br />以后我们要改就直接在配置文件里面去改就可以了


<a name="cd073930"></a>
# 38/42/43
38:重写登录界面<br />42/43:网页登录次数统计











