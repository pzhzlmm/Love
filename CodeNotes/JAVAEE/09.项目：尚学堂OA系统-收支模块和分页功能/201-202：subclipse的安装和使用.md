

## **三、 客户端** **subclipse**

**1.**     **简介**

a)     subclipse=subversion+eclipse

b)     一个为 Eclipse 添加 Subversion 支持的项目。支持几乎所有版本的 Eclipse

**2.**     **安装**

a)     解压后将其中的 features 和 plugin 文件夹放入 MyEclipse 的 dropins 目录下

b)     重新启动 MyEclipse，即可自动发现并安装

c)      安装后在 window------preferrences---—team 中可以看到 SVN

![1563969558704](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563969558704.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724195951.png)

**3.**     **提交项目到服务器端**

a)     选中项目右键--------team----share project----选择 SVN

b)     提交版本位置、用户名、密码都会由相关服务器管理人员提供。

![img](file:///C:/Users/RUICYQ~1/AppData/Local/Temp/msohtmlclip1/01/clip_image005.jpg)

 



c)      可以选择记住密码，避免多次的重复输入。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724200402.png)

选择要导入到服务器端的文件

d)     提交后会跳到 team synchronizing view，还需要真正同步代码到服务器，同步之前可以选择哪些代码不需要使用 svn 进行管理

e)     提交成功后可以观察版本库容量的变化:变大了

f)      提交成功后客户端项目会显示专门的标记，并且增加了相应的.svn 项目，来存储操作记录

![1563969921280](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563969921280.png)


 项目里多了个隐藏的文件夹svn

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724200610.png)

 

 ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724200731.png)

 

**4.**     **断开和服务器连接**

a)     team—断开连接--------从项目中删除 SVN 元信息

**5.**     **客户端从** **SVN** **检出项目**(checkout)

a)     new--- Project…--------SVN----从 SVN 检出项目(导入也可以)

**6.**     **更新和提交操作**

a)     更新将服务器最新代码更新到本地；提交是将本地最新代码提交到服务器

b)     提交之前要先更新，因为可能其他程序员期间以及提交了最新代码到服务器

c)      提交一定要给出注释，对提交内容进行说明，作为以后辨别版本的主要依据。

**7.**     **解决冲突**

a)     模拟两个用户对一个类进行修改，分别修改相同的方法和增加一个新方法

b)     更新后出现冲突，和冲突方沟通后，对冲突文件给出最终解决方案

c)      还需要 **team----标记为解决**，相应冲突文件为自动删除，当前文件由冲突状态转换为已修改状态，待提交

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724201807.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724201919.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724201954.png)

**8.**     **还原没有提交的代码**

a)     team----还原

**9.**     **还原已经提交的代码**

a)     如果最新的代码出现问题，可以直接修改，也可以回滚到之前的某个历史版本，直接使用或者进行修改

b)     查看资源历史记录

c)      根据注释确定要还原的版本，无法确定可以查看或者比较代码

d)     确定版本后，右键选择”从修订班 x 回复更改”

e)     可能出现冲突，解决后提交代码到服务器

还可以同时选中两个状态进行相互比较

![1563971076116](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563971076116.png)

![1563971087804](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563971087804.png)

也可以点击这里进行选择直接查看不同版本的状态

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724202530.png)

