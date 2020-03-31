# 第1章 为什么要使用Maven

 

Maven是干什么用的？这是很多同学在学完这个课程后最大的问题。之所以会提出这个问题，是因为即使不使用Maven我们仍然可以进行B/S结构项目的开发。从表述层、业务逻辑层到持久化层再到数据库都有成熟的解决方案——不使用Maven我们一样可以开发项目啊？所以我们有必要通过企业开发中的实际需求来看一看哪些方面是我们现有技术的不足。

 

## 1.1 添加第三方jar包

在今天的JavaEE开发领域，有大量的第三方框架和工具可以供我们使用。要使用这些jar包最简单的方法就是复制粘贴到WEB-INF目录下的lib目录下。但是这会导致每次创建一个新的工程就需要将jar包重复复制到lib目录下，从而造成工作区中存在大量重复的文件。

而使用Maven后每个jar包只在本地仓库中保存一份，需要jar包的工程只需要维护一个文本形式的jar包的引用——我们称之为“坐标”。不仅极大的节约了存储空间，让项目更轻巧，更避免了重复文件太多而造成的混乱。

 

## 1.2 jar包之间的依赖关系

jar包往往不是孤立存在的，很多jar包都需要在其他jar包的支持下才能够正常工作，我们称之为jar包之间的依赖关系。最典型的例子是：commons-fileupload-1.3.jar依赖于commons-io-2.0.1.jar，如果没有IO包，FileUpload包就不能正常工作。

那么问题来了，你知道你所使用的所有jar包的依赖关系吗？当你拿到一个新的从未使用过的jar包，你如何得知他需要哪些jar包的支持呢？如果不了解这个情况，导入的jar包不够，那么现有的程序将不能正常工作。再进一步，当你的项目中需要用到上百个jar包时，你还会人为的，手工的逐一确认它们依赖的其他jar包吗？这简直是不可想象的。

而引入Maven后，Maven就可以替我们自动的将当前jar包所依赖的其他所有jar包全部导入进来，无需人工参与，节约了我们大量的时间和精力。用实际例子来说明就是：通过Maven导入commons-fileupload-1.3.jar后，commons-io-2.0.1.jar会被自动导入，程序员不必了解这个依赖关系。

 

## 1.3 处理jar包之间的冲突

上一点说的是jar包不足项目无法正常工作，但其实有的时候jar包多了项目仍然无法正常工作，这就是jar包之间的冲突。

举个例子：我们现在有三个工程MakeFriend、HelloFriend、和Hello。MakeFriend依赖HelloFriend，HelloFriend依赖Hello。而Hello依赖log4j.1.2.17.jar，HelloFriend依赖log4j.1.2.14.jar。如下图所示：

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658852175-e2b8cb56-c5eb-43bb-9d62-9e8ba79bd63d.png)

那么MakeFriend工程的运行时环境中该导入log4j.1.2.14.jar呢还是log4j.1.2.17.jar呢？

这样的问题一个两个还可以手工解决，但如果系统中存在几十上百的jar包，他们之间的依赖关系会非常复杂，几乎不可能手工实现依赖关系的梳理。

使用Maven就可以自动的处理jar包之间的冲突问题。因为Maven中内置了两条依赖原则：最短路径者优先和先声明者优先，上述问题MakeFriend工程会自动使用log4j.1.2.14.jar。

 

## 1.4 获取第三方jar包

JavaEE开发中需要使用到的jar包种类繁多，几乎每个jar包在其本身的官网上的获取方式都不尽相同。为了查找一个jar包找遍互联网，身心俱疲，没有经历过的人或许体会不到这种折磨。不仅如此，费劲心血找的jar包里有的时候并没有你需要的那个类，又或者有同名的类没有你要的方法——以不规范的方式获取的jar包也往往是不规范的。

使用Maven我们可以享受到一个完全统一规范的jar包管理体系。你只需要在你的项目中以坐标的方式依赖一个jar包，Maven就会自动从中央仓库进行下载，并同时下载这个jar包所依赖的其他jar包——规范、完整、准确！一次性解决所有问题！

Tips：在这里我们顺便说一下，统一的规范几乎可以说成是程序员的最高信仰。如果没有统一的规范，就意味着每个具体的技术都各自为政，需要以诸多不同的特殊的方式加入到项目中；好不容易加入进来还会和其他技术格格不入，最终受苦的是我们。而任何一个领域的统一规范都能够极大的降低程序员的工作难度，减少工作量。例如：USB接口可以外接各种设备，如果每个设备都有自己独特的接口，那么不仅制造商需要维护各个接口的设计方案，使用者也需要详细了解每个设备对应的接口，无疑是非常繁琐的。

 

## 1.5 将项目拆分成多个工程模块

随着JavaEE项目的规模越来越庞大，开发团队的规模也与日俱增。一个项目上千人的团队持续开发很多年对于JavaEE项目来说再正常不过。那么我们想象一下：几百上千的人开发的项目是同一个Web工程。那么架构师、项目经理该如何划分项目的模块、如何分工呢？这么大的项目已经不可能通过package结构来划分模块，必须将项目拆分成多个工程协同开发。多个模块工程中有的是Java工程，有的是Web工程。

那么工程拆分后又如何进行互相调用和访问呢？这就需要用到Maven的依赖管理机制。大家请看调查项目拆分的情况：

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658852284-9e3612c5-b306-47da-a563-79fd6e47d14a.png)

上层模块依赖下层，所以下层模块中定义的API都可以为上层所调用和访问。

 

## 1.6 实现项目的分布式部署

在实际生产环境中，项目规模增加到一定程度后，可能每个模块都需要运行在独立的服务器上，我们称之为分布式部署，这里同样需要用到Maven。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658852413-ea341605-b62f-44a9-9d5d-42c5ce8710d7.png)

 

# 第2章 Maven 是什么？

​    ![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658852516-9339a4eb-5a07-4aa2-a9e2-7dd5b869601d.png)

如果上面的描述能够使你认识到使用Maven是多么的重要，我们下面就来介绍一下Maven是什么。

 

## 2.1 自动化构建工具

1)   Maven这个单词的本意是：专家，内行。读音是['meɪv(ə)n]或['mevn]，不要读作“妈文”。

2)   Maven是一款自动化构建工具，专注服务于Java平台的项目构建和依赖管理。在JavaEE开发的历

史上构建工具的发展也经历了一系列的演化和变迁：

Make→Ant→Maven→Gradle→其他……

 

## 2.2 构建的概念

1)   构建并不是创建，创建一个工程并不等于构建一个项目。要了解构建的含义我们应该由浅入深的从以下三个层面来看：

①纯Java代码

大家都知道，我们Java是一门编译型语言，.java扩展名的源文件需要编译成.class扩展名的字节码文件才能够执行。所以编写任何Java代码想要执行的话就必须经过**编译**得到对应的.class文件。

②Web工程

当我们需要通过浏览器访问Java程序时就必须将包含Java程序的Web工程编译的结果“拿”到服务器上的指定目录下，并启动服务器才行。这个“拿”的过程我们叫**部署**。

我们可以将未编译的Web工程比喻为一只生的鸡，编译好的Web工程是一只煮熟的鸡，编译部署的过程就是将鸡炖熟。

Web工程和其编译结果的目录结构对比见下图：

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658852643-1cf96af7-55b7-44ad-aa2b-db9e1f4a3757.png)

③实际项目

在实际项目中整合第三方框架，Web工程中除了Java程序和JSP页面、图片等静态资源之外，还包括第三方框架的jar包以及各种各样的配置文件。所有这些资源都必须按照正确的目录结构部署到服务器上，项目才可以运行。

所以综上所述：构建就是以我们编写的Java代码、框架配置文件、国际化等其他资源文件、JSP页面和图片等静态资源作为“**原材料**”，去**“****生产****”**出一个可以运行的**项目**的过程。

那么项目构建的全过程中都包含哪些环节呢？

 

## 2.3 构建环节

1)   清理：删除以前的编译结果，为重新编译做好准备。

2)   编译：将Java源程序编译为字节码文件。

3)   测试：针对项目中的关键点进行测试，确保项目在迭代开发过程中关键点的正确性。

4)   报告：在每一次测试后以标准的格式记录和展示测试结果。

5)   打包：将一个包含诸多文件的工程封装为一个压缩文件用于安装或部署。Java工程对应jar包，Web工程对应war包。

6)   安装：在Maven环境下特指将打包的结果——jar包或war包安装到本地仓库中。

7)   部署：将打包的结果部署到远程仓库或将war包部署到服务器上运行。

 

## 2.4 自动化构建

其实上述环节我们在Idea中都可以找到对应的操作，只是不太标准。那么既然IDE已经可以进行构建了我们为什么还要使用Maven这样的构建工具呢？我们来看一个小故事：

这是阳光明媚的一天。托马斯向往常一样早早的来到了公司，冲好一杯咖啡，进入了自己的邮箱——很不幸，QA小组发来了一封邮件，报告了他昨天提交的模块的测试结果——有BUG。“好吧，反正也不是第一次”，托马斯摇摇头，进入IDE，运行自己的程序，编译、打包、部署到服务器上，然后按照邮件中的操作路径进行测试。“嗯，没错，这个地方确实有问题”，托马斯说道。于是托马斯开始尝试修复这个BUG，当他差不多有眉目的时候已经到了午饭时间。下午继续工作。BUG很快被修正了，接着托马斯对模块重新进行了编译、打包、部署，测试之后确认没有问题了，回复了QA小组的邮件。一天就这样过去了，明媚的阳光化作了美丽的晚霞，托马斯却觉得生活并不像晚霞那样美好啊。

 

让我们来梳理一下托马斯这一天中的工作内容

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658852793-665ee913-89ad-403e-9d13-d761d991904f.png)

从中我们发现，托马斯的很大一部分时间花在了“编译、打包、部署、测试”这些程式化的工作上面，而真正需要由“人”的智慧实现的分析问题和编码却只占了很少一部分。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658853059-9c24ba1f-87da-4450-b476-b453718d5820.png)

能否将这些程式化的工作交给机器**自动**完成呢？——当然可以！这就是自动化构建。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658853355-c36298bb-5066-4317-aa80-596f92d4fd3f.png)

那么Maven又是如何实现自动化构建的呢？简单的说来就是它可以自动的从构建过程的起点一直执行到终点：

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585658853487-3bce366d-c0d7-4bf2-bcaa-52a4b1596f0a.png)

 

## 2.5 Maven核心概念

Maven之所以能够实现自动化的构建，和它的设计是紧密相关的。我们对Maven的学习就围绕它的九个核心概念展开：

1)   POM

2)   约定的目录结构

3)   坐标

4)   依赖管理

5)   仓库管理

6)   生命周期

7)   插件和目标

8)   继承

9)   聚合

 

# 第3章 Maven 如何使用

在这一节中，我们来看看Maven核心程序的安装和本地仓库的必要设置。然后我们就可以编写第一个Maven程序了。

## 3.1 安装Maven核心程序

 

1)   检查JAVA_HOME环境变量。Maven是使用Java开发的，所以必须知道当前系统环境中JDK的安装目录。

C:\Windows\System32>echo %JAVA_HOME%D:\Java\jdk1.8.0_111

 

2)   解压Maven的核心程序。

将apache-maven-3.2.2-bin.zip解压到一个**非中文无空格**的目录下。例如：

D:\apache-maven-3.2.2 

 

3)   配置环境变量。

| M2_HOME               |
| --------------------- |
| D:\apache-maven-3.2.2 |

 

| path                                     |
| ---------------------------------------- |
| %M2_HOME%\bin或D:\apache-maven-3.2.2\bin |

 

4)   ④查看Maven版本信息验证安装是否正确

C:\Users\Administrator>mvn -vApache Maven 3.2.2 (45f7c06d68e745d05611f7fd14efb6594181933e; 2014-06-17T21:51:42+08:00)Maven home: E:\apache-maven-3.2.2Java version: 1.8.0_45, vendor: Oracle CorporationJava home: E:\java\jdk1.8.0_45\jreDefault locale: zh_CN, platform encoding: GBKOS name: "windows 7", version: "6.1", arch: "amd64", family: "dos"

 

## 3.2 第一个Maven工程

1)   第一步：创建约定的目录结构

Hello     src     ——main     ————java     ————resources     ——test     ————java     ————resources     pom.xml

main目录用于存放主程序。

test目录用于存放测试程序。

java目录用于存放源代码文件。

resources目录用于存放配置文件和资源文件。

 

2)   第二步：创建Maven的核心配置文件pom.xml

| <?xml version="1.0" ?><project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">    <modelVersion>4.0.0</modelVersion>    **com.atguigu.maven**    **Hello**    **0.0.1-SNAPSHOT**    <name>Hello</name>        <dependencies>        <dependency>            <groupId>junit</groupId>            <artifactId>junit</artifactId>            <version>4.0</version>            <scope>test</scope>        </dependency>    </dependencies></project> |      |
| ------------------------------------------------------------ | ---- |
|                                                              |      |

 

3)   第三步：编写主代码

在src/main/java/com/atguigu/maven目录下新建文件Hello.java

package com.atguigu.maven;public class Hello {    public String sayHello(String name){        return "Hello "+name+"!";    }}

 

4)   第四步：编写测试代码

​    在/src/test/java/com/atguigu/maven目录下新建测试文件HelloTest.java

package com.atguigu.maven;    import org.junit.Test;    import static junit.framework.Assert.*;    public class HelloTest {        @Test        public void testHello(){            Hello hello = new Hello();            String results = hello.sayHello("atguigu");            assertEquals("Hello atguigu!",results);        }    }

 

5)   第五步：运行几个基本的Maven命令

打开cmd命令行，进入Hello项目根目录(pom.xml文件所在目录)执行mvn compile命令，查看根目录变化cmd 中继续录入mvn clean命令，然后再次查看根目录变化cmd 中录入 mvn compile命令, 查看根目录变化cmd 中录入 mvn test-compile命令， 查看target目录的变化cmd 中录入 mvn test命令，查看target目录变化cmd 中录入 mvn package命令,查看target目录变化cmd 中录入 mvn install命令， 查看本地仓库的目录变化 

注意：运行Maven命令时一定要进入pom.xml文件所在的目录！

 

 

## 3.3 Maven 联网问题

1)    配置本地仓库

1)   Maven的核心程序并不包含具体功能，仅负责宏观调度。具体功能由插件来完成。Maven核心程序会到本地仓库中查找插件。如果本地仓库中没有就会从远程中央仓库下载。此时如果不能上网则无法执行Maven的具体功能。为了解决这个问题，我们可以将Maven的本地仓库指向一个在联网情况下下载好的目录。

2)   Maven默认的本地仓库：~\.m2\repository目录。

Tips：~表示当前用户的家目录。

3)   Maven的核心配置文件位置：

解压目录D:\apache-maven-3.2.2\conf\settings.xml

4)   设置方式

| <localRepository>以及准备好的仓库位置</localRepository> |
| ------------------------------------------------------- |
| <localRepository>E:\LocalRepository</localRepository>   |

5)   为了以后下载jar包方便，配置阿里云镜像

<mirror>  <id>nexus-aliyun</id>  <mirrorOf>central</mirrorOf>  <name>Nexus aliyun</name>  <url>http://maven.aliyun.com/nexus/content/groups/public</url></mirror>

 

## 3.4 IDEA中配置Maven

1)   设置maven的安装目录及本地仓库

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658853642-7b61b6af-a688-4b46-912c-0e1337e742fd.png)

Ø Maven home directory：可以指定本地 Maven 的安装目录所在，因为我已经配置了 M2_HOME 系统参数，所以直接这样配置 IntelliJ IDEA 是可以找到的。但是假如你没有配置的话，这里可以选择你的 Maven 安装目录。此外，这里不建议使用IDEA默认的。

Ø User settings file / Local repository：我们还可以指定 Maven 的 settings.xml 位置和本地仓库位置。

 

2)   配置Maven自动导入依赖的jar包

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658853822-b358143e-31b7-4f10-9cd4-a9100f1ae969.png)

Ø Import Maven projects automatically：表示 IntelliJ IDEA 会实时监控项目的 pom.xml 文件，进行项目变动设置，勾选上。

Ø Automatically download：在 Maven 导入依赖包的时候是否自动下载源码和文档。默认是没有勾选的，也不建议勾选，原因是这样可以加快项目从外网导入依赖包的速度，如果我们需要源码和文档的时候我们到时候再针对某个依赖包进行联网下载即可。IntelliJ IDEA 支持直接从公网下载源码和文档的。

Ø VM options for importer：可以设置导入的 VM 参数。一般这个都不需要主动改，除非项目真的导入太慢了我们再增大此参数。           

## 3.5 IDEA中创建Maven Module

6)   右键→new Module→Maven

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854071-92ac067f-0f76-405a-ac3b-54e64846c950.png)

7)   点击Next，配置坐标

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854200-f784e41f-96c2-4b74-b3f6-494f6f42c831.png)

8)   点击Next，给Module命名

9)   目录结构及说明

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854321-3b083f1c-94f4-4e41-a6ba-c5ddf4e749c7.png)

main目录用于存放主程序。

test目录用于存放测试程序。

java目录用于存放源代码文件。

resources目录用于存放配置文件和资源文件。

 

10)  配置Maven的核心配置文件pom.xml

| ***xml version****="1.0"** **encoding****="UTF-8"***?>*<**project** **xmlns****="http://maven.apache.org/POM/4.0.0" **     **xmlns:****xsi****="http://www.w3.org/2001/XMLSchema-instance" **     **xsi****:schemaLocation****="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"**>  <**modelVersion**>4.0.0</**modelVersion**>   <**groupId**>com.atguigu.maven</**groupId**>  <**artifactId**>Hello</**artifactId**>  <**version**>1.0-SNAPSHOT</**version**>   <**dependencies**>    <**dependency**>      <**groupId**>junit</**groupId**>      <**artifactId**>junit</**artifactId**>      <**version**>4.0</**version**>       <**scope**>test</**scope**>    </**dependency**>  </**dependencies**> </**project**> |      |
| ------------------------------------------------------------ | ---- |
|                                                              |      |

 

11)  编写主代码

在src/**main**/java目录下新建文件Hello.java

**package** com.atguigu.maven; **public class** Hello {   **public** String sayHello(String name){     **return** **"Hello "**+name+**"!"**;   } } 

 

12)  编写测试代码

​    在/src/**test**/java目录下新建测试文件HelloTest.java

**package** com.atguigu.maven; **import** org.junit.Test; **public class** HelloTest {    @Test   **public void** testHello(){     Hello hello = **new** Hello();     String maven = hello.sayHello(**"Maven"**);     System.***out\***.println(maven);   } } 

 

13)  使用Maven的方式运行Maven工程

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854436-f13cbd21-9ade-4e01-a9ad-8c89ba8991e4.png)

## 3.6 Maven打包插件

Maven本身的打包插件不负责将依赖的jar包一并打入到jar包中。如果项目所依赖的jar包在服务器环境中提供了还好，如果服务器环境中没有提供，则比较悲惨，运行各种ClassNotFound….你们懂的!

因此需要一款能够将项目所依赖的jar包 一并打入到jar中的插件来解决这些问题.

 

<**build**>  <**plugins**>    <**plugin**>      <**artifactId**>maven-assembly-plugin</**artifactId**>      <**configuration**>        <**descriptorRefs**>          <**descriptorRef**>jar-with-dependencies</**descriptorRef**>        </**descriptorRefs**>       <**archive**>          <**manifest**>`           **指定主类* *-->*             <**mainClass**>xxx.xxx.XXX                                  <**executions**>           <**execution**>             <**id**>make-assembly             <**phase**>package             <**goals**>               <**goal**>single                                          ` 

 

# 第4章 Maven的核心概念

## 4.1 核心概念

1)   POM

2)   约定的目录结构

3)   坐标

4)   依赖

5)   仓库

6)   生命周期

7)   插件和目标

8)   继承

9)   聚合

 

 

## 4.2 POM

Project Object Model：项目对象模型。将Java工程的相关信息封装为对象作为便于操作和管理的模型。Maven工程的核心配置。可以说学习Maven就是学习pom.xml文件中的配置。

 

## 4.3 约定的目录结构

现在JavaEE开发领域普遍认同一个观点：约定>配置>编码。意思就是能用配置解决的问题就不编码，能基于约定的就不进行配置。而Maven正是因为指定了特定文件保存的目录才能够对我们的Java工程进行自动化构建。

目录结构含义参见前面的描述。

 

## 4.3 坐标

1)    几何中的坐标

[1]在一个平面中使用x、y两个向量可以唯一的确定平面中的一个点。

[2]在空间中使用x、y、z三个向量可以唯一的确定空间中的一个点。

 

2)    Maven的坐标

使用如下三个向量在Maven的仓库中唯一的确定一个Maven工程。

[1]groupId：公司或组织的域名倒序+当前项目名称

[2]artifactId：当前项目的模块名称

[3]version：当前模块的版本

​    <**g**roupId>com.atguigu.maven</groupId>    <**a**rtifactId>Hello</artifactId>    <**v**ersion>0.0.1-SNAPSHOT</version>

 

3)    如何通过坐标到仓库中查找jar包？

[1]将gav三个向量连起来

com.atguigu.maven+Hello+0.0.1-SNAPSHOT

[2]以连起来的字符串作为目录结构到仓库中查找

com/atguigu/maven/Hello/0.0.1-SNAPSHOT/Hello**-**0.0.1-SNAPSHOT.jar

※注意：我们自己的Maven工程必须执行安装操作才会进入仓库。安装的命令是：mvn install

 

## 4.4 第二个Maven工程

1)    创建HelloFriend工程

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854586-f67dad6a-d9c4-4be7-aa4f-3a72ba852af7.png)

2)    在pom.xml配置文件中配置当前工程依赖Hello

```
***xml version****="1.0"** **encoding****="UTF-8"***?> *  <**project** **xmlns****="http://maven.apache.org/POM/4.0.0" **     **xmlns:****xsi****="http://www.w3.org/2001/XMLSchema-instance" **     **xsi****:schemaLocation****="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"**>   <**modelVersion**>4.0.0     <**groupId**>com.atguigu.maven   <**artifactId**>HelloFriend   <**version**>1.0-SNAPSHOT     <**dependencies**>     <**dependency**>       <**groupId**>com.atguigu.maven       <**artifactId**>Hello       <**version**>1.0-SNAPSHOT          <**dependency**>       <**groupId**>junit       <**artifactId**>junit       <**version**>4.0       <**scope**>test            
```

 

3)    主程序

在src/**main**/java目录下新建文件HelloFriend.java

**package** com.atguigu.maven; **public class** HelloFriend {   **public** String sayHelloToFriend(String name){     Hello hello = **new** Hello();     String str = hello.sayHello(name)+**" I am "**+**this**.getMyName();     **return** str;   }   **public** String getMyName(){     **return** **"Idea"**;   } } 

 

4)    测试程序

在/src/**test**/java目录下新建测试文件HelloFriendTest.java

```
**package** com.atguigu.maven;    **import** org.junit.Test;    **public class** HelloFriendTest {   @Test   **public void** testHelloFriend(){     HelloFriend helloFriend = **new** HelloFriend();     String results = helloFriend.sayHelloToFriend(**"Maven"**);     System.***out\***.println(results);   }   }
```

 

5)    关键：对Hello的依赖

这里Hello就是我们的第一个Maven工程，现在HelloFriend对它有依赖。那么这个依赖能否成功呢？更进一步的问题是：HelloFriend工程会到哪里去找Hello呢？

答案是：本地仓库。任何一个Maven工程会根据坐标到本地仓库中去查找它所依赖的jar包。如果能够找到则可以正常工作，否则就不行。

 

## 4.5 依赖管理

1)    基本概念

当A jar包需要用到B jar包中的类时，我们就说A对B有依赖。例如：commons-fileupload-1.3.jar依赖于commons-io-2.0.1.jar。

通过第二个Maven工程我们已经看到，当前工程会到本地仓库中根据坐标查找它所依赖的jar包。

配置的基本形式是使用dependency标签指定目标jar包的坐标。例如：

```
<**dependency**>   **坐标**--> *   <**groupId**>junit   <**artifactId**>junit   <**version**>4.0   **依赖的范围**--> *   <**scope**>test  
```

 

2)    直接依赖和间接依赖

如果A依赖B，B依赖C，`那么A→B和B→C都是直接依赖，而A→C是间接依赖。

 

###     4.5.1 依赖的范围

1)    compile

[1]main目录下的Java代码**可以**访问这个范围的依赖

[2]test目录下的Java代码**可以**访问这个范围的依赖

[3]部署到Tomcat服务器上运行时**要**放在WEB-INF的lib目录下

例如：对Hello的依赖。主程序、测试程序和服务器运行时都需要用到。

 

2)    test

[1]main目录下的Java代码**不能**访问这个范围的依赖

[2]test目录下的Java代码**可以**访问这个范围的依赖

[3]部署到Tomcat服务器上运行时**不会**放在WEB-INF的lib目录下

例如：对junit的依赖。仅仅是测试程序部分需要。

 

3)    provided

[1]main目录下的Java代码**可以**访问这个范围的依赖

[2]test目录下的Java代码**可以**访问这个范围的依赖

[3]部署到Tomcat服务器上运行时**不会**放在WEB-INF的lib目录下

例如：servlet-api在服务器上运行时，Servlet容器会提供相关API，所以部署的时候不需要。

 

4)    其他：runtime、import、system等。

 

各个依赖范围的作用可以概括为下图：

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854739-5009ebdd-919f-46c0-a3f9-3790cf0798b9.png)

 

###     4.5.2 依赖的传递性

当存在间接依赖的情况时，主工程对间接依赖的jar可以访问吗？这要看间接依赖的jar包引入时的依赖范围——只有依赖范围为compile时可以访问。例如：

| Maven工程 | 依赖范围 | 对A的可见性 |         |      |
| --------- | -------- | ----------- | ------- | ---- |
| A         | B        | C           | compile | √    |
| D         | test     | ×           |         |      |
| E         | provided | ×           |         |      |

 

###     4.5.3 依赖的原则：解决jar包冲突

1)    路径最短者优先

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854868-2879d303-28ca-4435-9509-8d78b7b62902.png)

2)    路径相同时先声明者优先

​            ![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658854958-3edcead4-0139-4a96-9686-5d4b53c78ab4.png)

这里“声明”的先后顺序指的是dependency标签配置的先后顺序。

 

###    4.5.4 依赖的排除

1)    有的时候为了确保程序正确可以将有可能重复的间接依赖排除。请看如下的例子：

假设当前工程为MakeFriend，直接依赖OurFriends。

OurFriends依赖commons-logging的1.1.1对于MakeFriend来说是间接依赖。

当前工程MakeFriend直接依赖commons-logging的1.1.2

加入exclusions配置后可以在依赖OurFriends的时候排除版本为1.1.1的commons-logging的间 接依赖

```
<**dependency**>   <**groupId**>com.atguigu.maven   <**artifactId**>OurFriends   <**version**>1.0-SNAPSHOT   **依赖排除**--> *   <**exclusions**>     <**exclusion**>       <**groupId**>commons-logging       <**artifactId**>commons-logging              <**dependency**>   <**groupId**>commons-logging   <**artifactId**>commons-logging   <**version**>1.1.2  
```

 

###     4.5.5 统一管理目标jar包的版本

以对Spring的jar包依赖为例：Spring的每一个版本中都包含spring-context，springmvc等jar包。我们应该导入版本一致的Spring jar包，而不是使用4.0.0的spring-context的同时使用4.1.1的springmvc。

```
<**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-context   <**version**>4.0.0.RELEASE    <**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-webmvc   <**version**>4.0.0.RELEASE    <**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-jdbc   <**version**>4.0.0.RELEASE    <**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-orm   <**version**>4.0.0.RELEASE  
```

问题是如果我们想要将这些jar包的版本统一升级为4.1.1，是不是要手动一个个修改呢？显然，我们有统一配置的方式：

| `**统一管理当前模块的**jar**包的版本**--> *  <**properties**>   <**spring.version**>4.0.0.RELEASE  ` |
| ------------------------------------------------------------ |
| ……                                                           |
| `<**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-context   <**version**>${spring.version}    <**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-webmvc   <**version**>${spring.version}    <**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-jdbc   <**version**>${spring.version}    <**dependency**>   <**groupId**>org.springframework   <**artifactId**>spring-orm   <**version**>${spring.version}  ` |

这样一来，进行版本调整的时候只改一改地方就行了。

 

## 4.6 仓库

1)    分类

①  本地仓库：为当前本机电脑上的所有Maven工程服务。

②  远程仓库

[1] 私服：架设在当前局域网环境下，为当前局域网范围内的所有Maven工程服务。

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658855103-e79795ef-a4d8-457d-ad0a-8a350faedd93.png)

[2]中央仓库：架设在Internet上，为全世界所有Maven工程服务。

[3]中央仓库的镜像：架设在各个大洲，为中央仓库分担流量。减轻中央仓库的压力，同时更快的响应用户请求。

2)    仓库中的文件

①  Maven的插件

②  我们自己开发的项目的模块

③  第三方框架或工具的jar包

​    ※不管是什么样的jar包，在仓库中都是按照坐标生成目录结构，所以可以通过统一的方式查

​    询或依赖。

 

## 4.7 生命周期

1)    什么是Maven的生命周期？

Maven生命周期定义了各个构建环节的执行顺序，有了这个清单，Maven就可以自动化的执行构    建命令了。

Maven有三套相互独立的生命周期，分别是：

Clean Lifecycle在进行真正的构建之前进行一些清理工作。

Default Lifecycle构建的核心部分，编译，测试，打包，安装，部署等等。

Site Lifecycle生成项目报告，站点，发布站点。

再次强调一下它们是**相互独立的**，你可以仅仅调用clean来清理工作目录，仅仅调用site来生成站点。当然你也可以直接运行 **mvn clean install site** 运行所有这三套生命周期。

 

每套生命周期都由一组阶段(Phase)组成，我们平时在命令行输入的命令总会对应于一个特定的阶段。比如，运行mvn clean，这个clean是Clean生命周期的一个阶段。有Clean生命周期，也有clean阶段。

 

2)    clean生命周期

Clean生命周期一共包含了三个阶段：

pre-clean 执行一些需要在clean之前完成的工作

clean 移除所有上一次构建生成的文件

post-clean 执行一些需要在clean之后立刻完成的工作

 

3)    Site生命周期

​    pre-site 执行一些需要在生成站点文档之前完成的工作

​    site 生成项目的站点文档

​    post-site 执行一些需要在生成站点文档之后完成的工作，并且为部署做准备

​    site-deploy 将生成的站点文档部署到特定的服务器上

这里经常用到的是site阶段和site-deploy阶段，用以生成和发布Maven站点，这可是Maven相当强大的功能，Manager比较喜欢，文档及统计数据自动生成，很好看。

 

4)    Default生命周期

Default生命周期是Maven生命周期中最重要的一个，绝大部分工作都发生在这个生命周期中。这里，只解释一些比较重要和常用的阶段：

validate

generate-sources

process-sources

generate-resources

process-resources 复制并处理资源文件，至目标目录，准备打包。

**compile** 编译项目的源代码。

process-classes

generate-test-sources

process-test-sources

generate-test-resources

process-test-resources 复制并处理资源文件，至目标测试目录。

**test-compile** 编译测试源代码。

process-test-classes

**test** 使用合适的单元测试框架运行测试。这些测试代码不会被打包或部署。

prepare-package

**package** 接受编译好的代码，打包成可发布的格式，如JAR。

pre-integration-test

integration-test

post-integration-test

verify

**install**将包安装至本地仓库，以让其它项目依赖。

deploy将最终的包复制到远程的仓库，以让其它开发人员与项目共享或部署到服务器上运行。

 

5)    生命周期与自动化构建

**运行任何一个阶段的时候，它前面的所有阶段都会被运行**，例如我们运行mvn install 的时候，代码会被编译，测试，打包。这就是Maven为什么能够自动执行构建过程的各个环节的原因。此外，Maven的插件机制是完全依赖Maven的生命周期的，因此理解生命周期至关重要。

 

## 4.8 插件和目标

1)    Maven的核心仅仅定义了抽象的生命周期，具体的任务都是交由插件完成的。

2)    每个插件都能实现多个功能，每个功能就是一个插件目标(即存在的价值和意义)。

3)    Maven的生命周期与插件目标相互绑定，以完成某个具体的构建任务。

例如：compile就是插件maven-compiler-plugin的一个功能；pre-clean是插件maven-clean-plugin的一个目标。

 

# 第5章 继承

## 5.1 为什么需要继承机制？

由于非compile范围的依赖信息是不能在“依赖链”中传递的，所以有需要的工程只能单独配置。例如：

| Hello       | <dependency>  <groupId>junit</groupId>  <artifactId>junit</artifactId>  <version>4.0</version>  <scope>test</scope></dependency> |
| ----------- | ------------------------------------------------------------ |
| HelloFriend | <dependency>  <groupId>junit</groupId>  <artifactId>junit</artifactId>  <version>4.0</version>  <scope>test</scope></dependency> |
| MakeFriend  | <dependency>  <groupId>junit</groupId>  <artifactId>junit</artifactId>  <version>4.0</version>  <scope>test</scope></dependency> |

此时如果项目需要将各个模块的junit版本统一为4.9，那么到各个工程中手动修改无疑是非常不可取的。使用继承机制就可以将这样的依赖信息统一提取到父工程模块中进行统一管理。

 

## 5.2 创建父工程

​      父工程的打包方式为pom

   

```
<**groupId**>com.atguigu.maven  <**artifactId**>Parent  <**packaging**>pom  <**version**>1.0-SNAPSHOT
```

 

​      父工程只需要保留pom.xml文件即可

## 5.3 在子工程中引用父工程

<parent>

​    <!-- 父工程坐标 -->

<groupId>...</groupId>

​    <artifactId>...</artifactId>

​    <version>...</version>

<!--指定从当前pom.xml文件出发寻找父工程的pom.xml文件的相对路径-->*
*<relativePath>..</relativePath>

</parent>

`**继承**--> *  <**parent**>   <**groupId**>com.atguigu.maven   <**artifactId**>Parent   <**version**>1.0-SNAPSHOT``**指定从当前**pom.xml**文件出发寻找父工程的**pom.xml**文件的相对路径**--> *  <**relativePath**>../Parent/pom.xml``` 

 

此时如果子工程的groupId和version如果和父工程重复则可以删除。

 

## 5.4 在父工程中管理依赖

将Parent项目中的dependencies标签，用dependencyManagement标签括起来

```
**依赖管理**--> *  <**dependencyManagement**>   <**dependencies**>     <**dependency**>       <**groupId**>junit       <**artifactId**>junit       <**version**>4.0       <**scope**>test          
```

在子项目中重新指定需要的依赖，删除范围和版本号

```
<**dependency**>   <**groupId**>junit   <**artifactId**>junit  
```

 

 

# 第6章 聚合

## 6.1 为什么要使用聚合？

将多个工程拆分为模块后，需要手动逐个安装到仓库后依赖才能够生效。修改源码后也需要逐个手动进行clean操作。而使用了聚合之后就可以批量进行Maven工程的安装、清理工作。

 

## 6.2 如何配置聚合？

在总的聚合工程中使用modules/module标签组合，指定模块工程的相对路径即可

```
**聚合**--> *  <**modules**>   <**module**>../MakeFriend   <**module**>../OurFriends   <**module**>../HelloFriend   <**module**>../Hello  
```

Maven可以根据各个模块的继承和依赖关系自动选择安装的顺序

 

# 第7章 通过Maven创建Web工程

1)   创建简单的Maven工程，打包方式为war包

```
<**groupId**>com.atguigu.maven  <**artifactId**>MavenWeb  <**packaging**>war  <**version**>1.0-SNAPSHOT
```

 

2)   点击Project Structure

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658855230-f6be835d-8400-4a87-a985-98db0099b424.png)

3)   选择对应的Module，添加web目录

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658855373-de91165b-b94b-4cee-8efa-19010eb6f7f9.png)

4)   设置目录名称

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658855512-5f673893-34f5-4a3f-9a5b-3325fb59fb90.png)

5)   在web目录下创建index.jsp页面

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7Maven.assets/1585658855632-d718bf4b-6309-4bee-8638-876fae859f9a.png)

6)   部署到Tomcat上运行

# 第8章 Maven酷站

我们可以到http://mvnrepository.com/搜索需要的jar包的依赖信息。

http://search.maven.org/