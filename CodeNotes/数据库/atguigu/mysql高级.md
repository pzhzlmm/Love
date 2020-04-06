# 第1章MySQL简介***

## 1.1 什么是Mysql

1） MySQL是一个关系型数据库管理系统，由瑞典MySQL AB公司开发，目前属于Oracle公司。

2） Mysql是开源的，可以定制的，采用了GPL协议，你可以修改源码来开发自己的Mysql系统。

3） MySQL使用标准的SQL数据语言形式。

4） Mysql可以允许于多个系统上，并且支持多种语言。这些编程语言包括C、C++、Python、Java、Perl、PHP、Eiffel、Ruby和Tcl等。

5） MySQL支持大型数据库，支持5000万条记录的数据仓库，32位系统表文件最大可支持4GB，64位系统支持最大的表文件为8TB。

## 1.2 Mysql高手是怎样练成的

1） 数据库内部结构和原理

2） 数据库建模优化

3） 数据库索引建立 

4） SQL语句优化 

5） SQL编程(自定义函数、存储过程、触发器、定时任务) 

6） mysql服务器的安装配置

7） 数据库的性能监控分析与系统优化 

8） 各种参数常量设定

9） 主从复制

10） 分布式架构搭建、垂直切割和水平切割 

11） 数据迁移   

12） 容灾备份和恢复  

13） shell或python等脚本语言开发

14） 对开源数据库进行二次开发

## 1.3 整体架构图

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813043221-e3f49791-8d22-43bd-9280-4994907f0164.png)

和其它数据库相比，MySQL有点与众不同，它的架构可以在多种不同场景中应用并发挥良好作用。主要体现在存储引擎的架构上，插件式的存储引擎架构将查询处理和其它的系统任务以及数据的存储提取相分离。这种架构可以根据业务的需求和实际需要选择合适的存储引擎。

（1）连接层

 最上层是一些客户端和连接服务，包含本地sock通信和大多数基于客户端/服务端工具实现的类似于tcp/ip的通信。主要完成一些类似于连接处理、授权认证、及相关的安全方案。在该层上引入了线程池的概念，为通过认证安全接入的客户端提供线程。同样在该层上可以实现基于SSL的安全链接。服务器也会为安全接入的每个客户端验证它所具有的操作权限。

 

（2）服务层

| Management Serveices & Utilities | 系统管理和控制工具                                           |
| -------------------------------- | ------------------------------------------------------------ |
| SQL Interface:                   | SQL接口。接受用户的SQL命令，并且返回用户需要查询的结果。比如select from就是调用SQL Interface |
| Parser                           | 解析器。 SQL命令传递到解析器的时候会被解析器验证和解析       |
| Optimizer                        | 查询优化器。 SQL语句在查询之前会使用查询优化器对查询进行优化，比如有where条件时，优化器来决定先投影还是先过滤。 |
| Cache和Buffer                    | 查询缓存。如果查询缓存有命中的查询结果，查询语句就可以直接去查询缓存中取数据。这个缓存机制是由一系列小缓存组成的。比如表缓存，记录缓存，key缓存，权限缓存等 |

 

（3）引擎层

存储引擎层，存储引擎真正的负责了MySQL中数据的存储和提取，服务器通过API与存储引擎进行通信。不同的存储引擎具有的功能不同，这样我们可以根据自己的实际需要进行选取。

（4）存储层

 数据存储层，主要是将数据存储在运行于裸设备的文件系统之上，并完成与存储引擎的交互。

# 第2章MySQL安装及其他操作***

## 2.1在Linux上安装MySQL

### 2.1.1 MySQL官网

​    MySQL官网下载地址

http://dev.mysql.com/downloads/mysql/

MySQL搜狐镜像下载地址

http://mirrors.sohu.com/mysql/MySQL-5.7/

### 2.1.2 MySQL安装

（1）检查当前系统是否安装过Mysql, 需要说明的是CentOS7默认已安装mariadb(MySQL源代码的一个分支，MySQL的另外一个衍生版本) ，因此在CentOS6中要检查mysql，而CentOS7要检查mariadb

[root@hadoop102 ~]$ rpm -qa|grep mariadb

mariadb-libs-5.5.56-2.el7.x86_64 //如果存在通过如下命令卸载

[root@hadoop102 ~]$ rpm -e --nodeps mariadb-libs  //用此命令卸载mariadb

（2）将MySQL安装包拷贝到/opt/software目录下

  [root@hadoop102 software]# ll

总用量 528384

-rw-r--r--. 1 root root 609556480 3月 21 15:41 mysql-5.7.28-1.el7.x86_64.rpm-bundle.tar

 

（3）解压MySQL安装包

[root@hadoop102 software]# mysql-5.7.28-1.el7.x86_64.rpm-bundle.tar

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813043438-38d198ba-e979-48fc-91d6-bb491c1cfbda.png)

（4）在安装目录下执行rpm安装

[root@hadoop102 software]$ rpm -ivh mysql-community-common-5.7.28-1.el7.x86_64.rpm

[root@hadoop102 software]$ rpm -ivh mysql-community-libs-5.7.28-1.el7.x86_64.rpm

[root@hadoop102 software]$ rpm -ivh mysql-community-client-5.7.28-1.el7.x86_64.rpm

[root@hadoop102 software]$ rpm -ivh mysql-community-server-5.7.28-1.el7.x86_64.rpm

​     注意:按照顺序依次执行

（5）删除/etc/my.cnf文件中datadir指向的目录下的所有内容:

 查看datadir的值：

[mysqld]

datadir=/var/lib/mysql

 删除/var/lib/mysql目录下的所有内容:

[root@hadoop102 mysql]# pwd

/var/lib/mysql

[root@hadoop102 mysql]# rm -rf *  //注意执行命令的位置

（6）初始化数据库

[root@hadoop102 opt]$ mysqld --initialize --user=mysql

（7）查看临时生成的root用户的密码

[root@hadoop102 opt]$ cat /var/log/mysqld.log

​    ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813043633-a294a6f5-da12-46c3-b824-d57181520f57.png) 

（8）启动MySQL服务

[root@hadoop102 opt]$ service mysqld start

（9）登录MySQL数据库

[root@hadoop102 opt]$ mysql -uroot -p

Enter password:  输入临时生成的密码

 

 登录成功.

（10）必须先修改root用户的密码,否则会报错

mysql> set password = password("新密码")

### 2.1.3 Mysql的安装位置

| 参数         | 路径                       | 解释                         | 备注                       |
| ------------ | -------------------------- | ---------------------------- | -------------------------- |
| --datadir    | /var/lib/mysql/            | mysql数据库文件的存放路径    |                            |
| --basedir    | /usr/bin                   | 相关命令目录                 | mysqladmin mysqldump等命令 |
| --plugin-dir | /usr/lib64/mysql/plugin    | mysql插件存放路径            |                            |
| --log-error  | /var/log/mysqld.log        | mysql错误日志路径            |                            |
| --pid-file   | /var/run/mysqld/mysqld.pid | 进程pid文件                  |                            |
| --socket     | /var/lib/mysql/mysql.sock  | 本地连接时用的unix套接字文件 |                            |
|              | /usr/share/mysql           | 配置文件目录                 | mysql脚本及配置文件        |
|              | /etc/init.d/mysql          | 服务启停相关脚本             |                            |

 

### 2.1.4 MySQL服务的自启动

（1）Mysql服务是开机自动启动

[root@hadoop102 ~]$ systemctl list-unit-files | grep mysqld.service

mysqld.service                enabled

（2）如果要取消开机自启动，则输入命令ntsysv

[root@hadoop102 ~]$ ntsysv

出现以下界面：

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813043918-de51bfd1-0f14-4fae-8254-be30b746244f.png)

使用空格键取消选中，然后按TAB确定！

或者

[root@hadoop100 mysql]# systemctl disable mysqld.service

Removed symlink /etc/systemd/system/multi-user.target.wants/mysqld.service.

 

[root@hadoop100 mysql]# systemctl list-unit-files | grep mysqld.service

mysqld.service                disabled

 

### 2.1.5 修改字符集

（1） 常用命令

| SQL语句                                         | 描述                              | 备注                                       |
| ----------------------------------------------- | --------------------------------- | ------------------------------------------ |
| show databases                                  | 列出所有数据库                    |                                            |
| create database 库名                            | 创建一个数据库                    |                                            |
| create database 库名 character set utf8         | 创建数据库，顺便执行字符集为utf-8 |                                            |
| show create database 库名                       | 查看数据库的字符集                |                                            |
| show variables like ‘%char%’                    | 查询所有跟字符集相关的信息        |                                            |
| set [字符集属性]=utf8                           | 设置相应的属性为utf8              | 只是临时修改，当前有效。服务重启后，失效。 |
| alter database 库名character set 'utf8'         | 修改数据库的字符集                |                                            |
| alter table 表名convert to character set 'utf8' | 修改表的字符集                    |                                            |

 

（2）案例

mysql>CREATE database mydb;

mysql>use mydb;

mysql>CREATE table mytbl(id int,name varchar(50));

mysql>insert into mytbl(id,name) values (1001,'jack');

mysql>insert into mytbl(id,name) values (1002,'张三');

ERROR 1366 (HY000): Incorrect string value: '\xE5\xBC\xA0\xE4\xB8\x89' for column 'name' at row 1

​     Error原因: 当前数据库的编码不支持中文。

（3）查看默认的编码字符集

mysql>show create database mydb;

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044034-3d5778be-cba1-4a49-8b3f-0f0064643093.png)

mysql>show create table mytbl;

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044180-56824e09-2821-4e74-a81b-9944b34e755a.png)

mysql>show variables like '%char%'

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044311-f941b7f5-d5bd-4885-8f4b-0b5ab6b9fa1a.png)

（4）永久修改默认的编码字符集

 [root@hadoop102 ~]$ vim /etc/my.cnf

\#添加如下配置

[client]

default-character-set=utf8

[mysqld]

character_set_server=utf8

collation-server=utf8_general_ci

[mysql]

default-character-set=utf8

​    （5）重新启动MySQL服务

[root@hadoop102 ~]# service mysqld restart

停止 mysqld：                       [确定]

正在启动 mysqld：                     [确定] 

再次查看：

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044451-e0b7bcd8-3612-4d0f-8974-5a18929ec34e.png)

 注意：已经创建的数据库的设定不会发生变化，参数修改只对新建的数据库有效！

（6）修改已有库和表的编码

mysql> alter database mydb character set 'utf8';

Query OK, 1 row affected (0.01 sec)

 

mysql> alter table mytbl convert to character set 'utf8';

Query OK, 1 row affected (0.09 sec)

Records: 1 Duplicates: 0 Warnings: 0

 

mysql> show create database mydb;

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044659-b79a4841-7fd7-45a7-9ad4-33b32a8dba2e.png)

mysql> show create table mytbl;

​     ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044828-80760cfa-51ef-4c10-9e6a-500d609c6831.png)

（7）再次插入中文数据

mysql> insert into mytbl (id, name) values ("1002","张三");

mysql> select * from mytbl;

+------+----------+

| id  | name   |`

+------+----------+

| 1001 | zhangsan |

| 1002 | 张三   |

+------+----------+

 

## 2.2 MySQL的一些杂项配置

### 2.2.1 设置大小写不敏感

（1）查看大小写是否敏感

mysql> show variables like '%lower_case_table_names%'

提示：windows系统默认大小写不敏感，但是linux系统是大小写敏感的

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813044953-31574741-f14d-4c18-aa2e-641862b477a2.png)

（2）设置大小写不敏感

[root@hadoop102 ~]$ vim /etc/my.cnf

\#追加如下内容，然后重启服务

[mysqld]

lower_case_table_names = 1

\# 0      大小写敏感

\# 1      大小写不敏感

\# 2      创建的表和DB依据语句上格式存放，凡是查找都是转换为小写进行

注意：如果要设置属性为大小写不敏感，要在重启数据库实例之前就需要将原来的数据库和表转换为小写，否则将找不到数据库名。在进行数据库参数设置之前，需要掌握这个参数带来的影响，切不可盲目设置。

### 2.2.2 sql_mode

  sql_mode定义了对Mysql中sql语句语法的校验规则！

sql_mode是个很容易被忽视的变量，如果设置为空值（非严格模式），在这种情况下是可以允许一些非法操作的，比如允许一些非法数据的插入。在生产环境必须将这个值设置为严格模式，所以开发、测试环境的数据库也必须要设置，这样在开发测试阶段就可以发现问题。5.7以后默认都是严格模式了

（1） sql_mode常用的值

| ONLY_FULL_GROUP_BY         | 对于GROUP BY聚合操作，如果在SELECT中的列，没有在GROUP BY中出现，那么这个SQL是不合法的，因为列不在GROUP BY从句中 |
| -------------------------- | ------------------------------------------------------------ |
| NO_AUTO_VALUE_ON_ZERO      | 该值影响自增长列的插入。默认设置下，插入0或NULL代表生成下一个自增长值。如果用户 希望插入的值为0，而该列又是自增长的，那么这个选项就有用了 |
| STRICT_TRANS_TABLES        | 在该模式下，如果一个值不能插入到一个事务表中，则中断当前的操作，对非事务表不做限制 |
| NO_ZERO_IN_DATE            | 在严格模式下，不允许日期和月份为零                           |
| NO_ZERO_DATE               | 设置该值，mysql数据库不允许插入零日期，插入零日期会抛出错误而不是警告 |
| ERROR_FOR_DIVISION_BY_ZERO | 在INSERT或UPDATE过程中，如果数据被零除，则产生错误而非警告。如 果未给出该模式，那么数据被零除时MySQL返回NULL |
| NO_AUTO_CREATE_USER        | 禁止GRANT创建密码为空的用户                                  |
| NO_ENGINE_SUBSTITUTION     | 如果需要的存储引擎被禁用或未编译，那么抛出错误。不设置此值时，用默认的存储引擎替代，并抛出一个异常 |
| PIPES_AS_CONCAT            | 将"\|\|"视为字符串的连接操作符而非或运算符，这和Oracle数据库是一样的，也和字符串的拼接函数Concat相类似 |
| ANSI_QUOTES                | 启用ANSI_QUOTES后，不能用双引号来引用字符串，因为它被解释为识别符 |
| ORACLE                     | 设置等同于PIPES_AS_CONCAT, ANSI_QUOTES, IGNORE_SPACE, NO_KEY_OPTIONS, NO_TABLE_OPTIONS, NO_FIELD_OPTIONS, NO_AUTO_CREATE_USER |

（2） 查看当前的sql_mode

 mysql> select @@sql_mode;

（3） 临时修改 sql_mode

mysql> set @@sql_mode='';

（4） 永久修改，需要在配置文件my.cnf中修改(一般不会这么做)

[root@hadoop102 ~]$ vim /etc/my.cnf

\#添加下列配置，然后重启mysql即可

[mysqld]

sql_mode=''

（5） sql_mode的影响案例：group by 查询语法错误！

CREATE TABLE mytbl2 (id INT,NAME VARCHAR(200),age INT,dept INT);

INSERT INTO mytbl2 VALUES(1,'zhang3',33,101);

INSERT INTO mytbl2 VALUES(2,'li4',34,101);

INSERT INTO mytbl2 VALUES(3,'wang5',34,102);

INSERT INTO mytbl2 VALUES(4,'zhao6',34,102);

INSERT INTO mytbl2 VALUES(5,'tian7',36,102);

 

查询每个dept中年龄最大的人：

错误结果：

SELECT NAME,dept,MAX(age) FROM mytbl2 GROUP BY dept;(select出现问题,仍然会把结果返回回来了)

 组标识:标识你是哪个组的,一般即分组字段,分组之后不能出现非

分组:group by以后,select后面只能跟组标识及聚合函数(组函数)

非严格不会报错,严格模式会报错: Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'mydb.mytbl2.NAME' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by

正确结果：

SELECT id,name,ab.dept,ab.maxage FROM mytbl2 m INNER JOIN(SELECT dept,MAX(age)maxage FROM mytbl2 GROUP BY dept)ab ON ab.dept=m.dept AND m.age=ab.maxage;

![image-20200406091637576](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200406091637576.png)

## 2.3 MySQL的用户管理

（1）MySQL的用户管理在 mysql库中的user表中

   需要了解的列: Host,User, authentication_string等， 可通过 desc user 查看user表结构

（1）相关命令

| 命令                                                         | 描述                                                         | 备注                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| create user zhang3 identified by '123123';                   | 创建名称为zhang3的用户，密码设为123123；                     |                                                              |
| select host,user,password,select_priv,insert_priv,drop_priv from mysql.user; | 查看用户和权限的相关信息                                     |                                                              |
| set password =password('123456')                             | 修改当前用户的密码                                           |                                                              |
| update mysql.user set authentication_string=password('123456') where user='li4'; | 修改其他用户的密码注意:mysql 5.7 通过authentication_string表示密码列 | 所有通过user表的修改，必须用flush privileges;命令才能生效    |
| update mysql.user set user='li4' where user='wang5';         | 修改用户名                                                   | 所有通过user表的修改，必须用flush privileges;命令才能生效    |
| drop user li4                                                | 删除用户                                                     | 不要通过delete from user u where user='li4' 进行删除，系统会有残留信息保留。 |

 

（2） 示例说明

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045095-a7624ee7-be16-4e33-bb36-e3bc010f3134.png)

**host** : 表示连接类型

​    %：表示所有远程通过 TCP方式的连接

​    IP地址：如 (192.168.1.2,127.0.0.1) 通过制定ip地址进行的TCP方式的连接

​     机器名：通过制定i网络中的机器名进行的TCP方式的连接

​    ::1：IPv6的本地ip地址等同于IPv4的 127.0.0.1

​    localhost：本地方式通过命令行方式的连接,比如mysql -u xxx -p 123xxx 方式的连接

   **user**: 表示用户名

​     同一用户通过不同方式连接的权限是不一样的。

   **password**: 密码

​     所有密码串通过password(明文字符串) 生成的密文字符串。

加密算法为MYSQLSHA1 ，不可逆 。

​    mysql 5.7 的密码保存到 authentication_string 字段中不再使用password 字段。

   **select_priv , insert_priv**等 :

​    该用户所拥有的权限。

（3）通过远程工具访问MySQL

​     当前root用户对应的host值为localhost，意味着只允许本机连接

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045224-5fa3a4ee-0e5f-46e8-b8de-287f4004666e.png)

   需要将host的值修改为%，表示允许所有远程通过 TCP方式的连接

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045349-a735b1c6-653b-4163-8b8d-2e7a56d3a444.png)

​    通过远程工具测试:

  ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045509-08204491-843e-4134-8564-225e7c8dde21.png)

​     

## 2.4 MySQL的权限管理

### 2.4.1 授予权限

| 命令                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| grant 权限1,权限2,…权限n  on 数据库名称.表名称 to 用户名@用户地址 identified by ‘连接口令’ | 该权限如果发现没有该用户，则会直接新建一个用户。示例：grant select,insert,delete,drop on atguigudb.* to li4@localhost ;给li4用户用本地命令行方式下，授予atguigudb这个库下的所有表的插删改查的权限。 |
| grant all privileges on *.* to joe@'%' identified by '123';  | 授予通过网络方式登录的的joe用户 ，对所有库所有表的全部权限，密码设为123. |

### 2.4.2 收回权限

| 命令                                                         | 描述                                | 备注 |
| ------------------------------------------------------------ | ----------------------------------- | ---- |
| show grants                                                  | 查看当前用户权限                    |      |
| revoke [权限1,权限2,…权限n] on库名.表名 from 用户名@用户地址 ; | 收回权限命令                        |      |
| REVOKE ALL PRIVILEGES ON mysql.* FROM joe@localhost;         | 收回全库全表的所有权限              |      |
| REVOKE select,insert,update,delete ON mysql.* FROM joe@localhost; | 收回mysql库下的所有表的插删改查权限 |      |

提示：权限收回后，必须用户重新登录后，才能生效。

## 2.5 查看sql的执行周期

（1）查看profile是否开启

mysql> show variables like '%profiling%';

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045631-dd245b1d-0264-499c-bc49-53aa379d8659.png)

（2）开启profiling

mysql> set profiling=1;

 

（3）使用profile,可以查看最近的几次查询。

mysql> show profiles;

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045732-54e71a23-51f2-416f-8ee3-a2685899a574.png)

（4）根据Query_ID,查看sql的具体执行步骤

mysql> show profile cpu,block io for query 2;

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045873-5502f781-c451-42f1-ac53-170c9abd4901.png)

（5）大致的查询流程

mysql客户端通过协议与mysql服务器建连接，发送查询语句，先检查查询缓存，如果命中，直接返回结果，否则进行语句解析,也就是说，在解析查询之前，服务器会先访问查询缓存(query cache)——它存储SELECT语句以及相应的查询结果集。如果某个查询结果已经位于缓存中，服务器就不会再对查询进行解析、优化、以及执行。它仅仅将缓存中的结果返回给用户即可，这将大大提高系统的性能。

语法解析器和预处理：首先mysql通过关键字将SQL语句进行解析，并生成一颗对应的“解析树”。mysql解析器将使用mysql语法规则验证和解析查询；预处理器则根据一些mysql规则进一步检查解析数是否合法。

查询优化器当解析树被认为是合法的了，并且由优化器将其转化成Explian。一条查询可以有很多种执行方式，最后都返回相同的结果。优化器的作用就是找到这其中最好的Explian。。

然后，mysql默认使用的BTREE索引，并且一个大致方向是:无论怎么折腾sql，至少在目前来说，mysql最多只用到表中的一个索引。

（6）SQL的书写顺序

SELECT- DISTINCT- FROM- JOIN ON- WHERE- GROUP BY- HIVING- ORDER BY- LIMIT

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813045999-55920345-c142-408e-9a8b-28c42f77861d.png)

（7）真正执行的顺序：

随着Mysql版本的更新换代，其优化器也在不断的升级，优化器会分析不同执行顺序产生的性能消耗不同而动态调整执行顺序。下面是经常出现的查询顺序：

FROM- ON- JOIN- WHERE- GROUP BY- HAVING- SELECT- DISTINCT- ORDER BY- LIMIT

## 2.6 查询缓存

### 2.6.1 查看查询缓存相关的设置

1)   查看缓存相关的设置

mysql> show variables like "%query_cache%";

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046113-2d426afc-fc69-4de5-b634-d98c3ae987ea.png)

2)   相关参数解释

l query_cache_limit： 超过此大小的查询将不再缓存。

l query_cache_min_res_unit：缓存块的最小值。

l query_cache_size：缓存大小值

l query_cache_type：缓存类型，决定缓存什么样的查询。

Ø 0  表示关闭查询缓存OFF

Ø 1 表示开启查询缓存ON

Ø 2 表示SQL语句中有SQL_CACHE关键词时才缓存..

  例如: select  SQL_CACHE  name  from  t_user where id = 1001;

l query_cache_wlock_invalidate：表示当有其它客户端正在对MyISAM表进行写操作时，读请求是要等write lock释放资源后再查询还是允许直接从query cache中读取结果

### 2.6.2 开启MySQL的查询缓存

1)   在MySQL的配置文件中 /etc/my.cnf中[mysqld] 节点下添加如下配置:

[mysqld]

query_cache_type = 1

2)   重启MySQL服务

[root@hadoop102 ~]# service mysqld restart

停止 mysqld：                       [确定]

正在启动 mysqld：                     [确定]

### 2.6.3 使用查询缓存

1)   开启profiling

mysql> set profiling =1 ;

2)   在MySQL中执行两条相同的SQL

mysql> select * from mytbl2;

mysql> select * from mytbl2;

3)   查看最近执行的SQL

mysql> show profiles;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046236-ce8cb7c8-e135-4af0-a1cf-4cf457f2d107.png)

4)   查看两条相同SQL的执行周期

l  查看第一次执行的SQL

mysql> show profile cpu,block io for query 1 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046364-037e654b-f805-458b-9432-7d8db88f4b7c.png)

l 查看第二次执行的SQL

mysql> show profile cpu,block io for query ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046492-6b46a8bc-d8d1-4bc3-970c-7de03e4caba6.png)

可以看出第二次执行的SQL结果是从缓存中查询.

### 2.6.4 查询不使用缓存

1)   如果在开启了查询缓存的情况, 某条SQL执行时不想使用缓存，可在SQL中显示执行

SQL_NO_CACHE

mysql> select SQL_NO_CACHE * from mytbl2;

## 2.7 MySQL存储引擎

### 2.7.1  查看存储引擎

1)   查看支持的存储引擎

mysql> show engines;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046608-716d8af4-d6c1-4c6e-ad72-8e11791112aa.png)

2)   查看当前MySQL默认的存储引擎

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046740-b045ecf8-6d28-4236-8359-3ed184fadbd9.png)

### 2.7.2 各个存储引擎介绍

1)   InnoDB存储引擎

InnoDB是MySQL的默认事务型引擎，它被设计用来处理大量的短期(short-lived)事务。除非有非常特别的原因需要使用其他的存储引擎，否则应该优先考虑InnoDB引擎。

2)   MyISAM存储引擎

MyISAM提供了大量的特性，包括全文索引、压缩、空间函数(GIS)等，但MyISAM不支持事务和行级锁，有一个毫无疑问的缺陷就是崩溃后无法安全恢复。

3)   Archive引擎

Archive档案存储引擎只支持INSERT和SELECT操作，在MySQL5.1之前不支持索引。

Archive表适合日志和数据采集类应用。

根据英文的测试结论来看，Archive表比MyISAM表要小大约75%，比支持事务处理的InnoDB表小大约83%。

4)   Blackhole引擎

Blackhole引擎没有实现任何存储机制，它会丢弃所有插入的数据，不做任何保存。但服务器会记录Blackhole表的日志，所以可以用于复制数据到备库，或者简单地记录到日志。但这种应用方式会碰到很多问题，因此并不推荐。

5)   CSV引擎

CSV引擎可以将普通的CSV文件作为MySQL的表来处理，但不支持索引。

CSV引擎可以作为一种数据交换的机制，非常有用。

CSV存储的数据直接可以在操作系统里，用文本编辑器，或者excel读取。

6)   Memory引擎

如果需要快速地访问数据，并且这些数据不会被修改，重启以后丢失也没有关系，那么使用Memory表是非常有用。Memory表至少比MyISAM表要快一个数量级。

7)   Federated引擎

Federated引擎是访问其他MySQL服务器的一个代理，尽管该引擎看起来提供了一种很好的跨服务器的灵活性，但也经常带来问题，因此默认是禁用的。

### 2.7.3  MyISAM和InnoDB引擎

| 对比项         | MyISAM                                                   | InnoDB                                                       |
| -------------- | -------------------------------------------------------- | ------------------------------------------------------------ |
| 外键           | 不支持                                                   | 支持                                                         |
| 事务           | 不支持                                                   | 支持                                                         |
| 行表锁         | 表锁，即使操作一条记录也会锁住整个表，不适合高并发的操作 | 行锁,操作时只锁某一行，不对其它行有影响，适合高并发的操作    |
| 缓存           | 只缓存索引，不缓存真实数据                               | 不仅缓存索引还要缓存真实数据，对内存要求较高，而且内存大小对性能有决定性的影响 |
| 关注点         | 读性能                                                   | 并发写、事务、资源                                           |
| 默认安装       | Y                                                        | Y                                                            |
| 默认使用       | N                                                        | Y                                                            |
| 自带系统表使用 | Y                                                        | N                                                            |

 

# 第3章SQL预热***

## 3.1 常见的Join查询图

用内外根据查询结果来判断,内只有交集,左外(=b右外链a),区分主从表匹配表

内连接: A inner join B on  

内连接的结果集: 交集

外连接:  A  left outer join B on      A   right outer join  B on

​     主表(驱动表)   从表(匹配表)

外连接确定主从表: 左外连左主右从， 右外连右主左从！

外连接的结果集: 主表取所有，从表取匹配. 主表与从表未匹配的数据通过null来补全.

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813046932-bdb10098-25a3-4e66-8a8f-12e41969aea8.jpeg)

 

## 3.2 Join示例

1)   建表语句

CREATE TABLE `t_dept` (

 `id` INT(11) NOT NULL AUTO_INCREMENT,

 `deptName` VARCHAR(30) DEFAULT NULL,

 `address` VARCHAR(40) DEFAULT NULL,

 PRIMARY KEY (`id`)

) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

 

CREATE TABLE `t_emp` (

 `id` INT(11) NOT NULL AUTO_INCREMENT,

 `name` VARCHAR(20) DEFAULT NULL,

 `age` INT(3) DEFAULT NULL,

 `deptId` INT(11) DEFAULT NULL,

 empno int not null,

 PRIMARY KEY (`id`),

 KEY `idx_dept_id` (`deptId`)

 \#CONSTRAINT `fk_dept_id` FOREIGN KEY (`deptId`) REFERENCES `t_dept` (`id`)

) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

 

INSERT INTO t_dept(deptName,address) VALUES('华山','华山');

INSERT INTO t_dept(deptName,address) VALUES('丐帮','洛阳');

INSERT INTO t_dept(deptName,address) VALUES('峨眉','峨眉山');

INSERT INTO t_dept(deptName,address) VALUES('武当','武当山');

INSERT INTO t_dept(deptName,address) VALUES('明教','光明顶');

INSERT INTO t_dept(deptName,address) VALUES('少林','少林寺');

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('风清扬',90,1,100001);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('岳不群',50,1,100002);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('令狐冲',24,1,100003);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('洪七公',70,2,100004);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('乔峰',35,2,100005);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('灭绝师太',70,3,100006);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('周芷若',20,3,100007);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('张三丰',100,4,100008);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('张无忌',25,5,100009);

INSERT INTO t_emp(NAME,age,deptId,empno) VALUES('韦小宝',18,null,100010);

 

2)   所有有门派人员的信息（要求显示门派名称）

SELECT e.`name`,d.`deptName` FROM t_emp e INNER JOIN t_dept d ON e.`deptId`=d.`id`;

3)    列出所有人员及其门派信息

SELECT e.`name`,d.`deptName` FROM t_emp e LEFT JOIN t_dept d ON e.`deptId`=d.`id`;

4)    列出所有门派

SELECT * FROM t_dept;

5)    所有无门派人士

SELECT * FROM t_emp WHERE deptId IS NULL;

6)    所有无人门派

SELECT d.* FROM t_dept d LEFT JOIN t_emp e ON d.`id`=e.`deptId` WHERE e.`deptId` IS NULL;

7)    所有人员和门派的对应关系

SELECT * FROM t_emp e LEFT JOIN t_dept d ON e.`deptId`=d.`id`

UNION

SELECT * FROM t_emp e RIGHT JOIN t_dept d ON e.`deptId`=d.`id`;

8)    所有没有入门派的人员和没人入的门派

SELECT * FROM t_emp e LEFT JOIN t_dept d ON e.`deptId`=d.`id` WHERE e.deptId IS NULL

UNION

SELECT * FROM t_dept d LEFT JOIN t_emp e ON d.`id`=e.`deptId` WHERE e.`deptId` IS NULL;

9)    添加CEO字段

ALTER TABLE `t_dept`

add CEO INT(11) ;

update t_dept set CEO=2 where id=1;

update t_dept set CEO=4 where id=2;

update t_dept set CEO=6 where id=3;

update t_dept set CEO=8 where id=4;

update t_dept set CEO=9 where id=5;

10)  求各个门派对应的掌门人名称

SELECT d.deptName,e.name FROM t_dept d LEFT JOIN t_emp e ON d.ceo=e.id

11)  求所有当上掌门人的平均年龄

SELECT AVG(e.age) FROM t_dept d LEFT JOIN t_emp e ON d.ceo=e.id

12)  求所有人物对应的掌门名称

SELECT ed.name '人物',c.name '掌门'

FROM (SELECT e.name,d.ceo from t_emp e LEFT JOIN t_dept d on e.deptid=d.id) ed

LEFT JOIN t_emp c on ed.ceo= c.id;

 

SELECT e.name '人物',tmp.name '掌门'

FROM t_emp e LEFT JOIN (SELECT d.id did,e.name FROM t_dept d LEFT JOIN t_emp e ON d.ceo=e.id)tmp

ON e.deptId=tmp.did;

 

SELECT e1.name '人物',e2.name '掌门'

FROM t_emp e1

LEFT JOIN t_dept d on e1.deptid = d.id

LEFT JOIN t_emp e2 on d.ceo = e2.id ;

 

SELECT e2.name '人物',

(SELECT e1.name FROM t_emp e1 where e1.id= d.ceo) '掌门'

from t_emp e2 LEFT JOIN t_dept d on e2.deptid=d.id;

# 第4章 索引优化分析

## 4.1 索引简介

### 4.1.1 索引是什么

MySQL官方对索引的定义为：索引（Index）是帮助MySQL高效获取数据的数据结构。可以得到索引的本质：索引是数据结构。可以简单理解为排好序的快速查找数据结构。

在数据之外，数据库系统还维护着满足特定查找算法的数据结构，这些数据结构以某种方式引用（指向）数据，这样就可以在这些数据结构上实现高级查找算法。这种数据结构，就是索引。下图就是一种可能的索引方式示例：

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813047072-1b2a67d1-8585-4b38-8bbd-ebde9ab472aa.png)

左边是数据表，一共有两列七条记录，最左边的是数据记录的物理地址。为了加快Col2的查找，可以维护一个右边所示的二叉查找树，每个节点分别包含索引键值和一个指向对应数据记录物理地址的指针，这样就可以运用二叉查找在一定的复杂度内获取到相应数据，从而快速的检索出符合条件的记录。

一般来说索引本身也很大，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。

### 4.1.2 索引的优劣势

1)   优点**：**

提高数据检索的效率，降低数据库的IO成本。

通过索引列对数据进行排序，降低数据排序的成本，降低了CPU的消耗。

2)   劣势：

虽然索引大大提高了查询速度，同时却会降低更新表的速度，如对表进行INSERT、

UPDATE和DELETE。因为更新表时，MySQL不仅要保存数据，还要保存一下索引文

件每次更新添加了索引列的字段，都会调整因为更新所带来的键值变化后的索引信息。

 

实际上索引也是一张表，该表保存了主键与索引字段，并指向实体表的记录，所以索引

列也是要占用空间的。

 

## 4.2 MySQL的索引结构

### 4.2.1 B-tree索引

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813047396-b53bdc20-8d24-4d90-a206-352a0ec3c5d9.png)

一颗b树，浅蓝色的块我们称之为一个磁盘块，可以看到每个磁盘块包含几个数据项（深蓝色所示）和指针（黄色所示），如磁盘块1包含数据项17和35，包含指针P1、P2、P3，P1表示小于17的磁盘块，P2表示在17和35之间的磁盘块，P3表示大于35的磁盘块。

如果要查找数据项29，那么首先会把磁盘块1由磁盘加载到内存，此时发生一次IO，在内存中用二分查找确定29在17和35之间，锁定磁盘块1的P2指针，内存时间因为非常短（相比磁盘的IO）可以忽略不计，通过磁盘块1的P2指针的磁盘地址把磁盘块3由磁盘加载到内存，发生第二次IO，29在26和30之间，锁定磁盘块3的P2指针，通过指针加载磁盘块8到内存，发生第三次IO，同时内存中做二分查找找到29，结束查询，总计三次IO。

### 4.2.2 B+tree索引

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813047546-c1ea8b25-5676-45aa-974f-d113f29e4820.png)

B+树的非叶子结点仅仅存储着关键字信息和儿子的指针，B+树中的数据都存储在叶子结点上，也就是其所有叶子结点的数据组合起来就是完整的数据.因此每个磁盘块包含的关键字信息会更多。这样也就决定了加载一个磁盘块可以获取到更多的关键字，可以减少IO操作，

一次IO操作相当于成百上千次的内存比较.

在B+树上增加了顺序访问指针，也就是每个叶子节点增加一个指向相邻叶子节点的指针，这样一棵树成了数据库系统实现索引的首选数据结构

### 4.2.3 B-Tree与B+Tree 的区别

1)    B-树的关键字和记录是放在一起的， B+树的非叶子节点中只有关键字和指向下一个节点的索引，记录只放在叶子节点中。

2)   在B-树中，越靠近根节点的记录查找时间越快，只要找到关键字即可确定记录的存在；而B+树中每个记录的查找时间基本是一样的，都需要从根节点走到叶子节点，而且在叶子节点中还要再比较关键字。从这个角度看B-树的性能好像要比B+树好，而在实际应用中却是B+树的性能要好些。因为B+树的非叶子节点不存放实际的数据，这样每个节点可容纳的元素个数比B-树多，树高比B-树小，这样带来的好处是减少磁盘访问次数。尽管B+树找到一个记录所需的比较次数要比B-树多，但是一次磁盘访问的时间相当于成百上千次内存比较的时间，因此实际中B+树的性能可能还会好些，而且B+树的叶子节点使用指针连接在一起，方便顺序遍历（例如查看一个目录下的所有文件，一个表中的所有记录等），这也是很多数据库和文件系统使用B+树的缘故。



### 4.2.4 思考：为什么说B+树比B-树更适合实际应用中操作系统的文件索引和数据库索引`？

1)   B+树的磁盘读写代价更低

B+树的内部结点并没有指向关键字具体信息的指针。因此其内部结点相对B 树更小。如果把所有同一内部结点的关键字存放在同一盘块中，那么盘块所能容纳的关键字数量也越多。一次性读入内存中的需要查找的关键字也就越多。相对来说IO读写次数也就降低了。

2)    B+树的查询效率更加稳定

由于非终结点并不是最终指向文件内容的结点，而只是叶子结点中关键字的索引。所以任何关键字的查找必须走一条从根结点到叶子结点的路。所有关键字查询的路径长度相同，导致每一个数据的查询效率相当。

 

### 4.2.5 聚簇索引和非聚簇索引

聚簇索引并不是一种单独的索引类型，而是一种数据存储方式。术语‘聚簇’表示数据行和相邻的键值聚簇的存储在一起。如下图，左侧的索引就是聚簇索引，因为数据行在磁盘的排列和索引排序保持一致。

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813047720-351fdc85-f5ee-43cf-bd52-3e6e322d5193.png)

聚簇索引的好处：

按照聚簇索引排列顺序，查询显示一定范围数据的时候，由于数据都是紧密相连，数据库不用从多个数据块中提取数据，所以节省了大量的io操作。

聚簇索引的限制：

对于mysql数据库目前只有innodb数据引擎支持聚簇索引，而Myisam并不支持聚簇索引。

由于数据物理存储排序方式只能有一种，所以每个Mysql的表只能有一个聚簇索引。一般情况下就是该表的主键。

为了充分利用聚簇索引的聚簇的特性，所以innodb表的主键列尽量选用有序的顺序id，而不建议用无序的id，比如uuid这种。

## 4.3. MySQL索引分类

### 4.3.1 单值索引 INDEX

概念：即一个索引只包含单个列，一个表可以有多个单列索引

1)   随表一起创建：

CREATE TABLE customer (

 id INT(10) AUTO_INCREMENT ,

 customer_no VARCHAR(200),

 customer_name VARCHAR(200),

 PRIMARY KEY(id),

 KEY (customer_name)

);

2)   单独建单值索引：

CREATE INDEX idx_customer_name ON customer(customer_name);

3)   查看某个表的索引

show index from 表名  

show keys from 表名

### 4.3.2 唯一索引

概念：索引列的值必须唯一，但允许有空值

1)   随表一起创建：

CREATE TABLE customer (

 id INT(10)  AUTO_INCREMENT ,

 customer_no

 VARCHAR(200),

 customer_name VARCHAR(200),

 PRIMARY KEY(id),

 KEY (customer_name),

 UNIQUE (customer_no)

);

2)   单独建唯一索引：

CREATE UNIQUE INDEX idx_customer_no ON customer(customer_no);

 

### 4.3.3 主键索引

概念：设定为主键后数据库会自动建立索引，innodb为聚簇索引

1)   随表一起建索引

CREATE TABLE customer (

 id INT(10) AUTO_INCREMENT ,

 customer_no

 VARCHAR(200),

 customer_name VARCHAR(200),

 PRIMARY KEY(id)

);

2)   单独建主键索引：

ALTER TABLE customer add PRIMARY KEY customer(customer_no);

3)   删除建主键索引：

ALTER TABLE customer drop PRIMARY KEY ;

4)   需要注意的问题：

设置为自增的主键上的索引不能删除.

### 4.3.4 复合索引

概念：即一个索引包含多个列

1)   随表一起建索引：

CREATE TABLE customer (

 id INT(10)  AUTO_INCREMENT ,

 customer_no VARCHAR(200),

 customer_name VARCHAR(200),

 PRIMARY KEY(id),

 KEY (customer_name),

 UNIQUE (customer_name),

 KEY (customer_no,customer_name)

);

2)   单独建索引：

CREATE INDEX idx_no_name ON customer(customer_no,customer_name);

 

### 4.3.5 基本语法

| 创建                                                         | CREATE [UNIQUE ] INDEX [indexName] ON table_name(column))    |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 删除                                                         | DROP INDEX [indexName] ON mytable;                           |
| 查看                                                         | SHOW INDEX FROM table_name\G                                 |
| 使用Alter命令                                                | ALTER TABLE tbl_name ADD PRIMARY KEY (column_list) : 该语句添加一个主键，这意味着索引值必须是唯一的，且不能为NULL。 |
| ALTER TABLE tbl_name ADD INDEX index_name (column_list): 添加普通索引，索引值可出现多次。 |                                                              |
| ALTER TABLE tbl_name ADD FULLTEXT index_name (column_list):该语句指定了索引为 FULLTEXT ，用于全文索引。 |                                                              |

## 4.4 索引的创建时机

### 4.4.1 适合创建索引的情况

1)   主键自动建立唯一索引

2)   频繁作为查询条件的字段应该创建索引

3)   查询中与其它表关联的字段，外键关系建立索引

4)   单键/组合索引的选择问题， 组合索引性价比更高

5)   查询中排序的字段，排序字段若通过索引去访问将大大提高排序速度

6)   查询中统计或者分组字段

总结: 查询中过滤、统计、分组、排序、关联所能用到的字段应该建立索引,

​    建索引优先考虑复合索引，其次考虑单值索引.

### 4.4.2 不适合创建索引的情况

1)   表记录太少

2)   经常增删改的表或者字段

3)   Where条件里用不到的字段不创建索引

4)   过滤性不好的不适合建索引

# 第5章 Explain性能分析

## 5.1 概念

使用EXPLAIN关键字可以模拟优化器执行SQL查询语句，从而知道MySQL是如何处理你的SQL语句的。分析你的查询语句或是表结构的性能瓶颈。

官网地址：

https://dev.mysql.com/doc/refman/5.7/en/explain-output.html

## 5.2 怎么用

Explain+SQL语句。

Explain执行后返回的信息：

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813047820-3d72e5e1-2cd9-4b11-8d91-9a2b3c0749ce.png)

## 5.2 Explain分析准备工作

### 5.2.1 Explain字段解释

id:  select 查询的序列号`,表示查询中执行select子句或操作表的顺序。

select_type: 主要用于区别普通查询、联合查询、子查询等的复杂查询。

table: 这个数据是基于哪张表的。

partitions: 查询数据匹配的分区

type: 是查询的访问类型，是较为重要的一个指标

possible_keys: 显示可能应用在这张表中的索引，一个或多个。

key: 实际使用的索引。如果为NULL，则没有使用索引。

key_len: 表示索引中使用的字节数

ref: 显示索引的哪一列被使用了

rows: 显示MySQL认为它执行查询时必须检查的行数，不精确。

filtered: 返回结果的行占需要读到的行(rows列的值)的百分比

Extra: 其他的额外重要的信息。

### 5.2.2 创建测试数据

 CREATE TABLE t1(id INT(10) AUTO_INCREMENT,content VARCHAR(100) NULL , PRIMARY KEY (id));

 CREATE TABLE t2(id INT(10) AUTO_INCREMENT,content VARCHAR(100) NULL , PRIMARY KEY (id));

 CREATE TABLE t3(id INT(10) AUTO_INCREMENT,content VARCHAR(100) NULL , PRIMARY KEY (id));

 CREATE TABLE t4(id INT(10) AUTO_INCREMENT,content VARCHAR(100) NULL , PRIMARY KEY (id));

 

 INSERT INTO t1(content) VALUES(CONCAT('t1_',FLOOR(1+RAND()*1000)));

 INSERT INTO t2(content) VALUES(CONCAT('t2_',FLOOR(1+RAND()*1000)));

 INSERT INTO t3(content) VALUES(CONCAT('t3_',FLOOR(1+RAND()*1000)));

 INSERT INTO t4(content) VALUES(CONCAT('t4_',FLOOR(1+RAND()*1000)));

## 5.3 Explain字段分析

### 5.3.1 Explain 之id

id: select查询的序列号,包含一组数字，表示查询中执行select子句或操作表的顺序

1)   id相同：执行顺序由上至下

mysql>EXPLAIN select * from t1,t2,t3 where t1.id = t2.id and t2.id = t3.id ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813047971-fc3af88b-5852-4f08-8bd4-4230208c7e58.png)

2)   id不同：如果是子查询，id的序号会递增，id值越大优先级越高，越先被执行

mysql> EXPLAIN select t1.id from t1 where t1.id in

​     (select t2.id from t2 where t2.id in

​      (select t3.id from t3 where t3.content = '')

​     );

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048091-404e0a54-d111-4cef-892e-49654b48e2f6.png)

MySQL5.5结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048209-bdc183f0-4d03-421a-85e8-e871a4c73dcd.png)

3)   有相同也有不同

mysql> EXPLAIN select t2.* from t2 ,(select * from t3 where t3.content = '') s3 where

​    s3.id = t2.id ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048353-504a29c8-185c-442d-a646-9408a8769d76.png)

MySQL5.5的结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048501-e2083e50-0e64-487d-87f8-3c287a27badf.png)

4)   总结：

id如果相同，可以认为是一组，从上往下顺序执行；

在所有组中，id值越大，优先级越高，越先执行 。

id号每个号码，表示一趟独立的查询。一个sql 的查询趟数越少越好。

### 5.3.2 Explain 之select_type

select_type : 主要用于区别普通查询、联合查询、子查询等的复杂查询。

1)   SIMPLE：代表单表查询

mysql>EXPLAIN select * from t1 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048670-d585fdc3-1c04-4a4f-b232-f725ddd8866d.png)

2)   PRIMARY：查询中若包含任何复杂的子部分，最外层查询则被标记为Primary。

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048819-1c155329-0fc6-4623-ade9-736316dffd60.png)

MySQL5.5结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813048926-8f179d88-bd5b-41b4-83a1-3df49b1d2255.png)

3)   DERIVED：在FROM查询中的子查询，结果存放在临时表中

 

4)   SUBQUERY：在WHERE列表中包含了子查询。

mysql> EXPLAIN select t2.id from t2 where t2.id =

​    ( select t3.id from t3 where t3.id = 1);

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813049132-306e046e-8cdb-4609-b6f0-5b6ab5185b28.png)

5)   DEPENDENT SUBQUERY：在SELECT或WHERE列表中包含了子查询,子查询基于外层。

mysql> EXPLAIN select t2.id from t2 where t2.id in

​    (select t3.id from t3 where t3.content = 't3_522');

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813049244-e0d9625f-85c8-4c6c-9a18-3538094bcf25.png)

MySQL5.5的结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813049365-d6f5dc5b-9373-4829-8bbc-3e39297aed27.png)注意：SUBQUERY和DEPENDENT SUBQUERY都是where后面的条件，subquery是单个值，dependent subquery是一组值。

6)   UNCACHEABLE SUBQUREY：当使用了@@来引用系统变量的时候，不会使用缓存。

mysql> EXPLAIN select * from t3 where id =

​    (select id from t2 where t2.id = @@sort_buffer_size);

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813049903-a7419c72-7905-4738-8686-40c14193044c.png)

7)   UNION：若第二个SELECT出现在UNION之后，则被标记为UNION；

​    若UNION包含在FROM子句的子查询中,外层SELECT将被标记为：DERIVED。

mysql> EXPLAIN select t2.id ,t2.content from t2

​     union all

​    select t3.id ,t3.content from t3 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813050051-7d1f3fc3-6917-4a9a-9b09-7d361e085999.png)

mysql> EXPLAIN select t2.id ,t2.content from

  (select t3.id, t3.content from t3 union all select t1.id ,t1.content from t1 ) t2;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813050196-30ef25ee-523b-44ca-bc7f-cd6cb051bca1.png)

8)   UNION RESULT：从UNION表获取结果的SELECT。

mysql> EXPLAIN select t2.id ,t2.content from t2

​    union all

​    select t3.id ,t3.content from t3 ;

MySQL5.5结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813050369-6f0ca704-60eb-4021-8c2b-60d3708d582b.png)

### 5.3.3 Explain 之type

type是查询的访问类型，是较为重要的一个指标结果值从最好到最坏依次是：

system > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL ，

一般来说，得保证查询至少达到range级别，最好能达到ref。

1)   system

表只有一行记录（等于系统表），这是const类型的特列，平时不会出现，这个也可以忽略不计。

2)   const

表示通过索引一次就找到了,const用于比较primary key或者unique索引。因为只匹配一行数据，所以很快。如将主键置于where列表中，MySQL就能将该查询转换为一个常量。

mysql> EXPLAIN select * from t1 where t1.id = 1;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813050633-f0cc7bf8-9379-42cf-9fdb-b7c40523f1e6.png)

3)   eq_ref

唯一性索引扫描，对于每个索引键，表中只有一条记录与之匹配。常见于主键或唯一索引扫描。

mysql> EXPLAIN select * from t1 ,t2 where t1.id = t2.id ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813050761-b570eef8-279f-4232-a5e9-e85cccbaafc1.png)

4)   ref

非唯一性索引扫描，返回匹配某个单独值的所有行.本质上也是一种索引访问，它返回所有匹配某个单独值的行，然而，它可能会找到多个符合条件的行，所以他应该属于查找和扫描的混合体。

l 没用索引前：

mysql> EXPLAIN select * from t1 ,t2 where t1.content = t2.content;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813050896-5df5a5bd-0556-4d22-95fc-0e8ab9ba97aa.png)

l 建立索引后：

mysql> create index idx_t2_content on t2(content);

mysql> EXPLAIN select * from t1 ,t2 where t1.content = t2.content;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813051024-cdfb0e24-cef2-413f-aa83-a740797eb861.png)

5)   range

只检索给定范围的行,使用一个索引来选择行。key 列显示使用了哪个索引一般就是在你的where语句中出现了between、<、>、in等的查询这种范围扫描索引扫描比全表扫描要好，因为它只需要开始于索引的某一点，而结束语另一点，不用扫描全部索引。

mysql> EXPLAIN select * from t1 where t1.id >10 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813051285-4f0901a1-1945-48b9-8b15-4b4a0a0cb98d.png)

mysql> EXPLAIN select * from t1 where t1.id between 1 and 3 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813051498-92a6a6b9-49a6-483a-99fc-3a0f02f1eec1.png)

mysql> EXPLAIN select * from t1 where t1.id in (1,2);

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813051646-3d71cc12-2814-4638-be4e-0b70bdcca4e7.png)

6)   index

出现index是sql使用了索引但是没用通过索引进行过滤，一般是使用了覆盖索引或者是利用索引进行了排序分组。

mysql> EXPLAIN select * from t1;

mysql> EXPLAIN select id from t1;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813051787-89554825-8236-4cc3-953a-a99badf81a55.png) 

7)   all

Full Table Scan，将遍历全表以找匹配的行。

mysql> EXPLAIN select * from t1 ,t2 where t1.content = t2.content ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813051919-486a2a52-0165-4e1e-afd7-f34088f8e56a.png)

8)   index_merge

在查询过程中需要多个索引组合使用，通常出现在有 or 的关键字的sql中。

MySQL5.5的结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813052207-e34f3df6-85ac-44f7-812d-fbf8e0b3a5cc.png)

9)   ref_or_null

对于某个字段既需要关联条件，也需要null值得情况下。查询优化器会选择用ref_or_null连接查询。

mysql> EXPLAIN select * from t2 where t2.content is null or t2.content = 'abc';

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813052372-adbf4b57-fa28-46c6-bf4f-08f25d9e1737.png)

10)  index_subquery

利用索引来关联子查询，不再全表扫描。

mysql> create index idx_t3_content on t3(content);

mysql> EXPLAIN select * from t2 where t2.content in (select t3.content from t3) ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813052500-498b1200-6fcf-4010-977e-82f340e6f5f9.png)

MySQL5.5的结果:

 

 

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813052653-ea4a33c3-71c9-4da0-a010-f037a4740b09.png)

11)  unique_subquery

该联接类型类似于index_subquery。 子查询中的唯一索引。

mysql> EXPLAIN select * from t2 where t2.id in (select t3.id from t3 );

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813052793-de1f8964-397e-46d1-8383-232981d38319.png)

MySQL5.5的结果

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813052898-0a1d3fc8-f25c-4c6a-8246-f8e39d2faffb.png)

说明：一般来说，得保证查询至少达到range级别，最好能达到ref。

### 5.3.4 Explain 之possible_keys

显示可能应用在这张表中的索引，一个或多个。查询涉及到的字段上若存在索引，则该索引将被列出，**但不一定被查询实际使用。**

### 5.3.5 Explain 之 key

实际使用的索引。如果为NULL，则没有使用索引。

### 5.3.6  Explain 之 key_len

表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度。 key_len字段能够帮你检查是否充分的利用上了索引。ken_len越长，说明索引使用的越充分。

示例如下

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053028-b899ef5b-2c63-46d9-b0a0-ebe5419bf775.png)

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053151-c39e021d-635c-4b45-b818-d1f2554f514e.png)

**如何计算：**

1） 先看索引上字段的类型+长度比如 int=4 ; varchar(20) =20 ; char(20) =20 

2） 如果是varchar或者char这种字符串字段，视字符集要乘不同的值，比如utf-8 要乘 3,GBK要乘2

3） varchar这种动态字符串要加2个字节

4） 允许为空的字段要加1个字节 

第一组：key_len=age的字节长度：name的字节长度=4+1 + ( 20*3+2)=5+62=67

第二组：key_len=age的字节长度：4+1=5

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053336-b4ce71d5-482b-47da-9107-845d128b56dd.png)

### 5.3.7 Explain 之 ref

​    显示索引的哪一列被使用了，如果可能的话，是一个常数。哪些列或常量被用于查找索引列上的值。

mysql> create index idx_name_t_emp on t_emp(name);

mysql> EXPLAIN select * from t_emp emp ,t_dept dept where emp.name = 'aaa'

​    and emp.deptId = dept.id ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053460-43073c23-e24e-4d53-9af1-4bd073de1c0b.png)

### 5.3.8 Explain 之 rows

rows列显示MySQL认为它执行查询时必须检查的行数。越少越好！

mysql> create index idx_name_t_emp on t_emp(name);

mysql> EXPLAIN select * from t_emp emp ,t_dept dept where emp.name = 'aaa'

​     and emp.deptId = dept.id ;

![img](https://cdn.nlark.com/yuque/0/2020/png/349894/1585813053460-43073c23-e24e-4d53-9af1-4bd073de1c0b.png)

### 5.3.9 Explain 之 Extra

1)   Using filesort

说明mysql会对数据使用一个外部的索引排序，而不是按照表内的索引顺序进行读取。MySQL中无法利用索引完成的排序操作称为“文件排序”。

注意: 测试表数据不能太小。

l **优化前：**

mysql> explain select id ,empno ,name from t_emp

​     where deptid = 100 order by name limit 10 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053592-5b728b86-7d7b-42e7-95c6-813980e60bbb.png)

l **优化后：**

mysql> create index idx_name_emp_1 on emp(name);

mysql> explain select id ,empno ,name from emp where deptId = 100 order by name limit 10 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053715-d897346e-8fa3-4695-a64b-f0a41d821cdb.png)

2)   Using temporary

使用临时表保存中间结果,MySQL在对查询结果排序时使用临时表。常见于排序 order by 和分组查询 group by。

l **优化前：**

mysql> explain select name, count(*) from emp where deptid = 100 group by name limit 10 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053853-5ecadae3-913c-4e06-860f-6cde5c23b165.png)

l **优化后：**

mysql> create index idx_name_emp_1 on emp(name);

mysql> explain select name, count(*) from emp where deptid = 100 group by name limit 10 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813053981-a3572519-620f-4739-8ee4-e6fb623f0b66.png)

3)   Using index

Using index表示相应的select操作中使用了覆盖索引(Covering Index)，避免访问了表的数据行，效率不错！

如果同时出现using where，表明索引被用来执行索引键值的查找;如果没有同时出现using where，表明索引只是用来读取数据而非利用索引执行查找。

mysql> explain select id from emp where id >1000 order by id ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813054106-127b63e8-8adf-4eba-a248-b8e055ba6a2a.png)

4)   Using where：表明使用了where过滤。

5)   Using join buffer：使用了连接缓存。

mysql> explain select * from emp ,dept where emp.empno = dept.ceo ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813054253-39582f43-c842-4bcf-b17f-afb0b57e3160.png)

6)   impossible where：

where子句的值总是false，不能用来获取任何元组。

mysql> explain select empno, name from emp where empno >200000 and empno < 100000;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813054360-00bdeeef-9e01-41c0-bdd7-decebc551c09.png)

MySQL5.5的结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813054490-a31778fd-b2b5-4934-ae82-e61bb064b3e0.png)

7)   select tables optimized away

在没有GROUPBY子句的情况下，基于索引优化MIN/MAX操作或者对于MyISAM存储引擎优化COUNT(*)操作，不必等到执行阶段再进行计算，查询Explian生成的阶段即完成优化。

l **在****innodb****中：**

mysql> explain select max(id) from emp ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813054676-892410fa-dafd-4371-b15b-7144e4b29886.png)

l **在****Myisam****中：**

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813054915-c1be1384-1b65-4c4b-be08-80b9786d18e0.png)

 

# 第6章 批量数据脚本

## 6.1 准备工作

1)   建表语句

CREATE TABLE `dept` (

 `id` INT(11) NOT NULL AUTO_INCREMENT,

 `deptName` VARCHAR(30) DEFAULT NULL,

 `address` VARCHAR(40) DEFAULT NULL,

 ceo INT NULL ,

 PRIMARY KEY (`id`)

) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

 

CREATE TABLE `emp` (

 `id` INT(11) NOT NULL AUTO_INCREMENT,

 `empno` INT NOT NULL ,

 `name` VARCHAR(20) DEFAULT NULL,

 `age` INT(3) DEFAULT NULL,

 `deptId` INT(11) DEFAULT NULL,

 PRIMARY KEY (`id`)

 \#CONSTRAINT `fk_dept_id` FOREIGN KEY (`deptId`) REFERENCES `t_dept` (`id`)

) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

2)   开启log_bin_trust_function_creators

它控制是否可以信任存储函数创建者

mysql> show variables like 'log_bin_trust_function_creators'; //查询

mysql> set global log_bin_trust_function_creators=1; //开启

设置永久生效方式：修改/etc/my.cnf 文件

[mysqld]

log_bin_trust_function_creators=1

## 6.2 编写随机函数

1)   生成随机字符串

DELIMITER $$

CREATE FUNCTION rand_string(n INT) RETURNS VARCHAR(255)

BEGIN  

DECLARE chars_str VARCHAR(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ';

 DECLARE return_str VARCHAR(255) DEFAULT '';

 DECLARE i INT DEFAULT 0;

 WHILE i < n DO 

 SET return_str =CONCAT(return_str,SUBSTRING(chars_str,FLOOR(1+RAND()*52),1)); 

 SET i = i + 1;

 END WHILE;

 RETURN return_str;

END $$

2)   如果要删除函数，则执行：drop function rand_string

3)   生成随机数字

\#用于随机产生多少到多少的编号

DELIMITER $$

CREATE FUNCTION rand_num (from_num INT ,to_num INT) RETURNS INT(11)

BEGIN 

 DECLARE i INT DEFAULT 0; 

 SET i = FLOOR(from_num +RAND()*(to_num -from_num+1))  ;

RETURN i; 

 END$$

4)   如果要删除函数：drop function rand_num

## 6.3 创建存储过程

1)   创建往emp表中插入数据的存储过程

DELIMITER $$

CREATE PROCEDURE insert_emp( START INT , max_num INT )

BEGIN 

DECLARE i INT DEFAULT 0; 

\#set autocommit =0 把autocommit设置成0 

 SET autocommit = 0;  

 REPEAT 

 SET i = i + 1; 

 INSERT INTO emp (empno, NAME ,age ,deptid ) VALUES ((START+i) ,rand_string(6)  , rand_num(30,50),rand_num(1,10000)); 

 UNTIL i = max_num 

 END REPEAT; 

 COMMIT; 

 END$$

 

\#删除

\# DELIMITER ;

\# drop PROCEDURE insert_emp;

2)   创建往dept表中插入数据的存储过程

\#执行存储过程，往dept表添加随机数据

DELIMITER $$

CREATE PROCEDURE `insert_dept`( max_num INT )

BEGIN 

DECLARE i INT DEFAULT 0; 

 SET autocommit = 0;  

 REPEAT 

 SET i = i + 1; 

 INSERT INTO dept ( deptname,address,ceo ) VALUES (rand_string(8),rand_string(10),rand_num(1,500000)); 

 UNTIL i = max_num 

 END REPEAT; 

 COMMIT; 

 END$$

 

\#删除

\# DELIMITER ;

\# drop PROCEDURE insert_dept;

## 6.4 调用存储过程

1)   添加数据到部门表

\#执行存储过程，往dept表添加1万条数据

DELIMITER ;

CALL insert_dept(10000);

2)   添加数据到员工表

\#执行存储过程，往emp表添加50万条数据

DELIMITER ;

CALL insert_emp(100000,500000);

 

## 6.5 批量删除某个表上的所有索引

1)   删除索引的存储过程

DELIMITER $$

CREATE PROCEDURE `proc_drop_index`(dbname VARCHAR(200),tablename VARCHAR(200))

BEGIN

​    DECLARE done INT DEFAULT 0;

​    DECLARE ct INT DEFAULT 0;

​    DECLARE _index VARCHAR(200) DEFAULT '';

​    DECLARE _cur CURSOR FOR SELECT  index_name  FROM information_schema.STATISTICS  WHERE table_schema=dbname AND table_name=tablename AND seq_in_index=1 AND  index_name <>'PRIMARY' ;

​    DECLARE CONTINUE HANDLER FOR NOT FOUND set done=2 ;   

​    OPEN _cur;

​    FETCH  _cur INTO _index;

​    WHILE _index<>'' DO

​        SET @str = CONCAT("drop index ",_index," on ",tablename );

​        PREPARE sql_str FROM @str ;

​        EXECUTE sql_str;

​        DEALLOCATE PREPARE sql_str;

​        SET _index='';

​        FETCH  _cur INTO _index;

​    END WHILE;

  CLOSE _cur;

  END$$

2)   执行存储过程

CALL proc_drop_index("dbname","tablename");

## 6.6 批量数据脚本

同学们只需要在Mysql中执行如下脚本即可完成上述的准备工作.本章内容无须掌握，只是为后续的内容做准备。

[..\2.资料\批量数据脚本\batch.sql](https://www.yuque.com/Library/Containers/com.microsoft.Word/Data/Library/Containers/com.microsoft.Word/Data/Downloads/word2html/2.资料/批量数据脚本/batch.sql)

1)   首先将batch.sql 上传到Linux的某个目录下: 如 /opt/software/mysql/batch.sql ,然后在mysql中执行如下操作:

mysql> source /opt/software/mysql/batch.sql

 

# 第7章 单表使用索引常见的索引失效***

## 7.1 全值匹配我最爱

1)   建立索引

CREATE INDEX idx_age_deptid_name ON emp(age,deptid,NAME);

2) 查看下列sql的Explian

 EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 

 EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptid=4

 EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptid=4 AND emp.name = 'abcd' 

   ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813055030-c2f01b8c-cd3e-4c6a-8af3-5ae233b17238.png)

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813055149-df1b788b-5f00-46da-ab8f-0e6a134feae1.png)

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813055307-5dfb7275-06d1-4690-9be6-46b5b6b0d2b9.png)结论：全值匹配我最爱指的是，查询的字段按照顺序在索引中都可以匹配到！

3)   更换条件顺序查看索引能否被应用

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813055465-c39cb99b-9321-4de3-8f02-08f952c15b4b.png)结论：SQL中查询字段的顺序，跟使用索引中字段的顺序没有关系。

## 7.2 最佳左前缀法则

使用复合索引，需要遵循最佳左前缀法则，即如果索引了多列，要遵守最左前缀法则。指的是查询从索引的最左前列开始并且不跳过索引中的列。

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813055662-bce7fa9a-7fcf-40a8-9323-ac68885d9830.png)

**结论：过滤条件要使用索引必须按照索引建立时的顺序，依次满足，一旦跳过某个字段，索引后面的字段都无法被使用。**

## 7.3 索引列上做计算

不在索引列上做任何操作（计算、函数、(自动or手动)类型转换），会导致索引失效而转向全表扫描。

1)   在查询列上使用了函数

EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE age=30;

EXPLAIN SELECT SQL_NO_CACHE * FROM emp WHERE LEFT(age,3)=30;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813055871-66c24f14-33b8-4a2b-bdad-c57c6729fda9.png)

结论：等号左边无计算！

2)   在查询列上做了转换

create index idx_name on emp(name);

explain select sql_no_cache * from emp where name='30000';

explain select sql_no_cache * from emp where name=30000;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056037-f1c39004-d517-4d19-8e90-115d7ff2ff45.png)

结论：等号右边无转换！

## 7.4 索引列上进行范围查询

1)   在索引列上使用范围查询

explain SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptid=5 AND emp.name = 'abcd';

explain SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptid<5 AND emp.name = 'abcd';

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056188-bfd04957-6ebf-43b5-b80d-398ea2866877.png)

建议：将可能做范围查询的字段的索引顺序放在最后

## 7.5 使用覆盖索引

1)   查询列和索引列时，不要写select *

explain SELECT SQL_NO_CACHE * FROM emp WHERE emp.age=30 and deptId=4 and name='XamgXt';

explain SELECT SQL_NO_CACHE age,deptId,name FROM emp WHERE emp.age=30 and deptId=4 and name='XamgXt';

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056313-d979026f-ba08-463c-a5ed-43a408dbe58c.png)

## 7.6 使用不等于(!= 或者<>)

1)   使用不等于(!= 或者<>)时，有时会无法使用索引会导致全表扫描。

mysql> explain select SQL_NO_CACHE * from emp where emp.age = 30 ;

mysql> explain select SQL_NO_CACHE * from emp where emp.age != 30 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056455-8655036e-8e0c-4672-be88-a85767c71df6.png)

 

## 7.7 is not null 和 is null

1)   查看索引字段是否允许为空

mysql> desc emp;

2)   当字段允许为Null的条件下

explain select * from emp where age is null

explain select * from emp where age is not null

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056674-dc3cba05-ec62-48d8-bc29-c848f0ba0d81.png)

 结论：is not null用不到索引，is null可以用到索引。

## 7.8 like的前后模糊匹配

1)   前缀模糊查询会导致索引失效

mysql> create index idx_name_emp on emp (name);

mysql> explain select * from emp where name like '%a' ;

mysql> explain select * from emp where name like '%a%' ;

mysql> explain select * from emp where name like '%a%' ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056848-4e6a3f7a-0faf-43c8-a5fb-cd74364465a8.png)

## 7.9 使用or

1)   OR查询会导致索引失效

mysql> explain select * from emp where age = 30 or age = 40 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813056954-6a17ab45-d80d-4973-9733-7fec3dc8bcc6.png)

 

2)   使用union all或者union来替代

mysql> explain select * from emp where age = 30 union all select * from emp where age =

​     40 ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813057090-39b8b2b7-d6c0-4174-87b5-e11bf59a8019.png)

## 7.10 总结练习

1)   建立索引index(a,b,c)，判断下列索引引用情况。

| **Where****语句**                                       | **索引是否被使用**                                           |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| where a = 3                                             | Y,使用到a                                                    |
| where a = 3 and b = 5                                   | Y,使用到a，b                                                 |
| where a = 3 and b = 5 and c = 4                         | Y,使用到a,b,c                                                |
| where b = 3 或者 where b = 3 and c = 4 或者 where c = 4 | N                                                            |
| where a = 3 and c = 5                                   | 使用到a， 但是c不可以，b中间断了                             |
| where a = 3 and b > 4 and c = 5                         | 使用到a和b， c不能用在范围之后，b断了                        |
| where a is null and b is not null                       | is null 支持索引 但是is not null 不支持,所以 a 可以使用索引,但是 b不可以使用 |
| where a <> 3                                            | 不能使用索引                                                 |
| where  abs(a) =3                                        | 不能使用 索引                                                |
| where a = 3 and b like 'kk%' and c = 4                  | Y,使用到a,b,c                                                |
| where a = 3 and b like '%kk' and c = 4                  | Y,只用到a                                                    |
| where a = 3 and b like '%kk%' and c = 4                 | Y,只用到a                                                    |
| where a = 3 and b like 'k%kk%' and c = 4                | Y,使用到a,b,c                                                |

 

## 7.11 口诀

全值匹配我最爱，最左前缀要遵守；

带头大哥不能死，中间兄弟不能断；

索引列上少计算，范围之后全失效；

LIKE百分写最右，覆盖索引不写*；

不等空值还有OR，索引影响要注意；

# 第8章 查询优化

## 8.1 关联查询优化

1)   建表语句

CREATE TABLE IF NOT EXISTS `class` (

`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,

`card` INT(10) UNSIGNED NOT NULL,

 PRIMARY KEY (`id`)

);

CREATE TABLE IF NOT EXISTS `book` (

`bookid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,

`card` INT(10) UNSIGNED NOT NULL,

 PRIMARY KEY (`bookid`)

);

 

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO class(card) VALUES(FLOOR(1 + (RAND() * 20)));

 

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

INSERT INTO book(card) VALUES(FLOOR(1 + (RAND() * 20)));

 

### 8.1.1 left join优化

1)   查看Explian

mysql> explain select * from class left join book on class.card = book.card ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813057220-eea1f62a-0243-4b8b-8aed-c298550df818.png)

2)   在book表上建立索引

mysql> ALTER TABLE `book` ADD INDEX idx_card(`card`);

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813057588-d4fc173b-5c3c-4fdb-a815-cf008291c696.png)

在class表上建立索引

mysql> drop index idx_card on book;

mysql> alter table class add index idx_card(cad);

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813057692-b25c441e-0e89-49cc-9a79-53839dad8be3.png)结论：在优化关联查询时，只有在匹配表上建立索引才有效。

   left join时，左侧的为驱动表，右侧为匹配表！

### 8.1.2 inner join优化

1)   查看Explian

mysql> explain select * from book inner join class on class.card = book.card;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813057803-8ddaf3a4-ec4c-4710-ae56-b7a234af6814.png)

2)   在book表上建索引

mysql>ALTER TABLE `book` ADD INDEX idx_card(`card`);

mysql> explain select * from book inner join class on class.card = book.card;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813057947-b41a246a-dc99-4958-b620-b717407b6bac.png)

  调换两个表的顺序

mysql> explain select * from class inner join book on class.card = book.card;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058075-88dd6a30-f900-47d3-930e-c14aa898f8df.png) 

3)   在book表中，删除9条记录

mysql> delete from book where bookid <10 ;

mysql> select count(*) from book ;

mysql> select count(*) from class ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058238-860e4a75-55a2-486d-b9cf-bc40bc2a03f1.png)

 

mysql> CALL proc_drop_index("mydb","book");

mysql> explain select * from class inner join book on class.card = book.card;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058448-2f5ccc9a-6d39-4356-97df-1868e269bdf8.png)

结论：inner join 时，mysql会自己帮你把小结果集的表选为驱动表。

4)   straight_join: 效果和inner join一样，但是会强制将左侧作为驱动表！

mysql> explain select * from class straight_join book on class.card= book.card;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058612-ad88f097-b444-49a5-a17e-0f521d7e0461.png)

### 8.1.3 四个关联查询案例分析

1)   案例一

EXPLAIN SELECT ed.name '人物',c.name '掌门' FROM

(SELECT e.name,d.ceo from emp e LEFT JOIN dept d on e.deptid=d.id) ed

 LEFT JOIN emp c on ed.ceo= c.id;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058742-024ca71f-35bb-4cb8-854d-1c64e12ece79.png)

MySQL5.5结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058847-8ef4c030-138e-44f2-8919-35d261fc3056.png)

2)   案例二

EXPLAIN SELECT e.name '人物',tmp.name '掌门'

FROM emp e LEFT JOIN (SELECT d.id did,e.name FROM dept d LEFT JOIN emp e ON d.ceo=e.id)tmp

ON e.deptId=tmp.did;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813058964-e44ed435-ca67-45a8-9657-cb775b8cbeee.png)

MySQL5.5结果:

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059111-4628b793-c048-41a9-9677-07baf1b1546b.png)

3)  案例三

EXPLAIN SELECT e1.name '人物',e2.name '掌门'

 FROM emp e1

 LEFT JOIN dept d on e1.deptid = d.id

 LEFT JOIN emp e2 on d.ceo = e2.id ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059235-2cfc2860-dbf6-4baf-9ef4-56559876b698.png)

MySQL5.5结果: 

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059362-4dd7433f-782a-4bd9-8c31-da8020d17878.png)

4)   案例四

Explain SELECT e2.name '人物',

(SELECT e1.name FROM emp e1 where e1.id= d.ceo) '掌门'

 from emp e2 LEFT JOIN dept d on e2.deptid=d.id;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059483-f1cf5638-1b53-4d8b-a8c9-4d427ca98cee.png)

MySQL5.5结果：

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059619-a94c39c4-fdda-4263-aa6a-110930f87b69.png) 

### 8.1.4 建议

1)   保证被驱动表的join字段已经被索引

2)   Left Join 或者 right join时，选择小表作为驱动表，大表作为被驱动表

3)   inner join 时，mysql会自己把小表选为驱动表

4)   子查询尽量不要放在被驱动表，有可能使用不到索引

5)   能直接多表关联就尽量直接关联，不用子查询

 

## 8.2 子查询优化

1)   取所有不为掌门人的员工，按年龄分组！

mysql> CREATE INDEX idx_age_deptid_name ON emp(age,deptid,NAME);

mysql> explain select age as '年龄', count(*) as '人数' from emp where id not in

(select ceo from dept where ceo is not null) group by age;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059750-cc932dc1-fe3a-49d0-b1b7-002021886408.png)

2)   解决dept表的全表扫描，建立ceo字段的索引

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813059902-91fe8d39-0984-4883-bc39-db1556d03b68.png)

3)   进一步优化，替换not in。

 mysql>explain select age as '年龄',count(*) as '人数' from emp e left join dept d on e.id=d.ceo

 where d.id is null group by age;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813060027-8f05ae85-8b95-400f-bd87-0c5c5d964054.png)结论： 在范围判断时，尽量不要使用not in和not exists，使用 left join on xxx is null代替。

## 8.3 排序分组优化

where 条件和 on的判断这些过滤条件，作为优先优化的部分，是要被先考虑的！其次，如果有分组和排序，那么也要考虑group by 和order by。

### 8.3.1 无过滤，不索引

1)   创建索引，查看Explian

create index idx_age_deptid_name on emp (age,deptid,name);

explain select * from emp where age=40 order by deptid;

explain select * from emp order by age,deptid;

explain select * from emp order by age,deptid limit 10;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813060137-59a954b3-c75c-4c64-b989-8bafc59d49ea.png)结论：using filesort说明进行了手工排序。原因在于没有where作为过滤条件。where，limt都相当于一种过滤条件，所以才能使用上索引。

### 8.3.2 顺序错，必排序

2)   查看Explian

explain select * from emp where age=45 order by deptid,name;

explain select * from emp where age=45 order by deptid,empno;

explain select * from emp where age=45 order by name,deptid;

explain select * from emp where deptid=45 order by age;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813060270-810f05d8-491f-4619-a8cb-f110f1cdde75.png)

结论:正常使用索引

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813060442-73fa32f9-e0b0-445c-8223-59d1951f6fa9.png)结论：empno字段并没有建立索引，因此也无法用到索引，此字段需要排序！

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813060677-0b678739-e127-4131-8151-762d805cf0bb.png)结论：where 两侧列的顺序可以变换，但是order by列的顺序不能随便变换！

 ![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813060935-8d7260db-0270-4669-9145-d0cbf97dcb72.png)结论：deptid作为过滤条件的字段，无法使用索引，因此排序没法用上索引

### 8.3.3. 方向反，必排序

1)   查看Explian

explain select * from emp where age=45 order by deptid desc, name desc ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813061238-df9aebed-99e3-4dd7-b37e-21ca760e3a52.png)结论：如果可以用上索引的字段都使用正序或者逆序，实际上是没有任何影响的，无非将结果集调换顺序。

explain select * from emp where age=45 order by deptid asc, name desc ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813061509-e0835a26-ee63-4534-82de-6ad4dae6b177.png)结论：如果排序的字段，顺序有差异，就需要将差异的部分，进行一次倒置顺序，因此还是需要手动排序的！

### 8.3.4. 索引的选择

1)   清除emp上面的所有索引，只保留主键索引！

CALL proc_drop_index("mydb","emp");

2)   查询年龄为30岁的，且员工编号小于101000的用户，按用户名称排序

explain SELECT SQL_NO_CACHE * FROM emp WHERE age =30 AND empno <101000 ORDER BY NAME ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813062009-abc78646-3c0f-4ec1-8609-8e888fe2e34f.png)

3)   优化：创建一个此三个字段的复合索引

create index idx_age_empno_name on emp(age,empno,name);

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813062273-f3e13d5c-8b90-4628-b477-654877a44418.png)再次查询，发现using filesort依然存在。empno是范围查询，因此导致了索引失效，所以name字段无法使用索引排序。所以，三个字段的符合索引，没有意义，因为empno和name字段只能选择其一！

4)   解决：要么选择empno,要么选择name

CALL proc_drop_index("mydb","emp");

create index idx_age_name on emp(age,name);

create index idx_age_empno on emp(age,empno);

explain SELECT SQL_NO_CACHE * FROM emp WHERE age =30 AND empno <101000 ORDER BY NAME ;

 

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813062371-ed1d91dd-0686-44dc-a020-4568dc6a17d4.png)原因：所有的排序都是在条件过滤之后才执行的，所以如果条件过滤了大部分数据的话，几百几千条数据进行排序其实并不是很消耗性能，即使索引优化了排序但实际提升性能很有限。 相对的 empno<101000 这个条件如果没有用到索引的话，要对几万条的数据进行扫描，这是非常消耗性能的，使用empno字段的范围查询，过滤性更好（empno从100000开始）！结论： 当范围条件和group by 或者 order by 的字段出现二选一时 ，优先观察条件字段的过滤数量，如果过滤的数据足够多，而需要排序的数据并不多时，优先把索引放在范围字段上。反之，亦然。

### 8.3.5 group by

group by 使用索引的原则几乎跟order by一致 ，唯一区别是groupby 即使没有过滤条件用到索引，也可以直接使用索引。

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813062516-4cf96f93-ad1f-4e07-854c-ae68bcbc3940.png)

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813062690-a9984f65-e425-4b8d-ba59-5bf18a205918.png)

### 8.3.6 使用覆盖索引

简单说就是，select 到 from 之间查询的列 <=使用的索引列+主键

SQL只需要通过索引就可以返回查询所需要的数据，而不必通过二级索引查到主键之后再去查询数据。

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813062828-aaba803b-361b-4883-a4a6-b7bd7db692d3.png)

 

# 第9章 慢查询日志

## 9.1 是什么

MySQL的慢查询日志是MySQL提供的一种日志记录，它用来记录在MySQL中响应时间超过阀值的语句，具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。

具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。long_query_time的默认值为10，意思是运行10秒以上的语句。

 

 

 

由他来查看哪些SQL超出了我们的最大忍耐时间值，比如一条sql执行超过5秒钟，我们就算慢SQL，希望能收集超过5秒的sql，结合之前explain进行全面分析

## 9.2 开启慢查询日志

默认情况下，MySQL数据库没有开启慢查询日志，需要我们手动来设置这个参数。

当然，如果不是调优需要的话，一般不建议启动该参数，因为开启慢查询日志会或多或少带来一定的性能影响。慢查询日志支持将日志记录写入文件

1)   查看慢查询日志是否开启

mysql> show variables like "%slow_query_log%";

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063025-83a6511c-b90a-4a36-864c-1b9589956e2e.png)

2)   开启慢查询日志

mysql> set global slow_query_log =1 ; 

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063160-3857e6de-9941-4872-a66d-569070035919.png)

因为slow_query_log是一个全局变量，因此需要加上 global关键字.

如果要永久生效,需要修改/etc/my.cnf配置文件

[mysqld]

slow_query_log =1  #开启慢查询

slow_query_log_file=/var/lib/mysql/atguigu-slow.log #慢查询日志位置

3)   多久算慢查询

这个是由参数long_query_time控制，默认情况下long_query_time的值为10秒，MySQL会将执行时间大于 long_query_time的SQL记录到日志中。

mysql> show variables like "%long_query_time%";

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063280-fda04d35-b8b4-4b4e-ada2-071668da8302.png)

## 9.3 查看慢查询日志

1)   跟随查询

[root@hadoop205 ~]# tail -f /var/lib/mysql/xxxx.log

2)   通过Mysql方式查看

3) mysql> show status like '%slow_queries%';

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063382-52a1978e-33d1-43d7-8df2-3efea19d8758.png)

4)   日志分析工具mysqldumpslow

l 参数介绍

| -s   | 是表示按照何种方式排序                 |
| ---- | -------------------------------------- |
| c    | 访问次数                               |
| l    | 锁定时间                               |
| r    | 返回记录                               |
| t    | 查询时间                               |
| al   | 平均锁定时间                           |
| ar   | 平均返回记录数                         |
| at   | 平均查询时间                           |
| -t   | 返回前面多少条的数据                   |
| -g   | 后边搭配一个正则表达式，大小写不敏感的 |

l 工作常用参考

| 得到返回记录集最多的10个SQL                                  | mysqldumpslow -s r -t 10 日志文件                 |
| ------------------------------------------------------------ | ------------------------------------------------- |
| 得到访问次数最多的10个SQL                                    | mysqldumpslow -s c -t 10 日志文件                 |
| 得到按照时间排序的前10条里面含有左连接的查询语句             | mysqldumpslow -s t -t 10 -g "left join"  日志文件 |
| 建议在使用这些命令时结合 \| 和more 使用 ，否则有可能出现爆屏情况 | mysqldumpslow -s r -t 10  日志文件 \| more        |

 

 

# 第10 章 视图***

## 10.1 是什么

将一段查询sql封装为一个虚拟的表, 这个虚拟表只保存了sql逻辑，不会保存任何查询结果。

## 10.2 干什么

1)   封装复杂sql语句，提高复用性

2)   逻辑放在数据库上面，更新不需要发布程序，面对频繁的需求变更更灵活

## 10.3  使用

1)   创建视图

CREATE  OR  REPLACE VIEW 视图名 AS  SQL语句

2)   使用视图

select * from 视图名

# 第11章 主从复制

## 11.1 主从复制基本原理

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063595-33c0158d-eba6-4111-b979-7f2c4b0911e2.png)

1)   master将改变记录到二进制日志（binary log）。

这些记录过程叫做二进制日志事件，binary log events；

不管使用何种存储引擎，在server层都可以开启binlog日志功能。binlog会记录所有的逻辑操作，并且是采取追加写的形式，将写操作命令，记录在一个二进制文件中。因此binlog日志通常用于恢复数据，或者是主从复制。

2)   slave将master的binary log events拷贝到它的中继日志（relay log）；

3)   slave重做中继日志中的事件，将改变应用到自己的数据库中。MySQL复制是异步的且串行化的

## 11.2 复制的基本原则

1)    每个slave只有一个master

2)    每个slave只能有一个唯一的服务器ID

3)    每个master可以有多个salve

## 11.3 一主(hadoop100)一从(hadoop101)

1)   修改主机hadoop100的 my.cnf配置文件

 

[mysqld]

server-id=1   #server实例的id

log-bin=/var/lib/mysql/mysql-bin  #log-bin文件存储位置

binlog_format=ROW  # 设置log-bin格式 STATEMENT  ROW  MIXED 

 

\#可选的配置

binlog-ignore-db=mysql # 设置不要复制的数据库

binlog-do-db=xxx # 设置需要复制的主数据库名字

注意:修改完后重启MySQL服务

2)   修改从机hadoop101的my.cnf 配置文件

[mysqld]

server-id=2  #server实例的id

relay-log=mysql-relay  #中继日志

注意:修改完后重启MySQL服务

3)   在主机hadoop100上建立账户并授权从机slave

GRANT REPLICATION SLAVE ON *.* TO 'slave'@'从机器数据库IP' IDENTIFIED BY '密码';

mysql> GRANT REPLICATION SLAVE ON *.* TO 'slave'@'192.168.202.101' IDENTIFIED BY '123456';

 

4)   查询主机hadoop100 的状态

mysql> show master status ;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063726-7b43ce46-95d8-4eda-a740-4e578c42eebb.png)

 注意:记录下File 和Position的值，切记不要再操作主机MySQL，防止主机的File和Position 

   值发生变化

5)   在从机hadoop101上配置需要复制的主机

CHANGE MASTER TO MASTER_HOST='主机IP',

​    MASTER_USER='主机创建好的用户',

​    MASTER_PASSWORD='密码',

​    MASTER_LOG_FILE='File名1字',

​    MASTER_LOG_POS=Position数字;

mysql> CHANGE MASTER TO MASTER_HOST='192.168.202.100',

​    MASTER_USER='slave',

​    MASTER_PASSWORD='123456',

​    MASTER_LOG_FILE='mysql-bin.000001',

​    MASTER_LOG_POS=154;

6)   在从机hadoop101上启动主从复制功能

mysql> start slave;

7)   在从机hadoop101查看主从复制状态

mysql> show slave status\G;

主要查看两个参数:

Slave_IO_Running: Yes

Slave_SQL_Running: Yes

8)   测试主从

在主机hadoop100上新建库、新建表、插入数据，查看从机是否复制

9)   在从机hadoop101停止主从

mysql> stop slave ;

# 第12章 MySQL HA

## 12.1 HA

HA是High Available缩写，是双机集群系统简称，指高可用性集群，是保证业务连续性的有效解决方案，一般有两个或两个以上的节点，且分为活动节点及备用节点.

简单来说就是7*24小时不间断对外提供服务.

## 12.2 MySQL 主从复制

MySQL的HA离不开其主从复制的技术。主从复制是指一台服务器充当主数据库服务器（master），另一台或多台服务器充当从数据库服务器（slave），从服务器（slave）自动向主服务器（master）同步数据。实现MySQL的HA，需使两台服务器互为主从关系。

## 12.3 Keepalived

Keepalived是基于VRRP（Virtual Router Redundancy Protocol，虚拟路由器冗余协议）协议的一款高可用软件。Keepailived有一台主服务器（master）和多台备份服务器（backup），在主服务器和备份服务器上面部署相同的服务配置，使用一个虚拟IP地址对外提供服务，当主服务器出现故障时，虚拟IP地址会自动漂移到备份服务器。

## 12.4 互为主从

在第11章主从复制中的一主一从的基础之上，搭建互为主从.

### 12.4.1 配置主机hadoop101(原从)

1)   修改 /etc/my.cnf

[mysqld]

\#开启binlog

log_bin = /var/lib/mysql/mysql-bin

binlog_format=ROW # 设置log-bin格式 STATEMENT  ROW MIXED

server-id=2  #server实例的id

relay-log=mysql-relay  #中继日志

2)   重启hadoop101的MySQL服务

3)   在主机hadoop101上建立账户并授权从机slave

GRANT REPLICATION SLAVE ON *.* TO 'slave'@'从机器数据库IP' IDENTIFIED BY '密码';

mysql> GRANT REPLICATION SLAVE ON *.* TO 'slave'@'192.168.202.100' IDENTIFIED BY '123456';

4)   查看hadoop101 MySQL的master状态

mysql> show master status;

![img](mysql%E9%AB%98%E7%BA%A7.assets/1585813063874-873fa3fc-ab8f-44f5-af9b-317cde76cb69.png)

注意:记录下File 和Position的值，切记不要再操作主机MySQL，防止主机的File和Position 

   值发生变化

### 12.4.2 配置从机hadoop100(原主)

1)   修改hadoop100上 /etc/my.cnf

[mysqld]

\#MySQL服务器唯一id

server_id = 1

 

\#开启binlog

log_bin = mysql-bin

 

\#开启slave中继日志

relay-log=mysql-relay

2)   重启 hadoop100上的MySQL服务

3)   在从机hadoop100上配置需要复制的主机

​    CHANGE MASTER TO MASTER_HOST='主机IP',

​    MASTER_USER='主机创建好的用户',

​    MASTER_PASSWORD='密码',

​    MASTER_LOG_FILE='File名1字',

​    MASTER_LOG_POS=Position数字;

mysql> CHANGE MASTER TO MASTER_HOST='192.168.202.101',

​    MASTER_USER='slave',

​    MASTER_PASSWORD='123456',

​    MASTER_LOG_FILE='mysql-bin.000001',

​    MASTER_LOG_POS=452

4)   在从机hadoop100上启动主从

mysql> start slave ;

5)   在从机hadoop100上查看slave状态

mysql> show slave status\G;

主要查看两个参数:

Slave_IO_Running: Yes

Slave_SQL_Running: Yes

6)   测试主从

在主机hadoop101上创建库，创建表，插入数据,查看从机是否复制

7)   在从机hadoop100上停止主从

mysql> stop slave;

## 12.5 搭建MySQL HA

### 12.5.1 安装 Keepalived

1)   分别在hadoop100 和 hadoop101上安装 keepalived

[root@hadoop100 ~] yum install -y keepalived

[root@hadoop101 ~] yum install -y keepalived

2)   分别在hadoop100 和 hadoop101上配置 /etc/keepalived/keepalived.conf

l hadoop100

! Configuration File for keepalived

global_defs {

  router_id MySQL-HA

}

vrrp_instance VI_1 {

  state master #初始状态

  interface eth0 #网卡

  virtual_router_id 51 #虚拟路由id

  priority 100 #优先级

  advert_int 1 #Keepalived心跳间隔

  nopreempt #只在高优先级配置，原master恢复之后不重新上位

  authentication {

​    auth_type PASS #认证相关

​    auth_pass 1111

  }

  virtual_ipaddress {

​    192.168.202.222 #虚拟ip

  }

}

 

\#声明虚拟服务器

virtual_server 192.168.202.222 3306 {

  delay_loop 6

  persistence_timeout 30

  protocol TCP

  \#声明真实服务器

  real_server 192.168.202.100 3306 {

​    notify_down /var/lib/mysql/killkeepalived.sh #真实服务故障后调用脚本

​    TCP_CHECK {

​      connect_timeout 3 #超时时间

​      nb_get_retry 1 #重试次数

​      delay_before_retry 1 #重试时间间隔

​    }

  }

}

l hadoop101

! Configuration File for keepalived

global_defs {

  router_id MySQL-HA

}

vrrp_instance VI_1 {

  state master #初始状态

  interface eth0 #网卡

  virtual_router_id 51 #虚拟路由id

  priority 100 #优先级

  advert_int 1 #Keepalived心跳间隔

  nopreempt #只在高优先级配置，原master恢复之后不重新上位

  authentication {

​    auth_type PASS #认证相关

​    auth_pass 1111

  }

  virtual_ipaddress {

​    192.168.202.222 #虚拟ip

  }

}

 

\#声明虚拟服务器

virtual_server 192.168.202.222 3306 {

  delay_loop 6

  persistence_timeout 30

  protocol TCP

  \#声明真实服务器

  real_server 192.168.202.101 3306 {

​    notify_down /var/lib/mysql/killkeepalived.sh #真实服务故障后调用脚本

​    TCP_CHECK {

​      connect_timeout 3 #超时时间

​      nb_get_retry 1 #重试次数

​      delay_before_retry 1 #重试时间间隔

​    }

  }

}

3)   分别在hadoop100和 hadoop101上编辑脚本文件 /var/lib/mysql/killkeepalived.sh

\#! /bin/bash

service keepalived stop

​    赋予脚本执行权限

chmod 777 /var/lib/mysql/killkeepalived.sh

4)   分别在hadoop100 和 hadoop101上启动 Keepalived服务

[root@hadoop100 ~] service keepalived start

[root@hadoop101 ~] service keepalived start

5)   测试MySQL HA