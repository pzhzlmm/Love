# day29授课笔记

讲师：宋红康

***

## 一、作业

练习1：

```
创建Class对应运行时类的对象的通用方法，代码实现。以及这样操作，需要对应的运行时类构造器方面满足的要求。
```

```java
Class clazz = Class.forName("com.atguigu.java.Person");
//方式一：要求：运行时类中必须提供空参的构造器，且构造器的访问权限为public
Person p = (Person)clazz.newInstance();


//方式二：要求：运行时类中必须提供空参的构造器
Constructor con = clazz.getDeclaredConstructor();
con.setAccessable(true);
Person p1 = (Person)con.newInstance();
```

练习2：

```
在工程或module的src下有名为”jdbc.properties”的配置文件，文件内容为：name=Tom。如何在程序中通过代码获取Tom这个变量值。代码实现
```

```java
//如何加载配置文件
    @Test
    public void test() throws Exception {
        //方式一：
        //单元测试方法中，相对路径是基于当前的module
        Properties pros = new Properties();
        FileInputStream fis1 = new FileInputStream("src\\jdbc.properties");
        pros.load(fis1);

        String name = pros.getProperty("name");
        System.out.println("name : " + name);


    }
    @Test
    public void test1() throws IOException {
        //方式二：使用类的加载器的方式也可以读取配置文件。默认路径是当前module的src目录下
        Properties pros = new Properties();
        InputStream is = ClassLoader.getSystemClassLoader().getResourceAsStream("jdbc.properties");
        pros.load(is);

        String name = pros.getProperty("name");
        System.out.println("name : " + name);
    }
```

练习3：

```
如何调用方法show()  
类声明如下：
package com.atguigu.java;
class User{
	public void show(){
		System.out.println(“我是一个中国人！”);  
    }  
}
```

```java
//1. 创建运行时类的对象
Class clazz = Class.forName("com.atguigu.java.User");
User user = (User)clazz.newInstance();
//2. 获取show()
Method showMethod = clazz.getDeclaredMethod("show")；
//3. 保证此方法是可访问的
showMethod.setAccessiable(true);
//4. 调用此方法
Object returnVal = showMethod.invoke(user); //returnVal : null
```

## 二、复习

- 反射的概述
  - 反射能做什么？
  - 反射涉及到的相关api
- Class的理解（难点）
- 获取Class的实例（掌握），常用的是3种方式。
- 了解类的加载过程、类的加载器分类

- 如何使用类的加载器，并配合Properties，读取配置文件（掌握）
- 反射的应用1：创建运行时类的对象
- 反射的应用2：获取运行时类的完整的结构：属性、方法、构造器、父类、接口、包、父类的泛型、注解
- 反射的应用3：调用运行时类中的指定结构：属性、方法、构造器 （掌握）
- 反射的应用4：动态代理   （熟悉代理模式、反射的动态性）

## 三、动态代理

- 静态代理

```java
/**
 * 静态代理的例子
 * @author shkstart
 * @create 2020 上午 9:45
 */

interface ClothFactory{
    void produceCloth();
}

//被代理类
class NikeFactory implements ClothFactory{

    @Override
    public void produceCloth() {
        System.out.println("Nike 设计并生产一批衣服");
    }
}

//代理类
class NikeProxyFactory implements ClothFactory{

    ClothFactory factory ;

    public NikeProxyFactory(ClothFactory factory) {
        this.factory = factory;
    }

    @Override
    public void produceCloth() {
        System.out.println("代理Nike生产前的准备工作");

        factory.produceCloth();//调用同名的方法

        System.out.println("代理Nike生产后的后续工作");
    }
}

public class StaticProxyTest {
    public static void main(String[] args) {
        //创建代理类的对象
        NikeProxyFactory factory = new NikeProxyFactory(new NikeFactory());
        factory.produceCloth();
    }
}
```

- 动态代理： 体现了反射的动态性

```java
/**
 * 动态代理的举例：
 *
 * 有两个问题必须要解决的？
 * 1. 如何根据加载到内存中的被代理类的对象，动态的创建一个代理类的对象呢？
 *
 * 2. 当我们调用代理类对象的接口中的同名方法时，如何转化为对被代理类对象同名方法的调用？
 *
 *
 *
 * @author shkstart
 * @create 2020 上午 9:52
 */

interface Human{
    String getBelief();
    void eat(String food);
}

//被代理类
class SuperMan implements Human{

    @Override
    public String getBelief() {
        return "I believe I can fly!";
    }

    @Override
    public void eat(String food) {
        System.out.println("我喜欢吃" + food);
    }
}
//问题1. 如何根据加载到内存中的被代理类的对象，动态的创建一个代理类的对象呢？
class MyProxy{
    //返回一个代理类的对象
    public static Object getProxyInstance(Object targetObj){//targetObj:是被代理类的对象
        //如下方法的参数1：被代理对象的类的加载器
        //参数2：被代理对象所属类所实现的接口
        //参数3：InvocationHandler的实例
        MyInvocationHandler handler = new MyInvocationHandler(targetObj);
        return Proxy.newProxyInstance(targetObj.getClass().getClassLoader(),targetObj.getClass().getInterfaces(),handler);
    }

}

//问题2. 当我们调用代理类对象的接口中的同名方法时，如何转化为对被代理类对象同名方法的调用？
class MyInvocationHandler implements InvocationHandler{

    private Object targetObj;//targetObj:是被代理类的对象
    public MyInvocationHandler(Object targetObj){
        this.targetObj = targetObj;
    }

    //当通过代理类对象调用接口中的同名方法method时，就会自动的调用如下的方法！
    //我们如果希望被代理类对象同名方法被调用的话，只需要重写如下的方法时，指明即可。
    //如下的invoke()的返回值即为被代理类对象同名方法的返回值
    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        //调用被代理类对象的method方法！
        return method.invoke(targetObj,args);
    }
}



public class ProxyTest {
    public static void main(String[] args) {
        //创建一个被代理类的对象
        SuperMan man = new SuperMan();

        //动态的创建一个代理类的对象
        Human proxyInstance = (Human) MyProxy.getProxyInstance(man);
        //通过代理类的对象调用接口中的同名方法,就会动态的调用被代理类对象的同名方法
        String belief = proxyInstance.getBelief();
        System.out.println(belief);

        proxyInstance.eat("四川麻辣烫");

        //################再举一例##########################
        NikeFactory nike = new NikeFactory();
        ClothFactory factory = (ClothFactory) MyProxy.getProxyInstance(nike);
        factory.produceCloth();
    }
}
```

