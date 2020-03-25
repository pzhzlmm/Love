# 07-servlet的引入和介绍

在用户需求和服务器处理之间加了一个service方法<br />服务器只认service<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418705466-af6e7255-b84b-468d-805f-f141b68e5d30.png#align=left&display=inline&height=344&originHeight=1053&originWidth=2547&status=done&width=831)服务器能认识哪些代码这个规则已经定死了

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418705555-467878da-b76d-40c5-90b8-d01bd24875aa.png#align=left&display=inline&height=370&originHeight=1086&originWidth=1636&status=done&width=557)把业务逻辑代码,放到服务器能够认识的代码里的service方法里去,然后服务器再去通过执行service来间接地执行业务逻辑代码.












<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562418705657-8ec7fe8b-d7e3-4fc7-8105-451cce70941d.png#align=left&display=inline&height=454&originHeight=1061&originWidth=1546&status=done&width=662)也可以执行多个















这个在服务器中就是severlet<br />即我们开发的时候会把业务逻辑处理代码放serverlet里,然后再让service方法去调用serverlet
