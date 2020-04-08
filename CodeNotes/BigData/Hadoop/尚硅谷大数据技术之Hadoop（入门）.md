尚硅谷大数据技术之Hadoop（入门）

 (作者：尚硅谷大数据研发部)

 

 

# 第1章 大数据概论

## 1.1 大数据概念

大数据概念如图1-1 所示。

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586307990945-97e75054-ced5-4fce-aa5c-8cf15c5557cb.jpeg)

图1-1 大数据概念

## 1.2 大数据特点（4V）

大数据特点如图1-2，1-3，1-4，1-5所示

![image-20200408093955387](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408093955387.png)

图1-2 大数据特点之大量

![image-20200408094008249](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408094008249.png)

图1-3 大数据特点之高速

![image-20200408093940287](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408093940287.png)

图1-4 大数据特点之多样

![image-20200408094025956](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408094025956.png)

图1-5 大数据特点之低价值密度

## 1.3 大数据应用场景

大数据应用场景如图1-6，1-7，1-8，1-9，1-10，1-11所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307991834-09901547-15df-4251-9b19-6081124eaedc.jpeg)

图1-6 大数据应用场景之物流仓储

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307992010-1953b101-8910-4c96-8a77-798a14487ed5.jpeg)

图1-7 大数据应用场景之零售

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307992132-1b474857-420f-4c32-bc54-1883026782ae.jpeg)

图1-8 大数据应用场景之旅游

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307992268-3437cf5d-7256-4dff-ad21-06d2a67cc5a8.jpeg)

图1-9 大数据应用场景之商品广告推荐

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307992438-2e5501f6-28bc-4e2d-b8da-0e4022a3d3f1.jpeg)

图1-10 大数据应用场景之保险、金融及房产

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307992712-102c1ac7-5e61-4962-9bbc-d1b0b937c23b.jpeg)

图1-11 大数据应用场景人工智能

## 1.4 大数据发展前景

大数据发展前景如图1-12，1-13，1-14，1-15，1-16所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307992884-de1d2f8d-0a5a-4384-87a7-df97f99e378a.jpeg)

图1-12 大数据发展前景之国家政策

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307993058-09e764bb-c88b-4141-9b55-dde04281d031.jpeg)

图1-13 大数据发展前景之国际方面

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307993253-ebecb1ba-649e-440e-a6ee-43cd2156c939.jpeg)

图1-14 大数据发展前景之高校方面

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307993405-6d9c00aa-def1-4fad-bcc4-77f12a694740.jpeg)

图1-15 大数据发展前景之平均薪资

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307993540-72b0c9ee-cc1e-4aa5-ac9c-949e3e9cd9c9.jpeg)

图1-16 大数据发展前景之整体薪资

## 1.5 大数据部门业务流程分析

大数据部门业务流程分析如图1-17所示。

![image-20200408094843115](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408094843115.png)

图1-17 大数据部门业务流程分析

## 1.6 大数据部门组织结构（重点）

大数据部门组织结构，适用于大中型企业，如图1-18所示。

![image-20200408095050767](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408095050767.png)

图1-18 大数据部门组织结构

# 第2章 从Hadoop框架讨论大数据生态

## 2.1 Hadoop是什么

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586307994218-651d789a-48d6-44ae-9352-2cc682278ac7.jpeg)

图2-1 hadoop生态

## 2.2 Hadoop发展历史

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307994349-c3832622-e330-46ce-aab5-6822c8f887e6.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1586307994488-f6b9299c-4d20-411a-926b-6d37a34e0e93.jpeg)

## 2.3 Hadoop三大发行版本

Hadoop三大发行版本：Apache、Cloudera、Hortonworks。

Apache版本最原始（最基础）的版本，对于入门学习最好。

Cloudera内部集成了很多大数据框架。对应产品CDH。

Hortonworks文档较好。对应产品HDP。

\1.   Apache Hadoop

官网地址：http://hadoop.apache.org/releases.html

下载地址：https://archive.apache.org/dist/hadoop/common/

\2.   Cloudera Hadoop

官网地址：https://www.cloudera.com/downloads/cdh/5-10-0.html

下载地址：http://archive-primary.cloudera.com/cdh5/cdh/5/

（1）2008年成立的Cloudera是最早将Hadoop商用的公司，为合作伙伴提供Hadoop的商用解决方案，主要是包括支持、咨询服务、培训。

**（****2****）****2009****年****Hadoop****的创始人****Doug Cutting****也加盟****Cloudera****公司**。Cloudera产品主要为CDH，Cloudera Manager，Cloudera Support

（3）CDH是Cloudera的Hadoop发行版，完全开源，比Apache Hadoop在兼容性，安全性，稳定性上有所增强。Cloudera的标价为每年每个节点**10000****美元**。

（4）Cloudera Manager是集群的软件分发及管理监控平台，可以在几个小时内部署好一个Hadoop集群，并对集群的节点及服务进行实时监控。

\3.  Hortonworks Hadoop

官网地址：https://hortonworks.com/products/data-center/hdp/

下载地址：https://hortonworks.com/downloads/#data-platform

（1）2011年成立的Hortonworks是雅虎与硅谷风投公司Benchmark Capital合资组建。

**（****2****）公司成立之初就吸纳了大约****25****名至****30****名专门研究****Hadoop****的雅虎工程师，上述工程师均在****2005****年开始协助雅虎开发****Hadoop****，贡献了****Hadoop80%****的代码。**

（3）Hortonworks的主打产品是Hortonworks Data Platform（HDP），也同样是100%开源的产品，HDP除常见的项目外还包括了**Ambari**，一款开源的安装和管理系统。

（4）Hortonworks目前**已经被****Cloudera****公司收购**。

## 2.4 Hadoop的优势（4高）

![image-20200408102459725](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408102459725.png)

图2-2 hadoop的优势

## 2.5 Hadoop组成（面试重点）

![image-20200408103603157](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408103603157.png)

为什么要把Yarn单独提出来呢:解耦,可以支持第三方产品,提高计算效率

### 2.5.1 HDFS架构概述

HDFS（Hadoop Distributed File System）的架构概述。

![image-20200408105702053](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408105702053.png)

NN:名称节点,哪个文件存储到了哪个机器上,统筹整体数据的存储.元数据:保存数据信息的数据,即描述真实数据的数据,对HDFS的操作,必然要经过NN

DN:存储的是真实数据

2NN:不是热备,和NN不能等价替换,NN挂了,2NN也不能代替NN,可以抢救一下,可以理解为NN的秘书,辅助NN干活,

图2-4 HDFS架构

### 2.5.2 YARN架构概述$$$

yarn就是分任务调度和资源调度

![image-20200408112809979](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408112809979.png)

NodeManager:DN管理单个结点的资源,处理RM给它安排的任务

ResourceManager:Yarn大哥,和客户端交互,整个集群的资源的管理者,要监控NM状态,分配整个集群资源的调度

为每个MR启动一个AM,启动之后就要申请资源,让RM去分配资源,AM管理MR(MapReduce)的任务,根据启动task的多少去找RM去申请,让RM去给它分配资源

(一个AM的Container是可能分配在不同的节点)都是以Container为单位,分配好的资源用一个Container做一个封装(好处:方便管理,不允许其他资源侵占我的地盘)

![image-20200408113629583](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408113629583.png)

举例$$$:



### 2.5.3 MapReduce架构概述

先分再合,每个人分一部分数据,一起算,然后把算好的结果进行汇总

MapReduce将计算过程分为两个阶段：Map和Reduce

1）Map阶段并行处理输入数据

2）Reduce阶段对Map结果进行汇总

![image-20200408115452453](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408115452453.png)



![image-20200408115433495](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200408115433495.png)

## 2.6 大数据技术生态体系

大数据技术生态体系。

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586307995519-cf8ccc00-6f72-493f-a30e-e4a3a9df265d.jpeg)

图2-7 大数据技术生态

图中涉及的技术名词解释如下：

1）Sqoop：Sqoop是一款开源的工具，主要用于在Hadoop、Hive与传统的数据库（MySql）间进行数据的传递，可以将一个关系型数据库（例如 ：MySQL，Oracle 等）中的数据导进到Hadoop的HDFS中，也可以将HDFS的数据导进到关系型数据库中。

2）Flume：Flume是一个高可用的，高可靠的，分布式的海量日志采集、聚合和传输的系统，Flume支持在日志系统中定制各类数据发送方，用于收集数据；

3）Kafka：Kafka是一种高吞吐量的分布式发布订阅消息系统；

4）Storm：Storm用于“连续计算”，对数据流做连续查询，在计算时就将结果以流的形式输出给用户。

5）Spark：Spark是当前最流行的开源大数据内存计算框架。可以基于Hadoop上存储的大数据进行计算。

6）Flink：Flink是当前最流行的开源大数据内存计算框架。用于实时计算的场景较多。

7）Oozie：Oozie是一个管理Hdoop作业（job）的工作流程调度管理系统。

8）Hbase：HBase是一个分布式的、面向列的开源数据库。HBase不同于一般的关系数据库，它是一个适合于非结构化数据存储的数据库。

9）Hive：Hive是基于Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张数据库表，并提供简单的SQL查询功能，可以将SQL语句转换为MapReduce任务进行运行。 其优点是学习成本低，可以通过类SQL语句快速实现简单的MapReduce统计，不必开发专门的MapReduce应用，十分适合数据仓库的统计分析。

10）ZooKeeper：它是一个针对大型分布式系统的可靠协调系统，提供的功能包括：配置维护、名字服务、分布式同步、组服务等。

## 2.7 推荐系统框架图

推荐系统项目架构如图2-8所示。

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586307995703-67252f0a-0e18-409f-a882-1b7cde053f76.jpeg)

图2-8 推荐系统项目架构

# 第3章 Hadoop运行环境搭建（开发重点）

## 3.1 虚拟机环境准备

**1****）克隆虚拟机，虚拟机配置要求如下：**

（1）单台虚拟机：内存4G，硬盘50G，安装必要环境(最小化安装)

sudo yum install -y epel-release

sudo yum install -y psmisc nc net-tools rsync vim lrzsz ntp libzstd openssl-static tree iotop

（2）修改克隆虚拟机的静态IP(按照自己机器的网络设置进行修改)

sudo vim /etc/sysconfig/network-scripts/ifcfg-ens33

 改成

DEVICE=ens33

TYPE=Ethernet

ONBOOT=yes

BOOTPROTO=static

NAME="ens33"

IPADDR=192.168.1.101

PREFIX=24

GATEWAY=192.168.1.2

DNS1=192.168.1.2

**2****）修改主机名**

​    （1）修改主机名称

sudo vim /etc/hostname

（2）配置主机名称映射，打开/etc/hosts

sudo vim /etc/hosts

添加如下内容

192.168.1.100 hadoop100

192.168.1.101 hadoop101

192.168.1.102 hadoop102

192.168.1.103 hadoop103

192.168.1.104 hadoop104

192.168.1.105 hadoop105

192.168.1.106 hadoop106

192.168.1.107 hadoop107

192.168.1.108 hadoop108

（3）修改window7的主机映射文件（hosts文件）

​       （a）进入C:\Windows\System32\drivers\etc路径

​       （b）打开hosts文件并添加如下内容

192.168.1.100 hadoop100

   192.168.1.101 hadoop101

192.168.1.102 hadoop102

192.168.1.103 hadoop103

192.168.1.104 hadoop104

192.168.1.105 hadoop105

192.168.1.106 hadoop106

192.168.1.107 hadoop107

192.168.1.108 hadoop108

（4）修改window10的主机映射文件（hosts文件）

（a）进入C:\Windows\System32\drivers\etc路径

（b）拷贝hosts文件到桌面

​    （c）打开桌面hosts文件并添加如下内容

192.168.1.100 hadoop100

   192.168.1.101 hadoop101

192.168.1.102 hadoop102

192.168.1.103 hadoop103

192.168.1.104 hadoop104

192.168.1.105 hadoop105

192.168.1.106 hadoop106

192.168.1.107 hadoop107

192.168.1.108 hadoop108

（d）将桌面hosts文件覆盖C:\Windows\System32\drivers\etc路径hosts文件

**3****）关闭防火墙**

sudo systemctl stop  firewalld

sudo systemctl disable firewalld

**4****）创建atguigu****用户**

sudo useradd atguigu

sudo passwd atguigu

**6****）配置atguigu****用户具有root****权限**

sudo vi /etc/sudoers

修改/etc/sudoers文件，找到下面一行（91行），在root下面添加一行，如下所示：

\## Allow root to run any commands anywhere

root  ALL=(ALL)   ALL

atguigu  ALL=(ALL) NOPASSWD:ALL

**7****）在/opt****目录下创建文件夹**

（1）在/opt目录下创建module、software文件夹

sudo mkdir module

sudo mkdir software

​    （2）修改module、software文件夹的所有者

sudo mkdir /opt/module /opt/software

sudo chown atguigu:atguigu /opt/module /opt/software

## 3.2 安装JDK

1)   将JDK安装包上传到Linux /opt/software目录下

2)   解压JDK到/opt/module目录下

tar -zxvf jdk-8u212-linux-x64.tar.gz -C /opt/module/

3)   配置JDK环境变量,两种方式:

第一种:

​    （1）新建/etc/profile.d/my_env.sh文件

sudo vim /etc/profile.d/my_env.sh

添加如下内容

\#JAVA_HOME

export JAVA_HOME=/opt/module/jdk1.8.0_212

export PATH=$PATH:$JAVA_HOME/bin

​    （2）保存后退出

:wq

​    （3）重启xshell窗口，让环境变量生效

第二种:

 （1）直接将环境变量配置到 /etc/profile 文件中,在/etc/profile文件的末尾追加如下内容:

JAVA_HOME=/opt/module/jdk1.8.0_212

PATH=$PATH:$JAVA_HOME/bin

export PATH JAVA_HOME

​    （2）保存退出,然后执行如下命令

source /etc/profile 

4)   .   测试JDK是否安装成功

java -version

​       如果能看到以下结果、则Java正常安装

java version "1.8.0_212"

​     注意：重启（如果java -version可以用就不用重启）

sudo reboot

## 3.3 安装Hadoop

Hadoop下载地址：[https://archive.apache.org/dist/hadoop/common/hadoop-3.1.3/](https://archive.apache.org/dist/hadoop/common/hadoop-2.7.2/)

1)  将hadoop安装包上传到/opt/software目录下

2)  解压安装文件到/opt/module下面

[atguigu@hadoop101 software]$ tar -zxvf hadoop-3.1.3.tar.gz -C /opt/module/

3)  查看是否解压成功

[atguigu@hadoop101 software]$ ls /opt/module/

hadoop-3.1.3

4)  将Hadoop添加到环境变量

​    （1）获取Hadoop安装路径

[atguigu@hadoop101 hadoop-3.1.3]$ pwd

/opt/module/hadoop-3.1.3

​    （2）打开/etc/profile文件

sudo vim /etc/profile

在profile文件末尾添加：（shitf+g）

HADOOP_HOME=/opt/module/hadoop-3.1.3

PATH=$PATH:$JAVA_HOME/bin:$HADOOP_HOME/bin:$HADOOP_HOME/sbin

export PATH JAVA_HOME HADOOP_HOME

（3）保存后退出

:wq

​    （4）让修改后的文件生效

[atguigu@ hadoop101 hadoop-3.1.3]$ source /etc/profile

5)  测试是否安装成功

[atguigu@hadoop101 hadoop-3.1.3]$ hadoop version

Hadoop 3.1.3

6)  重启(如果Hadoop命令不能用再重启)

[atguigu@ hadoop101 hadoop-3.1.3]$ sync

[atguigu@ hadoop101 hadoop-3.1.3]$ sudo reboot

## 3.4 Hadoop目录结构

1、查看Hadoop目录结构

[atguigu@hadoop101 hadoop-3.1.3]$ ll

总用量 52

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 **bin**

drwxr-xr-x. 3 atguigu atguigu 4096 5月 22 2017 **etc**

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 include

drwxr-xr-x. 3 atguigu atguigu 4096 5月 22 2017 **lib**

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 libexec

-rw-r--r--. 1 atguigu atguigu 15429 5月 22 2017 LICENSE.txt

-rw-r--r--. 1 atguigu atguigu  101 5月 22 2017  NOTICE.txt

-rw-r--r--. 1 atguigu atguigu 1366 5月 22 2017 README.txt

drwxr-xr-x. 2 atguigu atguigu 4096 5月 22 2017 **sbin**

drwxr-xr-x. 4 atguigu atguigu 4096 5月 22 2017 **share**

2、重要目录

（1）bin目录：存放对Hadoop相关服务（HDFS,YARN）进行操作的脚本

（2）etc目录：Hadoop的配置文件目录，存放Hadoop的配置文件

（3）lib目录：存放Hadoop的本地库（对数据进行压缩解压缩功能）

（4）sbin目录：存放启动或停止Hadoop相关服务的脚本

（5）share目录：存放Hadoop的依赖jar包、文档、和官方案例

# 第4章 Hadoop运行模式

Hadoop运行模式包括：本地模式、伪分布式模式以及完全分布式模式。

Hadoop官方网站：http://hadoop.apache.org/

## 4.1 本地运行模式

### 4.1.1 官方Grep案例

\1.  创建在hadoop-3.1.3文件下面创建一个input文件夹

cd /opt/module/hadoop-3.1.3

mkdir input

\2.  将Hadoop的xml配置文件复制到input

cp etc/hadoop/*.xml input

\3.  执行share目录下的MapReduce程序

bin/hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar grep input output 'dfs[a-z.]+'

\4.  查看输出结果

cat output/*

### 4.1.2 官方WordCount案例

\1.  创建在hadoop-3.1.3文件下面创建一个wcinput文件夹

mkdir wcinput

\2.  在wcinput文件下创建一个wc.input文件

cd wcinput

\3.  编辑wc.input文件

vi wc.input

在文件中输入如下内容

hadoop yarn

hadoop mapreduce

atguigu

atguigu

保存退出：：wq

\4.  回到Hadoop目录/opt/module/hadoop-3.1.3

\5.  执行程序

hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount wcinput wcoutput

\6.  查看结果

[atguigu@hadoop101 hadoop-3.1.3]$ cat wcoutput/part-r-00000

​       看到如下结果：

atguigu 2

hadoop 2

mapreduce    1

yarn  1

## 4.2 伪分布式运行模式

### 4.2.1 启动HDFS并运行MapReduce程序

\1.  分析

​    （1）配置集群

​    （2）启动、测试集群增、删、查

​    （3）执行WordCount案例

\2.  执行步骤

（1）配置集群

​       （a）配置：hadoop-env.sh

Linux系统中获取JDK的安装路径：

[atguigu@ hadoop101 ~]# echo $JAVA_HOME

/opt/module/jdk1.8.0_212

修改JAVA_HOME 路径：

export JAVA_HOME=/opt/module/jdk1.8.0_212

（b）配置：core-site.xml

<!-- 指定HDFS中NameNode的地址 --><property><name>fs.defaultFS</name>  <value>hdfs://hadoop101:9820</value></property> <!-- 指定Hadoop运行时产生文件的存储目录 --><property>  <name>hadoop.tmp.dir</name>  <value>/opt/module/hadoop-3.1.3/data/tmp</value></property>

（c）配置：hdfs-site.xml

<!-- 指定HDFS副本的数量 --><property>  <name>dfs.replication</name>  <value>1</value></property>

（2）启动集群

（a）**格式化****NameNode**（第一次启动时格式化，以后就不要总格式化）

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs namenode -format

​       （b）启动NameNode

[atguigu@hadoop101 hadoop-3.1.3]$ sbin/hadoop-daemon.sh start namenode (已过时)

 

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs –daemon start namenode

​       （c）启动DataNode

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs –daemon start datanode

（3）查看集群

​       （a）查看是否启动成功

[atguigu@hadoop101 hadoop-3.1.3]$ jps

13586 NameNode

13668 DataNode

13786 Jps

注意：jps是JDK中的命令，不是Linux命令。不安装JDK不能使用jps

​       （b）web端查看HDFS文件系统

[http://hadoop101:9870](http://hadoop101:9870 /dfshealth.html#tab-overview)

 （c）常用端口号说明，表4-1所示

| Daemon                  | App                           | Hadoop2     | Hadoop3 |
| ----------------------- | ----------------------------- | ----------- | ------- |
| NameNode Port           | Hadoop HDFS NameNode          | 8020 / 9000 | 9820    |
|                         | Hadoop HDFS NameNode HTTP UI  | 50070       | 9870    |
|                         | Hadoop HDFS NameNode HTTPS UI | 50470       | 9871    |
| Secondary NameNode Port | Secondary NameNode HTTP       | 50091       | 9869    |
|                         | Secondary NameNode HTTP UI    | 50090       | 9868    |
| DataNode Port           | Hadoop HDFS DataNode IPC      | 50020       | 9867    |
|                         | Hadoop HDFS DataNode          | 50010       | 9866    |
|                         | Hadoop HDFS DataNode HTTP UI  | 50075       | 9864    |
|                         | Hadoop HDFS DataNode HTTPS UI | 50475       | 9865    |

表4-1 端口号

（4）出现错误看日志,看日志，看日志，重要的事情说三遍~~~

​           说明：在企业中遇到Bug时，经常根据日志提示信息去分析问题、解决Bug。

​         通过tail -n 100 日志文件 的形式查看

当前目录：/opt/module/hadoop-3.1.3/logs

[atguigu@hadoop101 logs]$ ls

-rw-rw-r--. 1 atguigu atguigu 31356 3月 27 14:13 hadoop-atguigu-datanode-hadoop202.log //datanode的日志

-rw-rw-r--. 1 atguigu atguigu  690 3月 27 14:13 hadoop-atguigu-datanode-hadoop202.out

-rw-rw-r--. 1 atguigu atguigu 110234 3月 27 14:13 hadoop-atguigu-namenode-hadoop202.log //namenode的日志

-rw-rw-r--. 1 atguigu atguigu  690 3月 27 14:12 hadoop-atguigu-namenode-hadoop202.out

-rw-rw-r--. 1 atguigu atguigu  690 3月 27 14:11 hadoop-atguigu-namenode-hadoop202.out.1

-rw-rw-r--. 1 atguigu atguigu  690 3月 27 14:10 hadoop-atguigu-namenode-hadoop202.out.2

-rw-rw-r--. 1 atguigu atguigu   0 3月 27 14:09 SecurityAuth-atguigu.audit

（5）操作集群

​       （a）在HDFS文件系统上**创建**一个input文件夹

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs dfs -mkdir -p /user/atguigu/input

​       （b）将测试文件内容**上传**到文件系统上

[atguigu@hadoop101 hadoop-3.1.3]$bin/hdfs dfs -put wcinput/wc.input

 /user/atguigu/input/

​       （c）**查看**上传的文件是否正确

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs dfs -ls /user/atguigu/input/

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs dfs -cat /user/atguigu/ input/wc.input

​       （d）运行MapReduce程序

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hadoop jar

share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /user/atguigu/input/ /user/atguigu/output

​        （e）查看输出结果

命令行查看：

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs dfs -cat /user/atguigu/output/*

​       （f）将测试文件内容**下载**到本地

[atguigu@hadoop101 hadoop-3.1.3]$ hdfs dfs -get /user/atguigu/output/part-r-00000 ./wcoutput/

（g）**删除**输出结果

[atguigu@hadoop101 hadoop-3.1.3]$ hdfs dfs -rm -r /user/atguigu/output

 

### 4.2.2 格式化需要注意的问题

**（d****）思考：为什么不能一直格式化NameNode****，格式化NameNode****，要注意什么？**

[atguigu@hadoop101 hadoop-3.1.3]$ cd data/tmp/dfs/name/current/

[atguigu@hadoop101 current]$ cat VERSION

**clusterID=CID-f0330a58-36fa-4a2a-a65f-2688269b5837**

 

[atguigu@hadoop101 hadoop-3.1.3]$ cd data/tmp/dfs/data/current/

**clusterID=CID-f0330a58-36fa-4a2a-a65f-2688269b5837**

 

注意：格式化NameNode，会产生新的集群id,导致NameNode和DataNode的集群id不一致，集群找不到已往数据。所以，格式NameNode时，一定要先删除data数据和logs日志，然后再格式化NameNode。

### 4.2.3 启动YARN并运行MapReduce程序

\1.  分析

​    （1）配置集群在YARN上运行MR

​    （2）启动、测试集群增、删、查

​    （3）在YARN上执行WordCount案例

\2.  执行步骤   

​    （1）配置集群

（a）配置yarn-site.xml

<!-- Reducer获取数据的方式 -->

<property>

   <name>yarn.nodemanager.aux-services</name>

   <value>mapreduce_shuffle</value>

</property>

 

<!-- 指定YARN的ResourceManager的地址 -->

<property>

<name>yarn.resourcemanager.hostname</name>

<value>hadoop101</value>

</property>

 <property>

​    <name>yarn.nodemanager.env-whitelist</name>    <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>

 </property>

​       （b）配置mapred-site.xml

 [atguigu@hadoop101 hadoop]$ vi mapred-site.xml

<!-- 指定MR运行在YARN上 -->

<property>

  <name>mapreduce.framework.name</name>

  <value>yarn</value>

</property>

（2）启动集群

（a）启动前必须保证NameNode和DataNode已经启动

（b）启动ResourceManager

[atguigu@hadoop101 hadoop-3.1.3]$ sbin/yarn-daemon.sh start resourcemanager (已过时)

 

[atguigu@hadoop101 hadoop-3.1.3]$ bin/yarn --daemon start resourcemanager

（c）启动NodeManager

[atguigu@hadoop101 hadoop-3.1.3]$ bin/yarn --daemon start nodemanager

​    （3）集群操作

（a）YARN的浏览器页面查看

http://hadoop101:8088

​       （b）执行MapReduce程序

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hadoop jar

 share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /user/atguigu/input /user/atguigu/output

​       （c）查看运行结果，如图4-1所示

[atguigu@hadoop101 hadoop-3.1.3]$ bin/hdfs dfs -cat /user/atguigu/output/*

​       ![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308105828-cf6a1870-e0a6-40bb-a7c7-f916dd17f248.jpeg)

图4-1 查看运行结果

### 4.2.4 配置文件说明

Hadoop配置文件分两类：默认配置文件和自定义配置文件，只有用户想修改某一默认配置值时，才需要修改自定义配置文件，更改相应属性值。

（1）默认配置文件：

| 要获取的默认文件     | 文件存放在Hadoop的jar包中的位置                            |
| -------------------- | ---------------------------------------------------------- |
| [core-default.xml]   | hadoop-common-3.1.3.jar/ core-default.xml                  |
| [hdfs-default.xml]   | hadoop-hdfs-3.1.3.jar/ hdfs-default.xml                    |
| [yarn-default.xml]   | hadoop-yarn-common-3.1.3.jar/ yarn-default.xml             |
| [mapred-default.xml] | hadoop-mapreduce-client-core-3.1.3.jar/ mapred-default.xml |

表4-2 默认配置文件

​    （2）自定义配置文件：

​    **core-site.xml****、hdfs-site.xml****、yarn-site.xml****、mapred-site.xml**四个配置文件存放在$HADOOP_HOME/etc/hadoop这个路径上，用户可以根据项目需求重新进行修改配置。

 

## 4.2 完全分布式运行模式（开发重点）

分析：

​    1）准备3台客户机（关闭防火墙、静态ip、主机名称）

​    2）安装JDK

​    3）配置环境变量

​    4）安装Hadoop

​    5）配置环境变量

**6****）配置集群**

**7****）单点启动**

​    **8****）配置ssh**

​    **9****）群起并测试集群**

### 4.2.1 虚拟机准备

详见3.1章。

### 4.2.2 编写集群分发脚本xsync

\1.  scp（secure copy）安全拷贝

（1）scp定义：

scp可以实现服务器与服务器之间的数据拷贝。（from server1 to server2）

​    （2）基本语法

scp   -r      $pdir/$fname        $user@hadoop$host:$pdir/$fname

命令  递归    要拷贝的文件路径/名称   目的用户@主机:目的路径/名称

（3）案例实操

（a）在hadoop101上，将hadoop101中/opt/module目录下的软件拷贝到hadoop102上。

[atguigu@hadoop101 /]$ scp -r /opt/module root@hadoop102:/opt/module

（b）在hadoop103上，将hadoop101服务器上的/opt/module目录下的软件拷贝到hadoop103上。

[atguigu@hadoop103 opt]$sudo scp -r atguigu@hadoop101:/opt/module root@hadoop103:/opt/module

（c）在hadoop103上操作将hadoop101中/opt/module目录下的软件拷贝到hadoop104上。

[atguigu@hadoop103 opt]$ scp -r atguigu@hadoop101:/opt/module root@hadoop104:/opt/module

注意：拷贝过来的/opt/module目录，别忘了在hadoop102、hadoop103、hadoop104上修改所有文件的，所有者和所有者组。sudo chown atguigu:atguigu -R /opt/module

（d）将hadoop101中/etc/profile文件拷贝到hadoop102的/etc/profile上。

[atguigu@hadoop101 ~]$ sudo scp /etc/profile root@hadoop102:/etc/profile

（e）将hadoop101中/etc/profile文件拷贝到hadoop103的/etc/profile上。

[atguigu@hadoop101 ~]$ sudo scp /etc/profile root@hadoop103:/etc/profile

（f）将hadoop101中/etc/profile文件拷贝到hadoop104的/etc/profile上。

[atguigu@hadoop101 ~]$ sudo scp /etc/profile root@hadoop104:/etc/profile

注意：拷贝过来的配置文件别忘了source一下/etc/profile，。

\2.  rsync 远程同步工具

rsync主要用于备份和镜像。具有速度快、避免复制相同内容和支持符号链接的优点。

rsync和scp区别：用rsync做文件的复制要比scp的速度快，rsync只对差异文件做更新。scp是把所有文件都复制过去。

​    （1）基本语法

rsync   -av    $pdir/$fname        $user@hadoop$host:$pdir/$fname

命令  选项参数  要拷贝的文件路径/名称   目的用户@主机:目的路径/名称

​     选项参数说明

 

| 选项 | 功能         |
| ---- | ------------ |
| -a   | 归档拷贝     |
| -v   | 显示复制过程 |

表4-3

（2）案例实操

​       （a）把hadoop101机器上的/opt/software目录同步到hadoop102服务器的root用户下的/opt/目录

[atguigu@hadoop101 opt]$ rsync -av /opt/software/ hadoop102:/opt/software

\3.  xsync集群分发脚本

（1）需求：循环复制文件到所有节点的相同目录下

​    （2）需求分析：

（a）rsync命令原始拷贝：

rsync -av   /opt/module     root@hadoop103:/opt/

​       （b）期望脚本：

xsync要同步的文件名称

​       （c）说明：在/home/atguigu/bin这个目录下存放的脚本，atguigu用户可以在系统任何地方直接执行。

（3）脚本实现

（a）在/home/atguigu目录下创建bin目录，并在bin目录下创建xsync文件

[atguigu@hadoop101 hadoop] cd /home/atguigu

[atguigu@hadoop101 ~] mkdir bin

[atguigu@hadoop101 bin] touch xsync

[atguigu@hadoop101 bin] vim xsync

在该文件中编写如下代码

\#!/bin/bash

\#1. 判断参数个数

if [ $# -lt 1 ]

then

 echo Not Enough Arguement!

 exit;

fi

\#2. 遍历集群所有机器

for host in hadoop102 hadoop103 hadoop104

do

 echo ==================== $host ====================

 \#3. 遍历所有目录，挨个发送

 for file in $@

 do

  \#4 判断文件是否存在

  if [ -e $file ]

  then

   \#5. 获取父目录

   pdir=$(cd -P $(dirname $file); pwd)

   \#6. 获取当前文件的名称

   fname=$(basename $file)

   ssh $host "mkdir -p $pdir"

   rsync -av $pdir/$fname $host:$pdir

  else

   echo $file does not exists!

  fi

 done

done

（b）修改脚本 xsync 具有执行权限

chmod +x xsync

​       （d）测试脚本

sudo xsync /bin/xsync

### 4.2.3 集群配置

\1.  集群部署规划

​    注意：NameNode和SecondaryNameNode不要安装在同一台服务器

​    注意：ResourceManager也很消耗内存，不要和NameNode、SecondaryNameNode配置在同一台机器上。

|      | hadoop102        | hadoop103                  | hadoop104                 |
| ---- | ---------------- | -------------------------- | ------------------------- |
| HDFS | NameNodeDataNode | DataNode                   | SecondaryNameNodeDataNode |
| YARN | NodeManager      | ResourceManagerNodeManager | NodeManager               |

表4-4

\2.  配置集群

​    （1）核心配置文件

配置core-site.xml

cd $HADOOP_HOME/etc/hadoop

vim core-site.xml

文件内容如下：

<?xml version="1.0" encoding="UTF-8"?>

<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

 

<configuration>

  <property>

​    <name>fs.defaultFS</name>

​    <value>hdfs://hadoop102:8020</value>

  </property>

  <property>

​    <name>hadoop.data.dir</name>

​    <value>/opt/module/hadoop-3.1.3/data</value>

  </property>

  <property>

​    <name>hadoop.proxyuser.atguigu.hosts</name>

​    <value>*</value>

  </property>

  <property>

​    <name>hadoop.proxyuser.atguigu.groups</name>

​    <value>*</value>

  </property>

</configuration>

​    （2）HDFS配置文件

配置hdfs-site.xml

vim hdfs-site.xml

文件内容如下：

<?xml version="1.0" encoding="UTF-8"?>

<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

 

<configuration>

 <property>

  <name>dfs.namenode.name.dir</name>

  <value>file://${hadoop.data.dir}/name</value>

 </property>

 <property>

  <name>dfs.datanode.data.dir</name>

  <value>file://${hadoop.data.dir}/data</value>

 </property>

  <property>

  <name>dfs.namenode.checkpoint.dir</name>

  <value>file://${hadoop.data.dir}/namesecondary</value>

 </property>

  <property>

  <name>dfs.client.datanode-restart.timeout</name>

  <value>30</value>

 </property>

 <property>

  <name>dfs.namenode.secondary.http-address</name>

  <value>hadoop104:9868</value>

 </property>

</configuration>

（3）YARN配置文件

配置yarn-site.xml

vim yarn-site.xml

文件内容如下：

<?xml version="1.0" encoding="UTF-8"?>

<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

 

<configuration>

  <property>

​    <name>yarn.nodemanager.aux-services</name>

​    <value>mapreduce_shuffle</value>

  </property>

  <property>

​    <name>yarn.resourcemanager.hostname</name>

​    <value>hadoop103</value>

  </property>

  <property>

​    <name>yarn.nodemanager.env-whitelist</name>

​    <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value>

  </property>

</configuration>

（4）MapReduce配置文件

配置mapred-site.xml

vim mapred-site.xml

文件内容如下：

<?xml version="1.0" encoding="UTF-8"?>

<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>

 

<configuration>

 <property>

  <name>mapreduce.framework.name</name>

  <value>yarn</value>

 </property>

</configuration>

3．在集群上分发配置好的hadoop

xsync /opt/module/hadoop-3.1.3

4．查看文件分发情况

### 4.2.4 集群单点启动

（1）如果集群是第一次启动，需要**格式化****NameNode**

hdfs namenode -format

（2）在hadoop102上启动NameNode

hdfs --daemon start namenode

完成后执行jps命令，看到如下结果（进程号可能不同）：

3461 NameNode

（3）在hadoop102、hadoop103以及hadoop104上执行如下命令（三台都要执行）

hdfs --daemon start datanode

（4）思考：每次都一个一个节点启动，如果节点数增加到1000个怎么办？

​    早上来了开始一个一个节点启动，到晚上下班刚好完成，下班？![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308105970-4ebb7441-71e4-4e40-8afa-4b263243f481.jpeg)

### 4.2.5 SSH无密登录配置

\1.  配置ssh

（1）基本语法

ssh另一台电脑的ip地址

（2）ssh连接时出现Host key verification failed的解决方法

ssh hadoop103

出现：

The authenticity of host '192.168.1.103 (192.168.1.103)' can't be established.

RSA key fingerprint is cf:1e:de:d7:d0:4c:2d:98:60:b4:fd:ae:b1:2d:ad:06.

Are you sure you want to continue connecting (yes/no)?

（3）解决方案如下：直接输入yes

\2.  无密钥配置

（1）免密登录原理，如图4-2所示

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308106116-f7a80cf5-ed58-4c93-9a25-0a6d57e6235d.jpeg)图4-2 免密登陆原理

（2）生成公钥和私钥：

ssh-keygen -t rsa

然后敲（三个回车），就会生成两个文件id_rsa（私钥）、id_rsa.pub（公钥）

（3）将公钥拷贝到要免密登录的目标机器上

ssh-copy-id hadoop102

ssh-copy-id hadoop103

ssh-copy-id hadoop104

注意：

还需要在hadoop102上采用root账号，配置一下无密登录到hadoop102、hadoop103、hadoop104；

还需要在hadoop103上采用atguigu账号配置一下无密登录到hadoop102、hadoop103、hadoop104服务器上。

\3.  .ssh文件夹下（~/.ssh）的文件功能解释

 

| known_hosts     | 记录ssh访问过计算机的公钥(public key) |
| --------------- | ------------------------------------- |
| id_rsa          | 生成的私钥                            |
| id_rsa.pub      | 生成的公钥                            |
| authorized_keys | 存放授权过的无密登录服务器公钥        |

表4-5

### 4.2.6 群起集群

\1.  配置workers

vim /opt/module/hadoop-3.1.3/etc/hadoop/workers

在该文件中增加如下内容：

hadoop102

hadoop103

hadoop104

注意：该文件中添加的内容结尾不允许有空格，文件中不允许有空行。

同步所有节点配置文件

xsync workers

\2.  启动集群

​    （1）**如果集群是第一次启动**，需要在hadoop102节点格式化NameNode（注意格式化之前，一定要先停止上次启动的所有namenode和datanode进程，然后再删除data和log数据）

hdfs namenode -format

（2）启动HDFS

sbin/start-dfs.sh

（3）**在配置了****ResourceManager****的节点（hadoop103****）**启动YARN

sbin/start-yarn.sh  

\3.  集群基本测试

（1）上传文件到集群

​     上传小文件

hadoop fs -mkdir -p /user/atguigu/input

hadoop fs -put $HADOOP_HOME/wcinput/wc.input /user/atguigu/input

​     上传大文件

hadoop fs -put /opt/software/hadoop-3.1.3.tar.gz /

（2）上传文件后查看文件存放在什么位置

（a）查看HDFS文件存储路径

[atguigu@hadoop102 subdir0]$ pwd

/opt/module/hadoop-3.1.3/data/tmp/dfs/data/current/BP-938951106-192.168.10.107-1495462844069/current/finalized/subdir0/subdir0

（b）查看HDFS在磁盘存储文件内容

[atguigu@hadoop102 subdir0]$ cat blk_1073741825

hadoop yarn

hadoop mapreduce

atguigu

atguigu

（3）拼接

-rw-rw-r--. 1 atguigu atguigu 134217728 5月 23 16:01 **blk_1073741836**

-rw-rw-r--. 1 atguigu atguigu  1048583 5月 23 16:01 blk_1073741836_1012.meta

-rw-rw-r--. 1 atguigu atguigu 63439959 5月 23 16:01 **blk_1073741837**

-rw-rw-r--. 1 atguigu atguigu  495635 5月 23 16:01 blk_1073741837_1013.meta

[atguigu@hadoop102 subdir0]$ cat blk_1073741836>>tmp.jar

[atguigu@hadoop102 subdir0]$ cat blk_1073741837>>tmp.jar

[atguigu@hadoop102 subdir0]$ tar -zxvf tmp.jar

（4）下载

[atguigu@hadoop102 hadoop-3.1.3]$ bin/hadoop fs -get

 /hadoop-3.1.3.tar.gz ./

（5）执行wordcount程序

[atguigu@hadoop102 hadoop-3.1.3]$ hadoop jar share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /user/atguigu/input /user/atguigu/output

### 4.2.7 集群启动/停止方式总结

\1.  各个服务组件逐一启动/停止

​    （1）分别启动/停止HDFS组件

hdfs --daemon start/stop namenode/datanode/secondarynamenode

​    （2）启动/停止YARN

yarn --daemon start/stop resourcemanager/nodemanager

\2.  各个模块分开启动/停止（配置ssh是前提）常用

​    （1）整体启动/停止HDFS

start-dfs.sh/stop-dfs.sh

​    （2）整体启动/停止YARN

start-yarn.sh/stop-yarn.sh

### 4.2.8 配置历史服务器

为了查看程序的历史运行情况，需要配置一下历史服务器。具体配置步骤如下：

\1.  配置mapred-site.xml

vi mapred-site.xml

在该文件里面增加如下配置。

<!-- 历史服务器端地址 -->

<property>

  <name>mapreduce.jobhistory.address</name>

  <value>hadoop102:10020</value>

</property>

 

<!-- 历史服务器web端地址 -->

<property>

  <name>mapreduce.jobhistory.webapp.address</name>

  <value>hadoop102:19888</value>

</property>

\2.  分发配置

xsync $HADOOP_HOME/etc/hadoop/mapred-site.xml

\3.  在hadoop102启动历史服务器

mapred --daemon start historyserver

\4.  查看历史服务器是否启动

jps

\5.  查看JobHistory

http://hadoop102:19888/jobhistory

### 4.2.9 配置日志的聚集

日志聚集概念：应用运行完成以后，将程序运行日志信息上传到HDFS系统上。

日志聚集功能好处：可以方便的查看到程序运行详情，方便开发调试。

注意：开启日志聚集功能，需要重新启动NodeManager 、ResourceManager和HistoryManager。

开启日志聚集功能具体步骤如下：

\1.   配置yarn-site.xml

vim yarn-site.xml

在该文件里面增加如下配置。

  <property>

​    <name>yarn.log-aggregation-enable</name>

​    <value>true</value>

  </property>

  <property> 

​    <name>yarn.log.server.url</name> 

​    <value>http://hadoop102:19888/jobhistory/logs</value> 

  </property>

  <property>

​    <name>yarn.log-aggregation.retain-seconds</name>

​    <value>604800</value>

</property>

\2.   分发配置

xsync $HADOOP_HOME/etc/hadoop/yarn-site.xml

\3.   关闭NodeManager 、ResourceManager和HistoryServer

在103上执行： stop-yarn.sh

在102上执行： mapred --daemon stop historyserver

\4.   启动NodeManager 、ResourceManager和HistoryServer

在103上执行：start-yarn.sh

在102上执行：mapred --daemon start historyserver

\5.   删除HDFS上已经存在的输出文件

hdfs dfs -rm -R /user/atguigu/output

\6.   执行WordCount程序

hadoop jar  $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-3.1.3.jar wordcount /user/atguigu/input /user/atguigu/output

\7.   查看日志，如图4-3，4-4，4-5所示

http://hadoop102:19888/jobhistory

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308106308-faf2c45c-9e84-4868-815e-dba3f2f1b64a.jpeg)

图4-3 Job History

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308106482-072a2c68-2fa4-46c1-8571-fdbd6470e670.jpeg)

图4-4 job运行情况

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308106636-f770a214-682b-4f6d-8632-d0acb2b88488.jpeg)

图4-5 查看日志

### 4.2.10 集群时间同步

时间同步的方式：找一个机器，作为时间服务器，所有的机器与这台集群时间进行定时的同步，比如，每隔十分钟，同步一次时间。

![img](%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BHadoop%EF%BC%88%E5%85%A5%E9%97%A8%EF%BC%89.assets/1586308106798-308ce132-8d36-4d8f-b135-1ce8430c2a6f.jpeg)

图4-6 时间同步

**配置时间同步具体实操：**

\1.  时间服务器配置（必须root用户）

（1）在所有节点关闭ntp服务和自启动

sudo systemctl stop ntpd

sudo systemctl disable ntpd

（2）修改ntp配置文件

vim /etc/ntp.conf

修改内容如下

a）修改1（授权192.168.1.0-192.168.1.255网段上的所有机器可以从这台机器上查询和同步时间）

\#restrict 192.168.1.0 mask 255.255.255.0 nomodify notrap为restrict 192.168.1.0 mask 255.255.255.0 nomodify notrap

​       b）修改2（集群在局域网中，不使用其他互联网上的时间）

server 0.centos.pool.ntp.org iburst

server 1.centos.pool.ntp.org iburst

server 2.centos.pool.ntp.org iburst

server 3.centos.pool.ntp.org iburst

为

**#**server 0.centos.pool.ntp.org iburst

**#**server 1.centos.pool.ntp.org iburst

**#**server 2.centos.pool.ntp.org iburst

**#**server 3.centos.pool.ntp.org iburst

c）添加3（当该节点丢失网络连接，依然可以采用本地时间作为时间服务器为集群中的其他节点提供时间同步）

server 127.127.1.0

fudge 127.127.1.0 stratum 10

（3）修改/etc/sysconfig/ntpd 文件

vim /etc/sysconfig/ntpd

增加内容如下（让硬件时间与系统时间一起同步）

SYNC_HWCLOCK=yes

​     Tips:

​     系统时间: 一般说来就是我们执行 date命令看到的时间，linux系统下所有的时间调            用（除了直接访问硬件时间的命令）都是使用的这个时间。

 

​     硬件时间: 主板上BIOS中的时间，由主板电池供电来维持运行，系统开机时要读取

​        这个时间，并根据它来设定系统时间（注意：系统启动时根据硬件时间

​             设定系统时间的过程可能存在时区换算，这要视具体的系统及相关设置而

​        定）

（4）重新启动ntpd服务

systemctl start ntpd

（5）设置ntpd服务开机启动

systemctl enable ntpd

\2.  其他机器配置（必须root用户）

（1）在其他机器配置10分钟与时间服务器同步一次

crontab -e

编写定时任务如下：

*/10 * * * * /usr/sbin/ntpdate hadoop102

（2）修改任意机器时间

date -s "2017-9-11 11:11:11"

（3）十分钟后查看机器是否与时间服务器同步

date

说明：测试的时候可以将10分钟调整为1分钟，节省时间。

# 第5章 Hadoop 3.x 和2.x主要区别

1)   最低Java版本从7升级到8

2)   引入纠删码(Erasure Coding)

主要解决数据量大到一定程度磁盘空间存储能力不足的问题.

HDFS中的默认3副本方案在存储空间中具有200%的额外开销。但是，对于I/O活动相对较少冷数据集，在正常操作期间很少访问其他块副本，但仍然会消耗与第一个副本相同的资源量。

纠删码能勾在不到50%数据冗余的情况下提供和3副本相同的容错能力，因此，使用纠删码作为副本机制的改进是自然而然，也是未来的趋势.

3)   重写了Shell脚本

重写了Shell脚本，修改了之前版本长期存在的一些错误，并提供了一些新功能,在尽可能保证兼容性的前提下，一些新变化仍然可能导致之前的安装出现问题。

例如:

l 所有Hadoop Shell脚本子系统现在都会执行hadoop-env.sh这个脚本，它允许所有环节变量位于一个位置；

l 守护进程已通过*-daemon.sh选项从*-daemon.sh移动到了bin命令中，在Hadoop3中，我们可以简单的使用守护进程来启动、停止对应的Hadoop系统进程；

4)   引入了新的API依赖

之前Hadoop客户端操作的Maven依赖为hadoop-client，这个依赖直接暴露了Hadoop的下级依赖，当用户和Hadoop使用相同依赖的不同版本时，可能造成冲突。

Hadoop3.0引入了提供了hadoop-client-api 和hadoop-client-runtime依赖将下级依赖隐藏起来，一定程度上来解决依赖冲突的问题

 

5)   MapReduce任务的本地化优化

MapReduce引入了一个NativeMapOutputCollector的本地化(C/C++)实现，对于shuffle密集的任务，可能提高30%或者更高的性能

6)   支持超过两个NN

HDFS NameNode高可用性的初始实现为单个Active NameNode 和 单个 Standby NameNode, 将edits复制到三个JournalNode。 该体系结构能够容忍系统中一个NN或者一个JN故障.但是，某些部署需要更高程序的容错能力，Hadoop3.x允许用户运行一个Active NameNode 和 多个 Standby NameNode。

7)   许多服务的默认端口改变了

Hadoop3.x之前，多个Hadoop服务的默认端口位于Linux临时端口范围(63768~61000). 这意味着在启动时，由于与另一个应用程序冲突，服务有时无法绑定到端口.

在Hadoop3.x中，这些可能冲突的端口已移出临时范围，受影响的有NameNode ,

SecondaryNamenode , DataNode 和 KMS

8)   添加对Microsoft Azure Data Lake 和 阿里云对象存储系统的支持

9)   DataNode内部实现Balancer

一个DN管理多个磁盘，当正常写入时，多个磁盘是平均分配的。然而当添加新磁盘时，这种机制会造成DN内部严重的倾斜。

之前的DataNode Balancer只能实现DN之间的数据平衡，Hadoop3.x实现了内部的数据平衡。

10) 重做的后台和任务堆内存管理

已实现根据服务器自动配置堆内存，HADOOP_HEAPSIZE变量失效。简化MapTask 和ReduceTask的堆内存配置，现已不必同时在配置中和Java启动选项中指定堆内存大小，旧有配置不会受到影响。

11) HDFS实现服务器级别的Federation分流

对于HDFS Federation， 添加了一个对统一命名空间的RPC路由层 。 和原来的HDFS Federation没有变化，只是目前挂在管理不必在客户端完成，而是放在的服务器，从而简化了HDFS Federation访问。

12) Yarn的时间线服务升级到V2

 Yarn的时间线服务是MRJobHistory的升级版，提供了在Yarn上运行第三方程序的历史支持，该服务在Hadoop3.0升级为第二版

 

13) 容量调度器实现API级别的配置

现在容量调度器可以实现通过REST API来改变配置，从而让管理员可以实现调度器自动配置。

14) Yarn实现更多种资源类型的管理

Yarn调度器现已可以通过配置实现用户自定义的资源管理。现在Yarn可以根据CPU和内存意外的资源管理其任务队列

   

​    参考:

​       https://blog.csdn.net/chj_xc/article/details/54907029

​       https://www.cnblogs.com/smartloli/p/8827623.html

​       https://www.cnblogs.com/smartloli/p/9028267.html

 

# 第6章 Hadoop源码编译

[Hadoop源码编译.docx](https://www.yuque.com/Library/Containers/com.microsoft.Word/Data/Library/Containers/com.microsoft.Word/Data/Downloads/word2html/0ab563c6-250d-452e-93bf-0e18b377f2f5/Hadoop源码编译.docx)

# 第7章 常见错误及解决方案

1）防火墙没关闭、或者没有启动YARN

*INFO client.RMProxy: Connecting to ResourceManager at hadoop108/192.168.10.108:8032*

2）主机名称配置错误

3）IP地址配置错误

4）ssh没有配置好

5）root用户和atguigu两个用户启动集群不统一

6）配置文件修改不细心

7）未编译源码

*Unable to load native-hadoop library for your platform... using builtin-java classes where applicable*

*17/05/22 15:38:58 INFO client.RMProxy: Connecting to ResourceManager at hadoop108/192.168.10.108:8032*

8）不识别主机名称

java.net.UnknownHostException: hadoop102: hadoop102

​    at java.net.InetAddress.getLocalHost(InetAddress.java:1475)

​    at org.apache.hadoop.mapreduce.JobSubmitter.submitJobInternal(JobSubmitter.java:146)

​    at org.apache.hadoop.mapreduce.Job$10.run(Job.java:1290)

​    at org.apache.hadoop.mapreduce.Job$10.run(Job.java:1287)

​    at java.security.AccessController.doPrivileged(Native Method)

at javax.security.auth.Subject.doAs(Subject.java:415)

解决办法：

（1）在/etc/hosts文件中添加192.168.1.102 hadoop102

​    （2）主机名称不要起hadoop hadoop000等特殊名称

9）DataNode和NameNode进程同时只能工作一个。

![img](https://cdn.nlark.com/yuque/0/2020/jpeg/349894/1586308106970-1713b196-9ea3-4408-a11a-7814f4458dcb.jpeg)

10）执行命令不生效，粘贴word中命令时，遇到-和长–没区分开。导致命令失效

解决办法：尽量不要粘贴word中代码。

11）jps发现进程已经没有，但是重新启动集群，提示进程已经开启。原因是在linux的根目录下/tmp目录中存在启动的进程临时文件，将集群相关进程删除掉，再重新启动集群。

12）jps不生效。

原因：全局变量hadoop java没有生效。解决办法：需要source /etc/profile文件。

13）8088端口连接不上

[atguigu@hadoop102 桌面]$ cat /etc/hosts

注释掉如下代码

\#127.0.0.1  localhost localhost.localdomain localhost4 localhost4.localdomain4

\#::1     hadoop102