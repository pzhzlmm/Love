# 明确流程：

1、创建ajax引擎对象
2、声明监听函数(readystate)
    //判断ajax状态码
    	//判断响应状态码
   		 //获取响应信息(普通字符串和json格式的字符串)-从服务器端,取决于是什么类型的数据,JAVA对象建议json
   		 //处理响应
3、创建并发送ajax请求
    创建请求(设置请求方式，设置请求地址，设置异步或者同步)
    发送请求
4、其他处理

以上写到js函数里,然后因为页面的某个动作,触发了这段代码的执行



现创建User类并创建对应对象

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717100834.png)响应User对象给浏览器,浏览器并不识别,原来一直是拼成一个字符串响应,然后发送给浏览器,

User我们也响应一串字符串

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717101257.png)如果想把某一块单独拿出来:字符串切割(先用,再用=),这很麻烦

我们希望直接能拿我们想要的数据,即拼这个字符串的时候,按照某种合理的规则去拼即json

创建js对象不一定用new,还可以用{}的简写,即

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717101845.png)

声明对象内容不一定紧挨着创造对象,因此要使得我们代码结构层次更加紧密,js给了另外一种形式,即json

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717102124.png)

json是我们创建对象的一种格式

# ajax之响应数据

服务器响应给浏览器的数据应该是字符串类型
但是如果数据量比较大，我们就需要在服务器端将数据拼接成一个良好格式的字符串数据，响应给浏览器。
浏览器根据格式进行数据的解析和使用。

## 问题：

什么样的格式算是良好的格式呢？(是否方便对数据进行读取操作)

## 解决：

使用json格式的字符串

## json的概念:

其实json就是js创建对象的一种格式。保证对象中数据的紧密性和完整性。
json的格式：
var 对象名={
	键名:值,
	键名:值,
	...
	键名:值
}

## 使用:

在服务器端将要响应的数据拼接成json格式的字符串，这样客户端(浏览器端)在接收到响应数据后
可以使用eval方法将json格式的字符串数据直接转换为对应的js对象，便于数据的操作。
我们可以在服务器端使用类似Gson的工具包完成json格式字符串的拼接(非常方便)。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190717103016.png)

如果之前不知道uid呢?可以用反射

js有个非常好的方法eval,可以把字符串数据转换为js对象

响应回来的字符串变成了真正的JS对象了

我们可以做好配置,返回值就是json

当前

```jsp
  <head>
    <base href="<%=basePath%>">
     <!--声明js代码域  -->
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
	     		//声明事件监听,这个值一改,里面的函数就要执行
	     			ajax.onreadystatechange=function(){
	     				//判断ajax的状态码
	     				if(ajax.readyState==4){
	     					//判断响应状态码
	     					if(ajax.status==200){
	     						//处理响应
			     					//获取响应内容
			     						var data=ajax.responseText;
	     							//使用eval方法将字符串数据转换为js对象
	     								eval("var obj="+data);//eval("var obj={uid:18,uname:'王五',age:18,fav:'看电影'}")
			     					//获取div对象
			     						var div=document.getElementById("showdiv");
			     						div.innerHTML=obj.fav;
	     					}else if(ajax.status==404){
	     						//获取div对象
	     						var div=document.getElementById("showdiv");
	     						div.innerHTML="请求资源不存在";
	     					}else if(ajax.status==500){
	     						//获取div对象
	     						var div=document.getElementById("showdiv");
	     						div.innerHTML="内部服务器繁忙";
	     					}else{
	     						//获取div对象
	     						var div=document.getElementById("showdiv");
	     						div.innerHTML="未知异常";
	     					}
	     				}
	     			}
	     		//发送请求
	     			//get请求方式
		     			/* //创建请求
		     				ajax.open("get","my?uname=张三&pwd=123",false);
		     			//发送请求
		     				ajax.send(null); */
		     		//post请求方式
		     			//创建请求
		     			ajax.open("post","my",false);
		     			//设置请求参数为键值对方式
		     			ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		     			//发送请求
		     			ajax.send("uname=张三&pwd=123");
	     		//异步同步
	     			var div=document.getElementById("showdiv");
	     			alert(div.innerHTML);
     		}
     	//使用js方式添加监听事件及其监听的函数
     	function testD(){
     		var btn=document.getElementById("btn");
     		btn.onclick=function(){
     			alert("aaaa");
     		}
     	}
     	//js中的josn对象
     		//创建js对象
     		var obj={};
     		//声明对象内容
     		obj.name="张三";
     		obj.pwd="123";
     		//使用json方式创建对象
     		var obj2={
     			name:"李四",
     			pwd:"123"	
     		};
     	var str="{name:'李四',pwd:'123'}";		
     		alert(obj.name+":"+obj2.name);
     </script>
  </head>

</html>
```

