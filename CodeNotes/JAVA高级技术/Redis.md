Redis

# 一、 Redis 介绍

## 1 Redis 简介

Remote Dictionary Server(Redis)是一个开源的使用 ANSI C 语言编写、支持网络、可
基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API。
它通常被称为数据结构服务器，因为值（value）可以是 字符串(String), 哈希(Map),
列表(list), 集合(sets) 和 有序集合(sorted sets)等类型。

## 2 Redis 的特点

### 2.1优点：
内存型数据库

1. 支持多种数据结构，如 string(字符串)、 list(双向链表)、dict(hash 表)、set(集合)、
zset(排序 set)、hyperloglog(基数估算)
2. 支持持久化操作，可以进行 aof 及 rdb 数据持久化到磁盘，从而进行数据备份或数
据恢复等操作，较好的防止数据丢失的手段。
3. 支持通过 Replication 进行数据复制，通过 master-slave 机制，可以实时进行数据的
同步复制，支持多级复制和增量复制，master-slave 机制是 Redis 进行 HA 的重要手段。
4. 单进程请求，所有命令串行执行，并发情况下不需要考虑数据一致性问题。

# 二、 安装 Redis 单机版

  第一步 需要在 linux 系统中安装 gcc
  命令：yum install -y gcc-c++
  第二步 需要将下载好的 redis 压缩包添加到 linux 服务器中
  版本：redis-3.0.0.tar.gz
  redis 的版本：副版本号奇数版本号是测试版，不建议在生产环境中使用。
   偶数版本时稳定版建议在生产环境中使用。
   3.0 版本更新比较大。集成了集群技术
  第三步 解压压缩包
  命令：tar -zxvf redis......
  第四步 编译 redis
  命令：进入 redis 的解压完毕的根目录下 执行命令：make
  第五步 安装 redis
  命 令 ： 进 入 redis 的 解 压 完 毕 的 根 目 录 下 ， 执 行 命 令 ： 
  make install PREFIX=/usr/local/redis
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816101221.png)
   PREFIX代表安装的路径
  第六步：启动 redis
  1，前端启动
  在 bin 目录下执行命令： ./redis-server （ctrl+c）退出 redis
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816101409.png)
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816101451.png)
  这种启动状态不能再执行别的命令,可以用ctrl+C结束钓
  2.后端启动
  (1)先将 redis 解压目录下的 redis.conf 文件拷贝到 安装好的 redis 的 bin 目录下
  命令：cp redis.conf /usr/local/redis/bin
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816102044.png)
  (2)修改拷贝过来的 redis.conf 配置文件
  命令：vim redis.conf
  将 daemonize no 改为 yes
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816102133.png)
  (3)启动 redis
  在 bin 目录下执行命令：./redis-server redis.conf
  (4)查看 redis 启动是否成功
  输入命令：ps aux|grep redis
  (5) 关闭 redis 的命令
  ./redis-cli shutdown
  第七步：测试 redis
  在 bin 目录下启动 redis 自带的客户端 ./redis-cli
  常见 redis 命令：
  ping--->pong
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816103943.png)

#   三、 Redis 数据类型

##   1 String(字符串)

  Redis 字符串是字节序列。Redis 字符串是二进制安全的，这意味着他们有一个已知的
  长度没有任何特殊字符终止，所以你可以存储任何东西，512 兆为上限
  示例：
  redis 127.0.0.1:6379> SET name kevin
  OK
  redis 127.0.0.1:6379> GET name
  "kevin"
  incr 让当前键值以 1 的数量递增，并返回递增后的值
  incrby 可以指定参数一次增加的数值，并返回递增后的值
  decr 让当前键值以 1 的数量递减 并返回递减后的值
  decrby 可以指定参数一次递减的数值，并返回递减后的值
  incrbyfloat 可以递增一个双精度浮点数
  append 作用是向键值的末尾追加 value。如果键不存在则将该键的值设置为 value。返
  回值是追加后字符串的总长度。
  mget/mset 作用与 get/set 相似，不过 mget/mset 可以同时获得/设置多个键的键值
  del 根据 key 来删除 value
  flushdb 清除当前库的所有数据
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816105454.png)

##   2 Hash(hash 表)

![1565924362667](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565924362667.png)

  Redis 的哈希是键值对的集合。 Redis 的哈希值是字符串字段和字符串值之间的映射，因此它们被用来表示对象
  根key下有若干子key,存储
  示例：
  redis 127.0.0.1:6379> HSET key field value
  OK
  redis 127.0.0.1:6379> HGET key field
  value
  hset 存储一个哈希键值对的集合
  hset key field value
  hget 获取一个哈希键的值
  hget key field
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190816160255.png)
  hmset 存储一个或**多个**哈希是键值对的集合
  hmset key field1 value1 ......fieldN keyN
  hmget 获取多个指定的键的值
  hmget key field1 ... fieldN
  hexists 判断哈希表中的字段名是否存在 如果存在返回 1 否则返回 0
  hexists key field
  hdel 删除一个或多个字段
  hdel key field
  hgetall 获取一个哈希是键值对的集合
  hgetall key
  hvals 只返回字段值
  hvals key
  hkeys 只返回字段名
  hkeys key
  hlen 返回 key 的 hash 的元素个数
  hlen key

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819100217.png)

## 3 List(链表)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819100412.png)

  Redis 的链表是简单的字符串列表，排序插入顺序。您可以添加元素到 Redis 的列表的头部或尾部
  示例：
  redis 127.0.0.1:6379> lpush tutoriallist redis
  (integer) 1
  redis 127.0.0.1:6379> lpush tutoriallist mongodb
  (integer) 2
  redis 127.0.0.1:6379> lpush tutoriallist rabitmq
  (integer) 3
  如此从左到右的顺序就是rabitmq,mongodb,redis
  redis 127.0.0.1:6379> lrange tutoriallist 0 10
  1) "rabitmq"
  2) "mongodb"
  3) "redis
  lpush key value 向链表左侧添加
  rpush key value 向链表右侧添加
![1566181621745](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1566181621745.png)
  lpop key 从左边移出一个元素
  rpop key 从右边移出一个元素
是![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819102811.png)
  llen key 返回链表中元素的个数 相当于关系型数据库中 select count(*)
  lrange key start end lrange 命令将返回索引从 start 到 stop 之间的所有元素。Redis 的列
  表起始索引为 0。
  lrange 也支持负索引 lrange nn -2 -1 如 -1 表示最右边第一个元素 -2 表示最右边第二
  个元素，依次类推。
  lindex key indexnumber 如果要将列表类型当做数组来用，lindex 命令是必不可少的。
  lindex 命令用来返回指定索引的元素，索引从 0 开始
   如果是负数表示从右边开始计算的索引，最右边元素的索引是-1。
  Lset key indexnumber value 是另一个通过索引操作列表的命令，它会将索引为 index
  的元素赋值为 value。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819103627.png)

##   4 Set(集合)

  Redis 的集合是字符串的无序集合(不可重复)。
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819103759.png)
  示例：
  redis 127.0.0.1:6379> sadd tutoriallist redis
  (integer) 1
  redis 127.0.0.1:6379> sadd tutoriallist mongodb
  (integer) 1
  redis 127.0.0.1:6379> sadd tutoriallist rabitmq
  (integer) 1
  redis 127.0.0.1:6379> sadd tutoriallist rabitmq
  (integer) 0
  redis 127.0.0.1:6379> smembers tutoriallist
  1) "rabitmq"
  2) "mongodb"
  3) "redis"
  sadd key value 添加一个 string 元素到,key 对应的 set 集合中，成功返回 1,如果元素已经
  在集合中返回 0
  scard key 返回 set 的元素个数，如果 set 是空或者 key 不存在返回 0
  smembers key 返回 key 对应 set 的所有元素，结果是无序的
  sismember key value 判断 value 是否在 set 中，存在返回 1，0 表示不存在或者 key 不存
  在
  srem key value 从 key 对应 set 中移除给定元素，成功返回 1，如果 value 在集合中不存
  在或者 key 不存在返回 0

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819104242.png)

##   5 SortedSet(有序集合)zset

  Redis 的有序集合类似于 Redis 的集合，字符串不重复的集合。
  示例：
  redis 127.0.0.1:6379> zadd tutoriallist 0 redis
  (integer) 1
  redis 127.0.0.1:6379> zadd tutoriallist 0 mongodb
  (integer) 1
  redis 127.0.0.1:6379> zadd tutoriallist 0 rabitmq
  (integer) 1
  redis 127.0.0.1:6379> zadd tutoriallist 0 rabitmq
  (integer) 0
  redis 127.0.0.1:6379> ZRANGEBYSCORE tutoriallist 0 1000
  1) "redis"
  2) "mongodb"
  3) "rabitmq"
  zadd key score value 将一个或多个 value 及其 socre 加入到 set 中
  zrange key start end 0 和-1 表示从索引为 0 的元素到最后一个元素（同 LRANGE 命令
  相似）
  zrange key 0 -1 withscores 也可以连同 score 一块输出，使用 WITHSCORES 参数
  zremrangebyscore key start end 可用于范围删除操作(包含删除)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819105425.png)

##   6 Redis 中的其他命令

  ping 测试 redis 是否链接 如果已链接返回 PONG
  echo value 测试 redis 是否链接 如果已链接返回 echo 命令后给定的值
  keys * 返回所有的 key 可以加*通配
  exists key 判断 string 类型一个 key 是否存在 如果存在返回 1 否则返回 0
  **expire key time(s)** 设置一个 key 的过期时间 单位秒。时间到达后会删除 key 及 value,返回1代表设置成功
  ttl key 查询已设置过期时间的 key 的剩余时间 如果返回-2 表示该键值对已经被删除(没有设置失效时间的值是-1)
  persist 移除给定 key 的过期时间
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819111810.png)
  select dbindex 选择数据库(0-15),resis16个库,库与库之间是隔离的
  move key dbIndex 将当前数据库中的 key 转移到其他数据库中
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819112424.png)
  dbsize 返回当前数据库中的 key 的数目
  info 获取服务器的信息和统计
  flushdb 删除当前选择的数据库中的 key
  flushall 删除所有数据库中的所有 key
  quit 退出连接
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819112452.png)

#   四、 Redis 的配置以及持久化方案

##   1 redis.conf 文件
```conf

#redis.conf,默认在压缩包中,启动的时候放bin目录下跟着启动脚本启动

# Redis configuration file example.
# ./redis-server /path/to/redis.conf
################################## INCLUDES
###################################
#这在你有标准配置模板但是每个 redis 服务器又需要个性设置的时候很有用。
# include /path/to/local.conf
# include /path/to/other.conf
##################### GENERAL#################################
#是否在后台执行，yes：后台运行；no：不是后台运行（老版本默认）
daemonize yes
#3.2 里的参数，是否开启保护模式，默认开启。要是配置里没有指定 bind 和密码。开启该参数后，redis只会本地进行访问，拒绝外部访问。要是开启了密码 和 bind，可以开启。否则最好关闭，设置为
no。
protected-mode yes
#redis 的进程文件
pidfile /var/run/redis/redis-server.pid
#redis 设置监听的端口号。
port 6379
#此参数确定了 TCP 连接中已完成队列(完成三次握手之后)的长度， 当然此值必须不大于 Linux 系统定
义的/proc/sys/net/core/somaxconn 值，默认是 511，而 Linux 的默认参数值是 128。当系统并
发量大并且客户端速度缓慢的时候，可以将这二个参数一起参考设定。该内核参数默认值一般是 128，对于负载很大的服务程序来说大大的不够。一般会将它修改为 2048 或者更大。在/etc/sysctl.conf 中
添加:net.core.somaxconn = 2048，然后在终端中执行 sysctl -p。
tcp-backlog 511
#指定 redis 只接收来自于该 IP 地址的请求，如果不进行设置，那么将处理所有请求
#bind 127.0.0.1
#配置 unix socket 来让 redis 支持监听本地连接。

# unixsocket /var/run/redis/redis.sock
#配置 unix socket 使用文件的权限
# unixsocketperm 700
# 此参数为设置客户端空闲超过 timeout，服务端会断开连接，为 0 则服务端不会主动断开连接，不能小于 0。timeout 0
#tcp keepalive 参数。如果设置不为 0，就使用配置 tcp 的 SO_KEEPALIVE 值，使用 keepalive 有
两个好处:检测挂掉的对端。降低中间设备出问题而导致网络看似连接却已经与对端端口的问题。在 Linux
内核中，设置了 keepalive，redis 会定时给对端发送 ack。检测到对端关闭需要两倍的设置值。
tcp-keepalive 0
#指定了服务端日志的级别。级别包括：debug（很多信息，方便开发、测试），verbose（许多有用的信息，但是没有 debug 级别信息多），notice（适当的日志级别，适合生产环境），warn（只有非常重要的信息）
loglevel notice
#指定了记录日志的文件。空字符串的话，日志会打印到标准输出设备。后台运行的 redis 标准输出是/dev/null。
logfile /var/log/redis/redis-server.log
#是否打开记录 syslog 功能
# syslog-enabled no
#syslog 的标识符。
# syslog-ident redis
#日志的来源、设备
# syslog-facility local0
#数据库的数量，默认使用的数据库是 DB 0。可以通过”SELECT “命令选择一个 db
databases 16
################################ SNAPSHOTTING ################################
# 快照配置
# 注释掉“save”这一行配置项就可以让保存数据库功能失效
# 设置 sedis 进行数据库镜像的频率。
# 900 秒（15 分钟）内至少 1 个 key 值改变（则进行数据库保存--持久化）
# 300 秒（5 分钟）内至少 10 个 key 值改变（则进行数据库保存--持久化）
# 60 秒（1 分钟）内至少 10000 个 key 值改变（则进行数据库保存--持久化）
save 900 1
save 300 10
save 60 10000
#save 命令 900,时间,
#当 RDB 持久化出现错误后，是否依然进行继续进行工作，yes：不能进行工作，no：可以继续进行工作，可以通过 info 中的 rdb_last_bgsave_status 了解 RDB 持久化是否有错误
stop-writes-on-bgsave-error yes
#使用压缩 rdb 文件，rdb 文件压缩使用 LZF 压缩算法，yes：压缩，但是需要一些 cpu 的消耗。no：不压缩，需要更多的磁盘空间
rdbcompression yes
#是否校验 rdb 文件。从 rdb 格式的第五个版本开始，在 rdb 文件的末尾会带上 CRC64 的校验和。这跟
有利于文件的容错性，但是在保存 rdb 文件的时候，会有大概 10%的性能损耗，所以如果你追求高性能，可以关闭该配置。
rdbchecksum yes
#rdb 文件的名称,用rdb方式存储生成的名字
dbfilename dump.rdb
#数据目录，数据库的写入会在这个目录。rdb、aof 文件也会写在这个目录
dir /root/temp
################################# REPLICATION
#################################
#复制选项，slave 复制对应的 master。
# slaveof  
#如果 master 设置了 requirepass，那么 slave 要连上 master，需要有 master 的密码才行。masterauth 就是用来配置 master 的密码，这样可以在连上 master 后进行认证。
# masterauth 
#当从库同主机失去连接或者复制正在进行，从机库有两种运行方式：1) 如果
slave-serve-stale-data 设置为 yes(默认设置)，从库会继续响应客户端的请求。2) 如果
slave-serve-stale-data 设置为 no，除去 INFO 和 SLAVOF 命令之外的任何请求都会返回一个错误”SYNC with master in progress”。
slave-serve-stale-data yes
#作为从服务器，默认情况下是只读的（yes），可以修改成 NO，用于写（不建议）。
slave-read-only yes
#是否使用 socket 方式复制数据。目前 redis 复制提供两种方式，disk 和 socket。如果新的 slave
连上来或者重连的 slave 无法部分同步，就会执行全量同步，master 会生成 rdb 文件。有 2 种方式：
disk 方式是 master 创建一个新的进程把 rdb 文件保存到磁盘，再把磁盘上的 rdb 文件传递给 slave。
socket 是 master 创建一个新的进程，直接把 rdb 文件以 socket 的方式发给 slave。disk 方式的时候，当一个 rdb 保存的过程中，多个 slave 都能共享这个 rdb 文件。socket 的方式就的一个个 slave顺序复制。在磁盘速度缓慢，网速快的情况下推荐用 socket 方式。
repl-diskless-sync no
#diskless 复制的延迟时间，防止设置为 0。一旦复制开始，节点不会再接收新 slave 的复制请求直到下一个 rdb 传输。所以最好等待一段时间，等更多的 slave 连上来。
repl-diskless-sync-delay 5
#slave 根据指定的时间间隔向服务器发送 ping 请求。时间间隔可以通过repl_ping_slave_period来设置，默认 10 秒。
# repl-ping-slave-period 10
#复制连接超时时间。master 和 slave 都有超时时间的设置。master 检测到 slave 上次发送的时间超过 repl-timeout，即认为 slave 离线，清除该 slave 信息。slave 检测到上次和 master 交互的时间超过 repl-timeout，则认为 master 离线。需要注意的是 repl-timeout 需要设置一个比repl-ping-slave-period 更大的值，不然会经常检测到超时。
# repl-timeout 60
#是否禁止复制 tcp 链接的 tcp nodelay 参数，可传递 yes 或者 no。默认是 no，即使用 tcp nodelay。
如果 master 设置了 yes 来禁止 tcp nodelay 设置，在把数据复制给 slave 的时候，会减少包的数量
和更小的网络带宽。但是这也可能带来数据的延迟。默认我们推荐更小的延迟，但是在数据量传输很大的
场景下，建议选择 yes。
repl-disable-tcp-nodelay no
#复制缓冲区大小，这是一个环形复制缓冲区，用来保存最新复制的命令。这样在 slave 离线的时候，不
需要完全复制 master 的数据，如果可以执行部分同步，只需要把缓冲区的部分数据复制给 slave，就能恢复正常复制状态。缓冲区的大小越大，slave 离线的时间可以更长，复制缓冲区只有在有 slave 连接的时候才分配内存。没有 slave 的一段时间，内存会被释放出来，默认 1m。
# repl-backlog-size 5mb
#master 没有 slave 一段时间会释放复制缓冲区的内存，repl-backlog-ttl 用来设置该时间长度。
单位为秒。
# repl-backlog-ttl 3600
#当 master 不可用，Sentinel 会根据 slave 的优先级选举一个 master。最低的优先级的 slave，当
选 master。而配置成 0，永远不会被选举。
slave-priority 100
#redis 提供了可以让 master 停止写入的方式，如果配置了 min-slaves-to-write，健康的 slave
的个数小于 N，mater 就禁止写入。master 最少得有多少个健康的 slave 存活才能执行写命令。这个配
置虽然不能保证 N 个 slave 都一定能接收到 master 的写操作，但是能避免没有足够健康的 slave 的时
候，master 不能写入来避免数据丢失。设置为 0 是关闭该功能。
# min-slaves-to-write 3
#延迟小于 min-slaves-max-lag 秒的 slave 才认为是健康的 slave。
# min-slaves-max-lag 10
# 设置 1 或另一个设置为 0 禁用这个特性。
# Setting one or the other to 0 disables the feature.
# By default min-slaves-to-write is set to 0 (feature disabled) and
# min-slaves-max-lag is set to 10.
################################## SECURITY
###################################
#requirepass 配置可以让用户使用 AUTH 命令来认证密码，才能使用其他命令。这让 redis 可以使用
在不受信任的网络中。为了保持向后的兼容性，可以注释该命令，因为大部分用户也不需要认证。使用
requirepass 的时候需要注意，因为 redis 太快了，每秒可以认证 15w 次密码，简单的密码很容易被
攻破，所以最好使用一个更复杂的密码。
# requirepass foobared
#把危险的命令给修改成其他名称。比如 CONFIG 命令可以重命名为一个很难被猜到的命令，这样用户不
能使用，而内部工具还能接着使用。
# rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52
#设置成一个空的值，可以禁止一个命令
# rename-command CONFIG ""
################################### LIMITS
####################################
# 设置能连上 redis 的最大客户端连接数量。默认是 10000 个客户端连接。由于 redis 不区分连接是客
户端连接还是内部打开文件或者和 slave 连接等，所以 maxclients 最小建议设置到 32。如果超过了
maxclients，redis 会给新的连接发送’max number of clients reached’，并关闭连接。
# maxclients 10000
#redis 配置的最大内存容量。当内存满了，需要配合 maxmemory-policy 策略进行处理。注意 slave
的输出缓冲区是不计算在 maxmemory 内的。所以为了防止主机内存使用完，建议设置的 maxmemory 需要更小一些。
# maxmemory 
#内存容量超过 maxmemory 后的处理策略。
#volatile-lru：利用 LRU 算法移除设置过过期时间的 key。
#volatile-random：随机移除设置过过期时间的 key。
#volatile-ttl：移除即将过期的 key，根据最近过期时间来删除（辅以 TTL）
#allkeys-lru：利用 LRU 算法移除任何 key。
#allkeys-random：随机移除任何 key。
#noeviction：不移除任何 key，只是返回一个写错误。
#上面的这些驱逐策略，如果 redis 没有合适的 key 驱逐，对于写命令，还是会返回错误。redis 将不再接收写请求，只接收 get 请求。写命令包括：set setnx setex append incr decr rpush lpush
rpushx lpushx linsert lset rpoplpush sadd sinter sinterstore sunion sunionstore 
sdiff sdiffstore zadd zincrby zunionstore zinterstore hset hsetnx hmset hincrby
incrby decrby getset mset msetnx exec sort。
# maxmemory-policy noeviction
#lru 检测的样本数。使用 lru 或者 ttl 淘汰算法，从需要淘汰的列表中随机选择 sample 个 key，选出闲置时间最长的 key 移除。
# maxmemory-samples 5
############################## APPEND ONLY MODE ###############################
#默认 redis 使用的是 rdb 方式持久化，这种方式在许多应用中已经足够用了。但是 redis 如果中途宕机，会导致可能有几分钟的数据丢失，根据 save 来策略进行持久化，Append Only File 是另一种持久化方式，可以提供更好的持久化特性。Redis 会把每次写入的数据在接收后都写入 appendonly.aof文件，每次启动时 Redis 都会先把这个文件的数据读入内存里，先忽略 RDB 文件。
#默认关闭
appendonly no
#aof 文件名
appendfilename "appendonly.aof"
#aof 持久化策略的配置
#no 表示不执行 fsync，由操作系统保证数据同步到磁盘，速度最快。
#always 表示每次写入都执行 fsync，以保证数据同步到磁盘。
#everysec 表示每秒执行一次 fsync，可能会导致丢失这 1s 数据。
appendfsync everysec
# 在 aof 重写或者写入 rdb 文件的时候，会执行大量 IO，此时对于 everysec 和 always 的 aof 模式
来说，执行 fsync 会造成阻塞过长时间，no-appendfsync-on-rewrite 字段设置为默认设置为 no。
如果对延迟要求很高的应用，这个字段可以设置为 yes，否则还是设置为 no，这样对持久化特性来说这是更安全的选择。设置为 yes 表示 rewrite 期间对新写操作不 fsync,暂时存在内存中,等 rewrite 完成后再写入，默认为 no，建议 yes。Linux 的默认 fsync 策略是 30 秒。可能丢失 30 秒数据。
no-appendfsync-on-rewrite no
#aof 自动重写配置。当目前 aof 文件大小超过上一次重写的 aof 文件大小的百分之多少进行重写，即当aof 文件增长到一定大小的时候 Redis 能够调用 bgrewriteaof 对日志文件进行重写。当前 AOF 文件大小是上次日志重写得到 AOF 文件大小的二倍（设置为 100）时，自动启动新的日志重写过程。
auto-aof-rewrite-percentage 100
#设置允许重写的最小 aof 文件大小，避免了达到约定百分比但尺寸仍然很小的情况还要重写
auto-aof-rewrite-min-size 64mb
#aof 文件可能在尾部是不完整的，当 redis 启动的时候，aof 文件的数据被载入内存。重启可能发生在redis 所在的主机操作系统宕机后，尤其在 ext4 文件系统没有加上 data=ordered 选项（redis 宕机或者异常终止不会造成尾部不完整现象。）出现这种现象，可以选择让 redis 退出，或者导入尽可能多的数据。如果选择的是 yes，当截断的 aof 文件被导入的时候，会自动发布一个 log 给客户端然后 load。
如果是 no，用户必须手动 redis-check-aof 修复 AOF 文件才可以。
aof-load-truncated yes
################################ LUA SCRIPTING ###############################
# 如果达到最大时间限制（毫秒），redis 会记个 log，然后返回 error。当一个脚本超过了最大时限。只有 SCRIPT KILL 和 SHUTDOWN NOSAVE 可以用。第一个可以杀没有调 write 命令的东西。要是已经调用了 write，只能用第二个命令杀。
lua-time-limit 5000
################################ REDIS CLUSTER ###############################
#集群开关，默认是不开启集群模式。
# cluster-enabled yes
#集群配置文件的名称，每个节点都有一个集群相关的配置文件，持久化保存集群的信息。这个文件并不需
要手动配置，这个配置文件有 Redis 生成并更新，每个 Redis 集群节点需要一个单独的配置文件，请确保与实例运行的系统中配置文件名称不冲突
# cluster-config-file nodes-6379.conf
#节点互连超时的阀值。集群节点超时毫秒数
# cluster-node-timeout 15000
#在进行故障转移的时候，全部 slave 都会请求申请为 master，但是有些 slave 可能与 master 断开连接一段时间了，导致数据过于陈旧，这样的 slave 不应该被提升为 master。该参数就是用来判断 slave节点与 master 断线的时间是否过长。判断方法是：
#比较 slave 断开连接的时间和(node-timeout * slave-validity-factor) +
repl-ping-slave-period
#如果节点超时时间为三十秒, 并且 slave-validity-factor 为 10,假设默认的
repl-ping-slave-period 是 10 秒，即如果超过 310 秒 slave 将不会尝试进行故障转移
# cluster-slave-validity-factor 10
#master 的 slave 数量大于该值，slave 才能迁移到其他孤立 master 上，如这个参数若被设为 2，那么只有当一个主节点拥有 2 个可工作的从节点时，它的一个从节点会尝试迁移。
# cluster-migration-barrier 1
#默认情况下，集群全部的 slot 有节点负责，集群状态才为 ok，才能提供服务。设置为 no，可以在 slot
没有全部分配的时候提供服务。不建议打开该配置，这样会造成分区的时候，小分区的 master 一直在接受写请求，而造成很长时间数据不一致。
# cluster-require-full-coverage yes
################################## SLOW LOG
###################################
###slog log 是用来记录 redis 运行中执行比较慢的命令耗时。当命令的执行超过了指定时间，就记录
在 slow log 中，slog log 保存在内存中，所以没有 IO 操作。
#执行时间比 slowlog-log-slower-than 大的请求记录到 slowlog 里面，单位是微秒，所以 1000000
就是 1 秒。注意，负数时间会禁用慢查询日志，而 0 则会强制记录所有命令。
slowlog-log-slower-than 10000
#慢查询日志长度。当一个新的命令被写进日志的时候，最老的那个记录会被删掉。这个长度没有限制。只
要有足够的内存就行。你可以通过 SLOWLOG RESET 来释放内存。
slowlog-max-len 128
################################ LATENCY MONITOR
##############################
#延迟监控功能是用来监控 redis 中执行比较缓慢的一些操作，用 LATENCY 打印 redis 实例在跑命令时
的耗时图表。只记录大于等于下边设置的值的操作。0 的话，就是关闭监视。默认延迟监控功能是关闭的，
如果你需要打开，也可以通过 CONFIG SET 命令动态设置。
latency-monitor-threshold 0
############################# EVENT NOTIFICATION
##############################
#键空间通知使得客户端可以通过订阅频道或模式，来接收那些以某种方式改动了 Redis 数据集的事件。
因为开启键空间通知功能需要消耗一些 CPU ，所以在默认配置下，该功能处于关闭状态。
#notify-keyspace-events 的参数可以是以下字符的任意组合，它指定了服务器该发送哪些类型的通知：
##K 键空间通知，所有通知以 __keyspace@__ 为前缀
##E 键事件通知，所有通知以 __keyevent@__ 为前缀
##g DEL 、 EXPIRE 、 RENAME 等类型无关的通用命令的通知
##$ 字符串命令的通知
##l 列表命令的通知
##s 集合命令的通知
##h 哈希命令的通知
##z 有序集合命令的通知
##x 过期事件：每当有过期键被删除时发送
##e 驱逐(evict)事件：每当有键因为 maxmemory 政策而被删除时发送
##A 参数 g$lshzxe 的别名
#输入的参数中至少要有一个 K 或者 E，否则的话，不管其余的参数是什么，都不会有任何 通知被分发。
详细使用可以参考 http://redis.io/topics/notifications
notify-keyspace-events ""
############################### ADVANCED CONFIG
###############################
#数据量小于等于 hash-max-ziplist-entries 的用 ziplist，大于 hash-max-ziplist-entries用 hash
hash-max-ziplist-entries 512#value 大小小于等于 hash-max-ziplist-value 的用
ziplist，大于 hash-max-ziplist-value 用 hash。
hash-max-ziplist-value 64
#数据量小于等于 list-max-ziplist-entries 用 ziplist，大于 list-max-ziplist-entries用 list。list-max-ziplist-entries 512#value 大小小于等于 list-max-ziplist-value 的用ziplist，大于 list-max-ziplist-value 用 list。list-max-ziplist-value 64
#数据量小于等于 set-max-intset-entries 用 iniset，大于 set-max-intset-entries 用 set。
set-max-intset-entries 512
#数据量小于等于 zset-max-ziplist-entries 用 ziplist，大于 zset-max-ziplist-entries用 zset。
zset-max-ziplist-entries 128#value 大小小于等于 zset-max-ziplist-value 用 ziplist，大于 zset-max-ziplist-value 用 zset。
zset-max-ziplist-value 64
#value 大小小于等于 hll-sparse-max-bytes 使用稀疏数据结构（sparse），大于hll-sparse-max-bytes 使用稠密的数据结构（dense）。一个比 16000 大的 value 是几乎没用的，建议的 value 大概为 3000。如果对 CPU 要求不高，对空间要求较高的，建议设置到 10000 左右。
hll-sparse-max-bytes 3000
#Redis 将在每 100 毫秒时使用 1 毫秒的 CPU 时间来对 redis 的 hash 表进行重新 hash，可以降低内存的使用。当你的使用场景中，有非常严格的实时性需要，不能够接受 Redis 时不时的对请求有 2 毫秒的延迟的话，把这项配置为 no。如果没有这么严格的实时性要求，可以设置为 yes，以便能够尽可能快的释放内存。
activerehashing yes
##对客户端输出缓冲进行限制可以强迫那些不从服务器读取数据的客户端断开连接，用来强制关闭传输缓慢的客户端。
#对于 normal client，第一个 0 表示取消 hard limit，第二个 0 和第三个 0 表示取消 soft limit，normal client 默认取消限制，因为如果没有寻问，他们是不会接收数据的。
client-output-buffer-limit normal 0 0 0#对于 slave client 和 MONITER client，如果
client-output-buffer 一旦超过 256mb，又或者超过 64mb 持续 60 秒，那么服务器就会立即断开客户端连接。
client-output-buffer-limit slave 256mb 64mb 60#对于 pubsub client，如果
client-output-buffer 一旦超过 32mb，又或者超过 8mb 持续 60 秒，那么服务器就会立即断开客户端连接。
client-output-buffer-limit pubsub 32mb 8mb 60
#redis 执行任务的频率为 1s 除以 hz。hz 10
#在 aof 重写的时候，如果打开了 aof-rewrite-incremental-fsync 开关，系统会每 32MB 执行一次 fsync。这对于把文件写入磁盘是有帮助的，可以避免过大的延迟峰值。
aof-rewrite-incremental-fsync yes
```
## 2 Redis 的数据持久化

### 2.1RDB 方式

对内存中数据库状态进行快照
RDB 方式：将 Redis 在内存中的数据库状态保存到磁盘里面，RDB 文件是一个经过压
缩的二进制文件，通过该文件可以还原生成 RDB 文件时的数据库状态（默认下，持久化到
dump.rdb 文件，并且在 redis 重启后，自动读取其中文件，据悉，通常情况下一千万的字
符串类型键，1GB 的快照文件，同步到内存中的 时间是 20-30 秒）
RDB 的生成方式：

####  1）执行命令手动生成

 有两个 Redis 命令可以用于生成 RDB 文件，一个是 SAVE，另一个是 BGSAVE SAVE
命令会阻塞 Redis 服务器进程，直到 RDB 文件创建完毕为止，在服务器进程阻塞期间，服
务器不能处理任何命令请求，BGSAVE 命令会派生出一个子进程，然后由子进程负责创建
RDB 文件，服务器进程（父进程）继续处理命令请求，创建 RDB 文件结束之前，客户端发
送的 BGSAVE 和 SAVE 命令会被服务器拒绝
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819153422.png)

####  2）通过配置自动生成

 可以设置服务器配置的 save 选项，让服务器每隔一段时间自动执行一次 BGSAVE 命
令，可以通过 save 选项设置多个保存条件，但只要其中任意一个条件被满足，服务器就会
执行 BGSAVE 命令
 例如：
 save 900 1
 save 300 10
 save 60 10000
 那么只要满足以下三个条件中的任意一个，BGSAVE 命令就会被(自动)执行
 服务器在 900 秒之内，对数据库进行了至少 1 次修改(900秒到达之后才会执行这个命令)
 服务器在 300 秒之内，对数据库进行了至少 10 次修改
 服务器在 60 秒之内，对数据库进行了至少 10000 次修改

ps:在哪个目录执行的客户端就默认在哪个文件生成RDB文件(因为配置文件设置默认是./)

### 2.2AOF 方式

AOF 持久化方式在 redis 中默认是关闭的，需要修改配置文件开启该方式。
AOF：把每条命令都写入文件，类似 mysql 的 binlog 日志
AOF 方式：是通过保存 Redis 服务器所**执行的写命令来记录数据库状态的文件**。
AOF 文件刷新的方式，有三种：
 appendfsync **always** - 每提交一个修改命令都调用 fsync 刷新到 AOF 文件，非常非常
慢，但也非常安全(数据安全性,不会出现数据丢失)
 appendfsync **everysec** - 每秒钟都调用 fsync 刷新到 AOF 文件，很快，但可能会丢失
一秒以内的数据
 appendfsync **no** - 依靠 OS 进行刷新，redis 不主动刷新 AOF，这样最快，但安全性就
差
默认并推荐每秒刷新，这样在速度和安全上都做到了兼顾
首先把配置文件里 appendonly的no改成yes
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819160330.png)
AOF 数据恢复方式
服务器在启动时，通过载入和执行 AOF 文件中保存的命令来还原服务器关闭之前的数
据库状态，具体过程：
 载入 AOF 文件
 创建模拟客户端
 从 AOF 文件中读取一条命令
 使用模拟客户端执行命令
 循环读取并执行命令，直到全部完成
 如果同时启用了 RDB 和 AOF 方式，AOF 优先，启动时只加载 AOF 文件恢复数据(但一般只选择其中一种
 ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819161130.png)
 ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819161332.png)

# 五、 安装 Redis 集群

## 1 Redis 集群介绍

Redis3.0 版本之后支持 Cluster。**集群要求集群节点中必须要支持主备模式，也就说集**
**中的主节点(Master)至少要有一个从节点(Slave)**
每一个蓝色的圈都代表着一个 redis 集群中的主节点。它们任何两个节点之间都是相互
连通的。客户端可以与任何一个节点相连接，然后就可以访问集群中的任何一个节点。对其
进行存取和其他操作

### 1.1Redis-Cluster 架构图

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819161540.png)

任意一个客户端可以连接任意一个节点

### 1.2Redis-Cluster 选举:容错

Redis 之间通过互相的 ping-pong 判断是否节点可以连接上。如果有一半以上的节点去
ping 一个节点的时候没有回应，集群就认为这个节点宕机了，然后去连接它的从节点。如
果某个节点和所有从节点全部挂掉，我们集群就进入 fail 状态。还有就是如果有一半以上的
主节点宕机，那么我们集群同样进入 fail 了状态。这就是我们的 redis 的投票机制，具体原
理如下图所示：
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819162220.png)
投票过程是集群中所有 master 参与,如果半数以上 master 节点与 master 节点通信超时
(cluster-node-timeout),认为当前 master 节点挂掉.
什么时候整个集群不可用(cluster_state:fail)?
1) 如果集群任意 master 挂掉,且当前 master 没有 slave。此时集群进入 fail 状态,也可
以理解成集群的 slot 映射[0-16383]不完整时进入 fail 状态。
2) 如果集群超过半数以上 master 挂掉，无论是否有 slave，集群进入 fail 状态.

### 1.3Redis-Cluster 数据存储

当我们的存取的 key 到达的时候，redis 会根据 crc16 的算法得出一个结果，然后把
结果对 16384 求余数，这样每个 key 都会对应一个编号在 0-16383 之间的哈希槽，通
过这个值，去找到对应的插槽所对应的节点，然后直接自动跳转到这个对应的节点上进行存
取操作。
在 Node1 执行 set name kevin
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819162254.png)
1. 使用 CRC16 算法对 key 进行计算，得到一个数字，然后对数字进行取余。
CRC16 : name = 26384
26384%16384 = 10000
2. 查找到包含 10000 插槽的节点，比如是 node2，自动跳转到 node2
3. 在 node2 上执行 set name kevin 命令完成数据的插入
4. 如果在 node1 上执行 get name，先使用 CRC16 算法对 key 进行计算，在使用
    16384 取余，得到插槽的下标，然后跳到拥有该插槽的 node2 中执行 get name 命令，
    并返回结果。

## 2 安装集群

### 2.1需求：

  搭建一个 Redis 的最小集群，使用伪集群方式。
  Redis 中最小的集群三对主从。
  在 192.168.70.145 中安装 6 个 redis 实例。
  如果使用已经使用过的单机版创建集群时，需要删除 dump.rdb 与 apeendonly.aof 文件。
  6 个 redis 实例的端口分配：8001、8002、8003、8004、8005、8006

./redis-cli -p 8001

### 2.2集群步骤：

  redis 集群时需要使用一个 ruby 的脚本来完成集群(在安装集群目录下的src目录下)。

####   第一步 安装 ruby 环境

  命令： yum install ruby

####   第二步 安装 ruby 的包管理器

  命令：yum install rubygems

####   第三步 找到脚本

进入到 redis 的安装目录下的 src 目录下找到到 redis-trib.rb 这个文件 这是集群
  时需要的脚本
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819163259.png)

####   第四步 准备ruby依赖

这个脚本的执行需要依赖于一些其他的 ruby 包 所以我们还要下载一个
  redis-3.0.0.gem
  将这个文件上传到 linux 服务器中

####   第五步 安装ruby 包

  命令：gem install redis-3.0.0.gem
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819165024.png)

####   第六步 启动redis实例

先启动 redis 的 6 个实例
  先在 local 目录下创建一个目录名称为：redis-cluster
  命令：mkdir redis-cluster

####   第七步 拷贝bin

将安装好的 redis 下的 bin 目录拷贝到 redis-cluster 目录下 并起名为 redis01
  命令：进入到 redis 目录下执行：cp -r bin ../redis-cluster/redis01

####   第九不 修改 redis.conf 配置文件

  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819170220.png)
  命令：vim redis.conf
  (1)修改端口：默认的为 6379 将六个 redis 实例的端口改成从 7001-7006 在配置文件
  的 port 属性中。
  (2)修改开启集群 在配置文件中搜索 cluster 找到后 将默认为注释的 cluster-enabled
  yes 去掉注释
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819170151.png)

####   第十步 将这个 redis01 拷贝 6 份到当前这个目录下

  命令：cp -r redis01/ redis02
   cp -r redis01/ redis03
   cp -r redis01/ redis04
   cp -r redis01/ redis05
   cp -r redis01/ redis06

####   第十一步 修改拷贝的这些 redis 的端口

  命令：
  [root@localhost redis-cluster]# vim redis02/redis.conf
  [root@localhost redis-cluster]# vim redis03/redis.conf
  [root@localhost redis-cluster]# vim redis04/redis.conf
  [root@localhost redis-cluster]# vim redis05/redis.conf 
  [root@localhost redis-cluster]# vim redis06/redis.conf
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819170627.png)

####   第十二步 把创建集群的 ruby 脚本复制到 redis-cluster 中

  命令：[root@localhost src]# cp *.rb /usr/local/redis-cluster/
  ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819172305.png)

####   第十二步 创建一个能够批量启动的脚本程序

  命令：vim startall.sh

#### 第十三步 在脚本文件中添加命令

命令：cd redis01
 ./redis.server redis.conf
 cd ..
 cd redis02
 ./redis.server redis.conf
 cd ..
 cd redis03
 ./redis.server redis.conf
 cd ..
 cd redis04
 ./redis.server redis.conf
 cd ..
 cd redis05
 ./redis.server redis.conf
 cd ..
 cd redis06
 ./redis.server redis.conf
 cd ..

#### 第十四步 将批量启动脚本设置为可执行权限

命令:chmod +x startall.sh

#### 第十五步 执行这个批量启动的脚本

命令：[root@localhost redis-cluster]# ./startall.sh

#### 第十六步 查看 redis 是否启动成功

命令：ps aux|grep redis
![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190819173434.png)

#### 第十七步 创建集群

命令： ./redis-trib.rb create --replicas 1 192.168.159.128:8001 192.168.159.128:8002 192.168.159.128:8003 192.168.159.128:8004 192.168.159.128:8005 192.168.159.128:8006
控制台会显示如下信息 输入 yes

### 测试 Redis 集群

测试 Redis 集群：可以连接集群中的任意一个节点进行测试 注意一定要有-c 参数，否则能连上，但是无法操作 redis 集群
命令：[root@localhost redis-cluster]# ./redis01/redis-cli -h 192.168.10.128 -p 7001 -c

### 关闭 Redis 集群

命令：bin/redis-cli -p 7001 shutdown
也可以编写一个批量关闭的脚本
命令：vim shutdown.sh
![1566290286095](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1566290286095.png)

# 六、 使用 JedisAPI 操作 Redis


Jedis 集成了 redis 的一些命令操作，Redis的命令在Jedis里有对应的方法,封装了对 redis 命令的 Java 客户端。

## 1 使用 Jedis 操作 Redis 单机版

**![1566358776557](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1566358776557.png)**




## 1.1创建工程

## 1.2修改 POM 文件添加 Jedis 坐标

4.0.0
com.bjsxt
JedisDemo
0.0.1-SNAPSHOT

redis.clients
jedis
2.9.0



## 1.3测试 Jedis 操作 Redis 单机版

```java
	/**
	 * Jedis单机版测试
	 */
	public static void testJedisSingle() {
		// 创建一个Jedis对象
		Jedis jedis = new Jedis("192.168.159.128", 6379);
		// 调用Jedis的API完成对Redis的操作。在jedis中方法的命名与操作Redis的命令相同
		String result = jedis.set("key1", "Hello");
		System.out.println(result);
		String str = jedis.get("key1");
		System.out.println(str);
		System.out.println("-----------------------------");
		Long l = jedis.hset("user", "username", "kevin3");
		System.out.println(l);
		String hres = jedis.hget("user", "username");
		System.out.println(hres);
		jedis.close();
	}
```

## 1.4测试使用连接池操作 Redis 单机版

![1566369626021](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1566369626021.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190821144150.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190821144205.png)

## 默认连接池配置

```java

	/**
	 * 使用连接池
	 */
	public static void testJedisPool() {
		// 创建连接池
		JedisPool pool = new JedisPool("192.168.159.128", 6379);
		Jedis jedis = pool.getResource();
		String hres = jedis.hget("user", "username");
		System.out.println(hres);
		jedis.close();
	}
```

## 集群

```java
/**
	 * 集群测试
	 * 
	 * @throws Exception
	 * 
	 */
	public static void testJedisCluster() throws Exception {
		// 创建HostAndPort:集群中的的一个节点
		Set<HostAndPort> nodes = new HashSet<>();
		nodes.add(new HostAndPort("192.168.159.128", 6380));
		nodes.add(new HostAndPort("192.168.159.128", 6381));
		nodes.add(new HostAndPort("192.168.159.128", 6382));
		nodes.add(new HostAndPort("192.168.159.128", 6383));
		nodes.add(new HostAndPort("192.168.159.128", 6384));
		nodes.add(new HostAndPort("192.168.159.128",6385));
		// 创建操作集群的jedis对象
		JedisCluster jc = new JedisCluster(nodes);
		jc.set("jedis", "HelloJedis");
		String result = jc.get("jedis");
		System.out.println(result);
		jc.close();
	}
```

# 七、 Spring 整合 Jedis

## 1 整合单机版

### 1.1创建工程

### 1.2修改 POM 文件添加 Jedis 与 Spring 的坐标

```xml
<dependencies>
		<dependency>
			<groupId>redis.clients</groupId>
			<artifactId>jedis</artifactId>
			<version>2.9.0</version>
		</dependency>
		
		<dependency>
		        <groupId>org.springframework</groupId>
				<artifactId>spring-context</artifactId>
				<version>4.1.3.RELEASE</version>
			</dependency>
			<dependency>
				<groupId>org.springframework</groupId>
				<artifactId>spring-beans</artifactId>
				<version>4.1.3.RELEASE</version>
			</dependency>
</dependencies>
```

### 1.3创建 JedisDao 接口与接口实现类

#### DAO

```java
public interface JedisDao {
	public String set(String key,String value);
	public String get(String key);
	public Long hset(String hkey,String key,String value);
	public String hget(String hkey,String key);
}
```

#### DAO实现类(单机版)

```java
public class JedisDaoImplSingle implements JedisDao {
	
	@Autowired
	private JedisPool jedisPool;
	

	@Override
	public String set(String key, String value) {
		Jedis jedis = this.jedisPool.getResource();
		return jedis.set(key, value);
	}

	@Override
	public String get(String key) {
		Jedis jedis = this.jedisPool.getResource();
		return jedis.get(key);
	}

	@Override
	public Long hset(String hkey, String key, String value) {
		Jedis jedis = this.jedisPool.getResource();
		return jedis.hset(hkey, key, value);
	}

	@Override
	public String hget(String hkey, String key) {
		Jedis jedis = this.jedisPool.getResource();
		return jedis.hget(hkey, key);
	}

}
```

### 1.4在 Spring 配置文件中整合 Jedis

```xml
<context:component-scan base-package="com.bjsxt.jedisdao"/>
	<!-- jedisPool的配置 -->
	<bean id="poolconfig" class="redis.clients.jedis.JedisPoolConfig">
	        <!-- 最大连接数 -->
		<property name="maxTotal" value="30" />
		<!-- 最大空闲连接数 -->
		<property name="maxIdle" value="10" />
		<!-- 每次释放连接的最大数目 -->
		<property name="numTestsPerEvictionRun" value="1024" />
		<!-- 释放连接的扫描间隔（毫秒） -->
		<property name="timeBetweenEvictionRunsMillis" value="30000" />
		<!-- 连接最小空闲时间 -->
		<property name="minEvictableIdleTimeMillis" value="1800000" />
		<!-- 连接空闲多久后释放, 当空闲时间>该值 且 空闲连接>最大空闲连接数 时直接释放 -->
		<property name="softMinEvictableIdleTimeMillis" value="10000" />
		<!-- 获取连接时的最大等待毫秒数,小于零:阻塞不确定的时间,默认-1 -->
		<property name="maxWaitMillis" value="1500" />
		<!-- 在获取连接的时候检查有效性, 默认false -->
		<property name="testOnBorrow" value="true" />
		<!-- 在空闲时检查有效性, 默认false -->
		<property name="testWhileIdle" value="true" />
		<!-- 连接耗尽时是否阻塞, false报异常,ture阻塞直到超时, 默认true -->
		<property name="blockWhenExhausted" value="false" />
	</bean>
	<!-- 配置JedidesPool -->
	<bean id="jedisPool" class="redis.clients.jedis.JedisPool">
		<constructor-arg name="poolConfig">
			<ref bean="poolconfig"/>
		</constructor-arg>
		<constructor-arg name="host">
			<value>192.168.159.128</value>
		</constructor-arg>
		<constructor-arg name="port">
			<value>6379</value>
		</constructor-arg>
	</bean>
	<!-- JedisDaoImplSingle -->
 <bean id="jedisDaoImplSingle" class="com.bjsxt.jedisdao.impl.JedisDaoImplSingle"></bean>
 
```

### 1.5测试单机版

```java
public static void testJedisSingle(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext-Jedis.xml");
		JedisDao jd = (JedisDao)ac.getBean("jedisDaoImplSingle");
		String str = jd.set("hello", "Redis");
		System.out.println(str);
		String result = jd.get("hello");
		System.out.println(result);
	}
```

## 2 整合集群版

### 2.1添加 JedisDao 实现类。基于 JedisCluster 的实现

```java
public class JedisDaoImplCluster implements JedisDao {

	@Autowired
	private JedisCluster jedisCluster;
	
	@Override
	public String set(String key, String value) {
		return this.jedisCluster.set(key, value);
	}

	@Override
	public String get(String key) {
		return this.jedisCluster.get(key);
	}

	@Override
	public Long hset(String hkey, String key, String value) {
		return this.jedisCluster.hset(hkey, key, value);
	}

	@Override
	public String hget(String hkey, String key) {
		return this.jedisCluster.hget(hkey, key);
	}

}
```

### 2.2在 Spring 配置文件中整合 JedisCluster

```xml
<context:component-scan base-package="com.bjsxt.jedisdao"/>
	<!-- jedisPool的配置 -->
	<bean id="poolconfig" class="redis.clients.jedis.JedisPoolConfig">
	        <!-- 最大连接数 -->
		<property name="maxTotal" value="30" />
		<!-- 最大空闲连接数 -->
		<property name="maxIdle" value="10" />
		<!-- 每次释放连接的最大数目 -->
		<property name="numTestsPerEvictionRun" value="1024" />
		<!-- 释放连接的扫描间隔（毫秒） -->
		<property name="timeBetweenEvictionRunsMillis" value="30000" />
		<!-- 连接最小空闲时间 -->
		<property name="minEvictableIdleTimeMillis" value="1800000" />
		<!-- 连接空闲多久后释放, 当空闲时间>该值 且 空闲连接>最大空闲连接数 时直接释放 -->
		<property name="softMinEvictableIdleTimeMillis" value="10000" />
		<!-- 获取连接时的最大等待毫秒数,小于零:阻塞不确定的时间,默认-1 -->
		<property name="maxWaitMillis" value="1500" />
		<!-- 在获取连接的时候检查有效性, 默认false -->
		<property name="testOnBorrow" value="true" />
		<!-- 在空闲时检查有效性, 默认false -->
		<property name="testWhileIdle" value="true" />
		<!-- 连接耗尽时是否阻塞, false报异常,ture阻塞直到超时, 默认true -->
		<property name="blockWhenExhausted" value="false" />
	</bean>
	<!-- JedislCluster -->
	<bean id="jedisCluster" class="redis.clients.jedis.JedisCluster">
		<constructor-arg name="nodes">
			<set>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host">
					 <value>192.168.159.128</value>
					</constructor-arg>
					<constructor-arg name="port">
					  <value>6380</value>
					</constructor-arg>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host">
					 <value>192.168.159.128</value>
					</constructor-arg>
					<constructor-arg name="port">
					  <value>6381</value>
					</constructor-arg>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host">
					 <value>192.168.159.128</value>
					</constructor-arg>
					<constructor-arg name="port">
					  <value>6382</value>
					</constructor-arg>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host">
					 <value>192.168.159.128</value>
					</constructor-arg>
					<constructor-arg name="port">
					  <value>6383</value>
					</constructor-arg>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host">
					 <value>192.168.159.128</value>
					</constructor-arg>
					<constructor-arg name="port">
					  <value>6384</value>
					</constructor-arg>
				</bean>
				<bean class="redis.clients.jedis.HostAndPort">
					<constructor-arg name="host">
					 <value>192.168.159.128</value>
					</constructor-arg>
					<constructor-arg name="port">
					  <value>6385</value>
					</constructor-arg>
				</bean>
			</set>
		</constructor-arg>
		<constructor-arg name="poolConfig">
			<ref bean="poolconfig"/>
		</constructor-arg>
	</bean>
	
	<!-- JedisDaoImplCluster -->
	<bean id="jedisDaoImplCluster" class="com.bjsxt.jedisdao.impl.JedisDaoImplCluster"></bean>
```

### 2.3测试集群版

```java
public static void testJedisCluster(){
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext-Jedis.xml");
		JedisDao jd = (JedisDao)ac.getBean("jedisDaoImplCluster");
		String str = jd.set("bjsxt", "baizhan");
		System.out.println(str);
		String result = jd.get("bjsxt");
		System.out.println(result);
	}
```

# 八、 Redis Desktop Manager 的使用

打开,一路下一步即可

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190821160325.png)

只能操作单机版

##   1 创建与 Redis 的链接

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190821160531.png)

黑色变成红色表示连接成功

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190821160851.png)

hash

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190821160905.png)

删除了变灰了右键reload一下就没有了