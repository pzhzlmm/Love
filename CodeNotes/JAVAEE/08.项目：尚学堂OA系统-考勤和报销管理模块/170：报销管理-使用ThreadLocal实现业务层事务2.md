 再另外创建一个数据库的工具类命名为DBUtil2

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723193135.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723193348.png)

现在是一个service调用多个dao,这些dao都不能关闭,因为是有关联的,一个关闭了其他就无法使用了,真正关闭放到业务层去关闭(这时候Dao层响应的方法都执行完毕了)

因此结束事务的时候只是关闭连接,其他的都不关闭

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723193613.png)

service的方法因而也对应的改成DBUtil2

![1563881892995](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563881892995.png)

关闭连接

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723193901.png)

之所以要建两个数据库工具类只要是一个用于业务层事务,一个用于Dao层事务

![1563882221428](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563882221428.png)