查询这里可以通过servlet来写,这里我们用js发送ajax请求来实现该功能

添加id

![1563850460337](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563850460337.png)

在上次写的页面加载列表后接着往后写

![1563852847243](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563852847243.png)

## servlet

### 获取数据

先获取非日期其他

![1563850841673](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563850841673.png)

这里trycatch主要是考虑到deptno可能为空,写在这里提升程序的健壮性

再获取日期,类似的写个Date,避免接收到非法数据报错

![1563850977552](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563850977552.png)

### 业务层操作

![1563851234319](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563851234319.png)

## service

控制层就写完了,接下来写业务层findDuty,查询符合条件的考勤信息

![1563851302981](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563851302981.png)

## Dao

![1563851319203](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563851319203.png)

![1563851485966](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563851485966.png)

![1563851510219](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563851510219.png)

