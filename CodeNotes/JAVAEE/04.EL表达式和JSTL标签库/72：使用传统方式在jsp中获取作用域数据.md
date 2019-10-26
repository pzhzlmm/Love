# 传统方式

## 建立

建立项目16-EL,别名el

建立el.jsp,字符编码

建立包com.bjsxt.servlet

建立servlet名字为ELServlet,别名es

部署

## 编写代码

### 普通数据



![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715103129.png)

接下来我们把从servlet里流转出的数据展现到jsp上去

取数据@@@

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715103314.png)

访问es即可,其会通过调用流转到jsp,效果如下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715103519.png)

### 对象数据

新建pojo包,下建User类,成员变量如下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715103719.png)

创建对象,并把对象放作用域里流转给jsp

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715103905.png)

显示user的看电影

导包,获取数据,强转,get方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104010.png)

效果

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104042.png)

### 集合数据

#### list集合

创建list集合对象,存储,放进req里

##### 存储字符数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104239.png)

显示C

同样需要强转

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104408.png)

##### 存储对象数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104539.png)

要求页面显示写代码

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104639.png)

#### map集合

##### 存储字符串数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104842.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104807.png)

##### 存储对象数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715104918.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190715105008.png)

对象的属性也有可能属性,因此可能套许多层

转懵逼了不要数括号,重新写就是了

## 缺陷

1、书写比较繁琐
2、需要导包
3、需要强转
	
	