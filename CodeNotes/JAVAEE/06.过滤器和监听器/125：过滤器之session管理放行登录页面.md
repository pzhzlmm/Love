

## 登录成功和在线人数冲突问题?

根据我们上次写的代码,当我们开启一个jsp,访问我们登录页面的时候,服务器底层默认帮我们开启了一个session

而我们希望登录的创建是发生在servlet里

![1563367553935](![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190718113217.png))

登录失败session还在@@@,现我们改成这种销毁,即看到登录页面就意味着session不需要了

也可以在顶层配置那里session给其设置为false,但它带来新的问题是下面的数据就拿不到session了(判断用户注册成功,或者密码输入错误),又需要再对应位置重新获取session,还是不这样了

## 无限重定向

![1563368417729](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563368417729.png)问题1：
在过滤器中使用session校验后发现登录页面的访问成了死循环，因为登录页面的
请求也就是login.jsp的请求也会被过滤器拦截，而此时session中没有相关数据的
造成又重定向到登录页面......
解决1：
对login.jsp和登录请求进行放行(判断是否是登录页面)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717210407.png)但此时还是不能正常访问

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717210602.png)

点击登录请求发给servletdata,又重定向为login.jsp,但是session仍然还是没有user

因此我们除了要放登录页面以外,还要放我们的登录请求,但我们的所有请求都放在data里的,一放全放,因而我们就要找到与之相对应的方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717211045.png)放行登录请求

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717211248.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717211212.png)

