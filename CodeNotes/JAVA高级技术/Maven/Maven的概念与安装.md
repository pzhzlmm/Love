Maven
## 一、 Maven 概念
### 1 什么是 Maven
Maven 使用项目对象模型(POM)的概念，可以通过一小段描述信息来管理项目的构建，
报告和文档的软件项目管理工具。
功能很多,如jar包注入
Maven 除了以程序构建能力为特色之外，还提供高级项目管理工具。由于 Maven 的
缺省构建规则有较高的可重用性，所以常常用两三行 Maven 构建脚本就可以构建简单的项
目。由于 Maven 的面向项目的方法，许多 Apache Jakarta 项目发布时使用 Maven，而且
公司项目采用 Maven 的比例在持续增长。
### 2 Maven 和 ANT 的区别
Ant 是软件构建工具，Maven 的定位是软件项目管理和理解工具。Maven 除了具备 Ant
的功能外，还增加了以下主要的功能(Ant的升级)：
1）使用 Project Object Model 来对软件项目管理；
2）内置了更多的隐式规则，使得构建文件更加简单；
3）内置依赖管理和 Repository 来实现依赖的管理和统一存储；
4）内置了软件构建的生命周期；
目前，绝大多数开发人员都把 Ant 当作 Java 编程项目的标准构建工具。遗憾的是，
Ant 的项目管理工具（作为 make 的替代工具）不能满足绝大多数开发人员的需要。通过检
查 Ant 构建文件，很难发现项目的相关性信息和其它信息（如开发人员/拥有者、版本或站
点主页）。
## 二、 Maven 的下载与 IDE 的整合
### 1 下载地址
http://maven.apache.org/
解压就可
### 2 Maven 的目录结构
bin:命令,通过命令脚本完成项目管理,但比较麻烦,一般使用IDE操控Maven
boot:启动需要jar包
conf:配置文件
lib:工作时需要用到的jar包
### 3 Eclipse 整合 Maven

目前已经集成3.3.3,可以用

#### 3.1整合步骤

maven-installations()-add

![1565230734238](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565230734238.png)

选择根目录,吧maven选择放进去

![1565230769473](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565230769473.png)

#### 3.2指定 maven 的配置文件

User Setting,选择对应配置文件,UpdateSetting

![1565230913405](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565230913405.png)

这步一定要做,不然用的是它自带的那个配置文件

![1565230795568](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565230795568.png)

### 4 Maven 仓库与配置

#### 4.1Maven 仓库是什么

##### 4.1.1Maven 仓库

Maven 仓库是基于简单文件系统存储的，集中化管理 Java API 资源（构件）的一个服
务。仓库中的任何一个构件都有其唯一的坐标，根据这个坐标可以定义其在仓库中的唯一存
储路径。得益于 Maven 的坐标机制，任何 Maven 项目使用任何一个构件的方式都是完全
相同的，Maven 可以在某个位置统一存储所有的 Maven 项目共享的构件，这个统一的位
置就是仓库，项目构建完毕后生成的构件也可以安装或者部署到仓库中，供其它项目使用。
对于 Maven 来说，仓库分为两类：本地仓库和远程仓库。
构件:java jar包的一个集合
远程导入到本地,下载一次就可以了
当前项目可以添加到别的项目

本地仓库默认路径:

![1565322510723](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565322510723.png)

但可以在Setting文件夹里对其路径进行更改

##### 4.1.2远程仓库

远程仓库指通过各种协议如 file://和 http://访问的其它类型的仓库。这些仓库可能是第
三方搭建的真实的远程仓库，用来提供他们的构件下载（例如 repo.maven.apache.org 和
uk.maven.org 是 Maven 的中央仓库）。其它“远程”仓库可能是你的公司拥有的建立在文件
或 HTTP 服务器上的内部仓库，用来在开发团队间共享私有构件和管理发布的。
差距的存储位置
如apath远程仓库:www.mvnrepository.com 
![1565231576952](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565231576952.png)
贴入可下载下来注入jar包

##### 4.1.3本地仓库
本地仓库指本机的一份拷贝，用来缓存远程下载，包含你尚未发布的临时构件。
### 5 仓库配置
5.1在 settings.xml 文件中配置本地仓库
本地仓库是开发者本地电脑中的一个目录，用于缓存从远程仓库下载的构件。默认的本
地仓库是${user.home}/.m2/repository。用户可使用 settings.xml 文件修改本地仓库。具体内容
如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
http://maven.apache.org/xsd/settings-1.0.0.xsd">
 <!-- 本地仓库配置 -->
 <localRepository>/put/your/local/repository/here</localRepository>
 <!-- 省略，具体信息参考后续内容。 -->
</settings>
```

可通过localRepository修改本地仓库配置路径
5.2在 settings.xml 文件中配置镜像仓库
如果仓库 A 可以提供仓库 B 存储的所有内容，那么就可以认为 A 是 B 的一个镜像。例
如：在国内直接连接中央仓库下载依赖，由于一些特殊原因下载速度非常慢。这时，我们可
以使用阿里云提供的镜像 http://maven.aliyun.com/nexus/content/groups/public/来替换中央仓
库 http://repol.maven.org/maven2/。修改 maven 的 setting.xml 文件，具体内容如下：

```xml
<mirror>
 <!-- 指定镜像 ID -->
<id>nexus-aliyun</id>
 <!-- 匹配中央仓库。-->
<mirrorOf>central</mirrorOf>
<!-- 指定镜像名称 -->
<name>Nexus aliyun</name>
<!-- 指定镜像路径 -->
<url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```



## 6.仓库优先级问题

本地仓库，镜像仓库，中央仓库。
镜像仓库=中央仓库。 镜像仓库是用于替代中央仓库的。
仓库访问优先级：
### 6.1本地仓库
第一访问本地仓库。
### 6.2指定仓库
如果本地仓库不存在对应信息，访问配置文件中指定的远程仓库。
这个远程仓库是第二优先级。
### 6.3远程仓库
#### 6.3.1镜像仓库
镜像仓库是 Maven 开发过程中的首选远程仓库，在本地仓库和指定仓库无法获取资源
的时候，直接访问镜像仓库。
#### 6.3.2中央仓库
如果镜像仓库不是中央仓库，则会在访问镜像仓库无法获取资源后，访问中央仓库。