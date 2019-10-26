RequestMapping

## 作用

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801162847.png)

一个映射关联,请求这个路径,然后就直接到这个方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801163004.png)

## 源码

可以放方法上,也可以放类上

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801163057.png)

### path

如果类名上加了注解path为user,其跳转路径得写全

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801163503.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801163433.png)

观察源码,path,value的相互引用(aliasfor:别名),作用一模一样,可以随意替换,如果只有一个属性,其value可以省略

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801164620.png)

### method

超链接一定会发get请求,用method可以决定什么样的请求方式,如果这里改成post,那么get发送的请求就无法执行

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801164903.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801165220.png)

### params

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801165437.png)

代表请求的参数里必须有username,没有就不执行(可以拼问号传参)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801165538.png)

如果是这么写的name传的值必须和params里的值一毛一样

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801165617.png)

### headers

发送的请求中必须包含请求头

如果不包含这个请求头,那么就没办法执行

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801165818.png)

## 总结

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801165747.png)

![1564649443994](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564649443994.png)