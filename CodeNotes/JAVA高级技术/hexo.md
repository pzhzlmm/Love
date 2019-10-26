1.换源保证速度

npm install -g cnpm --registry=http://registry.npm.taobao.org

![1565786125421](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565786125421.png)

cnpm install -g hexo-cli 来安装

可以用hexo -v来验证一下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190814203801.png)

初始化命令

![1565786472607](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565786472607.png)

生成的结果:

![1565786527004](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565786527004.png)

生成的内容

![1565786534524](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565786534524.png)

启动博客命令

hexo s

新建一篇文章

hexo new "My New Post"

![1565786834838](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565786834838.png)

win查看目录命令:dir /-s

![1565786946319](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565786946319.png)

博客清理:hexo clean

博客生成:hexo g

再用hexo s启动就可以看到自己刚刚写的博客了

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190814205203.png)

## 部署到github上

注意部署个人博客的github仓库命名必须符合特定要求

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190814205541.png)

现在再装一个git的部署插件

npm install hexo-deploer-git --save/mac:cnpm install --save hexo-deplyer-git

都失败了用git branch成功了$ cnpm install --save hexo-deployer-git

接下来要配置这个文件

![1565787721911](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565787721911.png)

到文件末尾设置配置文件

![1565788258545](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565788258545.png)

注意type之前和冒号之后都需要有空格

部署到远端:

hexo d

之后输入github的账号和密码即可(我的已经输入过了)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190814211307.png)

就可以发现自己的远端仓库多了许多这些东西

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190814211347.png)

然后用我们的仓库名去访问就能看到

github部署key的方法:

https://www.jianshu.com/p/94b39f278214