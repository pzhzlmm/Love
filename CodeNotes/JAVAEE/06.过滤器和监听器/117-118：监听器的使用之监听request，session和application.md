request被创建的时候打印我被创建了

创建一个普通的JAVA类实现一个JAVA接口叫ServletRequestListener

然后复写里面的方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717132102.png)

创建的时候会触发Initialized，销毁会触发destoryed

# 作用:

监听request、session、application三个域对象的创建，销毁和数据的变更

我只是声明，然后接下来还是由服务器去执行对应的操作（只是具体怎么执行由我们进行控制）

# 使用：

## 1、创建一个普通java类实现指定接口

### request

#### 创建和销毁

监听request的创建和销毁：ServletRequestListener
	requestInitialized(ServletRequestEvent sre)
	requestDestroyed(ServletRequestEvent sre)

形参：
ServletRequestEvent可以获取当前监听到的request对象，对request对象的中的资源进行操作。

（后门，偷偷摸摸地干一些事情）

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717133403.png)

在配置完配置文件后执行

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717133501.png)

request对象先于调用

还可以这么玩

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717134538.png)

request对象创建的时候往里面加了些东西，这样用户请求的servlet里就有东西，而且这个数据一致，变相实现了数据的共享

至于销毁我们可以在执行销毁的时候保留一些想要保留的数据

#### 存储

监听request作用域数据的变更：ServletRequestAttributeListener
attributeAdded(ServletRequestAttributeEvent srae)增加
attributeRemoved(ServletRequestAttributeEvent srae)删除
attributeReplaced(ServletRequestAttributeEvent srae)替换
形参：
ServletRequestAttributeEvent可以获取当前被监听到的request中的数据。
geName()返回监听到的数据的键和getValue()返回监听的到的数据的值（数据检验或者合法化）。

此时如果往request作用域里存储一些数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717133708.png)

方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717134840.png)拿的是我当前增加的那一条数据的键，相应的，getValue()拿到的是增加的数据的值

### session

#### 创建和销毁

监听session的创建和销毁:HttpSessionListener
sessionCreated(HttpSessionEvent se)
sessionDestroyed(HttpSessionEvent se)
形参：
 获取当前被监听到的session对象

使用

在servlet里创建session对象

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717142130.png)没有创建的语句：因为上次并没有关闭session保留了一下，现在执行的是强制销毁的语句（服务器关闭了session是不会销毁的，缓存起来了，这个可以配置）

计数器就可以放在这里

#### 存储

监听session的作用域数据的变更:
attributeAdded(HttpSessionBindingEvent event)
attributeRemoved(HttpSessionBindingEvent event)
attributeReplaced(HttpSessionBindingEvent event)
形参：
获取当前监听到的session中的数据 getName()返回数据的键名，getValue()返回数据的值

### application

#### 创建和销毁

监听application对象的创建和销毁:ServletContextListener
contextInitialized(ServletContextEvent sce)
contextDestroyed(ServletContextEvent sce)
形参：
获取application对象

#### 存储

监听application对象的数据的变更:ServletContextAttributeListener
attributeAdded(ServletContextAttributeEvent event)
attributeRemoved(ServletContextAttributeEvent event)
attributeReplaced(ServletContextAttributeEvent event)
形参:获取当前被监听的数据 getName()返回数据的键名，getValue()返回数据的值

## 2、在项目中的web.xml中配置监听器，让监听器生效

没有指定顺寻，可以任意写

服务器创建的时候就会帮你触发这个监听器（然后也是服务器进行调用）

```xml
 <listener>
<listener-class>监听器类的包名和类名</listener-class>
</listener>
示例：
 <listener>
<listener-class>com.bjsxt.listener.MyListener</listener-class>
</listener>
```

使用

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717133039.png)