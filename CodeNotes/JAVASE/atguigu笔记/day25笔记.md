# day25授课笔记

## 一、作业

### **面试题：HashMap的底层实现原理**

- HashMap使用的存储结构：jdk8:数组+链表+红黑树   jdk7:数组+链表
  - 加了红黑树以后，提高数据的查找、对比的效率
  - 链表：“七上八下”

- 初始化的问题：new HashMap()

  - jdk 8：没有初始化底层的数组； jdk7实例化时就初始化了底层的数组

  - jdk8：底层的数组Node[]   :     (class HashMap.Node implements Map.Entry)

     jdk7：底层的数组Entry[]  :  (class HashMap.Entry implements Map.Entry)

    class Node/Entry<K,V>{

    ​	int hash;

    ​        K key;

    ​	V value;

     	Node/Entry next;

    }

- 添加数据的过程：

  - 在jdk8中首次调用put()：底层会创建长度为16的数组，然后添加数据
  - 在jdk7中首次调用put()：直接添加数据

  - 具体的添加过程：

  ```
   1. 当添加key1-vulue1时，首先通过key1所在类的hashCode()方法，计算key1的哈希值
   *    2. 此哈希值经过某种算法以后，确定其在table数组中的存放位置:i
   *    3. 如果table[i]位置为空，则key1-value1添加成功  --->情况1
   *       如果table[i]位置不为空，则比较key1与table[i]位置现有元素key2-value2进行对比
   *       	4.比较key1和key2的哈希值，如果哈希值不相同，则key1-value1添加成功  --->情况2
   *            比较key1和key2的哈希值，如果哈希值相同，调用key1所在类的equals(),将key2作为参数传入equals()
   *            		5. 如果equals()返回false,则key1-value1添加成功  --->情况3
   *                     如果equals()返回true,则用value1替换原有的value2
   * 
   * 		情况1：将e1直接保存在数组的指定位置
   *      情况2、情况3：此时e1与现有索引位置上的元素，以链表的方式进行保存。
  ```

- 扩容机制

  - 临界值threshold ，当添加的元素超过临界值时，就考虑扩容，默认扩容为原来的2倍

  - 默认情况下等于 DEFAULT_LOAD_FACTOR * DEFAULT_INITIAL_CAPACITY。即为12

  - 加载因子：默认是0.75  

    ```
    负载因子的大小决定了HashMap的数据密度。
    负载因子越大密度越大，发生碰撞的几率越高，数组中的链表越容易长,造成查询或插入时的比较次数增多，性能会下降。
    负载因子越小，就越容易触发扩容，数据密度也越小，意味着发生碰撞的几率越小，数组中的链表也就越短，查询和插入时比较的次数也越小，性能会更高。但是会浪费一定的内容空间。而且经常扩容也会影响性能，建议初始化预设大一点的空间。
    按照其他语言的参考及研究经验，会考虑将负载因子设置为0.7~0.75，此时平均检索长度接近于常数。
    ```

- 添加操作之外的，get(key)、remove(key)等操作，也参考put(key,value)

### 练习

练习1：

```
 定义一个Employee类。
该类包含：private成员变量name,age,birthday，其中 birthday 为 MyDate 类的对象；
并为每一个属性定义 getter, setter 方法；
并重写 toString 方法输出 name, age, birthday

MyDate类包含:
private成员变量year,month,day；并为每一个属性定义 getter, setter 方法；

创建该类的 5 个对象，并把这些对象放入 TreeSet 集合中（TreeSet 需使用泛型来定义）
分别按以下两种方式对集合中的元素进行排序，并遍历输出：

1). 使Employee 实现 Comparable 接口(使用泛型)，并按 name 排序
2). 创建 TreeSet 时传入 Comparator对象(使用泛型)，按生日日期的先后排序。

```

```
package com.atguigu.exer;

/**
 * @author Dustin liu
 * @create 2020-03-16-15:56
 */
public class MyDate implements Comparable<MyDate> {
    private int year;
    private int month;
    private int day;

    public MyDate() {
        super();
    }

    public MyDate(int year, int month, int day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getMonth() {
        return month;
    }

    public void setMonth(int month) {
        this.month = month;
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    @Override
    public int compareTo(MyDate m) {

        if (this.year != m.year) {
            return this.year - m.year;
        }

        if (this.month != m.month) {
            return this.month - m.month;
        }
        if (this.day != m.day) {
            return this.day - m.day;
        }
		return 0;
    }

    @Override
    public String toString() {
        return "MyDate{" + "year=" + year + ", month=" + month + ", day=" + day + '}';
    }
}

```

```
package com.atguigu.exer;

/**
 * @author Dustin liu
 * @create 2020-03-16-15:56
 */
public class Employee implements Comparable<Employee> {
    private String name;
    private int age;
    private MyDate birthday;

    public Employee() {
        super();
    }

    public Employee(String name, int age, MyDate birthday) {
        this.name = name;
        this.age = age;
        this.birthday = birthday;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public MyDate getBirthday() {
        return birthday;
    }

    public void setBirthday(MyDate birthday) {
        this.birthday = birthday;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", birthday=" + birthday +
                '}';
    }

    @Override
    public int compareTo(Employee o) {
        return this.name.compareTo(o.name);
    }
}

```

```
package com.atguigu.exer;

/*
 * 创建该类的 5 个对象，并把这些对象放入 TreeSet 集合中（下一章：TreeSet 需使用泛型来定义）
分别按以下两种方式对集合中的元素进行排序，并遍历输出：

1). 使Employee 实现 Comparable 接口，并按 name 排序
2). 创建 TreeSet 时传入 Comparator对象，按生日日期的先后排序。

 */

import java.util.Comparator;
import java.util.Iterator;
import java.util.TreeSet;

import org.junit.Test;

/**
 * @author Dustin liu
 * @create 2020-03-16-15:55
 */
public class TreeSetTest {

    //练习1：按照name属性排序
    @Test
    public void test1() {
        TreeSet<Employee> employees = new TreeSet<>();

        Employee e1 = new Employee("liudu", 23, new MyDate(1996, 4, 15));
        Employee e2 = new Employee("zhangsan", 30, new MyDate(1990, 11, 23));
        Employee e3 = new Employee("lisi", 25, new MyDate(1995, 6, 20));
        Employee e4 = new Employee("xiaoqiang", 27, new MyDate(1993, 7, 14));
        Employee e5 = new Employee("laowang", 33, new MyDate(1987, 9, 1));

        employees.add(e1);
        employees.add(e2);
        employees.add(e3);
        employees.add(e4);
        employees.add(e5);

        System.out.println("---------通过名字排序-----------");
        Iterator<Employee> iterator = employees.iterator();
        while (iterator.hasNext()) {
            Employee employee = iterator.next();
            System.out.println(employee);
        }
    }

    @Test
    public void test2() {
        // 通过生日排序的数组
        TreeSet<Employee> employeesByBirthday = new TreeSet<>(new Comparator<Employee>() {
            @Override
            public int compare(Employee o1, Employee o2) {
                return o1.getBirthday().compareTo(o2.getBirthday());
            }
        });

        Employee e1 = new Employee("刘度", 23, new MyDate(1996, 4, 15));
        Employee e2 = new Employee("张三", 30, new MyDate(1993, 11, 23));
        Employee e3 = new Employee("李四", 25, new MyDate(1995, 6, 20));
        Employee e4 = new Employee("小强", 27, new MyDate(1993, 7, 14));
        Employee e5 = new Employee("老王", 33, new MyDate(1987, 9, 1));

        employeesByBirthday.add(e1);
        employeesByBirthday.add(e2);
        employeesByBirthday.add(e3);
        employeesByBirthday.add(e4);
        employeesByBirthday.add(e5);

        System.out.println("---------通过生日排序-----------");
        Iterator<Employee> iteratorByBirthday = employeesByBirthday.iterator();
        while (iteratorByBirthday.hasNext()) {
            System.out.println(iteratorByBirthday.next());
        }
    }
}

```

练习2：

案例：添加你喜欢的歌手以及你喜欢他唱过的歌曲

例如：

![1584494726379](day25笔记.assets/1584494726379.png)

```java
public class HashMapTest {

	@Test
	public void test() {
		HashMap<String,ArrayList<String>> maps = new HashMap<>();
		ArrayList<String> songs1 = new ArrayList<>();
		songs1.add("《一路有你》");
		songs1.add("《吻别》");
		songs1.add("《一千个伤心的理由》");
		maps.put("张学友", songs1);

		ArrayList songs2 = new ArrayList();
		songs2.add("《红豆》");
		songs2.add("《传奇》");
		songs2.add("《容易受伤的女人》");
		maps.put("王菲", songs2);

		Iterator<Map.Entry<String, ArrayList<String>>> iterator = maps.entrySet().iterator();
		while (iterator.hasNext()) {
			Map.Entry<String, ArrayList<String>> entry = iterator.next();
			System.out.println(entry);
		}
	}
}
```

## 二、复习

- TreeMap、TreeSet内部出现的对象的比较大小，需要考虑对象使用自然排序还是定制排序
  - 相关的：Arrays.sort(T[])，Arrays.sort(T[],comparator);Collections.sort(List),Collections.sort(List,comparator)

- Properties处理属性文件
- 集合框架工具类：Collections。熟悉Collections中的常用方法
- 理解为什么要使用泛型？
- 掌握在集合中使用泛型 （重点）

## 三、如何定义泛型结构：泛型类、泛型接口、泛型方法

### 3.1 泛型类的说明

```
package com.atguigu.java;

import java.util.Objects;

/**
 * 自定义泛型类
 * @author shkstart
 * @create 2020 上午 9:38
 */
public class Order<T> {

    private int orderId;
    private String orderName;
    private T[] arr;

    private T orderT;
    public Order(){
//        arr = new T[12];//错误的
        arr = (T[]) new Object[12];//正确的
    }
    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public T getOrderT() {
        return orderT;
    }

    public void setOrderT(T orderT) {
        this.orderT = orderT;
    }

    @Override
    public String toString() {
        return "Order{" +
                "orderId=" + orderId +
                ", orderName='" + orderName + '\'' +
                ", orderT=" + orderT +
                '}';
    }



    public Order(int orderId,T orderT){
        this.orderId = orderId;
        this.orderT = orderT;
    }
    //静态方法中不能使用类的泛型。
//    public static void show(){
//        System.out.println("orderT ： " + orderT);
//    }
}

```

```java
package com.atguigu.java;

/**
 * 如果继承时，没有父类的泛型参数的类型，则默认此类型为Object。
 * 此中写法不规范，不建议
 * @author shkstart
 * @create 2020 上午 9:52
 */
public class SubOrder extends Order {
}

```

```java
package com.atguigu.java;

/**
 * 继承泛型类时，可以指明泛型参数的类型。
 * @author shkstart
 * @create 2020 上午 9:54
 */
public class SubOrder1 extends Order<String> { //SubOrder1:不是一个泛型类！
}

```

```java
package com.atguigu.java;

/**
 * @author shkstart
 * @create 2020 上午 9:57
 */
public class SubOrder2<T> extends Order<T> {//SubOrder2:仍然是一个泛型类！
}

```

```java
public class GenericTest {
    /*
    1. 创建自定义的泛型类对象时，如果没有使用类的泛型，则默认泛型参数的类型为：Object
    2. 泛型参数，只能使用引用类型来充当。不能使用基本数据类型
    3. 创建泛型类对象时，一旦指明了泛型参数的类型，则在泛型类中，凡是使用类的泛型的位置，都替换为指定的泛型参数的类型。
    4. 指明类的泛型参数的场景：① 创建泛型类的对象时  ② 子类继承泛型类时，可以指明泛型参数的类型。
     */
    @Test
    public void test1() {
        Order o1 = new Order();
        Object orderT = o1.getOrderT();

        ArrayList list = new ArrayList();
        list.add(123);
        list.add("ABC");

        Order<Integer> order = new Order<>();
        Integer orderT1 = order.getOrderT();

        Order<String> order1 = new Order<>(12, "AA");
    }

    @Test
    public void test2() {
        SubOrder o1 = new SubOrder();
        Object orderT = o1.getOrderT();

        SubOrder1 o2 = new SubOrder1();
        String orderT1 = o2.getOrderT();

        SubOrder2<Double> o3 = new SubOrder2<>();
        Double orderT2 = o3.getOrderT();
    }

    @Test
    public void test3(){
        ArrayList list1 = new ArrayList();
        ArrayList list2 = list1;

        ArrayList<Integer> list3 = new ArrayList<>();
        //泛型不同的引用不能相互赋值。
//        ArrayList<String> list4 = list3;
    }
}
```

补充说明：

```
1.泛型类可能有多个参数，此时应将多个参数一起放在尖括号内。比如：<E1,E2,E3>
2. 泛型类的构造器如下：public GenericClass(){}。
     而下面是错误的：public GenericClass<E>(){}
3. 实例化后，操作原来泛型位置的结构必须与指定的泛型类型一致。
4. 泛型不同的引用不能相互赋值。
>尽管在编译时ArrayList<String>和ArrayList<Integer>是两种类型，但是，在运行时只有一个ArrayList被加载到JVM中。
5. 泛型如果不指定，将被擦除，泛型对应的类型均按照Object处理，但不等价于Object。经验：泛型要使用一路都用。要不用，一路都不要用。
6. 如果泛型结构是一个接口或抽象类，则不可创建泛型类的对象。
7. jdk1.7，泛型的简化操作：ArrayList<Fruit> flist = new ArrayList<>();
8. 泛型的指定中不能使用基本数据类型，可以使用包装类替换。
9. 在类/接口上声明的泛型，在本类或本接口中即代表某种类型，可以作为非静态属性的类型、非静态方法的参数类型、非静态方法的返回值类型。但在静态方法中不能使用类的泛型。
10. 异常类不能是泛型的
11. 不能使用new E[]。但是可以：E[] elements = (E[])new Object[capacity];
      参考：ArrayList源码中声明：Object[] elementData，而非泛型参数类型数组。
12.父类有泛型，子类可以选择保留泛型也可以选择指定泛型类型：
	子类不保留父类的泛型：按需实现
		没有类型  擦除
		具体类型
	子类保留父类的泛型：泛型子类
		全部保留
		部分保留
结论：子类必须是“富二代”，子类除了指定或保留父类的泛型，还可以增加自己的泛型

```

### 3.2 泛型方法的说明

```java
public class SubOrder1 extends Order<String> { //SubOrder1:不是一个泛型类！

    public <E> List<E> copyArrayToList(E[] arr){
        ArrayList<E> list = new ArrayList<>();
        for(E e : arr){
            list.add(e);
        }
        return list;
    }
}
```

```java
public class Order<T> {

    //...
    //泛型方法
    public <E> List<E> copyArrayToList(E[] arr){
        ArrayList<E> list = new ArrayList<>();
        for(E e : arr){
            list.add(e);
        }
        return list;
    }
}
```

```java
//泛型方法的测试
    //1. 泛型方法所属的类可以是泛型类，也可以不是泛型类
    //2. 当调用泛型方法时，指明泛型方法中的泛型参数的类型
    //3. 泛型方法可以声明为静态的
    @Test
    public void test4(){
        Order<String> order = new Order<>();//此时类的泛型是：String
        Integer[] arr = new Integer[]{1,2,3};
        List<Integer> list = order.copyArrayToList(arr);//泛型方法的参数是：Integer

    }
```

### 3.3 应用举例

```
package com.atguigu.java1;

import java.util.List;

/**
 * DAO: data(base) access object
 * 封装了对数据库中表的CRUD操作
 * @author shkstart
 * @create 2020 上午 10:48
 */
public class DAO<T> {

    //增
    public void add(T instance){

    }
    //删
    public void remove(int id){

    }
    //改
    public void update(int id,T newInstance){

    }
    //查：一条记录
    public T getInstance(){

        return null;
    }
    //查：多条记录
    public List<T> getForList(String sql){

        return null;
    }

    //泛型方法
    // 可能会查询表的条目数；最大的生日；最多的工资数
    public <E> E getValue(String sql){
        return null;
    }

}

```

```
package com.atguigu.java1;

import java.sql.Date;

/**
 * @author shkstart
 * @create 2020 上午 10:52
        */
public class Customer {
    private int id;
    private String name;
    private String email;
    private Date birth;

    //。。。
}

```

```
/**
 * 
 * @author shkstart
 * @create 2020 上午 10:53
 */
public class CustomerDAO extends DAO<Customer> {


}

```

```
/**
 * @author shkstart
 * @create 2020 上午 10:55
 */
public class Student {
}

```

```
/**
 * @author shkstart
 * @create 2020 上午 10:55
 */
public class StudentDAO extends DAO<Student> {
}
```

测试：

```
public class DAOTest {
    public static void main(String[] args) {
        CustomerDAO dao = new CustomerDAO();

        dao.getForList("select id,name,email,birth from custoemrs where id < 10");

        StudentDAO dao1 = new StudentDAO();
        Student student = dao1.getInstance();
    }
}
```

### 3.4 练习

```
定义个泛型类 DAO<T>，在其中定义一个Map 成员变量，Map 的键为 String 类型，值为 T 类型。

分别创建以下方法：
public void save(String id,T entity)： 保存 T 类型的对象到 Map 成员变量中
public T get(String id)：从 map 中获取 id 对应的对象
public void update(String id,T entity)：替换 map 中key为id的内容,改为 entity 对象
public List<T> list()：返回 map 中存放的所有 T 对象
public void delete(String id)：删除指定 id 对象

定义一个 User 类：
该类包含：private成员变量（int类型） id，age；（String 类型）name。

定义一个测试类：
创建 DAO 类的对象， 分别调用其 save、get、update、list、delete 方法来操作 User 对象，
使用 Junit 单元测试类进行测试。

```



## 四、泛型在继承上的体现

### 4.1 情况1

```java
/*
   1. 类A是类B的父类，但是 G<A> 与 G<B>没有继承关系。
     */
    @Test
    public void test1() {
        Object obj = null;
        String str = null;

        obj = str;//多态

        Object[] arr = null;
        String[] arr1 = null;

        arr = arr1;//多态

        //*************************
        ArrayList<Object> list1 = null;
        ArrayList<String> list2 = new ArrayList<>();
        //编译不通过
//        list1 = list2;
        /*
        反证法：
        假设：list1 = list2;
        list1.add(123);非法的。
         */

        method(list1);
        method1(list2);


    }

    public void method(ArrayList<Object> list) {

    }

    public void method1(ArrayList<String> list) {

    }
```

### 4.2 情况2

```java
 /*
    2. 类A是类B的父类或接口，A<G> 是 B<G>的父类，可以向上转型（多态）
     */
    @Test
    public void test2() {
        List<String> list1 = null;
        ArrayList<String> list2 = new ArrayList<>();

        list1 = list2;

        method2(list2);
    }

    public void  method2(List<String> list){

    }
```



## 五、通配符的使用

### 5.1 关于通配符和写入操作

```
/*
    通配符的使用：?

    1. G<?> 可以看做是G<A>的父类，可以体现多态性。其中A是任何一个类。

    2. 向声明为通配符的集合中，写入数据： 不被允许的。
        但是，唯一可以写入的值：null

     */
    @Test
    public void test1(){
        ArrayList<Object> list1 = new ArrayList<>();
        ArrayList<String> list2 = new ArrayList<>();
        method(list1);
        method(list2);
    }

    public void method(ArrayList<?> list) {

//        list.add(123);
//        list.add("AA");
        //唯一可以写入的值：null
        list.add(null);
    }
```

### 5.2 读取操作

```
 /*
    3. 向声明为通配符的集合中，读取数据：允许的。
     */
    @Test
    public void test2(){
        ArrayList<String> list2 = new ArrayList<>();
        list2.add("AA");
        list2.add("BB");

        method1(list2);
    }
    public void method1(ArrayList<?> list) {
        Iterator<?> iterator = list.iterator();
        while(iterator.hasNext()){
            Object obj = iterator.next();
            System.out.println(obj);
        }
    }
```

### 5.3 有限制条件的通配符

```java
/*
    有限制条件的通配符的使用
     */
    @Test
    public void test3(){
        List<Object> list1 = null;
        List<Person> list2 = null;
        List<Student> list3 = null;
        //情况1：
        List<?> list4 = null;
        list4 = list1;
        list4 = list2;
        list4 = list3;

        //对于list4来说，只能写入null，其他值不能写入。  支持数据的读取。

        //情况2：可以接收Person类及Person类的子类的泛型类型
        List<? extends Person> list5 = null;
//        list5 = list1;//错误
        list5 = list2;
        list5 = list3;

        //情况3：可以接收Person类及Person类的父类的泛型类型
        List<? super Person> list6 = null;
        list6 = list1;
        list6 = list2;
//        list6 = list3;//错误
    }

    @Test
    public void test4(){
        List<Student> list = new ArrayList<>();
        list.add(new Student());
        List<? extends Person> list5 = list;
        //写入数据：只能写入null，其他值不可以。
        list5.add(null);
//        list5.add(new Student());
        //读取数据：可以读取，读取的数据类型为Person
        Person person = list5.get(0);
    }

    @Test
    public void test5(){
        List<Object> list = new ArrayList<>();
        list.add(new Object());
        List<? super Person> list5 = list;
        //写入数据：可以写入Person及Person子类对象
        list5.add(null);
        list5.add(new Student());
        list5.add(new Person());
//        list5.add(new Object());//错误的
        //读取数据：读取的数据类型为Object
        Object obj = list5.get(0);
    }
```

## 六、File类的使用

### 6.1 File类的描述

```
 * 1. File类及本章的各种流都声明在java.io包下
 * 2. File类的一个对象既可以表示一个文件(.txt,.doc,.avi)，也可以表示一个文件目录（或文件夹）
 * 3. File类中有涉及到新建、删除、重命名、绝对路径、长度等操作，但是涉及文件内容的读取或写入操作是没有的
 *    如果需要此操作，必须使用IO流
 * 4. File类的对象通常是作为IO流的端点出现。从代码上看，File类的对象常常作为参数传递到IO流类的构造器中。
```



### 6.2 File的实例化

```java
 /*
    如何创建File类的对象？
    方式一：public File(String pathname)
        以pathname为路径创建File对象，可以是绝对路径或者相对路径，如果pathname是相对路径，则默认的当前路径在系统属性user.dir中存储。
        绝对路径：是一个固定的路径,从盘符开始
        相对路径：是相对于某个位置开始
            > 如果大家使用main()：相较于当前工程
            > 如果大家使用单元测试方法：相较于当前module
     */
    @Test
    public void test1(){
        File file1 = new File("D:\\io\\hello.txt");//绝对路径
        File file2 = new File("abc.txt");//相对路径

        File file3 = new File("d:/io");//绝对路径
    }
    public static void main(String[] args) {
        File file2 = new File("abcd.txt");
    }
    /*
      方式二：public File(String parent,String child)
        以parent为父路径，child为子路径创建File对象。
    方式三：public File(File parent,String child)
        根据一个父File对象和子文件路径创建File对象

      说明：上述两个构造器中的参数1，一定是文件目录。否则创建失败。
     */
    @Test
    public void test2(){
        File file1 = new File("d:\\io","hello.txt");

        File file2 = new File("d:/io");
        File file3 = new File(file2,"hello.txt");
    }
```

### 6.3 File类的常用方法

```java
/**
 * 测试File的常用方法
 * @author shkstart
 * @create 2020 下午 4:01
 */
public class FileTest1 {
    /*
    File类的获取功能
    public String getAbsolutePath()：获取绝对路径
    public File getAbsoluteFile()：获取绝对路径表示的文件
    public String getPath() ：获取路径
    public String getName() ：获取名称
    public String getParent()：获取上层文件目录路径。若无，返回null
    public long length() ：获取文件长度（即：字节数）。不能获取目录的长度。
    public long lastModified() ：获取最后一次的修改时间，毫秒值



     */
    @Test
    public void test1(){
        File file1 = new File("d:\\io","hello.txt");

        file1 = new File("abc.txt");

        file1 = new File("abcd.txt");//此文件不存在

        file1 = new File("d:/io");

        System.out.println(file1.getAbsolutePath());
        System.out.println(file1.getAbsoluteFile());
        System.out.println(file1.getPath());
        System.out.println(file1.getName());
        System.out.println(file1.getParent());//file1.getAbsoluteFile().getParent()
        System.out.println(file1.length()); //如果是文件目录，length()返回都是0
        System.out.println(file1.lastModified());
        System.out.println(new Date(file1.lastModified()));


    }
    /*
     public String[] list() ：获取指定目录下的所有文件或者文件目录的名称数组
    public File[] listFiles() ：获取指定目录下的所有文件或者文件目录的File数组

    public boolean renameTo(File dest):把文件重命名为指定的文件路径

     */
    @Test
    public void test2(){
//        File file1 = new File("G:\\教学视频\\01-Java基础\\尚硅谷_200213大数据Java基础_宋红康");
//
//        String[] list = file1.list();
//        for (String s : list) {
//            System.out.println(s);
//        }

        File file2 = new File("abc.txt");
        File file3 = new File("d:/io/abc123.txt");
        //要想返回true:file2必须存在，file3一定不存在，且file3所在的目录一定要存在。
        boolean isReNamed = file2.renameTo(file3);
        System.out.println(isReNamed);

    }
    /*
public boolean isDirectory()：判断是否是文件目录
public boolean isFile() ：判断是否是文件
public boolean exists() ：判断是否存在
public boolean canRead() ：判断是否可读
public boolean canWrite() ：判断是否可写
public boolean isHidden() ：判断是否隐藏

     */
    @Test
    public void test3(){
        File file1 = new File("abc.txt");

        file1 = new File("d:/io");
        System.out.println(file1.isDirectory());
        System.out.println(file1.isFile());
        System.out.println(file1.exists());
        System.out.println(file1.canRead());
        System.out.println(file1.canWrite());
        System.out.println(file1.isHidden());
    }



    /*
File类的创建功能
public boolean createNewFile() ：创建文件。若文件存在，则不创建，返回false
public boolean mkdir() ：创建文件目录。如果此文件目录存在，就不创建了。如果此文件目录的上层目录不存在，也不创建。
public boolean mkdirs() ：创建文件目录。如果上层文件目录不存在，一并创建

File类的删除功能
public boolean delete()：删除文件或者文件夹
删除注意事项：
Java中的删除不走回收站。
要删除一个文件目录，请注意该文件目录内不能包含文件或者文件目录

     */
    @Test
    public void test4() throws IOException {
        File file = new File("d:/io/hello123.txt");
        if(!file.exists()){
            file.createNewFile();
            System.out.println("创建成功");
        }else{
            file.delete();
            System.out.println("删除成功");
        }
    }

    //如果要创建的文件目录的上层目录存在，则mkdir()和mkdirs()作用相同
    //如果要创建的文件目录的上层目录不存在，则mkdir()创建失败，而mkdirs()创建成功
    @Test
    public void test5(){
        File file = new File("d:/io/io2/io3");

//        file.mkdir();
//        file.mkdirs();

        file.delete();
    }



}
```

### 6.4 练习

```java
//练习1：isDirectory() \ listFiles() 遍历指明目录下的所有的文件，输出所有的文件名。
//练习2：获取指定文件目录中所有文件的大小
//练习3：创建一个与"hello.txt"文件在相同目录下的另一个名为"abc.txt"
//File file = new File("d:/abc/hello.txt");
```

