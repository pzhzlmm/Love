## **二、 服务器端** **Visual SVN**

**1.**     **安装软件**

a)     指定软件安装位置和版本库位置

b)     默认端口 443

c)      使用 SVN authentication

![img](file:///C:/Users/RUICYQ~1/AppData/Local/Temp/msohtmlclip1/01/clip_image004.jpg)

前面是软件放的位置,后面是代码放的位置(仓库) 

**2.**     **创建版本库**

a)     创建默认结构 use default struction

b)     默认结构的含义

i.          trunk：主干  开发时代码存储的位置，永远是最新的代码

ii.          brank：分支 在不影响 Trunk 其它用户情况下进行一些关于新功能的探索性或实验性的开发，待新功能完善后它也可以合并到 Trunk 中(拉分支合并分支)

iii.          tags：标签 历史版本 阶段性里程碑版本 比如 1.0  2.0  3.0

![1563964087881](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563964087881.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724182840.png)

主干,目录,标签

**3.**     **创建用户**

![1563964222712](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563964222712.png)

**4.**     **创建组**

**5.**     **为组指定用户**

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724183054.png)

**6.**     **为组指定对版本库的操作权限**

a)     默认 everyone 具有 read/write 权限，无法删除，要修改为 no access

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724183126.png)
 

 ![1563964380234](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563964380234.png)

默认每个读写

**7.**     **通过浏览器访问服务器端**

 ![1563964318569](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563964318569.png)



 ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724183204.png)

![1563964342689](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563964342689.png)

被禁后一直被禁,清楚一下缓存

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190724183336.png)

