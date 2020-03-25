# 16-18-doGet和doPost和Service方法的区别

除了service外还可以用另外两个请求进行请求处理
<a name="753d87c0"></a>
## Service 方法:

不管是 get 方式还是 post 方式的请求，如果 Servlet 类中有 service 方法，则优先调用 Service 方法。
<a name="a833bd13"></a>
##  doGet 方法:
在没有 service 方法的情况下如果是 get 方式的请求所调用的处理请求的方法<br />方法名不同,但参数都一样<br />编写登录方法登录后<br />如果提交的是post,却没有post,会报![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732011-eb315acf-09fc-441d-b030-6d6ada692c20.png#align=left&display=inline&height=276&originHeight=666&originWidth=2174&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732137-ebe6273e-ffff-4a12-95dd-c74333c8c7c1.png#align=left&display=inline&height=360&originHeight=857&originWidth=2148&status=done&width=902)405的错误<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732264-5b3252ad-6e97-4b92-81dc-9edcd577d826.png#align=left&display=inline&height=500&originHeight=1097&originWidth=1980&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732377-647b7f8b-76d3-490d-9041-f6402f432bfa.png#align=left&display=inline&height=285&originHeight=464&originWidth=1471&status=done&width=902)
<a name="10906672"></a>
## doPost 方法:
在没有 service 方法的情况下如果是 post 方式的请求所调用的处理请求的方法<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732485-c440b174-d976-4bc4-9b52-1c60f27c49ed.png#align=left&display=inline&height=96&originHeight=154&originWidth=1445&status=done&width=902)

<a name="Service"></a>
# Service
有service不管是什么都执行service,没有service有那种找那种<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732566-e53d6926-6ff8-4e66-84c7-40c168cc21f0.png#align=left&display=inline&height=200&originHeight=322&originWidth=1454&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732646-6f6e466d-769e-461a-855f-f02057ae0e35.png#align=left&display=inline&height=165&originHeight=335&originWidth=1835&status=done&width=902)

<a name="Service-1"></a>
# Service
当我们调用service时<br />这时候再执行get请求的登录方法,结果就不同了<br />关键在于其调用了父类的service方法,即![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732767-1335ea8a-857c-4a9d-b727-dc06e36edfeb.png#align=left&display=inline&height=351&originHeight=1012&originWidth=2597&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732908-fdeb5221-87d9-4727-9597-d52f61a5e6f7.png#align=left&display=inline&height=191&originHeight=388&originWidth=1836&status=done&width=902)HttpServlet<br />查看源码<br />找到service

可以看到里面又做了一次ifelse的判断<br />然后又调用了doget方法,同样post也会那么做<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675732987-ba8e9f73-5f71-42aa-91f6-101166e7822d.png#align=left&display=inline&height=305&originHeight=614&originWidth=1814&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733101-4f294d91-88a1-41b5-aa28-1cf9dfdcffdf.png#align=left&display=inline&height=458&originHeight=1101&originWidth=2170&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733210-798d7338-86a7-46e3-987f-fd52817c020e.png#align=left&display=inline&height=59&originHeight=141&originWidth=2138&status=done&width=902)请求来了,一定会去找service,没有service会去找父类的service,然后根据请求方式去找doget和dopost,如果复写了doget或者dopost会找自己的doget和dopost,如果没有复写,就调用父类的doget和dopost







<a name="dab17126"></a>
# Servlet 的常见错误总结：
*	Servlet的常见错误：

<a name="f54a25b2"></a>
## 404错误:资源未找到
url有问题

*	原因一：在请求地址中的servlet的别名书写错误。

*	原因二：虚拟项目名称拼写错误

<a name="2c412245"></a>
## 500错误：内部服务器错误

<a name="ff6cc35e"></a>
### 错误一：
![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733307-848a526f-b5bd-4498-9195-356b20437ec2.png#align=left&display=inline&height=479&originHeight=961&originWidth=1809&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733452-5dc77638-8e05-4dce-9713-ae861508df67.png#align=left&display=inline&height=431&originHeight=924&originWidth=1934&status=done&width=902)


*java.lang.ClassNotFoundException:<br />com.bjsxt.servlet.ServletMothod		<br />解决：<br />在web.xml中校验servlet类的全限定路径是否拼写错误。

 
<a name="6fe1d7f4"></a>
### 错误二：
因为service方法体的代码执行错误导致<br />即写java时经常会碰上的一些逻辑处理问题,如空指针异常等等<br />解决：




根据错误提示对service方法体中的代码进行错误更改。<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733552-03c29003-58c6-4399-b5e7-6303fa62e382.png#align=left&display=inline&height=128&originHeight=255&originWidth=1800&status=done&width=902)

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733622-32614a0a-9dee-499f-a8fc-150f33b90d19.png#align=left&display=inline&height=339&originHeight=485&originWidth=1291&status=done&width=902)

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675733736-c7453ac4-1cf4-4dd0-9941-1f4f3d86ec4c.png#align=left&display=inline&height=261&originHeight=690&originWidth=2387&status=done&width=902)


<a name="58ef0aca"></a>
## 405错误:请求方式不支持

原因：*请求方式和servlet中的方法不匹配所造成的。<br />后台没有对应doget,dopost<br /> 

解决：

尽量使用 service 方法进行请求处理，并且不要再 service 方法中调用父类的service。<br />或者书写对应的doget,或者dopost


































