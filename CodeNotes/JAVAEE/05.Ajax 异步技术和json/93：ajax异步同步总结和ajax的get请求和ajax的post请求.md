同步:即响应还没有回来,发送请求以下的代码不执行,即这一块的代码不会被执行到

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716220033.png)

# 创建ajax请求(设置异步或者同步)

ajax.open(method,url,ansyc);

## method:表示请求方式

### get方式

请求数据以?隔开的形式拼接在url的后面。
请求数据不能写在send方法中(send参数为null)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716220940.png)

### post方式

post方式需要单独的进行请求数据的设置。使用ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
设置请求数据为键值对数据。如果有请求数据则ajax.send("键值对数据&键值对数据..."),如果没有请求数据
则ajax.send(null)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716221155.png)

## url:请求地址

## ansyc

设置异步或者同步请求，true表示异步，false，表示同步。默认是异步的。

异步同步取决于下面的代码是否依赖于Ajax

### *异步

当前js函数继续执行，无须等待ajax请求的响应以及响应的处理。

### 	    						 同步

当前js函数会等待ajax请求以及响应，当ajax响应处理完毕后，继续执行函数的剩余代码。

# 发送ajax请求

## get方式

ajax.send(null);

## post方式

ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");//不加这句话不好使,form表单默认有这句话,即把值以键值对的方式,不然走的是浏览器默认方式,即不是键值对方式
ajax.send("uname=张三&pwd=123");//没有写null

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716221337.png)

form表单的属性之一

![1563286525548](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563286525548.png)

默认以键值对的形式提交给服务器

键值对数量很小,但可以改变为以流的形式去提交