# 13-Servlet的web.xml文件的几种配置方及加载时机

[]()

<a name="487e736d"></a>
# 课程介绍：



通过对 Servlet 的调用流程学习，我们知道 web.xml 文件的配置是

为了保护 servlet。其实服务器应该调用哪个 servlet 进行请求的处理，

在浏览器的请求地址中写的很清楚。



<a name="ed7f369f"></a>
# Servlet 的 web.xml 配置:



Web.xml 配置的作用：

保护 Servlet。

<a name="ff01552d"></a>
## 配置方式一:精确配置
![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675669535-889f0e62-13aa-4a8e-9a3c-e28c1cfe9802.png#align=left&display=inline&height=531&originHeight=896&originWidth=1521&status=done&width=902)


<!-- 配置方式一 -->

<servlet>

<servlet-name>my3</servlet-name>

<servlet-

class>com.bjsxt.servlet.MyServlet3</servlet-class> </servlet>

<servlet-mapping>

<servlet-name>my3</servlet-name>

<url-pattern>/my3</url-pattern>

</servlet-mapping>


<a name="a2ef4ef8"></a>
## 配置方式二:模糊配置



![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675669629-a3c4865d-6e5d-418c-a707-0f74dba43c7d.png#align=left&display=inline&height=223&originHeight=297&originWidth=1200&status=done&width=902)<br /><servlet>

<servlet-name>my3</servlet-name>

<servlet-

class>com.bjsxt.servlet.MyServlet3</servlet-class> </servlet>

<servlet-mapping>

[]()<br /><servlet-name>my3</servlet-name>

<url-pattern>*.do</url-pattern>//以.do结尾的都执行这个

</servlet-mapping>

*代表任意个数的任意字符

<a name="062f02bb"></a>
## 配置方式三:拦截所有请求
只要是发给这个项目的请求,都会拦截<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675669704-04db4b41-ccad-40d3-a692-ec79149e42d3.png#align=left&display=inline&height=225&originHeight=174&originWidth=699&status=done&width=902)<br />后面无论怎么写,都会拦截(无论静态动态,图片视频jsp)


<servlet>

<servlet-name>my3</servlet-name>

<servlet-

class>com.bjsxt.servlet.MyServlet3</servlet-class> </servlet>

<servlet-mapping>

<servlet-name>my3</servlet-name>

<url-pattern>/one/*</url-pattern>

</servlet-mapping>

<a name="78bf5771"></a>
## 配置方式四
/one/*


![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675669759-5fb57881-3ce6-4d0d-9b45-90037ef8c9ae.png#align=left&display=inline&height=199&originHeight=178&originWidth=808&status=done&width=902)


![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675669827-27c25445-4604-44fa-8a52-66f6212644f0.png#align=left&display=inline&height=150&originHeight=187&originWidth=1128&status=done&width=902)

<a name="98b0ac9d"></a>
## 加载时机：

服务器启动的时候会将 webapps 中部署好的项目统一

进行加载，并完成对每个项目的 web.xml 文件的加载。

<a name="ba8d1dca"></a>
## 注意：

一个 Servlet 可有拥有多个 url-pattern 配置，但是一个 url-pattern 配置只能对应一个 Servlet<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675669902-0a1643f9-e6a1-4a50-8e0c-dbf2783e2671.png#align=left&display=inline&height=104&originHeight=197&originWidth=1710&status=done&width=902)
