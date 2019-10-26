我们在员工管理中实现了类似的功能,这里用Ajax实现,员工中是跳转到servlet再跳转到jsp,这里我们直接跳转到jsp,但jsp中并不存在数据,这时候再通过ajax发送请求得到以下数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723102431.png)

## jsp

创建dutyList.jsp,再从html转,改对应引用地方的路径

jstl是转发重定向的时候使用的,跟这个没有关系@@@,我们用Ajax,然后采用回调函数发起局部请求来做这件事@@@

页面加载后调用

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723102923.png)

## servlet

编写对应的方法代码,部分可以从部门的servlet里去查找

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723103323.png)

写完测试下,list已经变成了json数组的方式(在回调函数里,我们给它变成json对象,拼接的字符串通过局部刷新一次性拼接

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723103153.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723103813.png)

这里写的名字要参考json里的对象的名字去写

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723104056.png)

设定jsp的id值用来传参

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723103841.png)