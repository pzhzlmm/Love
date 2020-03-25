# day21授课笔记

## 1.  复习

- 进程、线程、程序的区别
  - **【面试题】区分进程、线程，并举例说明**
- 传统上，两种创建多线程的方式
  - 继承Thread类
  - 实现Runable接口
- Thread类中的常用方法
  - start(),run(),join(),yield(),sleep(),currrentThread(),getName(),setName()
  - 设置线程的优先级：（1-10），setPriority(),getPRriority()
- 线程的生命周期
  - 由于线程相关方法的调用，导致线程从一种状态切换另外一种状态。
  - **【面试题】线程在执行过程中，有哪几种状态，哪些操作会导致状态的切换**
- 如何解决线程的安全问题？
  - 方式一：synchronized代码块
  - 方式二：synchronized方法
  - 方式三：jdk5.0新增了Lock接口
  - **【面试题】解决线程的安全问题有几种方式？**
  - **【面试题】synchronized 与Lock方式的异同**
  - 带来的问题：死锁
  - 懒汉式改写成线程安全的
- 线程的通信
  - 针对synchronized代码块或synchronized方法内使用wati(),notify(),notifyAll()
  - 针对Lock，使用Condition  ----未讲
  - **【面试题】sleep()和wait()的区别**

- jdk5.0中新增两种创建多线程的方式
  - 方式三：实现Callable接口 
  - 方式四：使用线程池 
  - **【面试题】创建多线程有几种方式？**
  - **【面试题】实现Runable和Callable方式的区别？**

***

- String字符串

  - 不可被继承；实现了Comparable、Serializable
  - String的不可变性
  - String的实例化方式
    - 方式一：使用字面量方式。 String s = "hello"
    - 方式二：String s = new String("hello");
    - 【面试题】String s = new String("hello")在内存中创建了几个对象？ 两个！
    - 内存解析：
      - jdk6时，字符串常量池是存放在永久代
      - jdk7时，字符串常量池改为存放在堆空间
      - jdk8时，取消了永久代，取而代之的是元空间（使用直接内存）

  - 连接操作：+ 
  - String的常用方法
  - String与其他相关结构的转换：包装类、字符数组、字节数组
  - String的常用算法题目

## 二、String、StringBuffer、StringBuilder

### 2.1 String 与其他类之间的转换

- String与包装类、基本数据类型之间的转化

```java
/*
	 * String与包装类、基本数据类型之间的转化
	 */
	@Test
	public void test1(){
		//String-->包装类、基本数据类型:调用包装类Xxx的parseXxx()
		String str = "123";
		int num = Integer.parseInt(str);
		System.out.println(num);
		
//		包装类、基本数据类型--> String:调用String的valueOf()
		String str1 = String.valueOf(num);
		System.out.println(str1);
		
		String str2 = num + "";//底层需要创建SringBuilder,并调用append()导致效率第一valueOf()
		System.out.println(str2);
	}
```

- String与char[]之间的转化

```java
/*
	 * String与char[]之间的转化
	 */
	@Test
	public void test2(){
		String str1 = "hello";
		//String--->char[]:调动String的toCharArray()
		char[] arr1 = str1.toCharArray();
		for(int i = 0;i < arr1.length;i++){
			System.out.println(arr1[i]);
		}
		
		//char[] ---> String:调用String的构造器
		String str2 = new String(arr1, 0, arr1.length);//new String(arr1);
		System.out.println(str2);
	}
	

```

- String与byte[]之间的转化

```java
	/*
	 * String与byte[]之间的转化
	 * 
	 * 
	 * 1. 关联：
	 * 内存层面：
	 * char:用2个字节存储
	 * 
	 * 存储层面：
	 * 一个char，应该用几个字节存储呢？跟字符集有关系，具体问题具体分析
	 * 
	 * ASCII:给26个英文大小写字母，0-9等都分配了对应的一个字节数值。比如：a --> 97   A--> 65
	 * GBK:兼容了ASCII(如果出现英文字母，0-9时，仍然使用1个字节存储），一个汉字使用2个字节存储
	 * UTF-8:兼容了ASCII(如果出现英文字母，0-9时，仍然使用1个字节存储），一个汉字使用3个字节存储
	 * 
	 * 2. 
	 * 编码： 字符、字符串--->字节、字节数组
	 * 	> 从看得懂的，转换为看不懂的。
	 * 
	 * 解码：字节、字节数组 --> 字符、字符串
	 *  > 从看不懂的，转换为看得懂的。
	 *  
	 * 结论：编码集要与解码集一致。否则会出现乱码！
	 */
	@Test
	public void test3() throws Exception{
		String str1 = "hello中国";
		//编码：String--->byte[]：getBytes()
		byte[] arr1 = str1.getBytes();//使用默认的字符集：UTF-8
		System.out.println(Arrays.toString(arr1));
		
		byte[] arr2 = str1.getBytes("gbk");//显式指定字符集。
		System.out.println(Arrays.toString(arr2));
		
		//解码：byte[] ---> String:使用构造器
		
		String str2 = new String(arr1);//使用默认的字符集：UTF-8
		System.out.println(str2);
		
		String str3 = new String(arr2);
		System.out.println(str3);//因为编码集和现在的解码集不一致，导致出现乱码！
		
		String str4 = new String(arr2,"gbk");
		System.out.println(str4);//因为编码集和现在的解码集都是使用gbk，没有乱码
	}
```

- String、StringBuffer、StringBuilder

```java
//String --> StringBuffer、StringBuilder
String str = "hello";
StringBuffer s1 = new StringBuffer(str);
StringBuilder s2 = new StringBuilder(str);

//StringBuffer、StringBuilder --> String
String str1 = s1.toString();
String str2 = s2.toString();

String str3 = new String(s1);
String str3 = new String(s2);
```

### 2.2 String的相关算法

关于笔试中常考的算法问题，主要就集中在数组和字符串的考查！

练习1：

```java
// 将一个字符串进行反转。将字符串中指定部分进行反转。比如“abcdefg”反转为”abfedcg”
	// 方式一：
	public String reverse1(String str, int start, int end) {// start:2,end:5
		if (str != null) {
			// 1.
			char[] charArray = str.toCharArray();
			// 2.
			for (int i = start, j = end; i < j; i++, j--) {
				char temp = charArray[i];
				charArray[i] = charArray[j];
				charArray[j] = temp;
			}
			// 3.
			return new String(charArray);
		}
		return null;

	}

	// 方式二：
	public String reverse2(String str, int start, int end) {
		// 1.
		String newStr = str.substring(0, start);// ab
		// 2.
		for (int i = end; i >= start; i--) {
			newStr += str.charAt(i);
		} // abfedc
			// 3.
		newStr += str.substring(end + 1);
		return newStr;
	}

	// 方式三：推荐 （相较于方式二做的改进）
	public String reverse3(String str, int start, int end) {

		// 1.
		StringBuilder s = new StringBuilder(str.length());
		// 2.
		s.append(str.substring(0, start));// ab
		// 3.
		for (int i = end; i >= start; i--) {
			s.append(str.charAt(i));
		}

		// 4.
		s.append(str.substring(end + 1));

		// 5.
		return s.toString();

	}

	@Test
	public void testReverse() {
		String str = "abcdefg";
		String str1 = reverse3(str, 2, 5);
		System.out.println(str1);// abfedcg

	}
```

练习2：

```java
// 获取一个字符串在另一个字符串中出现的次数。
	// 比如：获取“ab”在 “abkkcadkabkebfkabkskab” 中出现的次数
	public int getCount(String mainStr, String subStr) {
		if (mainStr.length() >= subStr.length()) {
			int count = 0;//记录次数
			int index = 0;
			// while((index = mainStr.indexOf(subStr)) != -1){
			// 		count++;
			// 		mainStr = mainStr.substring(index + subStr.length());
			// }
			// 改进：
			while ((index = mainStr.indexOf(subStr, index)) != -1) {
				index += subStr.length();
				count++;
			}

			return count;
		} else {
			return 0;
		}

	}

	@Test
	public void testGetCount() {
		String str1 = "cdabkkcadkabkebfkabkskab";
		String str2 = "ab";
		int count = getCount(str1, str2);
		System.out.println(count);
	}
```

练习3：

```java
//获取两个字符串中最大相同子串。比如：
//	   str1 = "abcwerthelloyuiodef"; str2 = "cvhellobnm"
//	      提示：将短的那个串进行长度依次递减的子串与较长的串比较。
	public String getMaxSameString(String str1,String str2){
		if(str1 != null && str2 != null){
			
			String maxStr = (str1.length() >= str2.length())? str1:str2;
			String minStr = (str1.length() < str2.length())? str1:str2;
			int len = minStr.length();//决定了比较的轮数
			for(int i = 0;i < len;i++){ //i:0
				
				for(int x = 0,y = len - i;y <= len;x++,y++){
					if(maxStr.contains(minStr.substring(x, y))){
						return minStr.substring(x, y);
					}
					
				}
				
			}
			
		}
		
		return null;
	}
	
	@Test
	public void testGetMaxSameSubString() {
		String str1 = "abcwerthelloyuiodef";
		String str2 = "cvhellobnmiodef";
		String str = getMaxSameString(str1, str2);
		System.out.println(str);
	}
```

### 2.3 String、StringBuffer、StringBuilder三者对比

```java
    /*
	 * 一、三个类的对比 
	 * String:不可变的字符序列； 底层使用char[]数组存储 
	 * StringBuffer:可变的字符序列；线程安全的，效率低；底层使用char[]数组存储 
	 * StringBuilder:可变的字符序列； jdk1.5引入，线程不安全的，效率高；底层使用char[]数组存储
	 * 
	 * 注意：在jdk8以后，String\StringBuffer\StringBuilder底层改成byte[]+字符集存储，节省内存空间。
	 * 
	 * 
	 * 1. StringBuffer与StringBuilder的主要区别就是StringBuffer中的方法声明为同步的了。 
	 * 2. String s0 = "";//new char[0]; 
	 * String s1 = "abc";// new char[]{'a','b','c'};
	 * 
	 * s1 += "de";//new char[]{'a','b','c','d','e'};
	 * 
	 * StringBuilder s2 = new StringBuilder();//char arr = new char[16];
	 * StringBuilder s3 = new StringBuilder("abc");//char arr = new char["abc".length() + 16]; 
	 * s2.append("abc");//arr[0] = 'a',arr[1] = 'b',arr[2] = 'c'; 
	 * 
	 * ... 
	 * 有可能底层arr的char[]存储不下了，此时需要扩容！默认扩容为原来容量的2倍+2
	 * 
	 * 启示： 
	 * 1. 开发中如果频繁的对字符串进行修改操作，建议使用StringBuffer/StringBuilder,替换String 
	 * 2.开发中如果不涉及线程安全问题或主动加锁，建议使用StringBuilder，替换StringBuffer 
	 * 3.开发中添加的字符串数据较多，建议使用StringBuilder(int capacity)，替换StringBuilder()
	 */
	@Test
	public void test1() {
		String str1 = "hello";
		str1 += "world";// 新建一个内存空间保存helloworld

		StringBuffer str2 = new StringBuffer("hello");
		str2.append("world");// 与创建对象中的char[]数组是同一个
	}
```

- 面试题：String、StringBuffer、StringBuilder的异同

- 对比三者的执行效率：

```
/*
	 * 对比三者的执行效率
	 *   从高到低：
	 *   StringBuilder > StringBuffer > String
	 */
	@Test
	public void test3() {
		// 初始设置
		long startTime = 0L;
		long endTime = 0L;
		String text = "";
		StringBuffer buffer = new StringBuffer("");
		StringBuilder builder = new StringBuilder("");
		// 开始对比
		startTime = System.currentTimeMillis();
		for (int i = 0; i < 20000; i++) {
			buffer.append(String.valueOf(i));
		}
		endTime = System.currentTimeMillis();
		System.out.println("StringBuffer的执行时间：" + (endTime - startTime));
		
		
		startTime = System.currentTimeMillis();
		for (int i = 0; i < 20000; i++) {
			builder.append(String.valueOf(i));
		}
		endTime = System.currentTimeMillis();
		System.out.println("StringBuilder的执行时间：" + (endTime - startTime));
		
		
		startTime = System.currentTimeMillis();
		for (int i = 0; i < 20000; i++) {
			text = text + i;
		}
		endTime = System.currentTimeMillis();
		System.out.println("String的执行时间：" + (endTime - startTime));

	}
```



### 2.4 StringBuilder和StringBuffer的常用方法

```java
/*
	 * 
	 * 二、StringBuffer和StringBuilder中的常用方法
	 * 
	 * StringBuffer append(xxx)：提供了很多的append()方法，用于进行字符串拼接 StringBuffer
	 * delete(int start,int end)：删除指定位置的内容 
	 * StringBuffer replace(int start, int end, String str)：把[start,end)位置替换为str 
	 * StringBuffer insert(int offset,xxx)：在指定位置插入xxx 
	 * StringBuffer reverse() ：把当前字符序列逆转 
	 * public intindexOf(String str) 
	 * public String substring(int start,int end) 
	 * public int length() 
	 * public char charAt(int n ) 
	 * public void setCharAt(int n ,char ch)
	 * 
	 * 总结： 
	 * 增：append(xxx) 
	 * 删：delete(int start,int end) 
	 * 改：setCharAt(int n ,char ch) / replace(int start, int end, String str) 
	 * 查：charAt(int n ) 
	 * 插：insert(int offset, xxx)
	 * 长度：length() 
	 * 遍历：for + charAt() / toString()
	 * 
	 * 
	 */
	@Test
	public void test2() {
		StringBuffer s1 = new StringBuffer();
		s1.append("abc").append("def").append("123");// 方法链的调用
		System.out.println(s1);

		s1.replace(3, 6, "hello");
		System.out.println(s1);

		s1.insert(3, "123");
		System.out.println(s1);

	}
```

## 三、比较器

 实现对象的排序，可以考虑两种方法：
 * > 实现Comparable接口
 * > 实现Comparator接口

### 3.1 自然排序：Comparable

```
   1. 像String、包装类、Date等已经实现了Comparable接口，则可以实现同一个类的不同对象的大小的比较。
 * 
 * 2. 默认情况下，String、包装类、Date等类型进行排序的话，默认从小到大的方式排序
 * 
 * 3. 自定义的类，要想实现排序，需要考虑实现Comparable接口，重写compareTo()。
 *    在此方法中，指明如何比较大小。
 *    标准：
 * 		如果当前对象大，返回正数
 * 		如果当前对象小，返回负数
 * 		如果两个对象相等，返回0
```

练习1：

```
    @Test
	public void test1(){
		String[] arr = new String[]{"BB","DD","GG","JJ","MM","AA"};
		
		System.out.println(Arrays.toString(arr));
		
		//能给String排序的前提，是String对象可以比较大小
		Arrays.sort(arr);
		
		System.out.println(Arrays.toString(arr));
	}
```

练习2：

```java
@Test
	public void test2(){
		Goods g1 = new Goods("Lenovo", 7800);
		Goods g2 = new Goods("Huawei", 8800);
		Goods g3 = new Goods("Dell", 5800);
		Goods g4 = new Goods("Xiaomi", 4800);
		Goods g5 = new Goods("HP", 9800);
		
		Goods[] arr = new Goods[]{g1,g2,g3,g4,g5};
		
		for(int i = 0;i < arr.length;i++){
			System.out.println(arr[i]);
		}
		//排序：
		Arrays.sort(arr);
		System.out.println();
		
		for(int i = 0;i < arr.length;i++){
			System.out.println(arr[i]);
		}
	}
```

其中，Goods定义如下：

```java
package com.atguigu.java1;

public class Goods implements Comparable{//商品
	
	private String name;
	private double price;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public Goods() {
		super();
	}
	public Goods(String name, double price) {
		super();
		this.name = name;
		this.price = price;
	}
	@Override
	public String toString() {
		return "Goods [name=" + name + ", price=" + price + "]";
	}
	
	//按照产品的价格进行排序
	/*
	 * 标准：
	 * 如果当前对象大，返回正数
	 * 如果当前对象小，返回负数
	 * 如果两个对象相等，返回0
	 */
	@Override
	public int compareTo(Object o) {
		System.out.println("compare....");
		if(o instanceof Goods){
			Goods g = (Goods)o;
			
			//方式一：
//			if(this.price > g.price){
//				return 1;
//			}else if(this.price < g.price){
//				return -1;
//			}else{
//				return 0;
//			}
			
			//方式二：
			return -Double.compare(this.price, g.price);
		}
		
		throw new RuntimeException("输入的类型不匹配");
	}
	
	

}

```

补充练习：针对Goods类，① 按照产品的名称排序   ②先按照价格排序，再按照产品名称排序  ③ ②先按照价格排序，再按照产品名称从高到低排序





### 3.2 定制排序：Comparator

```
问题的引入：
 * ① 针对于StringBuffer 或 StringBuilder的多个对象构成的数组，如何实现排序呢？
 * ② 针对于String、Date、包装类，如何实现从大到小的顺序排序呢？
 * 
 * 1. 除了使用自然排序之外，还可以使用定制排序：实现Comparator接口
 * 
 * 2. 步骤：
 *   ① 提供实现Comparator接口的类
 *   ② 重写compare(Object o1,Object o2),指明对象如何比较大小
 *   ③ 实例化Comparator接口的类，并在需要的位置使用即可。
```

练习1：

```java
@Test
	public void test1(){
		Goods g1 = new Goods("Lenovo", 7800);
		Goods g2 = new Goods("Huawei", 8800);
		Goods g3 = new Goods("Dell", 5800);
		Goods g4 = new Goods("Xiaomi", 4800);
		Goods g5 = new Goods("HP", 9800);
		Goods g6 = new Goods("Hasee", 9800);
		Goods g7 = new Goods("Apple", 9800);
		
		Goods[] arr = new Goods[]{g1,g2,g3,g4,g5,g6,g7};
		
		for(int i = 0;i < arr.length;i++){
			System.out.println(arr[i]);
		}
		
		//创建Comparator接口的匿名实现类的对象
		Comparator comparator = new Comparator(){
			
			//在此方法中指明如何比较两个对象的大小
			//先安排价格排序，再按照产品名称从高到低排序
			@Override
			public int compare(Object o1, Object o2) {
				if(o1 instanceof Goods && o2 instanceof Goods){
					Goods g1 = (Goods)o1;
					Goods g2 = (Goods)o2;
					
					int result = Double.compare(g1.getPrice(), g2.getPrice());
					if(result != 0){
						return result;
					}
					
					return -g1.getName().compareTo(g2.getName());
					
				}
				throw new RuntimeException("输入的类型不匹配");
			}
			
		};
		
		//排序：
		Arrays.sort(arr,comparator);
		System.out.println();
		
		for(int i = 0;i < arr.length;i++){
			System.out.println(arr[i]);
		}
	}
```

补充练习：创建String类型的数组，按照字符串从大到小的顺序排序。

```java
@Test
	public void test2(){
		String[] arr = new String[]{"BB","DD","GG","JJ","MM","AA"};
		
		System.out.println(Arrays.toString(arr));
		
		//能给String排序的前提，是String对象可以比较大小
		Arrays.sort(arr,new Comparator(){

			@Override
			public int compare(Object o1, Object o2) {
				if(o1 instanceof String && o2 instanceof String){
					String s1 = (String)o1;
					String s2 = (String)o2;
					return -s1.compareTo(s2);
				}
				throw new RuntimeException("输入的类型不匹配");
			}
			
		});
		
		System.out.println(Arrays.toString(arr));
	}
```



### 3.3 体会Comparable和Comparator的区别？

- Comparable:理解为一劳永逸的方式。

 * 		Comparator:理解为一种临时的方式。

## 四、jdk8之前的日期时间的API

### 4.1 System.currentTimeMillis()

```java
@Test
	public void test1(){
		//通常用来计算时间差。
		long time = System.currentTimeMillis();
		System.out.println(time);//1584087639264
	}
```



### 4.2 两个Date类

```java
/*
	 * java.util.Date
	 * 1. 两个构造器：Date() / Date(long millitime)
	 * 2. 两个方法：toString() / getTime()
	 * 
	 * 子类：java.sql.Date
	 * 
	 */
	@Test
	public void test2(){
		//空参的构造器：创建对应当前时间的Date对象
		Date d1 = new Date();
		System.out.println(d1);//Fri Mar 13 16:25:15 GMT+08:00 2020
		
		//getTime():返回此date对象对应的时间戳
		long time = d1.getTime();//1584087969232
		System.out.println(time);
		System.out.println(System.currentTimeMillis());
		
		//创建指定时间戳对应的Date对象
		Date d2 = new Date(15840879232L);
		System.out.println(d2);//Fri Jul 03 16:14:39 GMT+08:00 1970
	}
	
	@Test
	public void test3(){
		java.sql.Date date1 = new java.sql.Date(15840879232L);
		System.out.println(date1);//1970-07-03
		
		System.out.println(date1.getTime());//15840879232
	
	}
	
	//练习：有一个java.util.Date的对象，如何转换为同时间的java.sql.Date类的对象
	@Test
	public void test4(){
//		Date date1 = new Date(23235222423234L);
//		//ClassCastException
//		java.sql.Date date2 = (java.sql.Date) date1;
//		System.out.println(date2);
		
		Date date1 = new Date(23235222423234L);
		java.sql.Date date2 = new java.sql.Date(date1.getTime());
	}
```



### 4.3 SimpleDateFormat类

```java
/*
	 * SimpleDateFormat:使用此类实现格式化和解析操作
	 * 
	 * 格式化：日期--->字符串
	 * 解析：字符串--->日期
	 * 
	 * 比如："1995-03-01"转换为对应的日期对象
	 */
	@Test
	public void test5() throws ParseException{
		SimpleDateFormat sdf = new SimpleDateFormat();
		Date date1 = new Date();
		//格式化过程：
		String strDate = sdf.format(date1);
		System.out.println(strDate);//20-3-13 下午4:45
		
		//解析过程：
		Date date2 = sdf.parse("20-3-13 下午4:45");
		System.out.println(date2);//Fri Mar 13 16:45:00 GMT+08:00 2020
		
		//使用SimpleDateFormat带参的构造器
//		SimpleDateFormat sdf1 = new SimpleDateFormat("EEE, MMM d, ''yy");
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy年MM月dd HH:mm:ss");
		String strDate1 = sdf1.format(date1);
		System.out.println(strDate1);//2020-03-13 16:51:42
		
		Date date3 = sdf1.parse("2020年03月13 20:51:42");
		System.out.println(date3);//Fri Mar 13 20:51:42 GMT+08:00 2020
	}
```



### 4.4 Calendar类

```java
/*
	 * 4. Calendar日历类：抽象类
	 * 
	 * 
	 */
	@Test
	public void test6(){
		//返回Calendar子类的一个对象
		Calendar calendar = Calendar.getInstance();
		System.out.println(calendar);
		
		//get()
		System.out.println(calendar.get(Calendar.DAY_OF_MONTH));
		System.out.println(calendar.get(Calendar.DAY_OF_WEEK));
		System.out.println(calendar.get(Calendar.DAY_OF_YEAR));
		
		//set()
		calendar.set(Calendar.DAY_OF_MONTH, 23);
		System.out.println(calendar.get(Calendar.DAY_OF_MONTH));
		//add()
		calendar.add(Calendar.DAY_OF_MONTH, -2);
		System.out.println(calendar.get(Calendar.DAY_OF_MONTH));
		//getTime():获取当前日历对象对应的日期Date对象
		Date date = calendar.getTime();
		System.out.println(date);//Sat Mar 21 17:03:56 GMT+08:00 2020

		
		//setTime(Date d):使用指定的日期Date对象重置Calendar对象
		calendar.setTime(new Date());
		System.out.println(calendar.get(Calendar.DAY_OF_MONTH));
	}
```

