# sqlplus不是内部或外部命令

通过运行->cmd->sqlplus/nolog 登录sqlplus时，突然间提示“sqlplus不是内部或外部命令，也不<br />是可运行的程序或批处理文件”，如下图：<br />![](https://cdn.nlark.com/yuque/0/2019/gif/349894/1561010195075-225c5536-1c1f-4c34-b336-65cc69203211.gif#align=left&display=inline&height=426&originHeight=426&originWidth=666&size=0&status=done&width=666)

分析后感觉不可能啊，因为昨天使用正常的，从网上百度基本确定是以下两种原因所致<br />1、没有正确地安装oralce的客户端<br />2、oralce安装后注册到系统中的目录路径在PATH变量中丢失了<br />3.oracle相关文件损坏<br />因为本机安装的oracle服务端，所有排除第一种可能，接下来进行第二种排查<br />发现path环境变量里确实是没有配置oracle，<br /> ![](https://cdn.nlark.com/yuque/0/2019/gif/349894/1561010202127-47e0276f-c797-4876-a217-93867c8588d8.gif#align=left&display=inline&height=477&originHeight=477&originWidth=438&size=0&status=done&width=438)<br />将oracle根路径添加的path中，F:\oracle\product\10.2.0\db_1\BIN，再次连接成功<br />![](https://cdn.nlark.com/yuque/0/2019/gif/349894/1561010208455-6786c99e-f377-44ec-97da-f1fc31932efb.gif#align=left&display=inline&height=429&originHeight=429&originWidth=665&size=0&status=done&width=665)

博客:<br />https://blog.csdn.net/zhemeluana/article/details/19132307
