四、 Maven 中的常见插件

## 1 编译器插件

编辑JDK的版本

3.5的maven默认jdk版本是1.5(在JRE那里能看到),如果要修改就要在pom做做出相应修改

前提条件:eclipse支持这个版本,可以在Java-iNSTALL里进行相应的设置

![1565314654988](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565314654988.png)

### 1.1pom.xml 配置片段

```xml
 <build>
 <plugins>
 <!-- java 编译插件 一个项目可以有多个插件-->
 <plugin><!-- 插件坐标 -->
 <groupId>org.apache.maven.plugins</groupId> <!-- 主值ID -->
 <artifactId>maven-compiler-plugin</artifactId><!-- 项目名称 -->
 <version>3.2</version>
 <configuration>
 <source>1.7</source><!-- 源代码需要的jdk版本 -->
 <target>1.7</target><!-- 编译目标生成class需要的jdk版本,要保证这两个的一致性 -->
 <encoding>UTF-8</encoding>
 </configuration>
 </plugin>
 </plugins>
 </build>
```
选择maven里的updateproject,更新项目

![1565314875344](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565314875344.png)

![1565314859632](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565314859632.png)

### 1.2settings.xml 文件中配置全局编译器插件

设置这个可以对全局进行设置TTT

```xml
<profile>
<!-- 定义的编译器插件 ID，全局唯一 -->
<id>jdk-1.7</id>
<!-- 插件标记，activeByDefault 默认编译器，jdk 提供编译器版本 -->
<activation>
<activeByDefault>true</activeByDefault>
<jdk>1.7</jdk>
</activation>
<!-- 配置信息 source-源信息，target-字节码信息，compilerVersion-编译过程版
本 -->
<properties>
<maven.compiler.source>1.7</maven.compiler.source>
<maven.compiler.target>1.7</maven.compiler.target>
<maven.compiler.compilerVersion>1.7</maven.compiler.compilerVersion>
</properties>
</profile>
```
## 2 Tomcat 管理插件

### 2.1本地应用

不需要额外地创建Tomcat了

记得添加webin和web.xml并添加对应约束

使用 Tomcat 插件发布部署并执行 war 工程的时候，使用 maven build 功能实现。

![1565316161229](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565316161229.png)

应用启动命令为： tomcat7:run。命令中的 tomcat7 是插件命名，由插件提供商决定。run 为插件中
的具体功能。具体 pom.xml 文件的配置如下：

![1565316184667](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565316184667.png)

只需要build一次

```xml
<build>
 <plugins>
 <!-- 配置 Tomcat 插件 -->
 <plugin>
 <groupId>org.apache.tomcat.maven</groupId>
 <artifactId>tomcat7-maven-plugin</artifactId>
 <version>2.2</version>
 <configuration>
 <port>8080</port> <!-- 配置 Tomcat 端口 -->
 <path>/</path> <!-- 配置 项目根路径 -->
      <!-- /:表示的是tomcat的webapps下的ROOT目录 -->
 </configuration>
 </plugin>
 </plugins>
 </build>
```
### 2.2远程热部署

远程热部署是指，在 Tomcat 容器运行过程中，动态实现 war 工程的部署，

重新部署功能。使用 maven build 功能实现，具体命令为：tomcat7:deploy 或 tomcat7:redeploy。

其中 deploy代表第一次部署 war 工程；redeploy 代表 Tomcat 容器中已有同名应用，本次操作为重新部署同名 war 工程。
实现热部署需要远程访问 Tomcat 容器，所以 Tomcat 容器需要提供合适的访问方式和验证方式。
实现热部署，需要访问 Tomcat 容器提供的原始应用 manager，并提供有效有权限的访问用户，所以在 Tomcat 中也需提供部分配置。具体配置内容如下：

默认不支持远程部署

#### 2.2.1Tomcat 中的 conf/tomcat-users.xml 文件的配置

```xml
<role rolename="manager-gui"/>
<role rolename="manager-script"/><!-- 分配了两个权限-->
<user username="tomcatUsername" password="tomcatPassword"
roles="manager-gui,manager-script"/>
```
![1565318710689](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565318710689.png)

相当于配置这里的账号与密码

![1565318865446](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565318865446.png)

#### 2.2.2pom.xml 文件中的配置

```xml
 <build>
 <plugins>
 <!-- 配置 Tomcat 插件 -->
 <plugin>
 <groupId>org.apache.tomcat.maven</groupId>
 <artifactId>tomcat7-maven-plugin</artifactId>
 <version>2.2</version>
 <configuration>
 <!-- path: 上传的 war 包解压后的路径命名 -->
 <path>/ROOT</path>
 <!-- url : 上传 war 包到什么位置,除 IP 和端口可以修改外其他不变 -->
 <url>http://ip:port/manager/text</url>
 <!-- 为 tomcat 配置的管理用户名和密码. -->
 <username>tomcatUsername</username>
 <password>tomcatPassword</password>
 </configuration>
 </plugin>
 </plugins>
 </build>
```
## 3 资源拷贝插件

Maven 在打包时默认只将 src/main/resources 里的配置文件拷贝到项目中并做打包处理，
而非 resource 目录下的配置文件在打包时不会添加到项目中


```xml
<build>
    
<resources>
    
<resource>
<directory>src/main/java</directory><!--拷贝的目录-->
<includes>
<include>**/*.xml</include>
<!--**:所有的目录以及子目录-->
<!--*.xml:目录下全部的xml文件-->
</includes>
</resource> 
    
<!--一旦写了就不会从resource目录下去找了-->
<resource>
<directory>src/main/resources</directory>
<includes>
<include>**/*.xml</include>
<include>**/*.properties</include>
</includes>
</resource>
</resources>
</build>
```

TTT