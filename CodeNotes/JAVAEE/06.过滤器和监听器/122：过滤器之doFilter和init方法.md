doFilter 用来做放行，里面的response和request即此次请求的response和request

# 过滤器之doFilter方法

相当于过滤器的入口

作用:服务器在接收到浏览器发过来的请求后，先解析请求信息，创建对象request和response
然后根据请求URL地址判断如果符合过滤器的过滤范围，则会调用过滤器中的doFilter来
进行请求拦截，并将request和response对象作为实参传递给doFilter方法。我们
可以在doFilter方法中声明过滤器拦截代码。
参数:
ServletRequest:接收此次拦截的请求的request实参
ServletResponse:接收此次拦截的请求的response实参
FilterChain：可以进行请求放行
	chain.doFilter(request, response);（可以理解为请求转发，这里不用写地址，下面的代码会执行但是写的话意义并不大）

## 过滤器之init和destory方法

init方法：服务器启动时调用
destory方法：服务器关闭时调用
证明：过滤器的生命周期为从服务器开启到服务器关闭
		