# 问题

​	现在使用反射我们实现了在service方法中动态的根据请求调用对应的方法进行请求处理。
​	但是真实开发过程中，虽然不会每个功能都创建一个servlet，但是也不会只使用一个Servlet，我们的Servlet不只是一个，
​	一般是**一个独立的功能模块一个Servlet**。我们需要在这些Servlet中的service方法中都要将反射代码声明一遍。

## 解决：

​	向上抽取BaseServlet类

## 实现：

​	我们自己的Servlet---->向上抽取父类BaseServlet(service)(继承自servlet
​				注意：我们希望BaseServlet不能被访问到(不能web.xml中配置BaseServlet)
​					我们希望BaseServlet不能被实例化(改为抽象类)
​					---->HttpServlet

## BaseServlet使用:

​	1、创建Servlet继承BaseServlet即可。
​	2、在自己的servlet中不要声明service方法，只要书写请求处理功能方法即可。
​	3、正常请求我们自己的servlet

## 注意：

请求必须附带要被执行的方法名

## 实践

new 一个BaseServlet,别名base,方法把date的复制过去就好

然后让Data不继承自HTTPServlet,继承自Base就好,里面的service就不用写了

(程序调用的时候没有对应service方法只好去找父类的了)