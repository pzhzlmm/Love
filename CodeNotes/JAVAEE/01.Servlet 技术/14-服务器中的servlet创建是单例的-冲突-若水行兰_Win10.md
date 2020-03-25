# 14-服务器中的servlet创建是单例的

同一个服务器可以部署N多web项目<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675687402-357ffb90-57de-45c4-8764-67f2702b77e1.png#align=left&display=inline&height=377&originHeight=1039&originWidth=2289&status=done&width=831)

服务器不能停止<br />来一个请求即开辟一个线程<br />这个代码是由我们声明,但它的调用和创建是由tomcat服务器来做<br />但我们不可能一百万个对象创建一百万个MyServlet,这一百万个线程都在调用service,一百万个线程拿到的是同一个实例化对象,但操纵的不是同一份数据,即调service方法调用了一百万次,每次传的参数都不相同<br />即<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675687511-667051e6-a955-4ec9-b070-645babdd4d30.png#align=left&display=inline&height=387&originHeight=925&originWidth=1987&status=done&width=831)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675687621-bc5c2d62-a171-4e3c-b3d5-6e9d81e4012d.png#align=left&display=inline&height=393&originHeight=1005&originWidth=2125&status=done&width=831)各个线程传递各的参数,传递实参不同,处理的就各不相同

浪费资源会降低服务器性能






