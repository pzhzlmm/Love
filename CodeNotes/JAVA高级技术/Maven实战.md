七、 Maven 实战
1 需求分析
基于 SSM 框架的 CRUD 案例
2 技术选型
框架：SpringMVC+Spring+Mybatis
数据库：MySQL
项目构建工具：Maven
3 项目架构设计
3.1传统项目设计方式
3.2Maven 项目设计方式

4 创建工程
4.1创建 Parent 工程
4.2修改 POM 文件
<project
xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xsi:schemaLocation="http://maven.apache.org/POM/4.
0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>
 <groupId>com.bjsxt</groupId>
 <artifactId>11parent</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 <packaging>pom</packaging>

 <properties>
 <junit.version>4.12</junit.version>
<spring.version>4.1.3.RELEASE</spring.version>
<mybatis.version>3.2.8</mybatis.version>
<mybatis.spring.version>1.2.2</mybatis.spring.v
ersion>
<mysql.version>5.1.32</mysql.version>
<slf4j.version>1.6.4</slf4j.version>
<druid.version>1.0.9</druid.version>
<jstl.version>1.2</jstl.version>
<servlet-api.version>2.5</servlet-api.version>
<jsp-api.version>2.0</jsp-api.version>
<tomcat.version>2.2</tomcat.version>
 </properties>
 <!-- jar 包的依赖注入 ，由于该工程是一个父工程，
所以 jar 包在该 pom 文件中只是声明-->
 <dependencyManagement>
 <dependencies>
<!-- 单元测试 -->
<dependency>
<groupId>junit</groupId>
<artifactId>junit</artifactId>
<version>${junit.version}</version>
<scope>test</scope>
</dependency>
<!-- 日志处理 -->
<dependency>
<groupId>org.slf4j</groupId>
<artifactId>slf4j-log4j12</artifactId>
<version>${slf4j.version}</version>
</dependency>
<!-- Mybatis -->
<dependency>
<groupId>org.mybatis</groupId>
<artifactId>mybatis</artifactId>
<version>${mybatis.version}</version>
</dependency>
<dependency>
<groupId>org.mybatis</groupId>
<artifactId>mybatis-spring</artifactId>
<version>${mybatis.spring.version}</version>
</dependency>
<!-- MySql -->
<dependency>
<groupId>mysql</groupId>
<artifactId>mysql-connector-java</artifactId>
<version>${mysql.version}</version>
</dependency>
<!-- 连接池 -->
<dependency>
<groupId>com.alibaba</groupId>
<artifactId>druid</artifactId>
<version>${druid.version}</version>
</dependency>
<!-- Spring -->
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-context</artifactId>
<version>${spring.version}</version>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-beans</artifactId>
<version>${spring.version}</version>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-webmvc</artifactId>
<version>${spring.version}</version>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-jdbc</artifactId>
<version>${spring.version}</version>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-aspects</artifactId>
<version>${spring.version}</version>
</dependency>
<!-- JSP 相关 -->
<dependency>
<groupId>jstl</groupId>
<artifactId>jstl</artifactId>
<version>${jstl.version}</version>
</dependency>
<dependency>
<groupId>javax.servlet</groupId>
<artifactId>servlet-api</artifactId>
<version>${servlet-api.version}</version>
<scope>provided</scope>
</dependency>
<dependency>
<groupId>javax.servlet</groupId>
<artifactId>jsp-api</artifactId>
<version>${jsp-api.version}</version>
<scope>provided</scope>
</dependency>
</dependencies>
 </dependencyManagement>

 <!-- 插件的开启 -->
 <build>
 <!-- tomcat 插件，由于子项目不一定每个都是 web
项目，所以该插件只是声明，并未开启 -->
 <pluginManagement>
 <plugins>
<!-- 配置 Tomcat 插件 -->
<plugin>
<groupId>org.apache.tomcat.maven</groupId>
<artifactId>tomcat7-maven-plugin</artifactId>
<version>${tomcat.version}</version>
</plugin>
</plugins>
 </pluginManagement>

 <!-- maven 的编译器插件，该插件主要是决定了当前
项目所使用 jre 版本 。由于无论是 jar，还是 war 项目都需要
制定 jar 的版本，所以该插件不需要生命，应当是开启的。-->
<plugins>
<plugin>
<groupId>org.apache.maven.plugins</groupId>
<artifactId>maven-compiler-plugin</artifactId>
<version>3.2</version>
<configuration>
<source>1.7</source>
<target>1.7</target>
<encoding>UTF-8</encoding>
</configuration>
</plugin>
</plugins>
 </build>
</project>
4.3创建聚合工程 Manager

4.3.1创建 manager-pojo


4.3.2创建 manager-mapper

4.3.3修改 manager-mapper 的 pom 文件
<project
xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xsi:schemaLocation="http://maven.apache.org/P
OM/4.0.0
http://maven.apache.org/xsd/maven-4.0.0.xsd">
<modelVersion>4.0.0</modelVersion>
<parent>
<groupId>com.bjsxt</groupId>
<artifactId>12manager</artifactId>
<version>0.0.1-SNAPSHOT</version>
</parent>
<artifactId>manager-mapper</artifactId>
<dependencies>
<dependency>
<groupId>com.bjsxt</groupId>
<artifactId>manager-pojo</artifactId>
<version>0.0.1-SNAPSHOT</version>
</dependency>
<!-- Mybatis -->
<dependency>
<groupId>org.mybatis</groupId>
<artifactId>mybatis</artifactId>
</dependency>
<dependency>
<groupId>org.mybatis</groupId>
<artifactId>mybatis-spring</artifactId>
</dependency>
<!-- MySql -->
<dependency>
<groupId>mysql</groupId>
<artifactId>mysql-connector-java</artifactId>
</dependency>
<!-- 连接池 -->
<dependency>
<groupId>com.alibaba</groupId>
<artifactId>druid</artifactId>
</dependency>
</dependencies>
</project>
4.3.4创建 manager-service

4.3.5修改 manager-service 的 pom 文件
<project
xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xsi:schemaLocation="http://maven.apache.org/POM/4.
0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>
 <parent>
 <groupId>com.bjsxt</groupId>
 <artifactId>12manager</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 </parent>
 <artifactId>manager-service</artifactId>
 <dependencies>
 <dependency>
 <groupId>com.bjsxt</groupId>
 <artifactId>manager-mapper</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 </dependency>
 <!-- Spring -->
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-context</artifactId>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-beans</artifactId>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-webmvc</artifactId>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-jdbc</artifactId>
</dependency>
<dependency>
<groupId>org.springframework</groupId>
<artifactId>spring-aspects</artifactId>
</dependency>
 </dependencies>
</project>
4.3.6创建 manager-controller

4.3.7修改 manager-controller 的 pom 文件
<project
xmlns="http://maven.apache.org/POM/4.0.0"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xsi:schemaLocation="http://maven.apache.org/POM/4.
0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>
 <parent>
 <groupId>com.bjsxt</groupId>
 <artifactId>12manager</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 </parent>
 <artifactId>manager-controller</artifactId>
 <packaging>war</packaging>

 <dependencies>
 <dependency>
 <groupId>com.bjsxt</groupId>
 <artifactId>manager-service</artifactId>
 <version>0.0.1-SNAPSHOT</version>
 </dependency>
 <!-- JSP 相关 -->
<dependency>
<groupId>jstl</groupId>
<artifactId>jstl</artifactId>
</dependency>
<dependency>
<groupId>javax.servlet</groupId>
<artifactId>servlet-api</artifactId>
<scope>provided</scope>
</dependency>
<dependency>
<groupId>javax.servlet</groupId>
<artifactId>jsp-api</artifactId>
<scope>provided</scope>
</dependency>
 </dependencies>
</project>
4.4在数据库中创建 users 表
CREATE TABLE `users` (
 `userid` int(11) NOT NULL AUTO_INCREMENT,
 `username` varchar(30) DEFAULT NULL,
 `userage` int(11) DEFAULT NULL,
 PRIMARY KEY (`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
4.5框架整合
4.5.1数据库配置文件
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/ssm?ch
aracterEncoding=utf-8
jdbc.username=root
jdbc.password=root
4.5.2Mybatis 配置文件
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
 PUBLIC "-//mybatis.org//DTD Config 3.0//EN"

"http://mybatis.org/dtd/mybatis-3-config.dtd">
 <configuration>
 <!-- 配置分页插件 -->
 </configuration>
4.5.3applicationContext-dao.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans
xmlns="http://www.springframework.org/schema/beans
"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-i
nstance"
xmlns:p="http://www.springframework.org/schema/p"
xmlns:context="http://www.springframework.org
/schema/context"
xmlns:mvc="http://www.springframework.org/sch
ema/mvc"
xsi:schemaLocation="http://www.springframewor
k.org/schema/beans
http://www.springframework.org/schema/beans/spring
-beans.xsd

http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-m
vc-4.0.xsd

http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spri
ng-context.xsd">
<!-- 配置解析 properties 文件的工具类 -->
<context:property-placeholder
location="classpath:resource/*.properties"/>
<!-- 配置数据源 dataSource -->
<bean id="dataSource"
class="com.alibaba.druid.pool.DruidDataSource"
destroy-method="close">
 <property name="url" value="${jdbc.url}"
/>
<property name="username"
value="${jdbc.username}" />
<property name="password"
value="${jdbc.password}" />
<property name="driverClassName"
value="${jdbc.driver}" />
<property name="maxActive" value="10" />
<property name="minIdle" value="5" />
</bean>
<!-- 创建 mybatis 的上下文对象 -->
<bean
class="org.mybatis.spring.SqlSessionFactoryBean">
<property name="dataSource">
<ref bean="dataSource"/>
</property>
<property name="configLocation">
<value>classpath:mybatis/SqlMapperClient.xml</v
alue>
</property>
</bean>
<!-- 扫描 mybatis 的接口与映射配置文件 -->
<bean
class="org.mybatis.spring.mapper.MapperScannerConf
igurer">
<property name="basePackage"
value="com.bjsxt.mapper"/>
</bean>
</beans>
4.5.4applicationContext-service.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans
xmlns="http://www.springframework.org/schema/beans
"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-i
nstance"
xmlns:p="http://www.springframework.org/schema/p"
xmlns:context="http://www.springframework.org
/schema/context"
xmlns:mvc="http://www.springframework.org/sch
ema/mvc"
xsi:schemaLocation="http://www.springframewor
k.org/schema/beans
http://www.springframework.org/schema/beans/spring
-beans.xsd

http://www.springframework.org/schema/mvc
http://www.springframework.org/schema/mvc/spring-m
vc-4.0.xsd

http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spri
ng-context.xsd">
<!-- 扫描 bean 对象 -->
<context:component-scan
base-package="com.bjsxt.service"/>
</beans>
4.5.5applicationContext-trans.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans
xmlns="http://www.springframework.org/schema/beans
"
xmlns:context="http://www.springframework.org
/schema/context"
xmlns:p="http://www.springframework.org/schema/p"
xmlns:aop="http://www.springframework.org/sch
ema/aop"
xmlns:tx="http://www.springframework.org/schema/tx
"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-i
nstance"
xsi:schemaLocation="http://www.springframewor
k.org/schema/beans
http://www.springframework.org/schema/beans/spring
-beans-4.0.xsd
http://www.springframework.org/schema/context 
http://www.springframework.org/schema/context/spri
ng-context-4.0.xsd
http://www.springframework.org/schema/aop
http://www.springframework.org/schema/aop/spring-a
op-4.0.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx
-4.0.xsd
http://www.springframework.org/schema/util
http://www.springframework.org/schema/util/springutil-4.0.xsd">
 <!-- 配置事物管理器的切面 -->
 <bean id="transactionMananger"
class="org.springframework.jdbc.datasource.DataSou
rceTransactionManager">
<property name="dataSource"
ref="dataSource"/>
 </bean>

 <!-- 配置事物传播行为 ：其实就是那些方法应该受什
么样的事物控制-->
 <tx:advice id="advice"
transaction-manager="transactionMananger">
 <tx:attributes>
 <tx:method name="add*"
propagation="REQUIRED"/>
 <tx:method name="modify*"
propagation="REQUIRED"/>
 <tx:method name="update*"
propagation="REQUIRED"/>
 <tx:method name="dorp*"
propagation="REQUIRED"/>
 <tx:method name="del*"
propagation="REQUIRED"/>
 <tx:method name="find*"
read-only="true"/>
 </tx:attributes>
 </tx:advice>

 <!-- 那些类下的方法需要参与到当前的事物管理中 。
配置切点 -->
 <aop:config>
 <aop:advisor advice-ref="advice"
pointcut="execution(* 
com.bjsxt.service.*.*(..))"/>
 </aop:config>
</beans>
4.5.6springmvc.xml
<?xml version="1.0" encoding="UTF-8"?>
<beans
xmlns="http://www.springframework.org/schema/beans
"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-i
nstance"
xmlns:p="http://www.springframework.org/schema/p"
xmlns:context="http://www.springframework.org
/schema/context"
xmlns:mvc="http://www.springframework.org/sch
ema/mvc"
xsi:schemaLocation="http://www.springframewor
k.org/schema/beans
http://www.springframework.org/schema/beans/spring
-beans.xsd

http://www.springframework.org/schema/mvc 
http://www.springframework.org/schema/mvc/spring-m
vc-4.0.xsd

http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spri
ng-context.xsd">
 <!-- 包的扫描器主要是扫描@controller -->
 <context:component-scan
base-package="com.bjsxt.web.controller"/>
 <!-- 注册两个新对象 主要是为了来处理
springmvc 中的其他 anntation 如：@requestmapping -->
 <mvc:annotation-driven/>

 <!-- 视图解析器 -->
 <bean
class="org.springframework.web.servlet.view.Intern
alResourceViewResolver">
<property name="prefix"
value="/WEB-INF/jsp/" /><!-- jsp 所在的前缀 -->
<property name="suffix" value=".jsp" />
 </bean>
 <!-- 配置静态资源映射 -->
 <mvc:resources location="/WEB-INF/css/"
mapping="/css/**"/>
<mvc:resources location="/WEB-INF/js/"
mapping="/js/**"/>
 <!-- 文件上传处理器 -->
 <bean id="multipartResolver"
class="org.springframework.web.multipart.commons.C
ommonsMultipartResolver">
 <property name="defaultEncoding"
value="utf-8"></property>
 <property name="maxInMemorySize"
value="1024"></property>
 <!-- 单位字节 -->
 <!--
org.springframework.web.multipart.MaxUploadSizeExc
eededException -->
 <property name="maxUploadSize"
value="1000000"></property>
 </bean>
</beans>
4.5.7web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instan
ce"
xmlns="http://java.sun.com/xml/ns/javaee"
xsi:schemaLocation="http://java.sun.com/xml/n
s/javaee
http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd"
id="WebApp_ID" version="3.0">
<!-- 上下文参数,告诉 Spring 配置文件路径 -->
<context-param>
<param-name>contextConfigLocation</param-name>
<param-value>classpath:spring/applicationContex
t-*.xml</param-value>
</context-param>
<listener>
<listener-class>org.springframework.web.context
.ContextLoaderListener</listener-class>
</listener>
<!-- 配置 springmvc -->
<servlet>
<servlet-name>springmvc</servlet-name>
<servlet-class>org.springframework.web.servlet.
DispatcherServlet</servlet-class>
<init-param>
<param-name>contextConfigLocation</param-name>
<param-value>classpath:spring/springmvc.xml</pa
ram-value>
</init-param>
<load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
<servlet-name>springmvc</servlet-name>
<url-pattern>/</url-pattern>
</servlet-mapping>
<filter>
<filter-name>encoding</filter-name>
<filter-class>org.springframework.web.filter.Ch
aracterEncodingFilter</filter-class>
<init-param>
<param-name>encoding</param-name>
<param-value>utf-8</param-value>
</init-param>
</filter>
<filter-mapping>
<filter-name>encoding</filter-name>
<url-pattern>/*</url-pattern>
</filter-mapping>
<welcome-file-list>
<welcome-file>index.html</welcome-file>
<welcome-file>index.htm</welcome-file>
<welcome-file>index.jsp</welcome-file>
<welcome-file>default.html</welcome-file>
<welcome-file>default.htm</welcome-file>
<welcome-file>default.jsp</welcome-file>
</welcome-file-list>
</web-app>
4.5.8配置 tomcat 与资源拷贝插件
4.5.8.1 配置 tomcat 插件
<plugins>
 <!-- 配置 Tomcat 插件 -->
<plugin>
<groupId>org.apache.tomcat.maven</groupId>
<artifactId>tomcat7-maven-plugin</artifactId>
<configuration>
<port>8080</port>
<path>/</path>
</configuration>
</plugin>
 </plugins>
4.5.8.2 资源拷贝插件
4.5.8.2.1在 manager-mapper 项目中添加资源拷贝插件
<build>
<resources>
<resource>
<directory>src/main/java</directory>
<includes>
<include>**/*.xml</include>
</includes>
</resource>
</resources>
</build>
4.5.9启动 tomcat 测试框架整合
5 添加业务逻辑
5.1添加用户
5.1.1Manager-controller
5.1.1.1 Controller
/**
* 页面跳转 Controller
* @author Administrator
*
*/
@Controller
public class PageController {
@RequestMapping("/{page}")
public String showPage(@PathVariable String page){
return page;
}
}
/**
* 操作 UserController
* @author Administrator
*
*/
@Controller
@RequestMapping("/user")
public class UserController {
@Autowired
private UserService userService;
/*
* 添加用户
*/
@RequestMapping("/addUser")
public String addUser(Users user){
this.userService.addUser(user);
return "ok";
}
}
5.1.1.2 Jsp
<%@ page language="java" contentType="text/html;
charset=UTF-8"
 pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;
charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<a href="addUser">添加用户</a>&nbsp;&nbsp;&nbsp;<a
href="">查询用户</a>
</body>
</html>
<%@ page language="java" contentType="text/html;
charset=UTF-8"
 pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;
charset=UTF-8">
<title>AddUser</title>
</head>
<body>
<form action="/user/addUser" method="post">
用户姓名：<input type="text" name="username"/><br/>
用户年龄：<input type="text" name="userage"/><br/>
<input type="submit" value="OKOK"/>
</form>
</body>
</html>
<%@ page language="java" contentType="text/html;
charset=UTF-8"
 pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;
charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
操作成功。。。。。
</body>
</html>
5.1.2Manager-service
public interface UserService {
public void addUser(Users user);
}
@Service
public class UserServiceImpl implements UserService {
@Autowired
private UserMapper userMapper;
@Override
public void addUser(Users user) {
this.userMapper.insertUser(user);
}
}
5.1.3Manager-mapper
public interface UserMapper {
public void insertUser(Users user);
}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.bjsxt.mapper.UserMapper" >
 <insert id="insertUser"
parameterType="com.bjsxt.pojo.Users">
 insert into users(username,userage)
values(#{username},#{userage})
 </insert>
</mapper>
5.1.4Manager-pojo
public class Users {
private int userid;
private String username;
private int userage;
public int getUserid() {
return userid;
}
public void setUserid(int userid) {
this.userid = userid;
}
public String getUsername() {
return username;
}
public void setUsername(String username) {
this.username = username;
}
public int getUserage() {
return userage;
}
public void setUserage(int userage) {
this.userage = userage;
}
}
5.2查询用户
5.2.1Manager-controller
5.2.1.1 Controller
/*
* 查询所有用户
*/
@RequestMapping("/findUser")
public String findUser(Model model){
List<Users> list = this.userService.findUser();
model.addAttribute("list", list);
return "showUser";
}
5.2.1.2 Jsp
<%@ page language="java" contentType="text/html;
charset=UTF-8"
 pageEncoding="UTF-8"%>
<%@ taglib prefix="c"
uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;
charset=UTF-8">
<title>showUser</title>
</head>
<body>
<table border="1" align="center">
<tr>
<th>用户 ID</th>
<th>用户姓名</th>
<th>用户年龄</th>
<th>操作</th>
</tr>
<c:forEach items="${list }" var="user">
<tr>
<td>${user.userid }</td>
<td>${user.username }</td>
<td>${user.userage }</td>
<td>
<a href="">修改</a>&nbsp;&nbsp;
<a href="">删除</a>
</td>
</tr>
</c:forEach>
</table>
</body>
</html>
5.2.2Manager-service
public interface UserService {
public void addUser(Users user);
public List<Users> findUser();
}
@Service
public class UserServiceImpl implements UserService {
@Autowired
private UserMapper userMapper;
@Override
public void addUser(Users user) {
this.userMapper.insertUser(user);
}
@Override
public List<Users> findUser() {
return this.userMapper.selectUserAll();
}
}
5.2.3Manager-mapper
public interface UserMapper {
public void insertUser(Users user);
public List<Users> selectUserAll();
}
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
"http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.bjsxt.mapper.UserMapper" >
 <insert id="insertUser"
parameterType="com.bjsxt.pojo.Users">
 insert into users(username,userage)
values(#{username},#{userage})
 </insert>

 <select id="selectUserAll"
resultType="com.bjsxt.pojo.Users">
 select * from users
 </select>
</mapper>