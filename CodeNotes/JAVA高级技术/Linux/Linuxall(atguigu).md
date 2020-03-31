# 第1章 Linux入门

## 1.1 概述

如图1-1所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659080312-fe333ca3-b04d-4099-9a98-571cc44c04b4.jpeg)

图1-1 Linux概述

## 1.2 Linux和Windows区别

如图1-2所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659080494-b5a3c6aa-673b-4d09-b914-ca38e1963c91.jpeg)

图1-2 Linux和Windows的区别

## 1.3 CentOS下载地址

如图1-3所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659080644-c898c37c-ccd3-4670-8929-d36eae23ab14.jpeg)

图1-3 Centos的下载地址

# 第2章 VM与Linux的安装

## 2.1 VMWare安装

[安装VMware Workstation.docx](https://www.yuque.com/ruicyquan/bu05ox/安装VMware Workstation.docx)

## 2.2 CentOS安装

[安装CentOS.docx](https://www.yuque.com/ruicyquan/bu05ox/安装CentOS.docx)

# 第3章 Linux文件与目录结构

## 3.1 Linux文件

Linux系统中一切皆文件。

## 3.2 Linux目录结构

如图3-1所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659080799-50f3df58-6a6a-4f22-98c7-91ecf46fd26a.jpeg)

图3-1 Linux目录结构

 

Linux目录结构简介，如图3-2，3-3，3-4，3-5，3-6所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659080993-f6190b8a-8f7a-4da2-9a0a-8200dd39df45.jpeg)

图3-2 Linux目录结构

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659081148-19663990-87e4-41b8-9476-3137cbb5aaab.jpeg)

图3-3 Linux目录结构

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659081312-d1be7713-0ef9-46b5-b69a-9a95c796e5ee.jpeg)

图3-4 Linux目录结构

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659081457-d79e32f0-98f7-4b27-80d4-b2a86e73b53c.jpeg)

图3-5 Linux目录结构

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659081589-b1bba810-cb2d-4639-8161-c33842f8cc16.jpeg)

图3-6 Linux目录结构

# 第4章 VI/VIM编辑器

## 4.1 是什么

VI是Unix操作系统和类Unix操作系统中最通用的文本编辑器。

VIM编辑器是从VI发展出来的一个性能更强大的文本编辑器。可以主动的以字体颜色辨别语法的正确性，方便程序设计。VIM与VI编辑器完全兼容。

## 4.2 测试数据准备

1）拷贝/etc/smartd.conf数据到/root目录下

[root@hadoop100 桌面]# cp /etc/smartd.conf /root

[root@hadoop100 桌面]# cd /root/

## 4.3 一般模式

以vi打开一个档案就直接进入一般模式了（这是默认的模式）。在这个模式中， 你可以使用『上下左右』按键来移动光标，你可以使用『删除字符』或『删除整行』来处理档案内容， 也可以使用『复制、贴上』来处理你的文件数据。

表4-1常用语法

| 语法          | 功能描述                      |
| ------------- | ----------------------------- |
| yy            | 复制光标当前一行              |
| y数字y        | 复制一段（从第几行到第几行）  |
| p             | 箭头移动到目的行粘贴          |
| u             | 撤销上一步                    |
| dd            | 删除光标当前行                |
| d数字d        | 删除光标（含）后多少行        |
| x             | 删除一个字母，相当于del       |
| X             | 删除一个字母，相当于Backspace |
| yw            | 复制一个词                    |
| dw            | 删除一个词                    |
| shift+^       | 移动到行头                    |
| shift+$       | 移动到行尾                    |
| 1+shift+g     | 移动到页头，数字              |
| shift+g       | 移动到页尾                    |
| 数字N+shift+g | 移动到目标行                  |

vi/vim键盘图，如4-1所示

**![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659081722-db6e7c45-03df-41ce-a46b-1d1240b4f33c.jpeg)**

图4-1 vi/vim键盘图

## 4.4 编辑模式

在一般模式中可以进行删除、复制、粘贴等的动作，但是却无法编辑文件内容的！要等到你按下『i, I, o, O, a, A』等任何一个字母之后才会进入编辑模式。

注意了！通常在Linux中，按下这些按键时，在画面的左下方会出现『INSERT或 REPLACE』的字样，此时才可以进行编辑。而如果要回到一般模式时， 则必须要按下『Esc』这个按键即可退出编辑模式。

1．进入编辑模式

表4-2 常用语法

| 按键 | 功能               |
| ---- | ------------------ |
| i    | 当前光标前         |
| a    | 当前光标后         |
| o    | 当前光标行的下一行 |
| I    | 光标所在行最前     |
| A    | 光标所在行最后     |
| O    | 当前光标行的上一行 |

2．退出编辑模式

按『Esc』键

## 4.5 指令模式

在一般模式当中，输入『 : / ?』3个中的任何一个按钮，就可以将光标移动到最底下那一行。

在这个模式当中， 可以提供你『搜寻资料』的动作，而读取、存盘、大量取代字符、离开 vi 、显示行号等动作是在此模式中达成的！

1．基本语法

表4-3

| 命令          | 功能                             |
| ------------- | -------------------------------- |
| :w            | 保存                             |
| :q            | 退出                             |
| :!            | 强制执行                         |
| /要查找的词   | n 查找下一个，N 往上查找         |
| ? 要查找的词  | n是查找上一个，shift+n是往下查找 |
| :set nu       | 显示行号                         |
| :set nonu     | 关闭行号                         |
| :%s/old/new/g | 替换内容                         |

2．案例实操

（1）强制保存退出

:wq!

## 4.6 模式间转换

如图4-2所示。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659081872-87d94b87-40ed-45a2-b9f3-cf148b7459c4.jpeg)

图 4-2 模式间的转换

# 第5章 网络配置和系统管理操作

## 5.1 查看网络IP 和 网关

1．查看虚拟网络编辑器，如图5-1所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659082024-60d1a4ec-44ff-4496-b1fd-586bc858fbed.jpeg)

图5-1 查看虚拟网络编辑器

2．修改虚拟网卡Ip，如图5-2所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659082239-06b67bb8-8532-4326-9c7e-7d2d610eefb7.jpeg)

图5-2 修改虚拟网卡ip

3．查看网关，如图5-3所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659082393-71b46ef6-9509-473f-9895-96b850ca2bb9.jpeg)

图5-3 查看网关

\4.  查看windows环境的中VMnet8网络配置，如图5-4所示

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659082540-9613d6c8-650c-48ce-a6b1-0a3c0217fac8.jpeg)

图5-4 windows中VMnet8网络配置

## 5.2 配置网络ip地址

### 5.2.1 ifconfig 配置网络接口

ifconfig :network interfaces configuring网络接口配置

1．基本语法

ifconfig     （功能描述：显示所有网络接口的配置信息）

\2. 案例实操

​    （1）查看当前网络ip

[root@hadoop100 桌面]# ifconfig

### 5.2.2 ping 测试主机之间网络连通性

\1. 基本语法

​    ping 目的主机   （功能描述：测试当前服务器是否可以连接目的主机）

\2. 案例实操

​    （1）测试当前服务器是否可以连接百度

[root@hadoop100 桌面]# ping [www.baidu.com](http://www.baidu.com)

### 5.2.3 修改IP地址

\1. 查看IP配置文件，如图5-5所示

[root@hadoop100 桌面]#vim /etc/sysconfig/network-scripts/ifcfg-ens33

 

![img](Linuxall(atguigu).assets/1585659082654-eb062347-f31b-44ea-9620-1f94a8750051.jpeg)

图 5-5 查看IP配置文件

以下标红的项必须修改，有值的按照下面的值修改，没有该项的要增加。

TYPE="Ethernet"  #网络类型（通常是Ethemet）

PROXY_METHOD="none"

BROWSER_ONLY="no"

BOOTPROTO="dhcp"  #IP的配置方法[none|static|bootp|dhcp]（引导时不 使用协议|静态分配IP|BOOTP协议|DHCP协议）

DEFROUTE="yes"

IPV4_FAILURE_FATAL="no"

IPV6INIT="yes"

IPV6_AUTOCONF="yes"

IPV6_DEFROUTE="yes"

IPV6_FAILURE_FATAL="no"

IPV6_ADDR_GEN_MODE="stable-privacy"

NAME="ens33" 

UUID="e83804c1-3257-4584-81bb-660665ac22f6"  #随机id

DEVICE="ens33"  #接口名（设备,网卡）

ONBOOT="yes"  #系统启动的时候网络接口是否有效（yes/no）

\#IP地址

IPADDR=192.168.202.100 

\#网关 

GATEWAY=192.168.202.2   

\#域名解析器

DNS1=192.168.202.2

​    修改后，如图5-6所示

  ![img](Linuxall(atguigu).assets/1585659082793-fade6a66-865b-4a6b-ba62-34da519e5c59.jpeg)

图5-6 IP修改后

  编辑完后，按键盘esc ，然后输入 :wq 回车即可。

\2. 执行service network restart 重启网络,如图5-7所示

![img](Linuxall(atguigu).assets/1585659082929-20ec805b-b5f5-45a2-b237-c698c8469b74.jpeg)

图5-7 重启网络

## 5.3 配置主机名

### 5.3.1 修改主机名称

\1. 基本语法

hostname    （功能描述：查看当前服务器的主机名称）

\2. 案例实操

​    （1）查看当前服务器主机名称

[root@hadoop100 桌面]# hostname

​    （2）如果感觉此主机名不合适，我们可以进行修改。通过编辑/etc/hostname文件

[root@hadoop100 桌面]# vi /etc/hostname

​     修改完成后重启生效。    

### 5.3.2 修改hosts映射文件

\1. 修改linux的主机映射文件（hosts文件）

  后续在hadoop阶段，虚拟机会比较多，配置时通常会采用主机名的方式配置， 

  比较简单方便。 不用刻意记ip地址。

（1）打开/etc/hosts

[root@hadoop100 桌面]# vim /etc/hosts

添加如下内容

192.168.202.100 hadoop100

192.168.202.101 hadoop101

192.168.202.102 hadoop102

192.168.202.103 hadoop103

192.168.202.104 hadoop104

192.168.202.105 hadoop105

（2）重启设备，重启后，查看主机名，已经修改成功

\2. 修改windows7的主机映射文件（hosts文件）

​    （1）进入C:\Windows\System32\drivers\etc路径

​    （2）打开hosts文件并添加如下内容

192.168.202.100 hadoop100

   192.168.202.101 hadoop101

192.168.202.102 hadoop102

192.168.202.103 hadoop103

192.168.202.104 hadoop104

192.168.202.105 hadoop105

\3. 修改window10的主机映射文件（hosts文件）

（1）进入C:\Windows\System32\drivers\etc路径

（2）拷贝hosts文件到桌面

​    （3）打开桌面hosts文件并添加如下内容

192.168.202.100 hadoop100

   192.168.202.101 hadoop101

192.168.202.102 hadoop102

192.168.202.103 hadoop103

192.168.202.104 hadoop104

192.168.202.105 hadoop105

（4）将桌面hosts文件覆盖C:\Windows\System32\drivers\etc路径hosts文件

## 5.4 关闭防火墙

### 5.4.1 service

\1. 基本语法

​    service 服务名 start | stop | restart | status

\2. 经验技巧

​     查看服务的方法：/etc/init.d/服务名 ,发现只有两个服务保留在service

[root@hadoop100 init.d]# pwd

/etc/init.d

[root@hadoop100 init.d]# ls -al

drwxr-xr-x. 2 root root 4096 3月 19 15:24 .

drwxr-xr-x. 10 root root 4096 3月 19 15:24 ..

-rw-r--r--. 1 root root 18104 1月  3 2018 functions

-rwxr-xr-x. 1 root root 4334 1月  3 2018 netconsole

-rwxr-xr-x. 1 root root 7293 1月  3 2018 network

-rw-r--r--. 1 root root 1160 4月 11 2018 README

\3. 案例实操

（1）查看网络服务的状态

[root@hadoop100 桌面]#service network status

（2）停止网络服务

[root@hadoop100 桌面]#service network stop

（3）启动网络服务

[root@hadoop100 桌面]#service network start

（4）重启网络服务

[root@hadoop100 桌面]#service network restart

### 5.4.2 chkconfig 设置后台服务的自启配置

\1. 基本语法

chkconfig           （功能描述：查看所有服务器自启配置）

chkconfig 服务名 off  （功能描述：关掉指定服务的自动启动）

chkconfig 服务名 on  （功能描述：开启指定服务的自动启动）

chkconfig 服务名 --list （功能描述：查看服务开机启动状态）

\2. 案例实操

（1）开启/关闭iptables(防火墙)服务的自动启动

[root@hadoop100 桌面]#chkconfig iptables on 

 

[root@hadoop100 桌面]#chkconfig iptables off

 

（2）开启/关闭 iptables服务指定级别的自动启动

[root@hadoop100 桌面]#chkconfig --level 指定级别 iptables on

[root@hadoop100 桌面]#chkconfig --level 指定级别 iptables off

 

### 5.4.3 systemctl

\1. 基本语法

​    systemctl start | stop | restart | status   服务名

\2. 经验技巧

​     查看服务的方法：/usr/lib/systemd/system  

[root@hadoop100 system]# pwd

/usr/lib/systemd/system

[root@hadoop100 init.d]# ls -al

-rw-r--r--. 1 root root 275 4月 27 2018 abrt-ccpp.service

-rw-r--r--. 1 root root 380 4月 27 2018 abrtd.service

-rw-r--r--. 1 root root 361 4月 27 2018 abrt-oops.service

-rw-r--r--. 1 root root 266 4月 27 2018 abrt-pstoreoops.service

-rw-r--r--. 1 root root 262 4月 27 2018 abrt-vmcore.service

-rw-r--r--. 1 root root 311 4月 27 2018 abrt-xorg.service

-rw-r--r--. 1 root root 751 4月 11 2018 accounts-daemon.service

-rw-r--r--. 1 root root 527 3月 25 2017 alsa-restore.service

-rw-r--r--. 1 root root 486 3月 25 2017 alsa-state.service

……

\3. 案例实操

（1）查看防火墙服务的状态

[root@hadoop100 桌面]# systemctl status firewalld

（2）停止防火墙服务

[root@hadoop100 桌面]# systemctl stop firewalld

（3）启动防火墙服务

[root@hadoop100 桌面]# systemctl start firewalld

（4）重启防火墙服务

[root@hadoop100 桌面]# systemctl restart firewalld 

### 5.4.4 systemctl 设置后台服务的自启配置

\1. 基本语法

systemctl list-unit-files     （功能描述：查看服务开机启动状态）

systemctl disable service_name （功能描述：关掉指定服务的自动启动）

systemctl enable service_name  （功能描述：开启指定服务的自动启动）

\2. 案例实操

（1）开启/关闭iptables(防火墙)服务的自动启动

[root@hadoop100 桌面]# systemctl enable firewalld.service

 

[root@hadoop100 桌面]# systemctl disable firewalld.service

 

 

### 5.4.5 进程运行级别

\1.    Linux进程运行级别[CentOS6]，如图5-8所示

![img](Linuxall(atguigu).assets/1585659083083-68dc77bf-7496-4109-8fc3-8a138a917224.jpeg)

图 5-8 Linux进程运行级别

\2.    CentOS7的运行级别简化为: 

​    multi-user.target 等价于原运行级别3（多用户有网，无图形界面）

​    multi-user.target 等价于原运行级别5（多用户有网，有图形界面

 

\3.    查看默认的运行级别:

[root@hadoop100桌面]# vim /etc/inittab

 

\# inittab is no longer used when using systemd.

\#

\# ADDING CONFIGURATION HERE WILL HAVE NO EFFECT ON YOUR SYSTEM.

\#

\# Ctrl-Alt-Delete is handled by /usr/lib/systemd/system/ctrl-alt-del.target

\#

\# systemd uses 'targets' instead of runlevels. By default, there are two main targets:

\#

\# multi-user.target: analogous to runlevel 3

\# graphical.target: analogous to runlevel 5

\#

\# To view current default target, run:

\# systemctl get-default

\#

\# To set a default target, run:

\# systemctl set-default TARGET.target

\#

 

### 5.4.6 关闭防火墙

\1. 临时关闭防火墙

（1）查看防火墙状态

[root@hadoop100桌面]# systemctl status firewalld

（2）临时关闭防火墙

[root@hadoop100桌面]# systemctl stop firewalld

2．开机启动时关闭防火墙

（1）查看防火墙开机启动状态

[root@hadoop100桌面]# systemctl enable firewalld.service

（2）设置开机时关闭防火墙

[root@hadoop100桌面]# systemctl disable firewalld.service

## 5.5 关机重启命令

在linux领域内大多用在服务器上，很少遇到关机的操作。毕竟服务器上跑一个服务是永无止境的，除非特殊情况下，不得已才会关机。

正确的关机流程为：sync > shutdown > reboot > halt

\1. 基本语法

​    （1）sync          （功能描述：将数据由内存同步到硬盘中）

（2）halt           （功能描述：关闭系统，等同于shutdown -h now 和 poweroff）

（3）reboot         （功能描述：就是重启，等同于 shutdown -r now）

​    （4）shutdown [选项] 时间

表5-1

| 选项 | 功能          |
| ---- | ------------- |
| -h   | -h=halt关机   |
| -r   | -r=reboot重启 |

表5-2

| 参数 | 功能                               |
| ---- | ---------------------------------- |
| now  | 立刻关机                           |
| 时间 | 等待多久后关机（时间单位是分钟）。 |

\2. 经验技巧

​    Linux系统中为了提高磁盘的读写效率，对磁盘采取了 “预读迟写”操作方式。当用户保存文件时，Linux核心并不一定立即将保存数据写入物理磁盘中，而是将数据保存在缓冲区中，等缓冲区满时再写入磁盘，这种方式可以极大的提高磁盘写入数据的效率。但是，也带来了安全隐患，如果数据还未写入磁盘时，系统掉电或者其他严重问题出现，则将导致数据丢失。使用sync指令可以立即将缓冲区的数据写入磁盘。

3．案例实操

（1）将数据由内存同步到硬盘中

[root@hadoop100桌面]#sync  

（2）重启

[root@hadoop100桌面]# reboot

（3）关机

[root@hadoop100桌面]#halt

（4）计算机将在1分钟后关机，并且会显示在登录用户的当前屏幕中

[root@hadoop100桌面]#shutdown -h 1 ‘This server will shutdown after 1 mins’

（5）立马关机（等同于 halt）

[root@hadoop100桌面]# shutdown -h now

（6）系统立马重启（等同于 reboot）

[root@hadoop100桌面]# shutdown -r now

## 5.6 找回root密码

 1．重启Linux，见到下图，通过键盘上下方向键选择第一个

![img](Linuxall(atguigu).assets/1585659083227-28643f9e-3085-41fe-bc55-1e93c6e7e3df.jpeg)

图5-8

2．按e，出现如图5-9所示的界面

![img](Linuxall(atguigu).assets/1585659083360-c75dc80a-e7de-4d1d-95b0-c3bae8bbc464.jpeg)

图5-9 

3．定位到LANG=zh_CN.UTF-8,后面追加 init=/bin/sh， 如图5-10所示

![img](Linuxall(atguigu).assets/1585659083515-7e17d1e4-5c5c-4550-9413-b5908ed93e8d.jpeg)

图5-10

4．键盘ctrl+x进行引导启动,进入如下界面，如图5-11所示

![img](Linuxall(atguigu).assets/1585659083656-9250ea1e-b1ad-48d8-8a3a-8577a444d202.jpeg)

图5-11

5． 挂载根目录 ，如图5-12

![img](Linuxall(atguigu).assets/1585659083757-a46a454c-e5ce-4f02-9952-569147f4606c.jpeg)

图5-12

6． 选择要修改密码的用户名，passwd root, 然后输入两次一致的密码，依次回车。

  注意: 输入密码不显示，一定要确认输入正确.

![img](Linuxall(atguigu).assets/1585659083885-0993660b-9561-4647-a67f-6a0269b410d0.jpeg)

图5-13

7． 更新系统信息 touch /.autorelabel ，如图5-14所示

![img](Linuxall(atguigu).assets/1585659084013-1e347453-bd96-4c34-9c83-66998b7497f3.jpeg)

 

图5-14

8．最后输入exec /sbin/init 命令重启系统即可,如图5-15所示

![img](Linuxall(atguigu).assets/1585659084124-9506c136-f75f-4db3-a550-1cfdbffe01dc.jpeg)

图5-15

9． 进入登录界面，输入修改后的密码登录即可。

 

# 第6章 远程登录

通常在工作过程中，公司中使用的真实服务器或者是云服务器，都不允许除运维人员之外的员工直接接触，因此就需要通过远程登录的方式来操作。所以，远程登录工具就是必不可缺的，目前，比较主流的有Xshell, SSH Secure Shell, SecureCRT,FinalShell等，本人比较推荐国产软件Finalshell,同学们可以根据自己的习惯自行选择.

## 6.1 安装使用Finalshell

[安装FinalShell.docx](https://www.yuque.com/ruicyquan/bu05ox/安装FinalShell.docx)

# 第7章 常用基本命令

## 7.1 帮助命令

### 7.1.1 man 获得帮助信息

\1. 基本语法

​    man [命令或配置文件]    （功能描述：获得帮助信息）

2．显示说明

​    表7-1

| 信息        | 功能                     |
| ----------- | ------------------------ |
| NAME        | 命令的名称和单行描述     |
| SYNOPSIS    | 怎样使用命令             |
| DESCRIPTION | 命令功能的深入讨论       |
| EXAMPLES    | 怎样使用命令的例子       |
| SEE ALSO    | 相关主题（通常是手册页） |

3．案例实操

​    （1）查看ls命令的帮助信息

[root@hadoop101 ~]# man ls

### 7.1.2 help 获得shell内置命令的帮助信息

1．基本语法

​    help 命令   （功能描述：获得shell内置命令的帮助信息）

2．案例实操

​    （1）查看cd命令的帮助信息

[root@hadoop101 ~]# help cd

### 7.1.3 常用快捷键

​       表7-2 常用快捷键

| 常用快捷键  | 功能                         |
| ----------- | ---------------------------- |
| ctrl + c    | 停止进程                     |
| ctrl+l      | 清屏；彻底清屏是：reset      |
| ctrl + q    | 退出                         |
| 善于用tab键 | 提示(更重要的是可以防止敲错) |
| 上下键      | 查找执行过的命令             |
| ctrl +alt   | linux和Windows之间切换       |

## 7.2 文件目录类

### 7.2.1 pwd 显示当前工作目录的绝对路径

pwd:print working directory 打印工作目录

1．基本语法

pwd    （功能描述：显示当前工作目录的绝对路径）

2．案例实操

​    （1）显示当前工作目录的绝对路径

[root@hadoop101 ~]# pwd

/root

### 7.2.2 ls 列出目录的内容

ls:list 列出目录内容

1．基本语法

ls [选项] [目录或是文件]

2．选项说明

​    表7-3 选项说明

| 选项 | 功能                                                      |
| ---- | --------------------------------------------------------- |
| -a   | 全部的文件，连同隐藏档( 开头为 . 的文件) 一起列出来(常用) |
| -l   | 长数据串列出，包含文件的属性与权限等等数据；(常用)        |

3．显示说明

每行列出的信息依次是： 文件类型与权限 链接数 文件属主 文件属组 文件大小用byte来表示 建立或最近修改的时间 名字 

4．案例实操

​    （1）查看当前目录的所有内容信息

[atguigu@hadoop101 ~]$ ls -al

总用量 44

drwx------. 5 atguigu atguigu 4096 5月 27 15:15 .

drwxr-xr-x. 3 root  root  4096 5月 27 14:03 ..

drwxrwxrwx. 2 root  root  4096 5月 27 14:14 hello

-rwxrw-r--. 1 atguigu atguigu  34 5月 27 14:20 test.txt

### 7.2.3 cd 切换目录

cd:Change Directory切换路径

1．基本语法

​    cd [参数]

2．参数说明

表7-4参数说明

| 参数        | 功能                                 |
| ----------- | ------------------------------------ |
| cd 绝对路径 | 切换路径                             |
| cd相对路径  | 切换路径                             |
| cd ~或者cd  | 回到自己的家目录                     |
| cd -        | 回到上一次所在目录                   |
| cd ..       | 回到当前目录的上一级目录             |
| cd -P       | 跳转到实际物理路径，而非快捷方式路径 |

3．案例实操

（1）使用绝对路径切换到root目录

[root@hadoop101 ~]# cd /root/

（2）使用相对路径切换到“公共的”目录

[root@hadoop101 ~]# cd 公共的/

（3）表示回到自己的家目录，亦即是 /root 这个目录

[root@hadoop101 公共的]# cd ~

（4）cd- 回到上一次所在目录

[root@hadoop101 ~]# cd -

（5）表示回到当前目录的上一级目录，亦即是 “/root/公共的”的上一级目录的意思；

[root@hadoop101 公共的]# cd ..

### 7.2.4 mkdir 创建一个新的目录

mkdir:Make directory 建立目录

1．基本语法

​    mkdir [选项] 要创建的目录

2．选项说明

表7-5 选项说明

| 选项 | 功能         |
| ---- | ------------ |
| -p   | 创建多层目录 |

3．案例实操

（1）创建一个目录

[root@hadoop101 ~]# mkdir xiyou

[root@hadoop101 ~]# mkdir xiyou/mingjie

（2）创建一个多级目录

[root@hadoop101 ~]# mkdir -p xiyou/dssz/meihouwang

### 7.2.5 rmdir 删除一个空的目录

*rmdir*:Remove directory 移动目录

1．基本语法：

​    rmdir 要删除的空目录

2．案例实操

​    （1）删除一个空的文件夹

[root@hadoop101 ~]# rmdir xiyou/dssz/meihouwang

### 7.2.6 touch 创建空文件

1．基本语法

​    touch 文件名称

2．案例实操

[root@hadoop101 ~]# touch xiyou/dssz/sunwukong.txt

### 7.2.7 cp 复制文件或目录

1．基本语法

cp [选项] source dest             （功能描述：复制source文件到dest）

2．选项说明

表7-6 选项说明

| 选项 | 功能               |
| ---- | ------------------ |
| -r   | 递归复制整个文件夹 |

3．参数说明

表7-7 参数说明

| 参数   | 功能     |
| ------ | -------- |
| source | 源文件   |
| dest   | 目标文件 |

4．经验技巧

​    强制覆盖不提示的方法：\cp

5．案例实操

（1）复制文件

 [root@hadoop101 ~]# cp xiyou/dssz/suwukong.txt xiyou/mingjie/

（2）递归复制整个文件夹

 [root@hadoop101 ~]# cp -r xiyou/dssz/ ./

### 7.2.8 rm 移除文件或目录

1．基本语法

rm [选项] deleteFile          （功能描述：递归删除目录中所有内容）

2．选项说明

表7-8 选项说明

| 选项 | 功能                                     |
| ---- | ---------------------------------------- |
| -r   | 递归删除目录中所有内容                   |
| -f   | 强制执行删除操作，而不提示用于进行确认。 |
| -v   | 显示指令的详细执行过程                   |

\3. 案例实操

（1）删除目录中的内容

[root@hadoop101 ~]# rm xiyou/mingjie/sunwukong.txt

（2）递归删除目录中所有内容

[root@hadoop101 ~]# rm -rf dssz/

### 7.2.9 mv 移动文件与目录或重命名

1．基本语法

​    （1）mv oldNameFile newNameFile  （功能描述：重命名）

​    （2）mv /temp/movefile /targetFolder （功能描述：移动文件）

2．案例实操

（1）重命名

[root@hadoop101 ~]# mv xiyou/dssz/suwukong.txt xiyou/dssz/houge.txt

（2）移动文件

[root@hadoop101 ~]# mv xiyou/dssz/houge.txt ./

### 7.2.10 cat 查看文件内容

查看文件内容，从第一行开始显示。

1．基本语法

​    cat [选项] 要查看的文件

2．选项说明

表7-9

| 选项 | 功能描述                     |
| ---- | ---------------------------- |
| -n   | 显示所有行的行号，包括空行。 |

3．经验技巧

一般查看比较小的文件，一屏幕能显示全的。

4．案例实操

​    （1）查看文件内容并显示行号

[atguigu@hadoop101 ~]$ cat -n houge.txt

### 7.2.11 more 文件内容分屏查看器

more指令是一个基于VI编辑器的文本过滤器，它以全屏幕的方式按页显示文本文件的内容。more指令中内置了若干快捷键，详见操作说明。

1．基本语法

​    more 要查看的文件

2．操作说明

表7-10 操作说明

| 操作           | 功能说明                                 |
| -------------- | ---------------------------------------- |
| 空白键 (space) | 代表向下翻一页；                         |
| Enter          | 代表向下翻『一行』；                     |
| q              | 代表立刻离开 more ，不再显示该文件内容。 |
| Ctrl+F         | 向下滚动一屏                             |
| Ctrl+B         | 返回上一屏                               |
| =              | 输出当前行的行号                         |
| :f             | 输出文件名和当前行的行号                 |

3．案例实操

​    （1）采用more查看文件

[root@hadoop101 ~]# more smartd.conf

### 7.2.12 less 分屏显示文件内容

​    less指令用来分屏查看文件内容，它的功能与more指令类似，但是比more指令更加强大，支持各种显示终端。less指令在显示文件内容时，并不是一次将整个文件加载之后才显示，而是根据显示需要加载内容，对于显示大型文件具有较高的效率。

1．基本语法

​    less 要查看的文件

2．操作说明

表7-11 操作说明

| 操作       | 功能说明                                           |
| ---------- | -------------------------------------------------- |
| 空白键     | 向下翻动一页；                                     |
| [pagedown] | 向下翻动一页                                       |
| [pageup]   | 向上翻动一页；                                     |
| /字串      | 向下搜寻『字串』的功能；n：向下查找；N：向上查找； |
| ?字串      | 向上搜寻『字串』的功能；n：向上查找；N：向下查找； |
| q          | 离开 less 这个程序；                               |

\3.   经验技巧

用SecureCRT时[pagedown]和[pageup]可能会出现无法识别的问题。

4．案例实操

​    （1）采用less查看文件

[root@hadoop101 ~]# less smartd.conf

### 7.2.13 echo

echo输出内容到控制台

\1.   基本语法

​       echo [选项] [输出内容]

选项：

 -e： 支持反斜线控制的字符转换

| 控制字符 | 作用                |
| -------- | ------------------- |
| \\       | 输出\本身           |
| \n       | 换行符              |
| \t       | 制表符，也就是Tab键 |

\2.   案例实操

[atguigu@hadoop101 ~]$ echo "hello\tworld"

hello\tworld

[atguigu@hadoop101 ~]$ echo -e "hello\tworld"

hello   world

### 7.2.14 head 显示文件头部内容

head用于显示文件的开头部分内容，默认情况下head指令显示文件的前10行内容。

\1.   基本语法

head 文件      （功能描述：查看文件头10行内容）

head -n 5 文件   （功能描述：查看文件头5行内容，5可以是任意行数）

2．选项说明

表7-12

| 选项     | 功能                   |
| -------- | ---------------------- |
| -n<行数> | 指定显示头部内容的行数 |

3．案例实操

​    （1）查看文件的头2行

[root@hadoop101 ~]# head -n 2 smartd.conf

### 7.2.15 tail 输出文件尾部内容

tail用于输出文件中尾部的内容，默认情况下tail指令显示文件的后10行内容。

\1.  基本语法

（1）tail 文件          （功能描述：查看文件尾部10行内容）

（2）tail -n 5 文件    （功能描述：查看文件尾部5行内容，5可以是任意行数）

（3）tail -f 文件      （功能描述：实时追踪该文档的所有更新）

2． 选项说明

表7-13

| 选项     | 功能                                 |
| -------- | ------------------------------------ |
| -n<行数> | 输出文件尾部n行内容                  |
| -f       | 显示文件最新追加的内容，监视文件变化 |

3．案例实操

（1）查看文件尾1行内容

[root@hadoop101 ~]# tail -n 1 smartd.conf

（2）实时追踪该档的所有更新

[root@hadoop101 ~]# tail -f houge.txt

### 7.2.16 > 输出重定向和 >> 追加

1．基本语法

（1）ls -l > 文件       （功能描述：列表的内容写入文件a.txt中（**覆盖写**））

（2）ls -al >> 文件     （功能描述：列表的内容**追加**到文件aa.txt的末尾）

（3）cat 文件1 > 文件2  （功能描述：将文件1的内容覆盖到文件2）

（4）echo “内容” >> 文件

2．案例实操

（1）将ls查看信息写入到文件中

[root@hadoop101 ~]# ls -l>houge.txt

（2）将ls查看信息追加到文件中

[root@hadoop101 ~]# ls -l>>houge.txt

（3）采用echo将hello单词追加到文件中

[root@hadoop101 ~]# echo hello>>houge.txt

### 7.2.17 ln 软链接

软链接也成为符号链接，类似于windows里的快捷方式，有自己的数据块，主要存放了链接其他文件的路径。

1．基本语法

ln -s [原文件或目录] [软链接名]    （功能描述：给原文件创建一个软链接）

2．经验技巧

删除软链接： rm -rf 软链接名，而不是rm -rf 软链接名/

查询：通过ll就可以查看，列表属性第1位是l，尾部会有位置指向。

3．案例实操

​    （1）创建软连接

[root@hadoop101 ~]# mv houge.txt xiyou/dssz/

[root@hadoop101 ~]# ln -s xiyou/dssz/houge.txt ./houzi

[root@hadoop101 ~]# ll

lrwxrwxrwx. 1 root  root   20 6月 17 12:56 houzi -> xiyou/dssz/houge.txt

（2）删除软连接

[root@hadoop101 ~]# rm -rf houzi

（3）进入软连接实际物理路径

[root@hadoop101 ~]# ln -s xiyou/dssz/ ./dssz

[root@hadoop101 ~]# cd -P dssz/

### 7.2.18 history 查看已经执行过历史命令

1．基本语法

​    history                    （功能描述：查看已经执行过历史命令）

2．案例实操

​    （1）查看已经执行过的历史命令

[root@hadoop101 test1]# history

## 7.3 时间日期类

1．基本语法

date [OPTION]... [+FORMAT]

2．选项说明

表7-14

| 选项           | 功能                                           |
| -------------- | ---------------------------------------------- |
| -d<时间字符串> | 显示指定的“时间字符串”表示的时间，而非当前时间 |
| -s<日期时间>   | 设置系统日期时间                               |

3．参数说明

表7-15

| 参数            | 功能                         |
| --------------- | ---------------------------- |
| <+日期时间格式> | 指定显示时使用的日期时间格式 |

### 7.3.1 date 显示当前时间

1．基本语法

​    （1）date                            （功能描述：显示当前时间）

​    （2）date +%Y                        （功能描述：显示当前年份）

（3）date +%m                        （功能描述：显示当前月份）

（4）date +%d                        （功能描述：显示当前是哪一天）

​    （5）date "+%Y-%m-%d %H:%M:%S"       （功能描述：显示年月日时分秒）

2．案例实操

（1）显示当前时间信息

[root@hadoop101 ~]# date

2017年 06月 19日 星期一 20:53:30 CST

（2）显示当前时间年月日

[root@hadoop101 ~]# date +%Y%m%d

20170619

（3）显示当前时间年月日时分秒

[root@hadoop101 ~]# date "+%Y-%m-%d %H:%M:%S"

2017-06-19 20:54:58

### 7.3.2 date 显示非当前时间

1．基本语法

（1）date -d '1 days ago'          （功能描述：显示前一天时间）

（2）date -d '-1 days ago'          （功能描述：显示明天时间）

2．案例实操

（1）显示前一天

[root@hadoop101 ~]# date -d '1 days ago'

2017年 06月 18日 星期日 21:07:22 CST

（2）显示明天时间

[root@hadoop101 ~]#date -d '-1 days ago'

2017年 06月 20日 星期日 21:07:22 CST

### 7.3.3 date 设置系统时间

1．基本语法

​    date -s 字符串时间

2．案例实操

​    （1）设置系统当前时间

[root@hadoop101 ~]# date -s "2017-06-19 20:52:18"

### 7.3.4 cal 查看日历

1．基本语法

cal [选项]           （功能描述：不加选项，显示本月日历）

2．选项说明

表7-16

| 选项       | 功能             |
| ---------- | ---------------- |
| 具体某一年 | 显示这一年的日历 |

3．案例实操

（1）查看当前月的日历

[root@hadoop101 ~]# cal

（2）查看2017年的日历

[root@hadoop101 ~]# cal 2017

## 7.4 用户管理命令

### 7.4.1 useradd 添加新用户

1．基本语法

​    useradd 用户名          （功能描述：添加新用户）

​    useradd -g 组名 用户名   （功能描述：添加新用户到某个组）

2．案例实操

​    （1）添加一个用户

[root@hadoop101 ~]# useradd tangseng

[root@hadoop101 ~]#ll /home/

### 7.4.2 passwd 设置用户密码

1．基本语法

​    passwd 用户名   （功能描述：设置用户密码）

2．案例实操

​    （1）设置用户的密码

[root@hadoop101 ~]# passwd tangseng

### 7.4.3 id 查看用户是否存在

1．基本语法

​    id 用户名

2．案例实操

​    （1）查看用户是否存在

[root@hadoop101 ~]#id tangseng

### 7.4.4 cat /etc/passwd 查看创建了哪些用户

1）基本语法

[root@hadoop101 ~]# cat /etc/passwd

### 7.4.5 su 切换用户

su: swith user 切换用户

1．基本语法

su 用户名称  （功能描述：切换用户，只能获得用户的执行权限，不能获得环境变量）

su - 用户名称    （功能描述：切换到用户并获得该用户的环境变量及执行权限）

2．案例实操

​    （1）切换用户

[root@hadoop101 ~]#su tangseng

[root@hadoop101 ~]#echo $PATH

/usr/lib64/qt-3.3/bin:/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/root/bin

[root@hadoop101 ~]#exit

[root@hadoop101 ~]#su - tangseng

[root@hadoop101 ~]#echo $PATH

/usr/lib64/qt-3.3/bin:/usr/local/bin:/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/sbin:/home/tangseng/bin

### 7.4.6 userdel 删除用户

1．基本语法

​    （1）userdel 用户名     （功能描述：删除用户但保存用户主目录）

（2）userdel -r 用户名    （功能描述：用户和用户主目录，都删除）

2．选项说明

表7-17

| 选项 | 功能                                       |
| ---- | ------------------------------------------ |
| -r   | 删除用户的同时，删除与用户相关的所有文件。 |

3．案例实操

（1）删除用户但保存用户主目录

[root@hadoop101 ~]#userdel tangseng

[root@hadoop101 ~]#ll /home/

（2）删除用户和用户主目录，都删除

[root@hadoop101 ~]#useradd zhubajie

[root@hadoop101 ~]#ll /home/

[root@hadoop101 ~]#userdel -r zhubajie

[root@hadoop101 ~]#ll /home/

### 7.4.7 who 查看登录用户信息

1．基本语法

​    （1）whoami        （功能描述：显示自身用户名称）

（2）who am i       （功能描述：显示登录用户的用户名）

2．案例实操

​    （1）显示自身用户名称

[root@hadoop101 opt]# whoami

（2）显示登录用户的用户名

[root@hadoop101 opt]# who am i

### 7.4.8 sudo 设置普通用户具有root权限

1．添加atguigu用户，并对其设置密码。

[root@hadoop101 ~]#useradd atguigu

[root@hadoop101 ~]#passwd atguigu

2．修改配置文件

[root@hadoop101 ~]#vi /etc/sudoers

修改 /etc/sudoers 文件，找到下面一行(91行)，在root下面添加一行，如下所示：

\## Allow root to run any commands anywhere

root  ALL=(ALL)   ALL

atguigu  ALL=(ALL)   ALL

或者配置成采用sudo命令时，不需要输入密码

\## Allow root to run any commands anywhere

root    ALL=(ALL)   ALL

atguigu  ALL=(ALL)   NOPASSWD:ALL

修改完毕，现在可以用atguigu帐号登录，然后用命令 sudo ，即可获得root权限进行操作。

3．案例实操

​    （1）用普通用户在/opt目录下创建一个文件夹

[atguigu@hadoop101 opt]$ sudo mkdir module

[root@hadoop101 opt]# chown atguigu:atguigu module/

### 7.4.9 usermod 修改用户

1．基本语法

usermod -g 用户组 用户名

2．选项说明

表7-18

| 选项 | 功能                                                  |
| ---- | ----------------------------------------------------- |
| -g   | 修改用户的初始登录组，给定的组必须存在。默认组id是1。 |

3．案例实操

（1）将用户加入到用户组

[root@hadoop101 opt]#usermod -g root zhubajie

## 7.5 用户组管理命令

每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同Linux 系统对用户组的规定有所不同，

如Linux下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。

用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对/etc/group文件的更新。

### 7.5.1 groupadd 新增组

1．基本语法

groupadd 组名

2．案例实操

​    （1）添加一个xitianqujing组

[root@hadoop101 opt]#groupadd xitianqujing

### 7.5.2 groupdel 删除组

1．基本语法

groupdel 组名

2．案例实操

​    （1）删除xitianqujing组

[root@hadoop101 opt]# groupdel xitianqujing

### 7.5.3 groupmod 修改组

1．基本语法

groupmod -n 新组名 老组名

2．选项说明

表7-19

| 选项       | 功能描述           |
| ---------- | ------------------ |
| -n<新组名> | 指定工作组的新组名 |

3．案例实操

​    （1）修改atguigu组名称为atguigu1

[root@hadoop101 ~]#groupadd xitianqujing

[root@hadoop101 ~]# groupmod -n xitian xitianqujing

### 7.5.4 cat /etc/group 查看创建了哪些组

1．基本操作

[root@hadoop101 atguigu]# cat /etc/group

## 7.6 文件权限类

### 7.6.1 文件属性

Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限。为了保护系统的安全性，Linux系统对不同的用户访问同一文件（包括目录文件）的权限做了不同的规定。在Linux中我们可以使用ll或者ls -l命令来显示一个文件的属性以及文件所属的用户和组。

1．从左到右的10个字符表示，如图7-1所示：

![img](Linuxall(atguigu).assets/1585659084267-d5b328cb-8276-44d6-88f2-dd50e1a9f69b.jpeg)

图 7-1 文件属性

如果没有权限，就会出现减号[ - ]而已。从左至右用0-9这些数字来表示:

（1）0首位表示类型

在Linux中第一个字符代表这个文件是目录、文件或链接文件等等

\- 代表文件

 d 代表目录

 l 链接文档(link file)；

（2）第1-3位确定属主（该文件的所有者）拥有该文件的权限。---User

（3）第4-6位确定属组（所有者的同组用户）拥有该文件的权限，---Group

（4）第7-9位确定其他用户拥有该文件的权限 ---Other

2．rxw作用文件和目录的不同解释

（1）作用到文件：

[ r ]代表可读(read): 可以读取，查看

[ w ]代表可写(write): 可以修改，但是不代表可以删除该文件，删除一个文件的前提条件是对该文件所在的目录有写权限，才能删除该文件.

[ x ]代表可执行(execute):可以被系统执行

（2）作用到目录：

[ r ]代表可读(read): 可以读取，ls查看目录内容

[ w ]代表可写(write): 可以修改，目录内创建+删除+重命名目录

[ x ]代表可执行(execute):可以进入该目录

3．案例实操

[root@hadoop101 ~]# ll

总用量 104

-rw-------. 1 root root 1248 1月  8 17:36 anaconda-ks.cfg

drwxr-xr-x. 2 root root 4096 1月 12 14:02 dssz

lrwxrwxrwx. 1 root root  20 1月 12 14:32 houzi -> xiyou/dssz/houge.tx

文件基本属性介绍，如图7-2所示：

![img](Linuxall(atguigu).assets/1585659084399-c6921c58-d8aa-4a6b-bf97-f749c6be11b5.jpeg)

图7-2 文件基本属性介绍

（1）如果查看到是文件：链接数指的是硬链接个数。创建硬链接方法

ln [原文件] [目标文件]

[root@hadoop101 ~]# ln xiyou/dssz/houge.txt ./hg.txt

（2）如果查看的是文件夹：链接数指的是子文件夹个数。

[root@hadoop101 ~]# ls -al xiyou/

总用量 16

drwxr-xr-x. 4 root root 4096 1月 12 14:00 .

dr-xr-x---. 29 root root 4096 1月 12 14:32 ..

drwxr-xr-x. 2 root root 4096 1月 12 14:30 dssz

drwxr-xr-x. 2 root root 4096 1月 12 14:04 mingjie

### 7.6.2 chmod 改变权限

1．基本语法

如图7-3所示

![img](Linuxall(atguigu).assets/1585659084531-2624f611-d813-4b22-9f2e-c14606a3b19f.jpeg)

图7-3 基本语法

​    第一种方式变更权限

​       chmod [{ugoa}{+-=}{rwx}] 文件或目录

第二种方式变更权限

​    chmod [mode=421 ] [文件或目录]

2．经验技巧

​    u:所有者 g:所有组 o:其他人 a:所有人(u、g、o的总和)

r=4 w=2 x=1    rwx=4+2+1=7

3．案例实操

​    （1）修改文件使其所属主用户具有执行权限

[root@hadoop101 ~]# cp xiyou/dssz/houge.txt ./

[root@hadoop101 ~]# chmod u+x houge.txt

（2）修改文件使其所属组用户具有执行权限

[root@hadoop101 ~]# chmod g+x houge.txt

（3）修改文件所属主用户执行权限,并使其他用户具有执行权限

[root@hadoop101 ~]# chmod u-x,o+x houge.txt

（4）采用数字的方式，设置文件所有者、所属组、其他用户都具有可读可写可执行权限。

[root@hadoop101 ~]# chmod 777 houge.txt

（5）修改整个文件夹里面的所有文件的所有者、所属组、其他用户都具有可读可写可执行权限。

[root@hadoop101 ~]# chmod -R 777 xiyou/

### 7.6.3 chown 改变所有者

1．基本语法

chown [选项] [最终用户] [文件或目录]       （功能描述：改变文件或者目录的所有者）

2．选项说明

表7-20

| 选项 | 功能     |
| ---- | -------- |
| -R   | 递归操作 |

3．案例实操

​    （1）修改文件所有者

[root@hadoop101 ~]# chown atguigu houge.txt

[root@hadoop101 ~]# ls -al

-rwxrwxrwx. 1 atguigu root 551 5月 23 13:02 houge.txt

（2）递归改变文件所有者和所有组

[root@hadoop101 xiyou]# ll

drwxrwxrwx. 2 root root 4096 9月  3 21:20 xiyou

[root@hadoop101 xiyou]# chown -R atguigu:atguigu xiyou/

[root@hadoop101 xiyou]# ll

drwxrwxrwx. 2 atguigu atguigu 4096 9月  3 21:20 xiyou

### 7.6.4 chgrp 改变所属组

1．基本语法

​    chgrp [最终用户组] [文件或目录]    （功能描述：改变文件或者目录的所属组）

2．案例实操

​    （1）修改文件的所属组

[root@hadoop101 ~]# chgrp root houge.txt

[root@hadoop101 ~]# ls -al

-rwxrwxrwx. 1 atguigu root 551 5月 23 13:02 houge.txt

## 7.7 搜索查找类

### 7.7.1 find 查找文件或者目录

find指令将从指定目录向下递归地遍历其各个子目录，将满足条件的文件显示在终端。

1．基本语法

​    find [搜索范围] [选项]

2．选项说明

表7-21

| 选项            | 功能                                                         |
| --------------- | ------------------------------------------------------------ |
| -name<查询方式> | 按照指定的文件名查找模式查找文件                             |
| -user<用户名>   | 查找属于指定用户名所有文件                                   |
| -size<文件大小> | 按照指定的文件大小查找文件,单位为:**b** —— 块（512字节）**c** —— 字节**w** —— 字（2字节）**k** —— 千字节**M** —— 兆字节**G** —— 吉字节 |

3．案例实操

（1）按文件名：根据名称查找/目录下的filename.txt文件。

[root@hadoop101 ~]# find xiyou/ -name *.txt

（2）按拥有者：查找/opt目录下，用户名称为-user的文件

[root@hadoop101 ~]# find xiyou/ -user atguigu

​    （3）按文件大小：在/home目录下查找大于200m的文件（+n 大于 -n小于  n等于）

[root@hadoop101 ~]find /home -size +204800

### 7.7.2 locate快速定位文件路径

locate指令利用事先建立的系统中所有文件名称及路径的locate数据库实现快速定位给定的文件。Locate指令无需遍历整个文件系统，查询速度较快。为了保证查询结果的准确度，管理员必须定期更新locate时刻。

1．基本语法

​    locate 搜索文件

2．经验技巧

​    由于locate指令基于数据库进行查询，所以第一次运行前，必须使用updatedb指令创建locate数据库。

3．案例实操

​    （1）查询文件夹

[root@hadoop101 ~]# updatedb

[root@hadoop101 ~]#locate tmp

### 7.7.3 grep 过滤查找及“|”管道符

管道符，“|”，表示将前一个命令的处理结果输出传递给后面的命令处理

1．基本语法

grep 选项 查找内容 源文件

2．选项说明

表7-22

| 选项 | 功能               |
| ---- | ------------------ |
| -n   | 显示匹配行及行号。 |

3．案例实操

​    （1）查找某文件在第几行

[root@hadoop101 ~]# ls | grep -n test

## 7.8 压缩和解压类

### 7.8.1 gzip/gunzip 压缩

1．基本语法

gzip 文件       （功能描述：压缩文件，只能将文件压缩为*.gz文件）

gunzip 文件.gz   （功能描述：解压缩文件命令）

2．经验技巧

（1）只能压缩文件不能压缩目录

（2）不保留原来的文件

3．案例实操

（1）gzip压缩

[root@hadoop101 ~]# ls

test.java

[root@hadoop101 ~]# gzip houge.txt

[root@hadoop101 ~]# ls

houge.txt.gz

（2）gunzip解压缩文件

[root@hadoop101 ~]# gunzip houge.txt.gz

[root@hadoop101 ~]# ls

houge.txt

### 7.8.2 zip/unzip 压缩

1．基本语法

zip [选项] XXX.zip 将要压缩的内容      （功能描述：压缩文件和目录的命令）

unzip [选项] XXX.zip                   （功能描述：解压缩文件）

2．选项说明

表7-23

| zip选项 | 功能     |
| ------- | -------- |
| -r      | 压缩目录 |

表7-24

| unzip选项 | 功能                     |
| --------- | ------------------------ |
| -d<目录>  | 指定解压后文件的存放目录 |

3．经验技巧

zip 压缩命令在window/linux都通用，可以压缩目录且保留源文件。

4．案例实操

（1）压缩 1.txt 和2.txt，压缩后的名称为mypackage.zip

[root@hadoop101 opt]# touch bailongma.txt

[root@hadoop101 ~]# zip mypackage.zip houge.txt bailongma.txt

 adding: houge.txt (stored 0%)

 adding: bailongma.txt (stored 0%)

[root@hadoop101 opt]# ls

houge.txt bailongma.txt houma.zip

（2）解压 mypackage.zip

[root@hadoop101 ~]# unzip mypackage.zip

Archive: houma.zip

 extracting: houge.txt       

 extracting: bailongma.txt   

[root@hadoop101 ~]# ls

houge.txt bailongma.txt houma.zip

（3）解压mypackage.zip到指定目录-d

[root@hadoop101 ~]# unzip houma.zip -d /opt

[root@hadoop101 ~]# ls /opt/

### 7.8.3 tar 打包

1．基本语法

tar [选项] XXX.tar.gz 将要打包进去的内容       （功能描述：打包目录，压缩后的文件格式.tar.gz）

2．选项说明

表7-25

| 选项 | 功能               |
| ---- | ------------------ |
| -c   | 产生.tar打包文件   |
| -v   | 显示详细信息       |
| -f   | 指定压缩后的文件名 |
| -z   | 打包同时压缩       |
| -x   | 解包.tar文件       |

3．案例实操

（1）压缩多个文件

[root@hadoop101 opt]# tar -zcvf houma.tar.gz houge.txt bailongma.txt

houge.txt

bailongma.txt

[root@hadoop101 opt]# ls

houma.tar.gz houge.txt bailongma.txt

（2）压缩目录

[root@hadoop101 ~]# tar -zcvf xiyou.tar.gz xiyou/

xiyou/

xiyou/mingjie/

xiyou/dssz/

xiyou/dssz/houge.txt

（3）解压到当前目录

[root@hadoop101 ~]# tar -zxvf houma.tar.gz

（4）解压到指定目录

[root@hadoop101 ~]# tar -zxvf xiyou.tar.gz -C /opt

[root@hadoop101 ~]# ll /opt/

## 7.9 磁盘分区类

### 7.9.1 df 查看磁盘空间使用情况

df: disk free 空余硬盘

1．基本语法

​    df 选项 （功能描述：列出文件系统的整体磁盘使用量，检查文件系统的磁盘空间占用情况）

2．选项说明

表7-26

| 选项 | 功能                                                     |
| ---- | -------------------------------------------------------- |
| -h   | 以人们较易阅读的 GBytes, MBytes, KBytes 等格式自行显示； |

3．案例实操

​    （1）查看磁盘使用情况

[root@hadoop101 ~]# df -h

Filesystem   Size Used Avail Use% Mounted on

/dev/sda2    15G 3.5G  11G 26% /

tmpfs      939M 224K 939M  1% /dev/shm

/dev/sda1    190M  39M 142M 22% /boot

### 7.9.2 fdisk 查看分区

1．基本语法

​    fdisk -l         （功能描述：查看磁盘分区详情）

2．选项说明

表7-27

| 选项 | 功能                   |
| ---- | ---------------------- |
| -l   | 显示所有硬盘的分区列表 |

3．经验技巧

该命令必须在root用户下才能使用

4．功能说明

​    （1）Linux分区

Device：分区序列

Boot：引导

Start：从X磁柱开始

End：到Y磁柱结束

Blocks：容量

Id：分区类型ID

System：分区类型

（2）Win7分区，如图7-4所示

![img](Linuxall(atguigu).assets/1585659084640-c7ac5502-7584-4fd3-ba10-bbf6d3964221.jpeg)

图 7-4 Win7分区

5．案例实操

​    （1）查看系统分区情况

[root@hadoop101 /]# fdisk -l

Disk /dev/sda: 21.5 GB, 21474836480 bytes

255 heads, 63 sectors/track, 2610 cylinders

Units = cylinders of 16065 * 512 = 8225280 bytes

Sector size (logical/physical): 512 bytes / 512 bytes

I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk identifier: 0x0005e654

 

  Device Boot   Start     End   Blocks  Id System

/dev/sda1  *      1     26   204800  83 Linux

Partition 1 does not end on cylinder boundary.

/dev/sda2       26    1332  10485760  83 Linux

/dev/sda3      1332    1593   2097152  82 Linux swap / Solaris

### 7.9.3 lsblk 查看设备挂载情况

1．基本语法

​    lsblk       （功能描述：查看设备挂载情况）

2．选项说明

表7-28

| 选项 | 功能                                     |
| ---- | ---------------------------------------- |
| -f   | 查看详细的设备挂载情况，显示文件系统信息 |

 

 

### 7.9.4 mount/umount 挂载/卸载

对于Linux用户来讲，不论有几个分区，分别分给哪一个目录使用，它总归就是一个根目录、一个独立且唯一的文件结构。

Linux中每个分区都是用来组成整个文件系统的一部分，它在用一种叫做“挂载”的处理方法，它整个文件系统中包含了一整套的文件和目录，并将一个分区和一个目录联系起来，要载入的那个分区将使它的存储空间在这个目录下获得。

1．挂载前准备（必须要有光盘或者已经连接镜像文件），如图7-5， 7-6所示

![img](Linuxall(atguigu).assets/1585659084751-dfd6d698-bb24-4b35-b249-b2aa662cdb6e.jpeg)

图 7-5

![img](Linuxall(atguigu).assets/1585659084864-4228a834-6c0a-4f73-aa74-7353f7178aa5.jpeg)

图7-6 挂载镜像文件

2．基本语法

mount [-t vfstype] [-o options] device dir   （功能描述：挂载设备）

umount 设备文件名或挂载点          （功能描述：卸载设备）

3．参数说明

表7-29

| 参数       | 功能                                                         |
| ---------- | ------------------------------------------------------------ |
| -t vfstype | 指定文件系统的类型，通常不必指定。mount 会自动选择正确的类型。常用类型有：光盘或光盘镜像：iso9660DOS fat16文件系统：msdos[Windows](http://blog.csdn.net/hancunai0017/article/details/6995284) 9x fat32文件系统：vfatWindows NT ntfs文件系统：ntfsMount Windows文件[网络](http://blog.csdn.net/hancunai0017/article/details/6995284)共享：smbfs[UNIX](http://blog.csdn.net/hancunai0017/article/details/6995284)(LINUX) 文件网络共享：nfs |
| -o options | 主要用来描述设备或档案的挂接方式。常用的参数有：loop：用来把一个文件当成硬盘分区挂接上系统ro：采用只读方式挂接设备rw：采用读写方式挂接设备　 iocharset：指定访问文件系统所用字符集 |
| device     | 要挂接(mount)的设备                                          |
| dir        | 设备在系统上的挂接点(mount point)                            |

4．案例实操

（1）挂载光盘镜像文件

[root@hadoop101 ~]# mkdir /mnt/cdrom/        建立挂载点

[root@hadoop101 ~]# mount -t iso9660 /dev/cdrom /mnt/cdrom/ 设备/dev/cdrom挂载到 挂载点 ： /mnt/cdrom中

[root@hadoop101 ~]# ll /mnt/cdrom/

（2）卸载光盘镜像文件

[root@hadoop101 ~]# umount /mnt/cdrom

5．设置开机自动挂载

[root@hadoop101 ~]# vi /etc/fstab

添加红框中内容，保存退出。

如图7-7所示

![img](Linuxall(atguigu).assets/1585659084996-edc16deb-d62c-44a2-9bbf-531586cec909.jpeg)

图7-7 设置开机自动挂载

## 7.10 进程线程类

进程是正在执行的一个程序或命令，每一个进程都是一个运行的实体，都有自己的地址空间，并占用一定的系统资源。

### 7.10.1 ps 查看当前系统进程状态

ps:process status 进程状态

1．基本语法

​    ps -aux | grep xxx     （功能描述：查看系统中所有进程）

​    ps -ef | grep xxx      （功能描述：可以查看子父进程之间的关系）

2．选项说明

表7-30

| 选项 | 功能                   |
| ---- | ---------------------- |
| -a   | 选择所有进程           |
| -u   | 显示所有用户的所有进程 |
| -x   | 显示没有终端的进程     |

3．功能说明

​    （1）ps -aux显示信息说明

​    USER：该进程是由哪个用户产生的

​    PID：进程的ID号

%CPU：该进程占用CPU资源的百分比，占用越高，进程越耗费资源；

%MEM：该进程占用物理内存的百分比，占用越高，进程越耗费资源；

VSZ：该进程占用虚拟内存的大小，单位KB；

RSS：该进程占用实际物理内存的大小，单位KB；

TTY：该进程是在哪个终端中运行的。其中tty1-tty7代表本地控制台终端，tty1-tty6是本地的字符界面终端，tty7是图形终端。pts/0-255代表虚拟终端。

STAT：进程状态。常见的状态有：R：运行、S：睡眠、T：停止状态、s：包含子进程、+：位于后台

START：该进程的启动时间

TIME：该进程占用CPU的运算时间，注意不是系统时间

COMMAND：产生此进程的命令名

（2）ps -ef显示信息说明

UID：用户ID

PID：进程ID

PPID：父进程ID

C：CPU用于计算执行优先级的因子。数值越大，表明进程是CPU密集型运算，执行优先级会降低；数值越小，表明进程是I/O密集型运算，执行优先级会提高

STIME：进程启动的时间

TTY：完整的终端名称

TIME：CPU时间

CMD：启动进程所用的命令和参数

4．经验技巧

​    如果想查看进程的CPU占用率和内存占用率，可以使用aux;

如果想查看进程的父进程ID可以使用ef;

5．案例实操

[root@hadoop101 datas]# ps aux

​    如图1-161所示

![img](Linuxall(atguigu).assets/1585659085100-15c116b5-9231-475b-a09d-45ebd683a486.jpeg)

图1-161 查看进程的CPU占用率和内存占用率

[root@hadoop101 datas]# ps -ef

 

​    如图7-8所示

![img](Linuxall(atguigu).assets/1585659085221-796df6f0-4610-44ca-82f9-c93f9e40ab8e.jpeg)

图7-8 查看进程的父进程ID

### 7.10.2 kill 终止进程

1．基本语法

​    kill [选项] 进程号      （功能描述：通过进程号杀死进程）

​    killall 进程名称         （功能描述：通过进程名称杀死进程，也支持通配符，这在系统因负载过大而变得很慢时很有用） 

2．选项说明

表7-31

| 选项 | 功能                 |
| ---- | -------------------- |
| -9   | 表示强迫进程立即停止 |

3．案例实操

​    （1）杀死浏览器进程

[root@hadoop101 桌面]# kill -9 5102

​    （2）通过进程名称杀死进程

[root@hadoop101 桌面]# killall firefox

### 7.10.3 pstree 查看进程树

1．基本语法

​    pstree [选项]

2．选项说明

表7-32

| 选项 | 功能               |
| ---- | ------------------ |
| -p   | 显示进程的PID      |
| -u   | 显示进程的所属用户 |

 

3．案例实操

​    （1）显示进程pid

[root@hadoop101 datas]# pstree -p

​    （2）显示进程所属用户

[root@hadoop101 datas]# pstree -u

### 7.10.4 top 查看系统健康状态

1．基本命令

​    top [选项]   

2．选项说明

表7-33

| 选项    | 功能                                                         |
| ------- | ------------------------------------------------------------ |
| -d 秒数 | 指定top命令每隔几秒更新。默认是3秒在top命令的交互模式当中可以执行的命令： |
| -i      | 使top不显示任何闲置或者僵死进程。                            |
| -p      | 通过指定监控进程ID来仅仅监控某个进程的状态。                 |

3．操作说明

表7-34

| 操作 | 功能                          |
| ---- | ----------------------------- |
| P    | 以CPU使用率排序，默认就是此项 |
| M    | 以内存的使用率排序            |
| N    | 以PID排序                     |
| q    | 退出top                       |

4．查询结果字段解释

第一行信息为任务队列信息

表7-35

| 内容                           | 说明                                                         |
| ------------------------------ | ------------------------------------------------------------ |
| 12:26:46                       | 系统当前时间                                                 |
| up 1 day, 13:32                | 系统的运行时间，本机已经运行1天13小时32分钟                  |
| 2 users                        | 当前登录了两个用户                                           |
| load average: 0.00, 0.00, 0.00 | 系统在之前1分钟，5分钟，15分钟的平均负载。一般认为小于1时，负载较小。如果大于1，系统已经超出负荷。 |

第二行为进程信息

表7-36

| Tasks: 95 total | 系统中的进程总数                          |
| --------------- | ----------------------------------------- |
| 1 running       | 正在运行的进程数                          |
| 94 sleeping     | 睡眠的进程                                |
| 0 stopped       | 正在停止的进程                            |
| 0 zombie        | 僵尸进程。如果不是0，需要手工检查僵尸进程 |

第三行为CPU信息

表7-37

| Cpu(s): 0.1%us | 用户模式占用的CPU百分比                                      |
| -------------- | ------------------------------------------------------------ |
| 0.1%sy         | 系统模式占用的CPU百分比                                      |
| 0.0%ni         | 改变过优先级的用户进程占用的CPU百分比                        |
| 99.7%id        | 空闲CPU的CPU百分比                                           |
| 0.1%wa         | 等待输入/输出的进程的占用CPU百分比                           |
| 0.0%hi         | 硬中断请求服务占用的CPU百分比                                |
| 0.1%si         | 软中断请求服务占用的CPU百分比                                |
| 0.0%st         | st（Steal time）虚拟时间百分比。就是当有虚拟机时，虚拟CPU等待实际CPU的时间百分比。 |

第四行为物理内存信息

表7-38

| Mem:  625344k total | 物理内存的总量，单位KB                                       |
| ------------------- | ------------------------------------------------------------ |
| 571504k used        | 已经使用的物理内存数量                                       |
| 53840k free         | 空闲的物理内存数量，我们使用的是虚拟机，总共只分配了628MB内存，所以只有53MB的空闲内存了 |
| 65800k buffers      | 作为缓冲的内存数量                                           |

第五行为交换分区（swap）信息

表7-39

| Swap:  524280k total | 交换分区（虚拟内存）的总大小 |
| -------------------- | ---------------------------- |
| 0k used              | 已经使用的交互分区的大小     |
| 524280k free         | 空闲交换分区的大小           |
| 409280k cached       | 作为缓存的交互分区的大小     |

5．案例实操

[root@hadoop101 atguigu]# top -d 1

[root@hadoop101 atguigu]# top -i

[root@hadoop101 atguigu]# top -p 2575

执行上述命令后，可以按P、M、N对查询出的进程结果进行排序。

### 7.10.5 netstat 显示网络统计信息和端口占用情况

1．基本语法

​    netstat -anp |grep 进程号   （功能描述：查看该进程网络信息）

​    netstat -nlp   | grep 端口号 （功能描述：查看网络端口号占用情况）

2．选项说明

表7-40

| 选项 | 功能                                     |
| ---- | ---------------------------------------- |
| -n   | 拒绝显示别名，能显示数字的全部转化成数字 |
| -l   | 仅列出有在listen（监听）的服务状态       |
| -p   | 表示显示哪个进程在调用                   |

3．案例实操

（1）通过进程号查看该进程的网络信息

[root@hadoop101 hadoop-2.7.2]# netstat -anp | grep 火狐浏览器进程号

unix 2   [ ACC ]   STREAM   LISTENING   **20670** 3115/firefox    /tmp/orbit-root/linc-c2b-0-5734667cbe29

unix 3   [ ]     STREAM   CONNECTED   20673 3115/firefox    /tmp/orbit-root/linc-c2b-0-5734667cbe29

unix 3   [ ]     STREAM   CONNECTED   20668 3115/firefox    

unix 3   [ ]     STREAM   CONNECTED   20666 3115/firefox  

 

（2）查看某端口号是否被占用

[root@hadoop101 桌面]# netstat -nlp | grep **20670**

unix 2   [ ACC ]   STREAM   LISTENING   20670 3115/firefox    /tmp/orbit-root/linc-c2b-0-5734667cbe29

## 7.11 crontab 系统定时任务

### 7.11.1 crontab 服务管理

1．重新启动crond服务

[root@hadoop101 ~]# service crond restart

### 7.11.2 crontab 定时任务设置

1．基本语法

crontab [选项]

2．选项说明

表7-41

| 选项 | 功能                          |
| ---- | ----------------------------- |
| -e   | 编辑crontab定时任务           |
| -l   | 查询crontab任务               |
| -r   | 删除当前用户所有的crontab任务 |

3．参数说明

[root@hadoop101 ~]# crontab -e

（1）进入crontab编辑界面。会打开vim编辑你的工作。

\* * * * * 执行的任务

表7-42

| 项目      | 含义                 | 范围                    |
| --------- | -------------------- | ----------------------- |
| 第一个“*” | 一小时当中的第几分钟 | 0-59                    |
| 第二个“*” | 一天当中的第几小时   | 0-23                    |
| 第三个“*” | 一个月当中的第几天   | 1-31                    |
| 第四个“*” | 一年当中的第几月     | 1-12                    |
| 第五个“*” | 一周当中的星期几     | 0-7（0和7都代表星期日） |

（2）特殊符号

表7-43

| 特殊符号 | 含义                                                         |
| -------- | ------------------------------------------------------------ |
| *        | 代表任何时间。比如第一个“*”就代表一小时中每分钟都执行一次的意思。 |
| ，       | 代表不连续的时间。比如“0 8,12,16 * * * 命令”，就代表在每天的8点0分，12点0分，16点0分都执行一次命令 |
| -        | 代表连续的时间范围。比如“0 5 * * 1-6命令”，代表在周一到周六的凌晨5点0分执行命令 |
| */n      | 代表每隔多久执行一次。比如“*/10 * * * * 命令”，代表每隔10分钟就执行一遍命令 |

（3）特定时间执行命令

表7-44

| 时间              | 含义                                                         |
| ----------------- | ------------------------------------------------------------ |
| 45 22 * * * 命令  | 在22点45分执行命令                                           |
| 0 17 * * 1 命令   | 每周1 的17点0分执行命令                                      |
| 0 5 1,15 * * 命令 | 每月1号和15号的凌晨5点0分执行命令                            |
| 40 4 * * 1-5 命令 | 每周一到周五的凌晨4点40分执行命令                            |
| */10 4 * * * 命令 | 每天的凌晨4点，每隔10分钟执行一次命令                        |
| 0 0 1,15 * 1 命令 | 每月1号和15号，每周1的0点0分都会执行命令。注意：星期几和几号最好不要同时出现，因为他们定义的都是天。非常容易让管理员混乱。 |

4．案例实操

​    （1）每隔1分钟，向/root/bailongma.txt文件中添加一个11的数字

*/1 * * * * /bin/echo ”11” >> /root/bailongma.txt

# 第8章 软件包管理

## 8.1 RPM

### 8.1.1 RPM概述

RPM（RedHat Package Manager），RedHat软件包管理工具，类似windows里面的setup.exe

 是Linux这系列操作系统里面的打包安装工具，它虽然是RedHat的标志，但理念是通用的。

RPM包的名称格式

Apache-1.3.23-11.i386.rpm

\-    “apache” 软件名称

\-    “1.3.23-11”软件的版本号，主版本和此版本

\-    “i386”是软件所运行的硬件平台，Intel 32位微处理器的统称

\-    “rpm”文件扩展名，代表RPM包

### 8.1.2 RPM查询命令（rpm -qa）

1．基本语法

rpm -qa            （功能描述：查询所安装的所有rpm软件包）

2．经验技巧

由于软件包比较多，一般都会采取过滤。rpm -qa | grep rpm软件包

3．案例实操

​    （1）查询firefox软件安装情况

[root@hadoop101 Packages]# rpm -qa |grep firefox

firefox-45.0.1-1.el6.centos.x86_64

### 8.1.3 RPM卸载命令（rpm -e）

1．基本语法

（1）rpm -e RPM软件包  

（2） rpm -e --nodeps 软件包 

2．选项说明

表8-1

| 选项     | 功能                                                         |
| -------- | ------------------------------------------------------------ |
| -e       | 卸载软件包                                                   |
| --nodeps | 卸载软件时，不检查依赖。这样的话，那些使用该软件包的软件在此之后可能就不能正常工作了。 |

3．案例实操

​    （1）卸载firefox软件

[root@hadoop101 Packages]# rpm -e firefox

### 8.1.4 RPM安装命令（rpm -ivh）

1．基本语法

​    rpm -ivh RPM包全名

2．选项说明

表8-2

| 选项     | 功能                     |
| -------- | ------------------------ |
| -i       | -i=install，安装         |
| -v       | -v=verbose，显示详细信息 |
| -h       | -h=hash，进度条          |
| --nodeps | --nodeps，不检测依赖进度 |

3．案例实操

​    （1）安装firefox软件

[root@hadoop101 Packages]# pwd

/media/CentOS_6.8_Final/Packages

[root@hadoop101 Packages]# rpm -ivh firefox-45.0.1-1.el6.centos.x86_64.rpm

warning: firefox-45.0.1-1.el6.centos.x86_64.rpm: Header V3 RSA/SHA1 Signature, key ID c105b9de: NOKEY

Preparing...        ########################################### [100%]

  1:firefox        ########################################### [100%]

## 8.2 YUM仓库配置

### 8.2.1 YUM概述

YUM（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。基于RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包，无须繁琐地一次次下载、安装，如图8-1所示

![img](Linuxall(atguigu).assets/1585659085369-4830ea0c-7638-423b-b3a9-632ea17ee1f3.jpeg)

图8-1 YUM概述

### 8.2.2 YUM的常用命令

1．基本语法

​    yum [选项] [参数]

2．选项说明

表8-3

| 选项 | 功能                  |
| ---- | --------------------- |
| -y   | 对所有提问都回答“yes” |

3．参数说明

表8-4

| 参数         | 功能                          |
| ------------ | ----------------------------- |
| install      | 安装rpm软件包                 |
| update       | 更新rpm软件包                 |
| check-update | 检查是否有可用的更新rpm软件包 |
| remove       | 删除指定的rpm软件包           |
| list         | 显示软件包信息                |
| clean        | 清理yum过期的缓存             |
| deplist      | 显示yum软件包的所有依赖关系   |

4．案例实操实操

​    （1）采用yum方式安装firefox

[root@hadoop101 ~]#yum -y install firefox.x86_64

### 8.2.3 修改网络YUM源

默认的系统YUM源，需要连接国外apache网站，网速比较慢，可以修改关联的网络YUM源为国内镜像的网站，比如网易163,aliyun等

1)   安装wget, wget用来从指定的URL下载文件

[root@hadoop101 ~] yum install wget

2)   在/etc/yum.repos.d/目录下，备份默认的repos文件,

[root@hadoop101 yum.repos.d] pwd

/etc/yum.repos.d

[root@hadoop101 yum.repos.d] cp CentOS-Base.repo  CentOS-Base

.repo.backup

 

3)   下载网易163或者是aliyun的repos文件,任选其一，如图8-2

[root@hadoop101 yum.repos.d] wget

 http://mirrors.aliyun.com/repo/Centos-7.repo //阿里云

[root@hadoop101 yum.repos.d] wget

 http://mirrors.163.com/.help/CentOS7-Base-163.repo //网易163

 

​    ![img](Linuxall(atguigu).assets/1585659085608-39929bcc-1f3c-465e-ad4f-e3469433c2a2.jpeg)

图8-2

4)   使用下载好的repos文件替换默认的repos文件

​      例如:用CentOS7-Base-163.repo替换CentOS-Base.repo

[root@hadoop101 yum.repos.d]# mv CentOS7-Base-163.repo  CentOS-Base.repo

5)   清理旧缓存数据，缓存新数据

[root@hadoop101 yum.repos.d]#yum clean all

[root@hadoop101 yum.repos.d]#yum makecache

yum makecache就是把服务器的包信息下载到本地电脑缓存起来

6)   测试

[root@hadoop101 yum.repos.d]# yum list | grep firefox

[root@hadoop101 ~]#yum -y install firefox.x86_64

# 第9章 克隆虚拟机

## 9.1 克隆

1)   从现有虚拟机(关机状态)克隆出新虚拟机，右键选择管理=>克隆，如图9-1

![img](Linuxall(atguigu).assets/1585659085741-f435be8f-bdb4-4cb5-b6a3-fc6281323065.jpeg)

图 9-1

2)   点击下一步,如图9-2

![img](Linuxall(atguigu).assets/1585659085902-c09e5c0a-a85c-4e41-abf2-461d73d446da.jpeg)

图9-2

3)    选择虚拟机中的当前状态,如图9-3

![img](Linuxall(atguigu).assets/1585659086051-0c1d345e-2c73-4d78-b07d-5ba2193eb9c5.jpeg)

图9-3

4)   选择创建完整克隆，如图9-4

![img](Linuxall(atguigu).assets/1585659086166-3defe732-c87b-4bef-8e72-dab7b3d8ed21.jpeg)

图9-4

 

5)   设置虚拟机名称及存储位置，如图9-5

![img](Linuxall(atguigu).assets/1585659086339-0f9cc761-6aed-4cd3-aa40-b0420af4692f.jpeg)

图9-5

6)   等等等……等待克隆完成，如图9-6,9-7

![img](Linuxall(atguigu).assets/1585659086482-37258085-c8bc-4b46-8839-cf91fa50c8ed.jpeg)

图9-6

![img](Linuxall(atguigu).assets/1585659086602-4a14ca9c-d66d-4cb4-91ba-e871241a7c2b.jpeg)

图9-7

## 9.2 开机修改系统相关配置

注意: 使用root用户。

 

1)   修改 vim /etc/sysconfig/network-scripts/ifcfg-ens33 ,修改IP地址,如图9-8

vim /etc/sysconfig/network-scripts/ifcfg-eth0

![img](Linuxall(atguigu).assets/1585659086727-32fdef6a-9c55-4742-b735-89644766a857.jpeg)

图9-8

2)   修改 /etc/hostname ,修改主机名,如图9-9

vim /etc/hostname

![img](Linuxall(atguigu).assets/1585659086847-a4e8a962-aa7e-418e-843b-a1ee6292197a.jpeg)

图9-9

 

 

# 第10章 常见错误及解决方案

\1.   虚拟化支持异常情况如下几种情况

![img](Linuxall(atguigu).assets/1585659087014-f3db4288-6e4e-4085-8cb1-209fb90d7279.jpeg)

图10-1

![img](Linuxall(atguigu).assets/1585659087146-cfa64f2f-1cd3-46ad-b1c8-bdddf1d3c638.jpeg)

图10-2

![img](Linuxall(atguigu).assets/1585659087282-6de54bee-37f8-462b-9f64-0b44a3ed88d4.jpeg)

图10-3

![img](Linuxall(atguigu).assets/1585659087414-64c97022-a770-40d8-a6dc-7d24970b8b03.jpeg)

图10-4

问题原因：宿主机BIOS设置中的硬件虚拟化被禁用了

解决办法：需要打开笔记本BIOS中的IVT对虚拟化的支持

![img](Linuxall(atguigu).assets/1585659087516-c11df79a-198e-4345-878c-09806908aa24.jpeg)

图10-5

# 第11章 企业真实面试题

## 11.1 百度&考满分

问题：Linux常用命令

参考答案：find、df、tar、ps、top、netstat等。（尽量说一些高级命令）

## 11.2 瓜子二手车

问题：Linux查看内存、磁盘存储、io **读写**、端口占用、进程等命令

答案：

1、查看内存：top

2、查看磁盘存储情况：df -h

3、查 看磁盘IO读写情况：iotop（需要安装一下：yum install iotop）、iotop -o（直接查看输出比较高的磁盘读写程序）

4、查看端口占用情况：netstat -tunlp | grep 端口号

5、查看进程：ps -aux