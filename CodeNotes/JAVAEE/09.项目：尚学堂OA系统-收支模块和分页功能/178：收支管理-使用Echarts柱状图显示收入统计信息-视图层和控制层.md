与demo里不同的是,demo里是静态的数据,而我们这里的数据要来自于数据库(要通过Ajax返回json的数据)

## 创建jsp

incomeestatics.jsp,并改路径

引入JQ与echart的js文件

准备一个div(可以拿官网的实例文件进行修改)

而今页面加载完做如下操作

![1563933245776](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563933245776.png)

写一个ajax,如果成功了执行内部代码(把外层代码复制进去)

![1563933334225](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563933334225.png)

指定servlet

![1563933457780](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563933457780.png)

更改标题,更改内部数据更改为arr[0]与arr[1]

![1563933575290](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563933575290.png)

![1563933542656](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563933542656.png)

## servlet

继承base,接口,实现,写对应方法

调用业务层获取json字符串,并返回(把原实例里拿过来进行测试)

![1563933704716](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563933704716.png)

这个内容最好采用双引号