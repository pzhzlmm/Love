ZooKeeper

## 一、 ZooKeeper 简介

顾名思义 zookeeper 就是动物园管理员，他是用来管 hadoop（大象）、Hive(蜜蜂)、pig(小
猪)的管理员， Apache Hbase 和 Apache Solr 的分布式集群都用到了 zookeeper；Zookeeper:
是一个分布式的、开源的程序协调服务，是 hadoop 项目下的一个子项目。他提供的主要功
能包括：配置管理、名字服务、分布式锁、集群管理。

## 二、 ZooKeeper 的作用

### 1.1配置管理

在我们的应用中除了代码外，还有一些就是各种配置。比如数据库连接等。一般我们都
是使用配置文件的方式，在代码中引入这些配置文件。当我们只有一种配置，只有一台服务
器，并且不经常修改的时候，使用配置文件是一个很好的做法，但是如果我们配置非常多，
有很多服务器都需要这个配置，这时使用配置文件就不是个好主意了。这个时候往往需要寻
找一种集中管理配置的方法，我们在这个集中的地方修改了配置，所有对这个配置感兴趣的
都可以获得变更。Zookeeper 就是这种服务，它使用 Zab 这种一致性协议来提供一致性。现
在有很多开源项目使用 Zookeeper 来维护配置，比如在 HBase 中，客户端就是连接一个
Zookeeper，获得必要的 HBase 集群的配置信息，然后才可以进一步操作。还有在开源的消
息队列 Kafka 中，也使用 Zookeeper 来维护 broker 的信息。在 Alibaba 开源的 SOA 框架 Dubbo
中也广泛的使用 Zookeeper 管理一些配置来实现服务治理。

的八大水问u我一偶

### 1.2名字服务

名字服务这个就很好理解了。比如为了通过网络访问一个系统，我们得知道对方的 IP
地址，但是 IP 地址对人非常不友好，这个时候我们就需要使用域名来访问。但是计算机是
不能是域名的。怎么办呢？如果我们每台机器里都备有一份域名到 IP 地址的映射，这个倒
是能解决一部分问题，但是如果域名对应的 IP 发生变化了又该怎么办呢？于是我们有了
DNS 这个东西。我们只需要访问一个大家熟知的(known)的点，它就会告诉你这个域名对应
的 IP 是什么。在我们的应用中也会存在很多这类问题，特别是在我们的服务特别多的时候，
如果我们在本地保存服务的地址的时候将非常不方便，但是如果我们只需要访问一个大家都
熟知的访问点，这里提供统一的入口，那么维护起来将方便得多了。

### 1.3分布式锁

其实在第一篇文章中已经介绍了 Zookeeper 是一个分布式协调服务。这样我们就可以利
用 Zookeeper 来协调多个分布式进程之间的活动。比如在一个分布式环境中，为了提高可靠
性，我们的集群的每台服务器上都部署着同样的服务。但是，一件事情如果集群中的每个服
务器都进行的话，那相互之间就要协调，编程起来将非常复杂。而如果我们只让一个服务进
行操作，那又存在单点。通常还有一种做法就是使用分布式锁，在某个时刻只让一个服务去
干活，当这台服务出问题的时候锁释放，立即 fail over 到另外的服务。这在很多分布式系统
中都是这么做，这种设计有一个更好听的名字叫 Leader Election(leader 选举)。比如 HBase
的 Master 就是采用这种机制。但要注意的是分布式锁跟同一个进程的锁还是有区别的，所
以使用的时候要比同一个进程里的锁更谨慎的使用。

### 1.4集群管理

在分布式的集群中，经常会由于各种原因，比如硬件故障，软件故障，网络问题，有些
节点会进进出出。有新的节点加入进来，也有老的节点退出集群。这个时候，集群中其他机
器需要感知到这种变化，然后根据这种变化做出对应的决策。比如我们是一个分布式存储系
统，有一个中央控制节点负责存储的分配，当有新的存储进来的时候我们要根据现在集群目
前的状态来分配存储节点。这个时候我们就需要动态感知到集群目前的状态。还有，比如一
个分布式的 SOA 架构中，服务是一个集群提供的，当消费者访问某个服务时，就需要采用
某种机制发现现在有哪些节点可以提供该服务(这也称之为服务发现，比如 Alibaba 开源的
SOA 框架 Dubbo 就采用了 Zookeeper 作为服务发现的底层机制)。还有开源的 Kafka 队列就
采用了 Zookeeper 作为 Cosnumer 的上下线管理。

## 三、 Zookeeper 的存储结构

![1565403501527](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565403501527.png)

### 1 Znode

在 Zookeeper 中，znode 是一个跟 Unix 文件系统路径相似的节点，可以往这个节点存储
或获取数据。
Zookeeper 底层是一套数据结构。这个存储结构是一个树形结构，其上的每一个节点，
我们称之为“znode”
zookeeper 中的数据是按照“树”结构进行存储的。而且 znode 节点还分为 4 中不同的类
型。
每一个 znode 默认能够存储 1MB 的数据（对于记录状态性质的数据来说，够了）
可以使用 zkCli 命令，登录到 zookeeper 上，并通过 ls、create、delete、get、set 等命令
操作这些 znode 节点

### 2 Znode 节点类型

(1)PERSISTENT 持久化节点

 所谓持久节点，是指在节点创建后，就一直存在，直到
有删除操作来主动清除这个节点。否则不会因为创建该节点的客户端会话失效而消失。
(2)PERSISTENT_SEQUENTIAL 持久顺序节点

这类节点的基本特性和上面的节点类
型是一致的。额外的特性是，在 ZK 中，每个父节点会为他的第一级子节点维护一份时序，
会记录每个子节点创建的先后顺序。基于这个特性，在创建子节点的时候，可以设置这个属
性，那么在创建节点过程中，ZK 会自动为给定节点名加上一个数字后缀，作为新的节点名。
这个数字后缀的范围是整型的最大值。在创建节点的时候只需要传入节点 “/test_”，这样
之后，zookeeper 自动会给”test_”后面补充数字。
(3)EPHEMERAL 临时节点

和持久节点不同的是，临时节点的生命周期和客户端会
话绑定。也就是说，如果客户端会话失效，那么这个节点就会自动被清除掉。注意，这里提
到的是会话失效，而非连接断开。另外，在临时节点下面不能创建子节点。
这里还要注意一件事，就是当你客户端会话失效后，所产生的节点也不是一下子就消失
了，也要过一段时间，大概是 10 秒以内，可以试一下，本机操作生成节点，在服务器端用
命令来查看当前的节点数目，你会发现客户端已经 stop，但是产生的节点还在。
(4) EPHEMERAL_SEQUENTIAL 临时自动编号节点

此节点是属于临时节点，不过带有顺序，客户端会话结束节点就消失。

## 四、 安装 zookeeper

### 1 安装单机版

1.1安装 Linux
1.2安装 JDK

### 1.2配置环境变量
export JAVA_HOME=/usr/local/jdk
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH

### 1.3上传 Zookeeper
官方资源包可在 zookeeper.apache.com 站点中下载。最新发布版本为：3.4.12。

### 1.4解压 Zookeeper 压缩包
[root@localhost temp]# tar -zxf zookeeper-3.4.6.tar.gz
[root@localhost temp]# cp zookeeper-3.4.6 /usr/local/zookeeper -r

### 1.5Zookeeper 目录结构
1. bin：放置运行脚本和工具脚本，如果是 Linux 环境还会有有 zookeeper 的运
行日志 zookeeper.out
2. conf：zookeeper 默认读取配置的目录，里面会有默认的配置文件
3. contrib：zookeeper 的拓展功能
4. dist-maven：zookeeper 的 maven 打包目录
5. docs：zookeeper 相关的文档
6. lib：zookeeper 核心的 jar
7. recipes：zookeeper 分布式相关的 jar 包
8. src：zookeeper 源码
### 1.6配置 Zookeeper
Zookeeper 在启动时默认的去 conf 目录下查找一个名称为 zoo.cfg 的配置文件。
在 zookeeper 应用目录中有子目录 conf。其中有配置文件模板：zoo_sample.cfg
cp zoo_sample.cfg zoo.cfg。zookeeper 应用中的配置文件为 conf/zoo.cfg。
修改配置文件 zoo.cfg - 设置数据缓存路径dataDir(在zookeeper根目录去创建进入data目录用pwd复制路径)
### 1.7启动 Zookeeper
默认加载配置文件：./zkServer.sh start：
默认的会去 conf 目录下加载 zoo.cfg 配置文件。
接着可以status命令查看是否启动成功
指定加载配置文件：./zkServer.sh start 配置文件的路径。
## 2 安装集群版
### 2.1Zookeeper 集群中的角色

Zookeeper 集群中的角色主要有以下三类
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190810110107.png)

### 2.2设计目的

1.最终一致性：client 不论连接到哪个 Server，展示给它都是同一个视图，这是 zookeeper
最重要的性能。
2 .可靠性：具有简单、健壮、良好的性能，如果消息 m 被到一台服务器接受，那么它
将被所有的服务器接受。
3 .实时性：Zookeeper 保证客户端将在一个时间间隔范围内获得服务器的更新信息，或
者服务器失效的信息。但由于网络延时等原因，Zookeeper 不能保证两个客户端能同时得到
刚更新的数据，如果需要最新数据，应该在读数据之前调用 sync()接口。
4 .等待无关（wait-free）：慢的或者失效的 client 不得干预快速的 client 的请求，使得每
个 client 都能有效的等待。
5.原子性：更新只能成功或者失败，没有中间状态。
6 .顺序性：包括全局有序和偏序两种：全局有序是指如果在一台服务器上消息 a 在消息
b 前发布，则在所有 Server 上消息 a 都将在消息 b 前被发布；偏序是指如果一个消息 b 在消
息 a 后被同一个发送者发布，a 必将排在 b 前面。

### 2.3集群安装

使用 3 个 Zookeeper 应用搭建一个伪集群。应用部署位置是：192.168.70.143。服务监听
端口分别为：2181、2182、2183。投票选举端口分别为 2881/3881、2882/3882、2883/3883。
local新建文件zookeepercluster
tar -zxf zookeeper-3.4.6.tar.gz
将解压后的 Zookeeper 应用目录重命名，便于管理,并放到zookeepercluster目录下 -rf
mv zookeeper-3.4.12 zookeeper01

#### 2.3.1提供数据缓存目录

在 zookeeper01 应用目录中，创建 data 目录，用于缓存应用运行数据
cd zookeeper01
mkdir data

#### 2.3.3提供配置文件

在 zookeeper 应用目录中有子目录 conf。其中有配置文件模板：zoo_sample.cfg
cp zoo_sample.cfg zoo.cfg
zookeeper 应用中的配置文件为 conf/zoo.cfg。
    
#### 2.3.2复制应用

复制两份 Zookeeper 应用。用于模拟集群中的 3 个节点。
cp -r zookeeper01 zookeeper02   cp zookeeper01/ zookeeper02 -rf
cp -r zookeeper01 zookeeper03

#### 2.3.4修改配置文件 zoo.cfg

设置数据缓存路径
    dataDir 参数值为应用运行缓存数据保存目录。是 3.2.3 步骤中创建的目录。使用绝对路径赋值。不同的应用路径不同,端口号也不相同。 


#### 2.3.5提供应用唯一标识

  在 Zookeeper 集群中，每个节点需要一个唯一标识。这个唯一标识要求是自然数。且唯
  一标识保存位置是：$dataDir/myid。其中 dataDir 为配置文件 zoo.cfg 中的配置参数
  在 data 目录中创建文件 myid ： touch myid
  为应用提供唯一标识。本环境中使用 1、2、3 作为每个节点的唯一标识。
  vi myid
  简化方式为： echo [唯一标识] >> myid。 echo 命令为回声命令，系统会将命令发送的
  数据返回。 '>>'为定位，代表系统回声数据指定发送到什么位置。 此命令代表系统回声数
  据发送到 myid 文件中。 如果没有文件则创建文件。
  如:echo 1 >> zookeeper01/data/myid
  接着可以用cat zookeeper01/data/myid 进行查看

  #### 2.3.6修改配置文件 zoo.cfg

   - 设置服务、投票、选举端口

    vi zoo.cfg
    clientPort=2181 #服务端口根据应用做对应修改,zk01-2181,zk02-2182,zk03-2183
    server.1=192.168.159.128:2881:3881
    server.2=192.168.159.128:2882:3882
    server.3=192.168.159.128:2883:3883

#### 2.3.7启动 ZooKeeper 应用
    bin/zkServer.sh start
    接着可用status查看状态
    ZooKeeper 集群搭建后，至少需要启动两个应用才能提供服务。因需要选举出主服务节
    点。启动所有 ZooKeeper 节点后，可使用命令 bin/zkServer.sh status 来查看节点状态。如下：
    Mode: leader - 主机
    Mode: follower - 备份机
    可用vim startall.sh,然后把所有server的命令粘贴进去:zookeeper01/bin/zkServer.sh start,然后chmod +x startall.sh设置为可执行文件,接着执行就可
    同理可制作关闭脚本

#### 2.3.8关闭 ZooKeeper 应用

    bin/zkServer.sh stop 命令为关闭 ZooKeeper 应用的命令。

#### 2.3.9控制台访问 ZooKeeper 应用

    bin/zkCli.sh -server 192.168.199.175:2181
    命令格式为： zkCli.sh -server host:port。默认连接 localhost:2181。

#### 2.3.10 控制台客户端常用命令

bin目录下自带zkCli.sh,可以连接zookeeper,执行这个默认执行本机的,监听2181的zookeeper

如果不在同一个环境可以给定参数-server对其进行制定

说明已经连上了本机的zookeeper

![1565419769033](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565419769033.png)

#####  connect host:port 

 连接其他的 ZooKeeper 应用。

#####     ls path 

​    列表路径下的资源。在 ZooKeeper 控制台客户端中，没有默认列表功能，必须指定要列表资源的位置。 如： ls / ； ls /path 等。退出:quit

#####  create

​    create [-e] [-s] path data - 创建节点，如： create /test 123 创建一个/test 节点，节点携
​    带数据信息 123。 create -e /test 123 创建一个临时节点/test，携带数据为 123，临时节点只
​    在当前会话生命周期中有效，会话结束节点自动删除。 create -s /test 123 创建一个顺序节点
​    /test，携带数据123，创建的顺序节点由ZooKeeper自动为节点增加后缀信息，如-/test00000001
​    等。-e 和-s 参数可以联合使用。

#####  get path 

查看指定节点的数据。 如： get /test。结果如下：
    [zk: 192.168.199.175:2181(CONNECTED) 22] get /test123
    cZxid = 0xd # 创建节点时的事务 ID，由 ZooKeeper 维护。
    ctime = Tue Jun 12 07:45:53 PDT 2018
    mZxid = 0x1f # 当前节点携带数据最后一次修改的事务 ID。
    mtime = Tue Jun 12 07:52:53 PDT 2018
    pZxid = 0x21 # 子节点列表最后一次修改的事务 ID。
    cversion = 1 # 节点版本号，当节点的子节点列表发生变化时，版本变更。
    dataVersion = 2 # 数据版本号，当节点携带数据发生变化时，版本变更。
    aclVersion = 0
    ephemeralOwner = 0x0 # 此数据值不是 0x0 时，代表是临时节点
    dataLength = 3 # 节点携带数据长度
    numChildren = 1 # 子节点数量
    set path data [version] - 设置对应位置节点的数据。如： set /test 'test data'。 如果要设
    置的数据中有空格，则使用单引号界定数据的范围。每次修改数据后，dataVersion 属性自增。
    那么在 set 命令中可以指定 version，version 数据必须与上次查询的值一致，用于保证本次修
    改命令执行时，没有其他会话修改此数据。

##### delete path [version] 

删除指定节点，此命令不能删除有子节点的节点。如：delete /test。
    其中 version 参数和 set 命令的 version 含义一致

##### rmr path 

 删除指定结点，包括子节点。

##### quit 

退出控制台