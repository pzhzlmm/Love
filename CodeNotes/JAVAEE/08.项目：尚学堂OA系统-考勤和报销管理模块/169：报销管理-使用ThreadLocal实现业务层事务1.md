开启事务,并且中间内容trycatch

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723172805.png)

结束事务正常是提交上去,有问题则回滚,回滚也trycatch一下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723173048.png)

但有个问题就是在开启事务的时候每次获取的都是新的连接

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723173232.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723173248.png)

我们得保证多个Dao都是同一个连接,但这里有多个连接,仍然不是一个事务,可以把这个conn作为参数传入方法,如

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723173415.png)

我们现在想使用的就是ThreadLocal,这个能保证同一个线程里拿到的是同一个

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723173441.png)