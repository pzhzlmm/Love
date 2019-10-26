Ajax的三个核心作用:创建Ajax,声明监听,发送请求

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716215211.png)

让线程睡一会儿

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716214744.png)

执行的时候有个时间差,先执行监听事件的弹窗aaa,再执行的ajax监听里的代码

他们各自执行各自的

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716215309.png)

默认异步,各自执行各自的,没有任何关联响应还没有回来,等响应回来再执行对应的function就好了

但这里希望存在一个依赖关系,即我这里希望弹框里希望出现是响应里的内容即Ajax学习

因此Ajax提供了同步模式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716215610.png)

改成true任然是异步,改为false就改成同步了

如果异步依赖于响应的代码已经执行完毕了响应结果才回来,同步会等会儿

