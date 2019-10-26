ajax程序流程：

```
创建ajax引擎对象
声明事件监听：监听ajax对象的属性readystate的值，一旦readystate的值发生改变就会触发声明的函数的执行
创建并发送ajax请求
```

声明事件监听,放上下都可执行,但建议放上面,其中readystate的值有四次

![1563281813264](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563281813264.png)

代码自上而下,先是创建,然后声明事件监听

ajax的状态码之readyState的值(通过这个我们能知道整个执行到哪一步了,可控,灵活):
0:表示ajax引擎对象创建
1:表示请求创建但是未发送  ajax.open("get","my");
2:请求发送 ajax.send(null);
3:请求处理完毕，正在接收响应内容
4:******响应内容接收完毕(重要状态)

由此我们可以如此优化我们的代码

![1](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716211131.png)




