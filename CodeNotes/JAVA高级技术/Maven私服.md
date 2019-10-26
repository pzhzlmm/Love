六、 私服
1 什么是私服
私服是一种特殊的远程仓库，它是架设在局域网的仓库服务，私服代理广域网上的远程
仓库，供局域网使用。
在企业开发中，私服的建设是有必要的，其好处如下：
1.1节省资金、外网带宽
利用私服代理外部仓库之后，对外的重复构件下载便得以简化，降低外网带宽压力。
1.2加速 Maven 构建
不停地连接请求外部仓库是相当耗时的，但是 maven 的一些内部机制（如快照更新检
查）要求 Maven 在执行构建的时候不停地检查远程仓库数据。因此，当项目配置了很多外
部远程仓库的时候，构建速度会降低。使用私服解决这问题，因为 Maven 只需要检查局域
网内私服的数据时，构建速度便有明显提高。
1.3部署第三方构件
当某个构件无法从任何一个远程仓库获取怎么办？比如 Oracle 的 JDBC 驱动由于版权
原因不能发布到公共仓库中。建立私服后，便可以将这些构件部署到这个内部仓库中，供内
部 Maven 项目使用。
1.4提高稳定性，增强控制
对于远程仓库来说，当外网不可用时，Maven 构建有可能因为依赖没有下载而不可行，
搭建并应用私服后，即使没有外网，如果该构件之前被其它人下载过就会存在私服上，此时
再次依赖该构件就可以不用连接外网直接就可以从私服上下载到。同时私服软件（nexus)还
提供了额外的管理功能。
1.5降低中央仓库的负荷
中央仓库是有限的。如果所有的 Maven 工程开发过程中，都通过中央仓库实现构件的
依赖和管理，那么中央仓库的负荷过高，也会严重影响工程构建的效率。如果使用私服，可
以分散中央仓库的负荷，只有在私服中没有需要依赖的构件时才会去连接中央仓库。
2 nexus 私服搭建
2.1搭建环境
环境：CentOS6.5、JDK7、Sonatype Nexus、Maven（Eclipse 或 MyEclipse）
2.2搭建步骤
2.2.1安装 JDK
2.2.1.1 JDK 资源包下载
JDK 官方下载地址为：
http://www.oracle.com/technetwork/java/javase/downloads/index.html
本课程使用版本为 JDK1.7。（jdk-7u80-linux-x64.tar.gz）
2.2.1.2 JDK 资源包解压
在 Linux 中安装应用的常用目录为：/opt 或/usr/local 目录。本课件将 JDK 安装到
/usr/local/java 目录中。
解压 JDK 到指定目录：
tar -zxvf jdk-7u80-linux-x64.tar.gz -C /usr/local
重命名 JDK 目录：
mv /usr/local/jdk1.7.0_80 /usr/local/java
2.2.1.3 环境变量配置
修改/etc/profile 配置文件，增加环境变量配置。
export JAVA_HOME=/usr/local/java
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH
环境变量修改后，可以重启 Linux 实现永久生效；或执行 source /etc/profile 命令，让新
修改的环境变量在当前终端中生效。
2.2.2安装私服 Nexus
2.2.2.1 Nexus 资源包下载
Nexus 官方下载地址为：
https://www.sonatype.com/nexus-repository-oss
本课件应用版本为：nexus-2.11.2-03
2.2.2.2 Nexus 资源包解压
在/usr/local 目录中创建子目录 nexus：
mkdir /usr/local/nexus
解压 Nexus 到指定目录：
tar -zxvf nexus-2.11.2-03-bundle.tar.gz -C /usr/local/nexus
Nexus 压缩包中包含两个子目录: nexus-2.11.2-03 和 sonatype-work
nexus-2.11.2-03 是具体的私服应用内容，sonatype-work 是 Nexus 私服下载的构件存放工
作目录。
2.2.2.3 检查私服端口和工作目录
在 nexus-2.11.2-03 目录中有子目录 conf，其中保存私服应用的配置信息。查看
nexus.properties 文件，确定私服访问端口和工作目录。此操作可不做任何内容修改。配置文
件内容如下：

#Jetty section，Nexus 私服应用是使用 Jetty 提供 web 服务的，下述内容为 Jetty 配置。
application-port=8081 # 私服访问端口
application-host=0.0.0.0
nexus-webapp=${bundleBasedir}/nexus # Nexus 私服 WEB 应用所在位置
nexus-webapp-context-path=/nexus # Nexus 私服 WEB 应用 contextPath
#Nexus section Nexus 私服配置信息
nexus-work=${bundleBasedir}/../sonatype-work/nexus # 私服工作目录，即构件保存目
录
runtime=${bundleBasedir}/nexus/WEB-INF # 私服 WEB 应用运行目录
2.2.2.4 修改 Nexus 运行用户
Nexus 私服在启动后，私服应用需要访问 Linux 的文件系统，所以需要有足够的权限。
Nexus 的启动脚本文件中，可以指定私服应用的访问用户，此信息在 nexus-2.11.2-03/bin/nexus
脚本文件中定义。需要修改的信息如下：
#NOTE - This will set the user which is used to run the Wrapper as well as
#the JVM and is not useful in situations where a privileged resource or
#port needs to be allocated prior to the user being changed.
#RUN_AS_USER= #原内容
RUN_AS_USER=root #修改后的内容，代表 Nexus 私服使用 root 用户权限。
2.2.2.5 修改防火墙，开放 Nexus 私服端口访问
修改防火墙配置文件，开放 Nexus 私服的访问端口 8081（2.2.2.3 章节内容）。
vi /etc/sysconfig/iptables
增加下述内容：
-A INPUT -m state --state NEW -m tcp -p tcp --dport 8081 -j ACCEPT
重新启动防火墙：
service iptables restart
2.2.2.6 启动并测试访问
启动 Nexus 私服：
/usr/local/nexus/nexus-2.11.2-03/bin/nexus start
成功启动后，控制台输出内容如下：

****************************************
WARNING - NOT RECOMMENDED TO RUN AS ROOT
****************************************
Starting Nexus OSS...
Started Nexus OSS.
可通过命令检查私服运行状态：
/usr/local/nexus/nexus-2.11.2-03/bin/nexus status
内容如下为私服运行中：
****************************************
WARNING - NOT RECOMMENDED TO RUN AS ROOT
****************************************
Nexus OSS is running (3883).
内容如下为私服未运行：
****************************************
WARNING - NOT RECOMMENDED TO RUN AS ROOT
****************************************
Nexus OSS is not running.
也可使用浏览器访问 Nexus 私服 WEB 应用， 访问地址为：
http://ip:8081/nexus （ip 为 Nexus 所在系统的访问 IP），访问效果如下：

![1565334191602](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565334191602.png)

3 私服配置
3.1登录
Nexus 默认提供管理用户，用户名为 admin，密码为 admin123。
3.2仓库管理
3.2.1检查仓库
3.2.2仓库类型简述
常用仓库类型为：hosted 和 proxy。
3.2.2.1 group
仓库组：Nexus 通过仓库组来统一管理多个仓库，这样访问仓库组就相当于访问仓库组
管理的多个仓库。
3.2.2.2 hosted
宿主仓库：主要用于发布内部项目构件或第三方的项目构件（如购买商业的构件）以及
无法从公共仓库获取的构件（如 oracle 的 JDBC 驱动）。
3.2.2.2.1releases
发布内部的 releases 模块的仓库，所有非快照版本工程都发布到此仓库中。
3.2.2.2.2snapshots
发布内部的快照模块的仓库，所有工程版本以 SNAPSHOT 结尾的都发布到此仓库中。
3.2.2.2.33rd party
第三方依赖的仓库，这个数据通常是由内部人员自行下载之后发布上去
3.2.2.3 proxy
代理仓库：代理公共的远程仓库。
3.2.2.4 virtual
虚拟仓库：用于适配 Maven 1。
3.2.3代理仓库配置
设置 proxy 代理仓库(Apache Snapshots/Central/Codehaus Snapshots)准许远程下载。
自此 Nexus 私服安装配置结束，私服下载中央仓库资源需要时间，一般企业都会提前
搭建。
4 私服应用
要在 Maven 工程中使用私服，需要提供私服配置信息。
4.1settings.xml 文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings
 xmlns="http://maven.apache.org/SETTINGS/1.0.0"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="
 http://maven.apache.org/SETTINGS/1.0.0
 http://maven.apache.org/xsd/settings-1.0.0.xsd">
 <localRepository>D:/repositories</localRepository>
<!--Maven 是否需要和用户交互以获得输入。如果 Maven 需要和用户交互以获得输入，则设置成 true，
反之则应为 false。默认为 true。-->
 <interactiveMode>true</interactiveMode>
<!--表示 Maven 是否需要在离线模式下运行。如果构建系统需要在离线模式下运行，则为 true，默认
为 false。 -->
 <offline>false</offline>
<!--当插件的组织 Id（groupId）没有显式提供时，供搜寻插件组织 Id（groupId）的列表。该元素
包含一个 pluginGroup 元素列表，每个子元素包含了一个组织 Id（groupId）。当我们使用某个插件，
并且没有在命令行为其提供组织 Id（groupId）的时候，Maven 就会使用该列表。
 <pluginGroups>
 <pluginGroup>org.mortbay.jetty</pluginGroup>
 <pluginGroup>org.jenkins-ci.tools</pluginGroup>
 </pluginGroups>
 <proxies>
 </proxies>
<!--配置服务端的一些设置。一些设置如安全证书不应该和 pom.xml 一起分发。这种类型的信息应该存
在于构建服务器上的 settings.xml 文件中。-->
 <servers>
 <server>
 <!-- 说白了就是配置服务的 -->
 <!-- server 的 id 必须和 pom.xml 文件中的仓库 id 一致 -->
<!--这是 server 的 id（注意不是用户登陆的 id），该 id 与 distributionManagement 中
repository 元素的 id 相匹配。-->
 <id>nexus-releases</id>
 <username>deployment</username>
 <password>deployment123</password>
 </server>
 <server>
 <id>nexus-snapshots</id>
 <username>deployment</username>
 <password>deployment123</password>
 </server>
 </servers>
<!--根据环境参数来调整构建配置的列表。-->
 <profiles>
 <profile>
 <id>jdk-1.7</id>
 <activation>
 <activeByDefault>true</activeByDefault>
 <jdk>1.7</jdk>
 </activation>
 <properties>
 <maven.compiler.source>1.7</maven.compiler.source>
 <maven.compiler.target>1.7</maven.compiler.target>
 <maven.compiler.compilerVersion>1.7</maven.compiler.compilerVersion>
 </properties>
 </profile>
 <profile>
 <id>sxt</id>
 <activation>
 <activeByDefault>false</activeByDefault>
 <jdk>1.7</jdk>
 </activation>
 <repositories>
 <!-- 私有库配置 -->
 <repository>
 <!-- 私有库 id -->
 <id>nexus</id>
 <!-- 私有库地址 -->
 <url>http://192.168.120.158:8081/nexus/content/groups/public/</url>
 <!-- 私有库是否支持 releases 版本 -->
 <releases>
 <enabled>true</enabled>
 </releases>
 <!-- 私有库是否支持 snapshots 版本 -->
 <snapshots>
 <enabled>true</enabled>
 </snapshots>
 </repository>
 </repositories>
 <pluginRepositories>
 <!-- 插件库配置，具体含义私有库配置 -->
 <pluginRepository>
 <id>nexus</id>
 <url>http://192.168.120.158:8081/nexus/content/groups/public/</url>
 <releases>
 <enabled>true</enabled>
 </releases>
 <snapshots>
 <enabled>true</enabled>
 </snapshots>
 </pluginRepository>
 </pluginRepositories>
 </profile>
 </profiles>
 <!-- 激活 profile -->
 <activeProfiles>
 <!-- 根据 profile 的 id 标签值激活指定的内容 -->
 <activeProfile>sxt</activeProfile>
 </activeProfiles>
</settings>
```
4.2pom.xml 文件
在顶级的 maven 父工程中定义。所有子工程自动导入依赖。
```xml
<project
 xmlns="http://maven.apache.org/POM/4.0.0"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 xsi:schemaLocation="
 http://maven.apache.org/POM/4.0.0
 http://maven.apache.org/xsd/maven-4.0.0.xsd">
 <modelVersion>4.0.0</modelVersion>
 <groupId>group</groupId>
 <artifactId>project</artifactId>
 <version>1.0</version>

 <distributionManagement>
 <repository>
 <id>nexus-releases</id>
 <name>Nexus Release Repository</name>
 <url>http://192.168.120.158:8081/nexus/content/repositories/releases/</url>
 </repository>
 <snapshotRepository>
 <id>nexus-snapshots</id>
 <name>Nexus Snapshot Repository</name>
 <url>http://192.168.120.158:8081/nexus/content/repositories/snapshots/</url>
 </snapshotRepository>
 </distributionManagement>
 <build>
 <plugins>
 <plugin>
 <groupId>org.apache.maven.plugins</groupId>
 <artifactId>maven-source-plugin</artifactId>
 <version>2.1.2</version>
 <executions>
 <execution>
 <id>attach-sources</id>
 <goals>
 <goal>jar</goal>
 </goals>
 </execution>
 </executions>
 </plugin>
 </plugins>
 </build>
</project>
```

4.3发布本地工程到私服
在 Maven 工程的 maven build 中，输入命令 deploy，即可实现发布工程信息到私服。
如果同版本工程可能多次发布，需要修改 Nexus 配置。

![1565335215993](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565335215993.png)

4.4发布三方插件到私服

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190809151836.png)