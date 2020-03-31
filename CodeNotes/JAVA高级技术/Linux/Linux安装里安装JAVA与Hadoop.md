# 拷贝

以后所有文件夹拷贝到software文件夹下

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663571511-42b864b5-20d6-4e03-b4a4-98d2fc9c4116.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663571639-4ea5db53-3efe-4e7d-8ae5-0b0b77211907.jpeg)

 

# 安装JAVA

## 解压

### 解压JDK

如果这里有反应了先卸载java

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663571808-446115e5-222e-46df-97e6-4b9bd2adf107.jpeg)

#### 卸载Java

命令

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663571944-6d9b9e37-5463-48ab-a43f-9051ae993270.jpeg)

rpm -qa:查询所有jar包

### 解压命令

删掉之后解压

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663572075-0730689c-359b-4b60-9be2-cdb182d15890.jpeg)

x : 从 tar 包中把文件提取出来

z : 表示 tar 包是被 gzip 压缩过的，所以解压时需要用 gunzip 解压

v : 显示详细信息

f xxx.tar.gz : 指定被处理的文件是 xxx.tar.gz

Ps.以后我们所有文件夹都解压到modele

### 解压Hadoop

方法同上

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663572190-89d11138-cb0d-41f8-a1bf-2287f3abd39e.jpeg)

效果：

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663572539-57028993-ddd5-4280-9e98-2c3ca32f052d.jpeg)

## 配置环境变量

### 拷贝路径

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663572665-a36fc016-bd0b-460b-a944-04bf28677adc.jpeg)

### 加sudo变root

配置linux的环境变量

如果直接vim会出现vim，因为我们并不是root用户，因此还要加一个**sudo**

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663572799-2510f72e-fc98-4f2c-807b-34de7b03ac3d.jpeg)

所有加了sudo的命令都是以root命令来执行的

### 加环境变量

在其中加上一句

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663572929-1a0d220c-83a9-4acb-9f45-05b8d88cc6ce.jpeg)

最后我们把这个变量提升为全局变量@@@

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573130-6a09fac9-eb2d-4b8b-897b-974dd2ba3e39.jpeg)

## source

接着source一下@@@

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573257-25b3c800-58a2-4800-bc14-c68fd947b35f.jpeg)

提升为全局当前source和子source都会有对应权限

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573385-b37e2592-aea1-4ded-993f-ff09dc731f81.jpeg)

所有用这个source启动的子shell都会有这个东西

## 检测

注意这里的版本一定是1.8.0，如果出现其他的版本说明之前的版本没有卸载干净

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573502-1ee7ef2b-611a-4884-bcbe-7e20a50ea630.jpeg)

 

# 安装Hadoop

## 拷贝路径

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573635-4cf18777-55ac-49a3-8767-e551790941c9.jpeg)

## 配置环境变量

同配置JAVA，只是注意后面要多配置一个sbin

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573792-347439e5-bf70-4fbb-8532-67d411e48aa6.jpeg)

Sbin：可执行脚本

## 检测

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663573904-ab207cbe-115e-4b8c-b373-b1b7b7dc1e24.jpeg)

## Hadoop的目录结构

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663574038-9cc8ed64-76f3-4e07-9fd3-5d51d4e40e59.jpeg)

### 常用

Bin：可执行的二进制文件

Etc：配置文件（将来配置Hadoop都在这个文件夹下进行配置）

Lib：库

Sbin：可用脚本

Share：最重要的，所有脚本都放在里面

### Share

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663574179-974a6a59-a55b-4956-9301-76d546ec3e34.jpeg)

Doc里是文档，而hadoop：

 

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663574310-897d3172-9400-438e-9efc-b915a334d200.jpeg)

 

common

hdfs

https

kms

mapreduce

tools

Yarn

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663574438-9d105810-e014-4541-8598-94bc60ca7732.jpeg)

里面才是hdfs的jar包，或者说依赖的jar包

Hadoop所有的jar包全部存放在share文件夹下面，而lib里存放的是linux的本地库文件，Hadoop依赖于本地库文件去执行

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585663574587-b197e871-806d-4d32-9d3b-d9e5137b966b.jpeg)

Java里有，但慢

 