![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724141004.png)

![1563948732241](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563948732241.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724141230.png)

导入工具类即可

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724141550.png)

在页数多的情况下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724141819.png)

以当前页面为中心,前面显示几页,后面显示几页

后台复杂了,前台就简单了

list放查询到的学生数据(使用了一个泛型,如果查的是学生,那么T就是学生,如果是新闻,相应的数据就是新闻)

## 设置记录总数:

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724142232.png)

直接传进来,顺便还调用了下设置总页数的方法

## 计算总页数

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724142413.png)

"this.size > 0 && this. totalCount > 0"保证健壮性

接着又自动调用了一个setNumber方法

## 获取页面集合

即显示这个页码的集合的

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724142644.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724142725.png)这个代码技巧性很高可读性不高@@@,这里提供了另外一种实现思路

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724142838.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724143000.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724143024.png)

