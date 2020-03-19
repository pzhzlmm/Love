先去git官网上下载git文件,下载一路下一步,右键看有没有git看是否成功

## 1.初始化

在目标文件右键唤出操作框,使用git init进行初始化

![image-20200319102419399](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319102419399.png)

设置用户名和邮箱

![image-20200319102556831](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319102556831.png)

通过git config -l 查看设置情况

![image-20200319102745440](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319102745440.png)

## 2.把文件添加到暂缓区之中

![image-20200319102919009](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319102919009.png)

可以通过git status查看当前状态

![image-20200319103109832](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319103109832.png)

当前未被添加到暂缓区的文件

通过add命令把文件添加到暂缓区并查看当前状态

(git add 文件名称:添加一个,git add ./git add * 添加所有

![image-20200319103239687](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319103239687.png)

## 3.把文件从暂缓区添加到master分支之中

### 3.1 添加

![image-20200319103344985](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319103344985.png)

使用commit进行提交

![image-20200319103440214](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319103440214.png)

这时候再次查看状态

![image-20200319103527375](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319103527375.png)

### 3.2 对文件进行修改

如果我们对其中的一个文件进行修改再进行提交

![image-20200319103909464](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319103909464.png)

还可以通过这个命令查看修改的内容(未测试,在commit之前用)

![image-20200319104151380](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319104151380.png)

### 3.3 查看日志

通过git log 文件名来查看某一文件的修改日志

(查看全部直接git log即可)

![image-20200319104442760](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319104442760.png)

## 4.恢复到过去的某一版本

### 4.1 恢复到上一版本

通过git reflog命令查看想要追溯的版本号

![image-20200319104658737](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319104658737.png)

恢复到上一版本命令:git reset --hard HEAD^

![image-20200319104906638](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319104906638.png)

### 4.2 恢复到指定版本

git reset --hard 版本号

![image-20200319105203521](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319105203521.png)

这就实现了在任一版本之间进行跳转的功能

## 5.忽略文件

通过git命令touch .gitgnore添加忽略文件(没办法手动添加)

接着在文件里输入自己添加时忽略的内容

![image-20200319110017153](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319110017153.png)

老师例子

 ![image-20200319110141042](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319110141042.png)