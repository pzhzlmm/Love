第一个ajax程序：

```jsp
 <script type="text/javascript">
     	//声明单击事件--非ajax
	     	function test(){
	     		window.location.href="my";
	     	}
     	//声明单击事件--ajax
     		function testAjax(){
     			//创建Ajax引擎对象
	     			var ajax;
	     			if(window.XMLHttpRequest){//火狐
	     				ajax=new XMLHttpRequest();
	     			}else if(window.ActiveXObject){//ie
	     				ajax=new ActiveXObject("Msxml2.XMLHTTP");
	     			}
</script>
<body onload="testD()">
    <h3>ajax学习</h3>
    <hr />
    	<input type="button" value="测试非ajax" onclick="test()"/>
     <input type="button"  value="测试ajax" onclick="testAjax()"/>
     <input type="button" id="btn" value="测试js添加事件"/>
    <div id="showdiv" style="width: 200px;height: 200px;border: solid 1px;"></div>
  </body>
```

编写servlet

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716173643.png)

声明单击事件-Ajax

先创建不同浏览器的Ajax引擎对象

再发送请求:先创建请求open(方法,url即请求的servlet)

创建完请求后发送send

![1563280790334](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563280790334.png)

加个**监听**,一旦某个值改了,就立马触发某个**事件**(另外的)的执行

具体监听哪个函数,由程序员指定(在发送请求之前
ajax.onreadystatechange=function(){) //声明事件监听,这个值一改,里面的函数就要执行:里面函数执行即证明响应回来了

![1563280843627](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563280843627.png)

具体的响应操作根据我们的需求来

效果

![1563280892164](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563280892164.png)

如果选择非ajax

![1563281091660](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563281091660.png)

服务器不管你这个请求是Ajax来的还是非Ajax来的,只要来了请求响应就是了

添加事件不一定要标签上写onclick,也可以这么加

![1563281278243](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563281278243.png)

明确流程：
    			1、创建ajax引擎对象
    			2、声明监听函数
    				//判断ajax状态码
    					//判断响应状态码
    						//获取响应信息(普通字符串和json格式的字符串)
    						//处理响应
    			3、创建并发送ajax请求
    				创建请求(设置请求方式，设置请求地址，设置异步或者同步)
    				发送请求
    			4、其他处理