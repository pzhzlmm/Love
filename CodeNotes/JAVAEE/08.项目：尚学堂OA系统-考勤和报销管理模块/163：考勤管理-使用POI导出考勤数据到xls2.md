目标:从导出开始把数据写到单元格里3

## jsp修改

先在jsp里给导出一个id好对它进行操控

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723144612.png)

在js里对其绑定单击事件,并调用相应的servlet

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723144747.png)

## servlet

复制findDuty,获取三个条件,调用业务层完成查询肯定是需要的,只是不需要返回json字符串了

我们现在需要用到POI返回一个流的,因此直接调用相应的方法(这里把上节课的内容拿过来然后修改了)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145222.png)

表名改成考勤信息

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145257.png)

合并单元格名

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145318.png)

表头

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145413.png)

表内容,往里面填充值即可

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145632.png)

然后改下路径

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145706.png)

这里这么写的话是保存在了本地,即服务器的位置,并没有保存到客户端

如此我们给一个响应,前面传一个response

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723145851.png)

然后在保存的时候进行相应

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723150133.png)

但这样写返回的是一个网页,找到xml如此再在找到这句话

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723150104.png)

写进去,返回的就是一个文档了

并修改一下头信息,属性为附件,会弹出一个框让你另存为的,并设置文件的名字

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723150400.png)

效果

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723150508.png)

