编写代码

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801114312.png)

## 搭建开发环境

![1564631047493](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564631047493.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801114433.png)

命名项目名后选择路径仓库,默认会去网上下载一系列插件如此很浪费时间,于是在其中添加一组键值对

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801114712.png)

## 补全目录

new两个文件夹

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801131219.png)

更改类文件类型

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801131300.png)

分别是资源与目录

## 导入开发JAR包

建立依赖,复制代码即可,可以把版本锁定,后面的位置用的都是同一版本,方便修改

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801131638.png)

版本粘贴到对应位置,依赖也粘贴到对应位置

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801131803.png)

## 配置前端控制器

即一个servlet

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132015.png)

## SpringMVC的配置环境

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132126.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132145.png)

## 部署环境

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132515.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132646.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132709.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801132736.png)

写项目名称

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801144030.png)

## 写jsp

删了原来的创建一个新的

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801142806.png)

当点击到时

## 控制器类

![1564638717722](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564638717722.png)

## 注解扫描

先拷贝xml文字,再开启注解扫描

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801135730.png)

如此controller就能被扫描到了,其中的类就能被找到了

## 添加注解

等于把这个类交给IOC这个容器进行管理

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801140307.png)

填入参数,设置这个方法的请求路径

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801142719.png)

## 加载Spring

在web.xml中加载我们的springMVC.xml

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143021.png)

设置这个服务器一启动就创建这个对象(正常第一次发请求才创建)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143144.png)

## 跳转

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143408.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143502.png)

## 配置视图解析器

类名是固定的

可以帮我们跳到指定的对象

prefix:文件所在的目录

suffix:文件的后缀名

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143747.png)

## 开启注解支持(可忽略)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143838.png)

## 填写路径

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801143945.png)

## 流程

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801133443.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801133544.png)

前端中转器:只起到一个中转的作用

处理器映射器:找到具体哪个类去执行

适配器可以把任何方法全部都适配上

视图解析器可以跳转到具体的某个页面去

