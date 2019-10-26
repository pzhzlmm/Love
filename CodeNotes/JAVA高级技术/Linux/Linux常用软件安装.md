JDK,上传再安装

## filezilla

## xftp

## 拖拽上传

# 1.1.2解压缩

tar 命令
1.1.2.1 使用方式
tar [参数] source [target]
source - 压缩文件
target - 解压缩后的目标位置, 默认解压到当前目录.
常用写法 :
解压缩 : tar -zxf 压缩文件名
解压缩 : tar -zxvf 压缩文件名
压缩 : tar -czf 要压缩的目录 压缩后的文件名
1.1.2.1.1 z
zip 格式压缩文件, 包含 zip,gz,tar.gz 等格式. 不包含 rar.
1.1.2.1.2 c
创建压缩包.
1.1.2.1.3 x
解压缩
1.1.2.1.4 f
指定文件
1.1.2.1.5 v
显示解压缩过程.
1.1.3测试 JDK
进入 JDK 中的 bin 目录, 测试 java 命令.
在 Linux 中, 没有当前目录优先执行的概念. 所有的直接输入的
命令,都在系统环境变量中查询. 运行当前目录的可执行文件. 必须
使用’目录/命令’的形式执行.
./java

## 环境变量配置

修改系统级环境变量配置文件. 文件是 : /etc/profile
JDK 解压后复制到了/usr/local/java 目录中, 下述环境变量内容基
于此前提下.
在配置文件中[建议末尾]增加下述内容:(jdk先改名)
export JAVA_HOME=/usr/local/jdk
export
CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$JAVA_HOME/bin:$PATH
让环境变量生效.
永久生效 - 重启 Linux
临时生效 - . /etc/profile source /etc/profile. 有效范围是当前会话终端.(点后有空格)

## 2 安装 Tomcat

2.1软件安装
2.1.1上传资源到 Linux(gz:linux)
2.1.2解压缩 10(tar -zxf)
2.1.3使用
tomcat/bin/startup.sh
sh是linux下的可执行文件,相当于win下的bat,用./执行
2.1.3.1 查看日志
可以通过log查看信息知道是否启动以及启动的状况
tomcat/logs/catalina.out 文件是日志文件. 就是控制台输出的文
件.
tail -f tomcat/logs/catalina.out - 追加显示的模式查看文件末尾信息.
也可以直接写tailf
tomcat/bin/startup.sh & tailf tomcat/logs/catalina.out
如果没运行成功记得关闭防火墙
& - 命令连接符, 左侧命令执行结束后,立刻执行右侧命令.
2.2测试应用
http://ip:port/
## 3 安装 MySQL
rpm:安装包,不需要联网/yum安装/免安装需要配置其他东西
3.1yum 安装
3.1.1上传本地 yum 文件
mysql-community-release-el6-5.noarch.rpm
资源文件,能通过这个下载(一系列下载命令)
3.1.2增加本地 yum 信息
yum 安装,是通过远程的 yum 应用服务器下载安装包并安装软件的方式.
yum 应用服务器中的数据是固定的
增加本地 yum 信息,相当于增加一个新的 yum 应用服务器中的软件列表.
yum localinstall 文件名
3.1.3yum 远程下载并安装
yum install mysql-server
mysqld - 是 Oracle 定义的 yum 下载应用命名.
参数 : y, 代表忽略互动提示,直接下载并安装(挺方便的,下完就可以帮我们装)
装好在/var/lib目录下
3.1.4启动服务
service mysqld start
第一次启动较慢, 需要初始化默认库. 后续启动正常.
3.2测试应用
3.2.1设置 root 用户密码
/usr/bin/mysqladmin -u root password 'new-password'
不要复制命令. word 文档编辑的命令,符号是中文符号.linux上方有(把new-password改成设置的密码root
3.2.2为 root 用户授权
3.2.2.1 登录 mysql
mysql -uroot -p 密码
任何目录都可登陆,可用quit退出
可以再使用ll查看mysql的目录
3.2.2.2 授权命令
grant all privileges on *.* to 'root'@'%' identified by 'root' with grant option;
grant all privileges on 权限信息 to 'mysql 用户名'@'可访问的 ip
地址,%代表所有' identified by '用户密码' with grant option;
3.2.2.3 刷新授权信息
flush privileges;
3.2.3访问测试
3.2.3.1 登录
mysql -u 用户名 -p 密码
-p 后直接输入密码,不能有任何其他字符.
3.2.3.2 访问任意位置的 MySQL 数据库
mysql -u 用户名 -p 密码 -h 主机名或 IP 地址 -P 端口号

