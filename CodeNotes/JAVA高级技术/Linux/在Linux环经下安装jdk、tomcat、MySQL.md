# 在Linux环境下安装JDK

1、通过相关软件或拖拽的形式将安装包放入Linux目录中

2、解压jdk 1.8.0_11并将jdk复制到 /usr/local目录下

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663638495-3418e7c4-e013-435f-b6c1-411dba8cf878.png)

3、更改jdk 1.8.0_11目录名为jdk（ mv jdk1.8.0_11/ jdk ）

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663638636-a744a061-a40a-467b-a8ee-a1f3e3345780.png)

4、编辑profile文件，设置系统环境变量（ vi /etc/profile ）

5、在profile文件底部配置具体环境变量内容，如下

export JAVA_HOME=/usr/local/jdk

export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

export PATH=$JAVA_HOME/bin:$PATH

6、重启Linux主机（reboot）

7、在任意路径下输入（ java -version ），如果出现版本信息则成功

# 在Linux环境下安装Tomcat

1、通过相关软件或拖拽的形式将安装包放入Linux目录中

2、对目录文件进行解压缩（tar -zxf apache-tomcat-7.0.47.tar.gz  ）

3、将目录复制到usr下local目录，修改目录名为tomcat（ cp apache-tomcat-7.0.47/ /usr/local/tomcat -r ）

4、启动startup.sh文件（区别Windows下启动tomcat  ./startup.sh）

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663638823-85b8c578-d033-4908-b983-364840381dcf.png)

5、在自己浏览器输入 192.168.179.128:8080 访问虚拟机上的tomcat

**6****、如果访问失败，一般是由于防火墙未关闭引起的，故关闭防火墙代码如下**

**service iptables stop**

注：

1、显示最后的日志信息 tail -f /usr/local/tomcat/logs/catalina.out

2、打开tomcat并显示日志信息，关闭同下/usr/local/tomcat/bin/startup.sh & tailf /usr/local/tomcat/logs/catalina.out

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663638955-3cc1a045-3bf2-457e-bed8-4264130afc81.png)

3、重启tomcat时需要的命令

 **cd /usr/local**

**cd bin   ./startup.sh   service iptables stop**

 

# 在Linux环境下安装MySQL

1、通过相关软件或拖拽的形式将安装包放入Linux目录中

2、在安装目录下直接安装MySQL下载源，一直输y。（  yum localinstall文件名  ）

3、安装mysql（ yum install mysql-server ）

4、启动MySQL服务（ service mysqld start ）

5、根据提示，修改root用户和密码，只需要第一次设置，如下图

（  /usr/bin/mysqladmin -u root password 'new-password' ）

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663639093-c1a15d53-dff0-4c20-b61d-7df8d5607afa.png)

6、通过用户名、密码登陆MySQL，要在lib下的mysql目录（ mysql -uroot -proot ）

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663639238-0996c862-adc7-4ee1-a90c-10489fb9e91b.png)

7、连接到自己的navicat上，连接属性如下，IP地址为Linux虚拟机的IP地址。

8、进行授权（ grant all privileges on *.* to 'root'@'%' identified by 'root' with grant

-> option; ）

9、刷新权限（  flush privileges; ）

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663639378-055008d9-26e5-4eff-a71a-b0ed87673559.png)

 

需要明确的地址

Jdk一般安装在 /usr/local目录下

Tomcat 一般安装在/usr/local目录下

Mysql 一般会被系统自动安装在 /var/lib目录下

防火墙的启动  service iptables start/stop