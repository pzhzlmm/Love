# 新建项目

复制原有web项目,别名为project2

#### 没server咋找server

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714164354.png)

然后选server即可

访问原有页面,404,进不去,因为项目名变成2了,找对应位置改一下就好

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714164813.png)

# 新建servlet

写一个servlet,其他Servlet的变成该servlet的方法

新建servlet,DataServlet,别名为data,里面方法分别是登录退出注册,把原有的servlet的代码拿过来即可

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714165522.png)

servlet创建一个，在service方法中动态的调用请求处理方法。

注:请求中需要附带要调用的方法名

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714170035.png)

这个值写在对应jsp隐藏的input中,如登录

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714174240.png)

再a标签里的登出也可这样

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714174704.png)

# 动态调用

预先无法确定调用哪个方法就妥妥地需要使用反射

获取方法之前要获取方法所在的类对象@@@

![1563095189292](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563095189292.png)

trycatch一下

接着就引入方法执行

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714170928.png)

把原来servlet的内容复制进该servlet方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714171414.png)

以UserServlet为例,黄线处代码不用复制,下面的其他内容拷贝进对应方法中

异常抛上去

另外两个同理,DataServlet就写好了,另外数据提交的地址改成data

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190714172319.png)

再增加input设置name和value,传递调用的函数名即可(隐藏)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715090613.png)



