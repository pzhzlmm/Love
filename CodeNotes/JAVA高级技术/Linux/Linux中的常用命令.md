isconfig 查看IP地址

ctrl+c 就可以回到命令行了。

ctrl+alt vmware焦点切换

![1565063017433](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565063017433.png)

这个root就是~

![1565083598345](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565083598345.png)

自动补全：能识别+tab

![1565083983691](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565083983691.png)

### 返回上级

linux cd返回上级与win不同，linux返回上级是cd ..（中间有空格）

一个点还是当前目录，两个点才返回上级

返回上级的上级

cd ../.. 

### 绝对寻址

cd Videos:这其实是相对路径，即当前目录下的去找

也可以cd /root/Documents，通过绝对路径的方式进去，退出也可以

~：root目录，终端默认目录 不给定任何参数或者~默认回到

## 1 文件显示

### ls

![1565084656668](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565084656668.png)

-a：all，可以显示隐藏文件

![1565084726110](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565084726110.png)

### ll

与ls一样，格式不同（列表）

ls -al

以列表形式显示全部

权限@@@

## 分割

1.1.1/
根目录.Unix 和 Linux 中,没有盘符. 一个硬盘,一个根.
1.1.2/bin
系统的常用命令目录. 包括控制台命令, 系统可执行文件, 系统
的核心二进制文件等.
1.1.3/etc
发布目录, 相当于 windows 系统中的 windows 目录, 保存系统中
的所有核心内容.
要求控制权限高, 建议不要随便读写.
1.1.4/usr
用户目录, 相当于 windows 系统中的 program files 目录. 常用于
安装系统所有用户共用的软件,资源的.
1.1.5/root
root 根 用 户 的 用 户 目 录 . 相 当 于 windows 系 统 中 的
C:/users/administrator 目录.
称为用户主目录.
1.1.6/home
保存其他用户主目录的目录.
如: Linux 系统中有 oldlu 用户. 那么一定有/home/oldlu 目录存在.
代表用户的主目录.
1.1.7/var
系统运行过程的数据目录. 

## 2 cd

change directory - 切换目录.
特殊目录符号 : 当前目录 - ‘.’, 父目录 - ‘..’
2.1使用方式
2.1.1切换固定位置
使用根目录作为定位标准, 绝对寻址.
cd /xxx/yyy/zzz
2.1.2切换相对位置
在当前目录位置开始相对寻址.
cd xxx/yyy/zzz
2.1.3进入主目录
直接进入用户主目录
cd
cd ~

## 3 ls

list - 列表目录中的内容.默认显示当前目录下的文件列表
3.1使用方式
3.1.1列表当前目录
ls
3.1.2列表指定目录
ls 目录位置(绝对路径|相对路径)
3.1.3查看全部内容
ls -a [目录]
list all - 查看所有, 包括隐藏文件. Linux 中隐藏文件都是以’.’开
头的文件.
3.1.4列表查看目录内容
ls -l [目录]
显示当前目录下的文件属性：大小、权限、日期、符号链接。
ll - 简化命令不代表全部 Linxu 系统可用.
list list - 以列表的信息,显示指定目录中的内容. 列表代表的是
文件的详情.
类型 拥有者权限 同组权限 其他权限 类型 拥有者 所在组 容量 时间 文件名

- rw- --- --- 1 root root 3326
d rwx r-x r-x 2 root root 4096
3.1.4.1 类型 :
- | 1 代表文件
  d | 2 代表目录, 2+n, n 代表目录中的文件数量.
  3.1.4.2 容量
  单位是字节. 所有的目录固定容量为 4096. 
  3.1.4.3 权限
  分为不同的角色: 文件的所有者, 就是创建文件的用户. 所在组,
  和所有者同一个组的其他用户. 其他用户, 和所有者不在一个组的用
  户.
  rwx - read write execut
  ‘-’ 代表没有对应权限.
  3.2命令参数
  所有以 ‘-‘ 开头的命令后缀信息, 都是命令参数. 多参数可以并
  行使用. 如: ls -al

## 4 clear
  clear screen - 清空屏幕.
  清屏命令有两个:
  clear 和 clear screen

## 5 touch

  创建空白文件
  在 Linux 系统中,文件不需要强制后缀名.
  如: 文本文件可以定义为, a | a.txt | a.text

  ### 5.1使用方式

  touch 文件名(当前目录
  touch 目录/文件名
  touch /目录/文件名(绝对路径)

##   6 cat

  查看文件的全部内容.
  一次性显示文件中所有内容.

##   7 more

  分屏显示文件内容, 显示后,使用空格显示下一屏, 回车显示下
  一行,q 退出分屏显示.
  ctrl+c,退出命令.

##   8 head

  显示文件的前多少行, 默认显示前 10 行.
  head -number filename
  查看文件中的前多少行.

##   9 tail

  显示文件末尾多少行.默认显示末尾 10 行.
  tail -number filename

##   10 mkdir

  make directory - 创建目录.
  10.1使用方式
  10.1.1 相对创建一个子目录
  mkdir directoryName
  10.1.2 绝对创建一个目录
  mkdir /directoryName
  10.1.3 一次性创建多级目录
  mkdir -p parentDirectoryName/childDirectoryName

##   11 cp

  copy - 复制命令.
  11.1使用方式
  copy source target
  copy 源信息 目录信息
  11.1.1 复制文件(可以给定新名字)
  copy fileName newFileName
  copy directoryName/fileName directoryName/[newFileName]
  copy /directoryName/fileName /directoryName/[newFileName]
  11.1.2 复制目录
  copy -r directoryName newDirectoryName

##   12 rm

  remove - 删除
  12.1使用方式
  rm source
  rm 要删除的资源
  12.1.1 删除文件需提示
  rm fileName
  rm directoryName/fileName
  rm / directoryName/fileName
  12.1.2 删除文件不需提示
  rm-f fileName
  rm -f directoryName/fileName
  rm -f /directoryName/fileName
  12.1.3 删除目录需提示
  rm -r directoryName
  12.1.4 删除目录不需提示
  rm -rf directoryName

##   13 mv

  move - 移动或重命名. 相当于剪切和重命名.
  13.1使用方式
  mv source target 移动
  mv source newName 重命名
  13.1.1 移动文件到指定位置
  mv fileName directoryName
  13.1.2 为文件重命名
  mv fileName newFileName

##   14 vi | vim

  编辑文件, vim 是增强命令. 不代表所有的 Linux 都支持.(VI是)
  vim 增强在有高亮显示.
  14.1使用方式
  vi fileName
  14.2命令模式
  是控制编辑的文件的状态的,如:保存,退出编辑等.
  14.2.1 进入编辑模式:
  a - append, 追加的方式进入编辑模式
  i - insert, 插入的方式进入编辑模式(a和i分别定义了当前字符光标的左右两侧,a是右侧添加,i是左侧添加)
  o - under line , 在光标所在位置之下,新增一行,进入编辑模式.
  O - pre line, 在光标所在位置之上,新增一行, 进入编辑模式.
  14.2.2 dd
  [number] dd - delete line 删除指定行, 默认 1 行
  14.2.3 :w
  write - 保存
  14.2.4 :q
  quit - 退出 vi 编辑器
  14.2.5 :wq
  保存并退出
  14.2.6 :q!
  强制退出不保存.
  14.2.7 :set nu
  显示行号
  14.2.8 /keywords
  搜索关键字, keywords 是关键字的命名.
  14.2.9 G
  光标跳转到文件尾
  14.2.10 gg
  光标跳转到文件头
  14.3编辑模式
  是编辑文件内容的.
  进入命令模式 - esc

##   15 ifconfig

  查看网络编辑器. 查看网卡信息.
  eth0 - 命名为 eth0 的网卡信息
  lo - localhost, 本地环绕信息.
  15.1查看所有网卡信息(winipconfig)
  ifconfig -a
  15.2确定网卡数量和命名
  查看/etc/sysconfig/network-scripts/ifg-xxx 文件个数
  xxx - 代表网卡的名称
  文件的个数代表网卡的数量.

ifcfg-eth0:当前设备网卡配置文件

双引号不加也是可以的

  15.3编辑网卡
  修改对应的网卡配置文件即可.
  DEVICE=eth0(与前面相对应的)
  BOOTPROTO=static(dhcp:动态分配IP)
  ONBOOT=yes
  IPADDR=(设置 IP 地址,和当前要相同192.168.70.142)
  NETMASK=255.255.255.0
  GATEWAY=（设置网关192.168.70.2）
  DNS1=114.114.114.114
  DNS2=4.4.4.4
  IPV6INIT=no

inet addr:192.168.159.128  Bcast:192.168.159.255  Mask:255.255.255.0

service network restart

##   16 service

  服务控制命令. 常用服务: iptables - 防火墙, vsftpd ftp 文件服务
  器, mysql
  防火墙建议关闭. 否则除 80,22 端口外,其他所有端口无法访问.
  16.1使用方式
  16.1.1 启动服务
  service 服务名称 start
  16.1.2 停止服务
  service 服务名称 stop
  16.1.3 重启服务
  service 服务名称 restart
  16.1.4 查看服务状态
  service 服务名称 status

网络:network

##   17 ps

  进程信息查看命令.
  17.1使用方式
  ps aux [| grep keywords]
  a - 所有进程
  u - 包含用户启动的进程
  x - 正在执行中的进程.

##   18 |

  管道, 在管道左侧命令直接结果基础上, 执行管道右侧的命令

##   19 grep

  过滤|筛选, 筛选符合关键字的数据.

![1565164310027](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565164310027.png)