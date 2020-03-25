# 10-Servlet的运行流程分析


![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562678266562-8bf09f7a-449a-4a22-b68d-c352112b58e7.png)
<a name="c4VJs"></a>
# 创建流程
Src:存储源码<br />Webroot:整个项目所有的源码都在这儿<br />创建流程没有创建过servlet对象,把声明规则放进去,其他的让tomcat服务器帮我们做就是了,它自动会去执行service<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627073-bbe78f1a-12ae-49f2-b2fc-3622541b6b73.png#align=left&display=inline&height=548&originHeight=1051&originWidth=1329&status=done&width=693)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627164-48201b91-66fb-449f-ba02-48496d1d10ee.png#align=left&display=inline&height=367&originHeight=424&originWidth=534&status=done&width=462)一个tomcat可以部署多个项目,为了区分这多个项目,于是我们一个项目放一个文件夹<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627245-25b7f640-591f-49e9-bfef-46d37f02281c.png#align=left&display=inline&height=212&originHeight=229&originWidth=608&status=done&width=563)


<a name="415b371d"></a>
# 执行过程
![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627319-cca5227e-7f78-46b2-b3cc-fe2c6e679aa2.png#align=left&display=inline&height=137&originHeight=169&originWidth=489&status=done&width=395)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627407-2792ae26-d6c8-4181-85f4-e56ea4b5b0ef.png#align=left&display=inline&height=215&originHeight=467&originWidth=1060&status=done&width=489)<br />凡是请求是localhost会去webapps里面去找这个代码<br />默认是localhost,即默认会去webapps里找<br />在webapp里找到project<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627513-aa7d5f9f-cb9f-45c0-8e75-e8c57d5f41c3.png#align=left&display=inline&height=164&originHeight=430&originWidth=1564&status=done&width=597)后会去项目的配置文件里查找有没有和s对应的东西<br />后因为有那个全限制路径,通过反射能找到类,从而创建这个对象<br />由此,服务器非常清楚是执行哪个项目的哪个servlet<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675627624-5f3e9856-827a-4237-8262-28b7690e552c.png#align=left&display=inline&height=338&originHeight=1061&originWidth=2612&status=done&width=831)

封装了此次请求了全部请求数据,封装了要响应的目标浏览器的相关地址信息

404:告诉没找到<br />11  01-09
