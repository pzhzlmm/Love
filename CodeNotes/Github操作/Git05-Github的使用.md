打开github,搜寻项目并且下载

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319142531925.png"/>

在创建仓库的操作里,这里可以选择创建的模板(旁边那个是开源协议)

![image-20200319143430379](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319143430379.png)

clone

![image-20200319142753075](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319142753075.png)

设置用户名称和邮箱

![image-20200319144417777](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319144417777.png)

打开码云,设置自己的公钥

![image-20200319152800726](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319152800726.png)

根据这个网址的这个命令一路回车到底

(网址:https://gitee.com/help/articles/4181#article-header0

命令:ssh-keygen -t rsa -C "xxxxx@xxxxx.com"  )

![image-20200319153124971](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153124971.png)

然后拿到私钥与公钥

![image-20200319153308828](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153308828.png)

复制这行代码进行公钥的复制

```
cat ~/.ssh/id_rsa.pub
```

![image-20200319153410195](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153410195.png)

接着拷贝这段代码

![image-20200319153523963](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153523963.png)

打开github的设置

![image-20200319153607298](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153607298.png)

再找到SSH进行新建

![image-20200319153650837](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153650837.png)

添加后,回到码云复制这段代码,并把后缀改成github.com

![image-20200319153900789](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319153900789.png)

看到hi~则说明配置成功了

![image-20200319154101671](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319154101671.png)

现在就可以通过SSH的形式来下载了

![image-20200319154320466](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319154320466.png)

同样设置用户和邮箱,然后执行代码添加增加操作



# git删除远程仓库的文件或目录

```cpp
git rm -r --cached a/2.txt //删除a目录下的2.txt文件   删除a目录git rm -r --cached a
git commit -m "删除a目录下的2.txt文件" 
git push
```

tips: 用-r参数删除目录, git rm --cached a.txt 删除的是本地仓库中的文件，
 且本地工作区的文件会保留且不再与远程仓库发生跟踪关系，
 如果本地仓库中的文件也要删除则用git rm a.txt

----success

1.先在本地git清除文件夹

git rm xxx(xxx表文件名)  -r ( -r 当给出主目录名时允许递归删除)

2.本地提交

git commit -m''(-m 备注)

3.最后push到远程仓库

git push -u origin master

![image-20200319155659007](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319155659007.png)