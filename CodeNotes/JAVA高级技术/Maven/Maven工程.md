 Maven 工程

## 1 Maven 的工程类型

### 1.1POM 工程

POM 工程是逻辑工程。用在父级工程或聚合工程中。用来做 jar 包的版本控制。
更多起的是管理的作用,不能存放业务代码(吧项目也当成一个对象看待),当成一个父工程,如jar包子工程可以继承
也可以把多个工程集合在一起

### 1.2JAR 工程

将会打包成 jar 用作 jar 包使用。即常见的本地工程 - Java Project。

### 1.3WAR 工程

将会打包成 war，发布在服务器上的工程。如网站或服务。即常见的网络工程 - Dynamic
Web Project。war 工程默认没有 WEB-INF 目录及 web.xml 配置文件，IDE 通常会显示工程
错误，提供完整工程结构可以解决。

## 2 创建 Maven 项目

### 2.1创建步骤

2.1.1New--> other -->Maven Project
2.1.2勾选,创建纯净项目,不应用任何模版
图

### 2.2填写项目信息

任何一个maven都有自己的坐标,通过坐标定义当前项目
2.2.1 Group Id 公司域名倒写 com.bjsxt
2.2.2 Artifact Id 项目名 01maveDemo
2.2.3 Version 版本名 默认
2.2.4 Packaging 项目类型 jar
2.2.4.1 Jar java 项目
2.2.4.2 War : web 项目
2.2.4.3 POM: 父项目.如果项目有子项目,项目必须是 pom
2.2.5 Name : 自定义名称,内容任意
2.2.6 Description: 描述.详细描述.
2.2.7 Parent Project: 如果当前项目有父项目时填写

### 2.3Maven 项目结构

src/main/java 这个目录下储存 java 源代码
	创建hello.java
	![1565234956899](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565234956899.png)
src/main/resources 储存主要的资源文件。比如spring的xml配置文件和log4j的properties文件。
src/test/java 储存测试用的类，比如 JUNIT 的测试一般就放在这个目录下面
src/test/resources 储存测试用的资源文件
src 包含了项目所有的源代码和资源文件，以及其他项目相关的文件。
target 编译后内容放置的文件夹
	maven install:将项目打包处理
	![1565235047523](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565235047523.png)
	build success:成功,可以看到jar包
	![1565235396690](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565235396690.png)
pom.xml 是 Maven 的基础配置文件。配置项目和项目之间关系，包括配置依赖关系等等


## 3 工程关系

### 3.1依赖

#### 概述

即 A 工程开发或运行过程中需要 B 工程提供支持，则代表 A 工程依赖 B 工程。在这种
情况下，需要在 pom.xml 文件中增加下属配置定义依赖关系

```xml
<dependencies>
 <!-- 定义一个具体的依赖 -->
 <dependency>
 <!-- 依赖的工程所在组名 -->
 <!-- 具体内容可以去对应网站上进行拷贝 -->
 <groupId>groupName</groupId>
 <!-- 依赖的工程名 -->
 <artifactId>artifactName</artifactId>
 <!-- 依赖的工程版本 -->
 <version>versionNo</version>
 <!-- 依赖的工程有效范围，其可选值有：
 compile - 编译中有效
 runtime - 运行中有效
 system - 全部中有效[默认]
 provided - 当前工程中有效.
 test - 只在测试有效
 -->
 <scope>system</scope>
 </dependency>
 </dependencies>
```

#### 网络依赖

![1565236105884](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565236105884.png)

复制

![1565236131016](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565236131016.png)

#### 本地依赖

runasclean:清除jar包
install:建立jar包
pom里添加另外一个文件头部的信息即可,就可以使用了

![1565236352610](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565236352610.png)

解决maven编译失败:Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.2:compile:

![1565244748532](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565244748532.png)

### 3.2继承

如果 A 工程继承 B 工程，则代表 A 工程默认依赖 B 工程依赖的所有资源，且可以应用
B 工程中定义的所有资源信息。被继承的工程（B 工程）只能是 POM 工程。

#### 3.2.1父工程配置

定义所有共性,子工程特性

![1565253818518](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565253818518.png)

packing:pom
dependencyManagement:仅仅是定义jar包
properties:把版本信息都放这里进行定义

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.bjsxt</groupId>
  <artifactId>03parent</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>pom</packaging>
  <properties>
  	<junit-version>4.2</junit-version>
  </properties>
  <dependencyManagement>
  	<dependencies>
  		<dependency>
	  	<groupId>junit</groupId>
	    <artifactId>junit</artifactId>
	    <version>${junit-version}</version>
  	</dependency>
  	</dependencies>
  </dependencyManagement>
</project>
```

#### 3.2.2子工程配置

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <parent>
    <groupId>com.bjsxt</groupId>
    <artifactId>03parent</artifactId>
    <version>0.0.1-SNAPSHOT</version>
  </parent>
  <groupId>com.bjsxt</groupId>
  <artifactId>04son</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  
  <dependencies>
  	<dependency>
  		<groupId>junit</groupId>
	    <artifactId>junit</artifactId>
  	</dependency>
  </dependencies>
</project>
```



3.2.2子工程配置
要么是jar,要么是var,parent要填写上去
pom里多了一个parent
这里可以不用写版本信息(父工程一变子工程就跟着改变了)

```xml
<project
xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xsi:schemaLocation="http://maven.apache.org/POM/4.
0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>
 <parent>
 <groupId>com.bjsxt</groupId>
 <artifactId>03parent</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 </parent>
 <groupId>com.bjsxt</groupId>
 <artifactId>04son</artifactId>
 <version>0.0.1-SNAPSHOT</version>

 <dependencies>
 <dependency>
 <groupId>junit</groupId>
 <artifactId>junit</artifactId>
 </dependency>
 </dependencies>
</project>
```

![1565312345438](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565312345438.png)

如果在这里更改版本号,下面会跟着进行改动

![1565312425325](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565312425325.png)

### 3.3聚合

当我们开发的工程拥有 2 个以上模块的时候，每个模块都是一个独立的功能集合。比如
某大学系统中拥有搜索平台，学习平台，考试平台等。开发的时候每个平台都可以独立编译，
测试，运行。这个时候我们就需要一个聚合工程。
高内聚,低耦合
在创建聚合工程的过程中，总的工程必须是一个 POM 工程（Maven Project），各子模
块可以是任意类型模块（Maven Module）。所有聚合工程和聚合模块必须处于同一个组
（groupId）中，且聚合工程可以嵌套。

#### 3.3.1创建聚合项目
必须是pom项目

![1565312921179](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565312921179.png)

#### 3.3.2创建模块
选择创建maven module

![1565313009521](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565313009521.png)

显示方式在外面,实际属于它(为了方便开发)

#### 3.3.3聚合项目的 POM 文件
有几个子项目,有几个maven
```xml
<project
xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xsi:schemaLocation="http://maven.apache.org/POM/4.
0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>
 <groupId>com.bjsxt</groupId>
 <artifactId>05maven-manager</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 <packaging>pom</packaging>
 <modules>
 <module>05maven-sub1</module>
 <module>06maven-sub2</module>
 </modules>
</project>
```

## 4 创建 war 类型项目 

报错原因:不符合web的结构,把WEB-INF,和WEB-IN下的web.xml添加上去(缺少约束需要添加)

![1565313772633](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565313772633.png)