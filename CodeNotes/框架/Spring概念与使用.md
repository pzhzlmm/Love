Spring 

# Spring简介及官方压缩包介绍
## 概念

Spring就是一个大工程,里面生产的所有东西都叫做bean
Spring是一个开源的轻量级控制反转(IoC)和面向切面(AOP)的容器框架。
高内聚,低耦合:能不调用你就不调用你,我最后还把功能给完成了.
IoC : Inversion of Control
AOP : Aspect Oriented Programming
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726173542.png)

##  Spring官方压缩包介绍


![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726095639.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726095555.png) 

docs:内容一样,格式不同

libs下jar包,每三个为一体

## 常用jar包说明
A.spring -aop 提供AOP （面向切面编程）实现
B.spring- aspects spring提供对AspectJ框架的整合
C.spring- -beans 提供IoC （控制反转）的基础实现
D.spring - context Spring提供在IoC基础功能上的扩展服务
E.spring- context -support 对spring-context的扩展支持
F.spring-core spring的核心组件
G.spring- expression spring表达式语言
H.spring- jdbc spring提供的对JDBC支持包
I.spring = orm 整合第三方的ORM框架
J.spring- test 对单元测试和集成测试的简单封装
K.spring tx 对事务管理的封装
L.spring- web SpringMVC支持WEB端应用部署架构
M.spring- -webmVc REST Web服务和Web应用的视图控制器的实现


# 02.Spring版本差异及IoC介绍
## Spring版本差异
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726101328.png)
## Spring之IoC
1.IoC与DI
1.1 IoC
  控制反转（IoC，Inversion of Control），是一个概念，是一种思想。控制反转就 是对对象控制权的转移，从程序代码本身反转到了外部容器。
  (原来通过new来创建实例,现在由Spring来创建对象实例)
  把对象的创建、初始化、销毁等工作交给spring容器来做。由spring容器控制对象的生命周期。
  之后需要实例对象时，从spring工厂（容器） 中获得，需要将实现类的全限定名称配置到xml文件中
1.2 DI
  依赖注入：Dependency Injection。依赖注入DI是指程序运行过程中，若需要调用另  一个对象协助时，无须在代码中创建被调用者，而是依赖于外部容器，由外部容器创建后传递给程序。
  依赖注入是目前最优秀的解耦方式。依赖注入让Spring的Bean之间以配置文件的方式
  组织在一起，而不是以硬编码的方式耦合在一起的。
  1.3 IoC与DI的关系
  IoC是一个概念，是一种思想，其实现方式多种多样。当前比较流行的实现方式之一
  是DI(即DI是ioC的一个具体实现

# 03.SpringIoC第一个程序环境搭建

## 导入jar包（基本7个）
新建文件夹导入jar包(这四个包加上一个日志包必不可少)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104051.png)
接着导入依赖jar包
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104209.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104234.png)

测试

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104308.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104320.png)

导入

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104347.png)

## 创建spring配置文件

### 创建

推荐用名

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104435.png)

### 创建约束信息

找到

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104553.png)

并且找到这段文字

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104753.png)

拷贝到新建的文件当中

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726104850.png)

在bean之中去定义bean

### 添加本地约束条件

使其在无网条件下能正常运行

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726105134.png)

选择add,把复制的代码里的网址再拷贝进去

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726105232.png)

再查找本地配置文件

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726105320.png)

再选择其中最高版本4.1的文件,最后确认即可

# 04.SpringIoC第一个程序的实现

首先定义一个接口,并定义一个方法
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726110416.png)
并实现这个方法
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726110440.png)
以前的方法做一个测试类,并执行
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726110639.png)
我们追求的是:高内聚,低耦合
## Bean的定义与注册
现在用bean来做,id是bean的唯一标识
bean里写实现类的全限定路径,并按住ctrl键移动到路径上检测一下
相当于new了一个对象出来
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726111006.png)

意义
<bean>配置需要创建的对象。
id ：用于之后从spring容器获得实例时使用的
Class ：需要创建实例的全限定类名。

## 从spring容器中获取Bean

首先创建容器对象
通过ApplicationContext里的实现类来创建对象(以后创建对象让Spring去new)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726111212.png)
获取Bean
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726111325.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726111406.png)
执行

```java
public class SomeTest {
	//该方式的缺点：当前测试类与service实现类耦合到一起
	@Test
	public void someTest(){
		SomeService service = new SomeServiceImpl();
		service.doSome();
	}
	
	//该方式的优点：实现了测试类与service实现类的解耦合
	@Test
	public void someTest01(){
		//创建容器对象,ApplicationContext容器初始化时，所有的容器中的bean创建完毕
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		SomeService service = ac.getBean("someServiceImpl", SomeService.class);
		service.doSome();
	}
	@Test
	public void someTest02(){
		//创建容器对象，BeanFactory当调用getBean获取相应对象时，才创建对象
		BeanFactory bf = new XmlBeanFactory(new ClassPathResource("applicationContext.xml"));
		SomeService service = bf.getBean("someServiceImpl", SomeService.class);
		service.doSome();
	}
}
```

# 05.BeanFactory和ApplicationContext区别

## 源码

上节课是通过ApplicationContext里的实现类来创建对象,这个接口还继承自别的接口

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112108.png)

其中这个接口继承自BeanFactory

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112140.png)

也可以通过这个类取创建对象

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112206.png)

这个类已经过时了

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112310.png)

这个Resource同样是一个接口,点进去,查看其实现类

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112423.png)

查看它的构造器

这个path即我们配置文件的路径

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112507.png)

## 使用BeanFactory创建对象

此时我们测试用这个方法去创建

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726112616.png)

## 创建方式的区别

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726114545.png)

后者好处是不会占内存,但坏处也是你使用Bean的使用要现创建才能使用

# 06.Bean的装配之动态工厂方式

## Bean的装配

Bean的装配，即Bean对象的创建。
## 默认装配方式(构造方式)

即上节课的方式
### 动态工厂Bean
工厂对象
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726141141.png)

修改配置文件

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726141427.png)

再取个名字(id)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726141629.png)

测试

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726141716.png)

# 07.Bean的装配之静态工厂方式

没必要创建对象

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726142000.png)

通过类名.的方式去调用对象,从而去创建someServieceImpl

# 08.Bean的作用域

作用域限定了Spring Bean的作用范围,在Spring配置文件定义Bean时,通过声明scope配置项,可以灵活定义Bean的作用范围。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726142704.png)

获取到的是同一个对象,但如若是这样

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726142919.png)每次执行相当于重新new了一个对象,创建了两次就相当于两个对象

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726142815.png)

单态模式singleton\原型模式prototype

默认是singleton,如果改为prototype,每次获取的都是一个新的对象

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726143146.png)

# 09.DI之设值注入

## 基于XML的DI

所谓注入，可理解为对象的属性赋值
我们先创建两个实体类
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726143609.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726143657.png)
xml(用默认方式进行创建)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726143813.png)
此时此刻在我们的容器里就有这样的对象了,只是还没有值

### 设值注入

简单数据类型和引用数据类型注入
#### 简单
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726144208.png)
测试
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726144305.png)
#### 引用
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726144404.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726144449.png)
### 10.集合属性注入

array、set、list、map、properties
实体类
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726145934.png)
注册service
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150108.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150142.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150207.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150300.png)
测试
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150350.png)

### 11.域属性自动注入

byName\byType；局部和全局配置
byName
要求注入的id必须和我们类里面的id保持一致,如
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150809.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150620.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726150907.png)
byType  要求容器中与被注入属性类型具有is-a关系的bean，只能有一个
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151038.png)
目前使用的都是局部配置,想使用哪个就放哪个标签
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151109.png)
全局配置
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151254.png)

### 12.空字符串或null的注入

意思是给当前属性注入一个空串
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151444.png)
测试效果
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151515.png)
也可使用null
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151541.png)
即
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151611.png)

###   13.DI之构造注入
通过构造方法来完成属性的赋值
于是我们在实体类里提供对应的带参无参构造器
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726151921.png)
通过name进行赋值(常用)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726152054.png)
也可以使用index,其对应构造器里参数的编号,第一个是0,第二个是1,以此内推
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726152215.png)
还可以什么都不加,但是要求其参数类型必须和构造器里的参数类型一一对应
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726152243.png)

## 14.DI之注解

### 环境搭建
导入aop包、添加context约束头信息（组件扫描器）
### 常用注解
@Component、@Scope、@Value、@Resource、@Autowired
45自动注入
### 演示
导入
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160046.png)
添加头信息
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160140.png)
bean的注册也不需要手动注册了,直接扫描需要扫描的包即可
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160327.png)
在类名添加组件注解
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160426.png)
表示当前类交给Spring容器管理
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160513.png)
综合
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160729.png)
也可以通过byname的方式进行注入
首先给Partner取个名字
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726160929.png)
使用与Qualifier联合使用(引用其名称就好)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726161013.png)
也可以使用@resource的方式注入
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726161149.png)
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726161249.png)
## 15.Bean相关常用注解
与@Component具有相同功能的还有另外3个注解(**把当前类交给Spring容器管理**)
@Repository ：该注解添加在Dao实现类上
@Service：该注解添加在Service实现类上
@Controller：该注解添加在Controller类上
还有@Scope,经常是@Scope("prototype"),不然默认是单的

scope的取值:
singleton 表示在spring容器中的单例，通过spring容器获得该bean时总是返回唯一的实例
prototype表示每次获得bean都会生成一个新的对象
request表示在一次http请求内有效（只适用于web应用）
session表示在一个用户会话内有效（只适用于web应用）
globalSession表示在全局会话内有效（只适用于web应用）


# 16.静态代理

Spring之AOP
AOP的底层,默认就是通过代理去实现的
## Aop引入 
什么是代理？
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727171453.png)
为什么使用代理？
    可以隐藏目标类的具体实现;
    在不修改目标类代码的情况下能够对其功能进行增强。
代理分类
	代理分为静态代理和动态代理

### 静态代理
若代理类在程序运行前就已经存在，那么这种代理方式被成为 静态代理 ，
这种情况下的代理类通常都是我们在Java代码中定义的。 通常情况下， 静态代理中的代理类和目标类会实现同一接口或是派生自相同的父类。
代码示例：
#### 测试环境的搭建
如我们现在想对这个方法进行增强
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726162347.png)
#### 静态代理的实现（目标类和代理类实现相同接口）
定义一个新类作为代理类,并且要求和目标类实现相同的接口
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726162439.png)
其接口叫做主业务接口
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726162545.png)
测试类
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190726162657.png)
