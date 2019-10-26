





Spring

# 17.**JDK动态代理**

​      代理类在程序运行时创建的代理方式被成为动态代理。 也就是说，这种情况下，代理类并不是在Java代码中定义的，而是在运行时根据我们在Java代码中的“指示”动态生成的。
   常用的动态代理有两类：JDK动态代理和CGLIB动态代理

##  两者应用场景：

​      如果目标对象实现了接口，采用JDK的动态代理 
​      如果目标对象没有实现了接口，必须采用CGLIB动态代理

## 代码示例：

###         JDK动态代理（JDK 提供的代理实现.不需要导入额外jar包）

不需要手写代理类的@@@

```java
public class SomeTest {
	public static void main(String[] args) {
		//定义目标对象
		final SomeService target = new SomeServiceImpl();
		//定义目标对象的代理对象
		SomeService proxy = (SomeService) Proxy.newProxyInstance(target.getClass().getClassLoader(),//目标类的类加载器
													target.getClass().getInterfaces(),
                                                                 //目标类实现的所有接口
													new InvocationHandler() {//调用处理器
														//proxy:代理对象
														//method:目标方法
														//args:目标方法参数
														@Override
														public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
															String result = (String) method.invoke(target, args);
															return result.toUpperCase();
														}
													});
		String result1 = proxy.doSome();
		System.out.println(result1);
	}
}
```



### 18.CGLIB动态代理（引入cglib的jar包）

导入jar包,别的包先去掉,只保留

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727093501.png)

目标类不需要事先someservice接口

```java
//cglib动态代理工厂
public class CglibProxyFactory implements MethodInterceptor{
	private SomeServiceImpl target;
	public CglibProxyFactory() {
		super();
	}
	public CglibProxyFactory(SomeServiceImpl target) {
		super();
		this.target = target;
	}

	//创建cglib代理对象的方法
	public SomeServiceImpl proxyCreator(){
		//创建增强器
		Enhancer enhancer = new Enhancer();
		//指定父类（指定目标类）
		enhancer.setSuperclass(SomeServiceImpl.class);
		//指定回调接口对象
		enhancer.setCallback(this);
		//创建cglib代理对象
		return (SomeServiceImpl) enhancer.create();
	}

	@Override
	public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
		String result = (String) method.invoke(target, args);
		return result.toUpperCase();
	}
```

测试类

```java
public class SomeTest {
	public static void main(String[] args) {
		//定义目标对象
		SomeServiceImpl target = new SomeServiceImpl();
		//定义目标对象的代理对象
		SomeServiceImpl proxy = new CglibProxyFactory(target).proxyCreator();
		String result1 = proxy.doSome();
		System.out.println(result1);
	}
}
```



# 19.Aop介绍

面向切面编程，就是将交叉业务逻辑封装成切面，利用AOP的功能将切面织入到主业务逻辑中。所谓交叉业务逻辑是指，通用的、与主业务逻辑无关的代码，如安全检查、事务、日志等。

若不使用AOP，则会出现代码纠缠，即交叉业务逻辑与主业务逻辑混合在一起。这样，会使主业务逻辑变的混杂不清。

## Aop基本术语介绍

### 切面

切面泛指交叉业务逻辑。比如事务处理、日志处理就可以理解为切面。常用的切面
有**通知**与顾问。实际就是对主业务逻辑的一种增强。

### 织入

织入是指将切面代码插入到目标对象的过程。

### 连接点

连接点指切面可以织入的位置。

### 切入点

切入点指切面具体织入的位置。
连接点范围更大,切入点指的是具体的哪一个位置
只有被增强的才叫切入点

### 通知(Advice)

通知是切面的一种实现，可以完成简单织入功能（织入功能就是在这里完成的）。
通知定义了增强代码切入到目标代码的时间点，是目标方法执行之前执行，还是之
后执行等。通知类型不同，切入时间不同。
### 顾问(Advisor)
顾问是切面的另一种实现，能够将通知以更为复杂的方式织入到目标对象中，是将
通知包装为更复杂切面的装配器。 不仅指定了切入时间点,还可以指定具体的切入
点
# 20.基于Schema-based方式之前置通知 
## AOP编程环境搭建
导入两个jar包(aop/aopalliance)

```java
public class SomeServiceImpl implements SomeService {
	public SomeServiceImpl() {
		System.out.println("无参构造器执行！");
	}
	@Override
	public void doSome() {
		System.out.println("doSome()方法执行！"+1/0);
	}
	@Override
	public String doOther() {
		System.out.println("doOther()方法执行！");
		return "love";
	}
}
```



## Spring对AOP的实现（基于Schema-based方式）
## 常用通知分类

### 前置通知(MethodBeforeAdvice)
```java
//切面：前置通知
public class MyMethodBeforeAdvice implements MethodBeforeAdvice {
	/**
	 * method:目标方法
	 * args：目标方法参数列表
	 * target：目标对象
	 */
	@Override
	public void before(Method method, Object[] args, Object target) throws Throwable {
		System.out.println("前置通知的before（）方法执行！");
		
	}

}
```
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="
        http://www.springframework.org/schema/beans 
        http://www.springframework.org/schema/beans/spring-beans.xsd">
    <!-- 注册目标类 -->
	<bean id="someServiceImpl" class="com.bjsxt.service.impl.SomeServiceImpl"></bean>
    <!-- 注册切面：前置通知 -->
    <bean id="myMethodBeforeAdvice" class="com.bjsxt.aspects.MyMethodBeforeAdvice"></bean>
    <!-- 注册切面：后置通知 -->
    <bean id="myAfterReturningAdvice" class="com.bjsxt.aspects.MyAfterReturningAdvice"></bean>
    <!-- 注册切面：环绕通知 -->
    <bean id="myMethodInterceptor" class="com.bjsxt.aspects.MyMethodInterceptor"></bean>
    <!-- 注册切面：异常通知 -->
    <bean id="myThrowsAdvice" class="com.bjsxt.aspects.MyThrowsAdvice"></bean>
    <!-- 注册代理 -->
    <bean id="proxyFactoryBean" class="org.springframework.aop.framework.ProxyFactoryBean">
    	<!-- 指定目标对象 -->
    	<property name="target" ref="someServiceImpl"></property>
    	<!-- 指定目标类实现的所有接口 -->
    	<property name="interfaces" value="com.bjsxt.service.SomeService"></property>
    	<!-- 指定切面 -->
    	<property name="interceptorNames" value="myThrowsAdvice"></property>
    </bean>
    
</beans>

```
测试类

```java
public class SomeTest {
	
	@Test
	public void someTest01(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		SomeService service = ac.getBean("proxyFactoryBean", SomeService.class);
		service.doSome();
		String result = service.doOther();
		System.out.println(result);
	}
}
```



### 21.基于Schema-based方式之后置通知(AfterReturningAdvice)

```java
//切面：后置通知
public class MyAfterReturningAdvice implements AfterReturningAdvice {
	/**
	 * returnValue:目标方法的返回值
	 */
	@Override
	public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
		System.out.println("后置通知的afterReturning（）方法执行！returnValue:"+ returnValue);
		if(returnValue!=null){
			System.out.println("后置通知的afterReturning（）方法执行！returnValue:"+((String)returnValue).toUpperCase());
			
		}
	}

}
```

### 22.基于Schema-based方式之环绕通知(MethodInterceptor)

之前之后都执行

```java
//切面：环绕通知
public class MyMethodInterceptor implements MethodInterceptor {
	/**
	 * invocation:方法调用器
	 */
	@Override
	public Object invoke(MethodInvocation invocation) throws Throwable {
		System.out.println("环绕通知：目标方法执行之前！");
		//调用执行目标方法
		Object result = invocation.proceed();
		if(result!=null){
			result = ((String)result).toUpperCase();
		}
		System.out.println("环绕通知：目标方法执行之后！");
		return result;
	}

}
```



### 23.基于Schema-based方式之异常处理通知(ThrowsAdvice)

```java
//切面：异常通知
public class MyThrowsAdvice implements ThrowsAdvice {
	public void afterThrowing(Exception ex){
		System.out.println("异常通知执行！");
	}
}
```

## 通知的用法步骤
​     定义目标类
​     定义通知类
​     注册目标类
​     注册通知切面
​     注册代理工厂Bean类对象ProxyFactoryBean 
​     客户端访问动态代理对象

# 24-34.**基于AspectJ方式的通知(注解,xml)**

AspectJ对AOP的实现
对于AOP这种编程思想，很多框架都进行了实现。Spring就是其中之一，可以完成面向切面编程。然而，AspectJ也实现了AOP的功能，且其实现方式更为简捷，使用更为方便，而且还支持注解式开发。所以，Spring又将AspectJ的对于AOP的实现也引入到了自己的框架中。 
在Spring中使用AOP开发时，一般使用AspectJ的实现方式。

## AspectJ的通知类型

aspectj通知类型，只定义类型名称。已经方法格式个数：6种，知道5种，掌握1种
before：前置通知（应用：各种校验）在方法执行前执行，如果通知抛出异常，阻止方法运行。
afterRetuming后置通知（应用，常规数据处理）方法正常返回后执行，如果方法中抛出异常，通知无法执行.
必须在方法执行后才执行，所以可以获得方法的近回值。。
around环绕通知（应用：十分强大，可以做任何事情）方法执行前后分别执行，可以阻止方法的执行。必须手动执行目标方法。
afterThrowing抛出异常通知（应用：包装异常信息）~方法抛出异常后执行，如果方法没有抛出异常，无法执行。
after最終通知（应用：清理现场）方法执行完毕后执行，无论方法中是否出现异常。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727161112.png)

## AspectJ的切入点表达式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727102517.png)
切入点表达式要匹配的对象就是目标方法的方法名。所以，execution表达式中明显就是方法
的签名。注意，表达式中加[ ]的部分表示可省略部分，各部分间用空格分开。在其中可以使
用以下符号：
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727153133.png)
概括
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727153423.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727153553.png)

## *AspectJ的切入点表达式

举例： 
execution(public * *(..))  
指定切入点为：任意公共方法。 
execution(* set *(..))  
指定切入点为：任何一个以“set”开始的方法。 
execution(* com.xyz.service.*.*(..))  
指定切入点为：定义在service包里的任意类的任意方法。 
execution(* com.xyz.service..*.*(..)) 
指定切入点为：定义在service包或者子包里的任意类的任意方法。“..”出现在类名中时，
后面必须跟“*”，表示包、子包下的所有类。 
execution(* *.service.*.*(..)) 
指定只有一级包下的serivce子包下所有类(接口)中的所有方法为切入点  
**execution(* *..service.*.*(..))** 
指定所有包下的serivce子包下所有类(接口)中的所有方法为切入点 
execution（* com.itheima.crm.*.service..*..））.

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727154707.png)



## 搭建AspectJ的开发环境

### 类

1.目标类：接口+实现.
2.切面类：编写多个通知，采用3 uspecti i通知名称任意（方法名任意）。
3 aop编程，将通知应用到目标类。
4.测试。

### Jar包

aop联盟规范*
spring aop实现*
aspet规范。
spring aspect实现

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727160049.png)

#### 实现类

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727160209.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727160333.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727160413.png)

引入AOP约束

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727153335.png)

### AspectJ对于AOP的实现有两种方式：

### 注解方式

#### 【代码示例】

```xml
    <!-- 注册目标类 -->
	<bean id="someServiceImpl" class="com.bjsxt.service.impl.SomeServiceImpl"></bean>
    <!-- 注册切面 -->
    <bean id="myAspect" class="com.bjsxt.aspects.MyAspect"></bean>
    <!-- 注册自动代理 -->
    <aop:aspectj-autoproxy/>
    
```

```java
//切面
@Aspect  //表明当前类是一个切面
public class MyAspect {
	//该注解表明当前方法是前置通知方法
	//*..:多级包
    //.*:任意的内部接口
    //(..)方法参数任意
	@Before("execution(* *..service.*.doSome(..))")
	public void before(){
		System.out.println("前置通知方法执行！");
	}
	
	//该注解表明当前方法是后置通知方法
	//returning:目标方法的返回值
	@AfterReturning(value="execution(* *..service.*.doOther(..))",returning="result")
	public void afterReturning(Object result){
		System.out.println("后置通知方法执行！ 目标方法的返回值是"+result);
	}
	
	//该注解表明当前方法是环绕通知方法
	
	@Around("execution(* *..service.*.doOther(..))")
	public Object around(ProceedingJoinPoint pjp) throws Throwable{
		System.out.println("环绕通知：目标方法执行之前！");
		String result = (String) pjp.proceed();
		if(result!=null){
			result = result.toUpperCase();	
		}
		System.out.println("环绕通知：目标方法执行之后！");
		return result;
	}
	
	//该注解表明当前方法是异常通知方法
	
	@AfterThrowing(value="execution(* *..service.*.doSome(..))",throwing="ex")
	public void throwing(Exception ex){
		System.out.println("异常通知方法执行！ 异常信息为："+ex);
	}
	
	//该注解表明当前方法是最终通知方法
	@After("execution(* *..service.*.doSome(..))")
	public void after(){
		System.out.println("最终通知方法执行！");
	}
	
}
```

### xml方式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727161327.png)

前置

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727161653.png)

前置完整

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727162126.png)

后置完整

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727162738.png)

环绕

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727162811.png)

抛出异常/最终

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190727163246.png)

#### 【代码示例】

```xml
<!-- 注册目标类 -->
	<bean id="someServiceImpl" class="com.bjsxt.service.impl.SomeServiceImpl"></bean>
    <!-- 注册切面 -->
    <bean id="myAspect" class="com.bjsxt.aspects.MyAspect"></bean>
    <!-- AOP配置 -->
    <aop:config>
    	<!-- 定义切入点 -->
    	<aop:pointcut expression="execution(* *..service.*.doSome(..))" id="doSomePC"/>
    	<aop:pointcut expression="execution(* *..service.*.doOther(..))" id="doOtherPC"/>
    	<aop:aspect ref="myAspect">
    		<aop:before method="before" pointcut-ref="doSomePC"/> 
    		<aop:before method="before(org.aspectj.lang.JoinPoint)" pointcut-ref="doSomePC"/>
    		<aop:after-returning method="afterReturning(java.lang.Object)" pointcut-ref="doOtherPC" returning="result"/>
    		<aop:around method="around" pointcut-ref="doOtherPC"/> 
    		<aop:after-throwing method="throwing(java.lang.Exception)" pointcut-ref="doSomePC" throwing="ex"/> 
    		<aop:after method="after" pointcut-ref="doSomePC"/>
    	</aop:aspect>
    </aop:config>
```
```java
//切面
public class MyAspect {
	//该注解表明当前方法是前置通知方法
	
	public void before(){
		System.out.println("前置通知方法执行！");
	}
	public void before(JoinPoint jp){
		System.out.println("前置通知方法执行！jp="+jp);
	}
	
	//该注解表明当前方法是后置通知方法
	
	public void afterReturning(Object result){
		System.out.println("后置通知方法执行！ 目标方法的返回值是"+result);
	}
	
	//该注解表明当前方法是环绕通知方法
	
	public Object around(ProceedingJoinPoint pjp) throws Throwable{
		System.out.println("环绕通知：目标方法执行之前！");
		String result = (String) pjp.proceed();
		if(result!=null){
			result = result.toUpperCase();
			
		}
		System.out.println("环绕通知：目标方法执行之后！");
		return result;
	}
	
	//该注解表明当前方法是异常通知方法
	
	public void throwing(Exception ex){
		System.out.println("异常通知方法执行！ 异常信息为："+ex);
	}
	
	//该注解表明当前方法是最终通知方法
	
	public void after(){
		System.out.println("最终通知方法执行！");
	}
	
}
```

```java
public class SomeTest {

	@Test
	public void someTest01(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		SomeService service = ac.getBean("someServiceImpl", SomeService.class);
		service.doSome();
		String result = service.doOther();
		System.out.println(result);
	}
}

```

