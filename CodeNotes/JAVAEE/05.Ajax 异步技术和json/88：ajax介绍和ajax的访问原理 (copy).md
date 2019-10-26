```jsp
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'search.jsp' starting page</title>
	<!-- 
		ajax之搜索框关键字提示语：
			功能需求：
				用户在搜索框中输入关键字，然后搜索框下出现下拉选项，提示关键字的提示语。
				用户可以使用鼠标进行提示语的选择，也可以使用键盘的上下键来进行选择。
			技术分析：
				ajax技术+servlet+jsp+jdbc
			功能分析(思路)：
				1、创建搜索界面(搜索框和提示语div和搜索按钮)
				2、给搜索框添加onkeyup事件，键盘弹起时发送ajax请求
				   请求当前用户输入的信息对应的提示语数据
				3、将提示语数据填充到搜索框下的div中
				问题：
					现在用户在搜索框上单击键盘的任意一个键都会发起ajax请求，请求提示语数据。
				解决：
					判断用户单击的键盘的按键符合要求再发请求。
				解决：
					获取用户按了键盘的哪个键。使用event对象进行按键的键盘码值获取
				4、实现使用鼠标选择提示语
				5、实现使用键盘的上和下键选择提示语
				6、实现鼠标和键盘的联动操作
				7、将显示提示语的div进行隐藏，当有提示语的时候显示隐藏的div
			完善：
				问题1：只要用户在搜索框中出现键盘点击动作，都会触发键盘事件的执行。
					而只要数据符合要求，都会发送ajax请求，请求提示语信息。点击一次都发一次。
					但是其实只需要最后一次进行请求发生即可。
				解决1:
					使用延迟发送请求。
				使用1：
					window.setTimeout
				
				问题2：
					event对象在火狐浏览器中使用window.event获取不到。
				解决2:
					在获取浏览器中使用传参的方式给event进行赋值。
				使用：参照源码即可	
			数据库设计：
				创建表:(data)  存储了常用的关键字数据
					关键字编号：id
					关键字数据：title
					说明：remark
				添加测试数据:要求前期测试数据为英文单词
				SQL语句设计:查询以用户当前搜索框数据开头的关键字
					select * from t_data where title like 'a%'
				注意：
					测试数据不要太多。
			数据库实现：在数据库中创建表即可,并添加测试数据。		
	 -->
	 <!--引入jQuery文件  -->
	 <script type="text/javascript" src="js/j.js"></script>
	 <!--声明js代码域  -->
	 <script type="text/javascript">
	 	//创建计数器
	 	var count=-1;
	 	//声明变量记录定时执行的编码
	 	var id;
	 	//页面加载成功完成页面资源的初始化
	 	$(function(){
	 		//给搜索框添加键盘弹起事件
	 		$("#search").keyup(function(event){//火狐方式获取event对象
	 			//声明正则表达式判断空格
	 			var reg=/^\s+$/g;
	 			//获取event对象
	 			var eve=window.event || event;
	 			//获取用户当前点击的键盘键的键盘值
	 			var code=eve.keyCode;
	 			//判断code的值是否符合要求
	 			if(code>=65&code<=90 || code==8 || code==32){
	 				//获取用户当前搜索框中的数据
		 			var sd=$("#search").val();
	 				//判断请求数据是否为空
	 				if(sd=="" || reg.test(sd)){
	 					return;
	 				}
	 				//清除之前的将要发的请求
	 				window.clearTimeout(id);
	 				//延迟发送请求
	 				id=window.setTimeout(function(){
	 					//发起ajax请求，请求当前用户搜索框数据的提示语信息。
			 			$.get("search",{sdata:sd},function(data){
			 				//使用eval方法将数据转换为对象
			 					eval("var sd="+data);
			 				//获取提示语div元素对象
			 					var dataDiv=$("#dataDiv");
			 				//清空原有内容
			 					dataDiv.empty();
			 				//显示隐藏的div
			 				if(sd.length>0){
			 					dataDiv.css("display","");
			 				}
			 				//将提示语数据填充到div中
			 					for(var i=0;i<sd.length;i++){
			 						dataDiv.append("<div style='padding:5px;'>"+sd[i].title+"</div>");
			 					}
			 				//给提示语添加鼠标选择效果
			 			 		$("#dataDiv div").mouseover(function(){
			 			 			//清空所有提示语的div的背景颜色
			 			 			$("#dataDiv div").css("background-color","");
			 			 			//将当前选择的div北京颜色变成灰色
			 			 			$(this).css("background-color","gray");
			 			 			//鼠标和键盘的联动，将当前鼠标选择的div的角标赋值给计数器
			 			 			count=$(this).index();
			 			 		})
			 			 	//给提示语div添加单击事件，用来选择提示语
			 			 		$("#dataDiv div").click(function(){
			 			 			//将当前选择的div中的提示语数据改变到搜索框中
			 			 				$("#search").val($(this).html());
			 			 			//隐藏当前填充所有提示语的div
			 			 				$("#dataDiv").css("display","none");	
			 			 		})	
			 			})
	 				}, 1000)
	 			}
	 			//判断用户点击的是否是键盘的下键
	 			if(code==40){
	 				//判断是否有提示语
	 				if($("#dataDiv div").length>0){
	 					//判断
	 					count=count<$("#dataDiv div").length-1?++count:0;
	 					//清空所有提示语的div的背景颜色
 			 			$("#dataDiv div").css("background-color","");
	 					//让提示语div中第一个提示语的背景色变成灰色
		 				$("#dataDiv div:eq("+count+")").css("background-color","gray");
		 				//将选择的提示语改变到搜索框中
		 				$("#search").val($("#dataDiv div:eq("+count+")").html());
	 				}
	 			}
	 			//判断用户点击的是否是键盘的上键
	 			if(code==38){
	 				//判断是否有提示语
	 				if($("#dataDiv div").length>0){
	 					//判断
	 					count=count>0?--count:$("#dataDiv div").length-1;
	 					//清空所有提示语的div的背景颜色
 			 			$("#dataDiv div").css("background-color","");
	 					//让提示语div中第一个提示语的背景色变成灰色
		 				$("#dataDiv div:eq("+count+")").css("background-color","gray");
	 					//将选择的提示语改变到搜索框中
		 				$("#search").val($("#dataDiv div:eq("+count+")").html());
	 				}
	 			}
	 		})
	 	})
	 </script>
  </head> 
  <body>
  	<!--创建div容器将提示语div和搜索框div显示到一起  -->
  	<div id="container" style="width: 550px;margin: auto;">
	  	<!--创建div进行搜索框的布局  -->
	  	<div id="sdiv" style="width: 550px;margin: auto;margin-top: 200px;">
	  		<input type="text" name="search"  id="search" value="" style="width:400px;height: 30px;font-size: 18px;" />
	   		<input type="button" value="搜索" style="height: 30px;width: 100px;"/>
	  	</div>
	  	<!-- 提示语div -->
	  	<div id="dataDiv" style="width: 398px;height: 300px;border: solid 1px;border-top: none;display: none;"></div>
  	</div>
  </body>
</html>

```

```jsp
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'select.jsp' starting page</title>
    <!-- 
    	Ajax案例之三级联动：
    		功能需求：
    			页面中有三个下拉框选项，分别为省下拉框，市下拉框，区/县下拉框
    			选择省，则市下拉框中出现对应的该省下的市信息，选择市，则区/县下拉框中
    			出现对应的该市下面的区/县信息
    		技术分析:
    			ajax技术+jsp+servlet+jdbc
    		需求分析(思路):
    			1、创建页面：页面中有三个下拉框，分别为省、市、区/县
    			2、页面加载成功发起ajax请求，请求省的信息，并将响应结果
    			      填充到省下拉框中
    			3、选择省触发一个新的js函数 的执行，该函数中发起新的ajax请求
    			      请求该省下的市信息，并将响应数据填充到市下拉框
    			4、选择市信息触发一个新的js函数的执行，该函数中发起新的ajax请求
    			     请求该市下的区/县信息，并将数据填充到区/县下拉框中
    		数据库设计：
    			创建表(area)：存储了省、市、区/县信息
    			设计表实现一：只存储了数据，但是数据之间的层级关系没有存储。
	    			地区id:areaid
	    			地区名:areaname
	    		设计表实现二：
	    			地区id:areaid
	    			地区名:areaname
	    			地区上级id：parentid
	    	sql语句设计:
	    		查询所有的省信息:
	    			select * from area where parentid=0;
	    		查询选择的省的市信息(假如：选择的山东省的areaid为110000,)
	    			select * from area where parentid=110000;
	    		查询选择的市的区/县信息(假如：选择的山东省的济南市areaid为110001)
	    			select * from area where parentid =110001;
	    		代码中
	    			select * from area where parentid=?;
    		数据库实现:将资料中提供的area.sql文件导入到数据库中即可
    		功能实现：参照源码即可
    		代码缺陷：
    			发现请求省，市，县的代码中基本上是一致的。代码的冗余量有点大
    		解决:
    			考虑使用封装
    		实现:形同的保留，不同的传参。具体参照源码
     -->
     <!--引入jQuery文件  -->
     <script type="text/javascript" src="js/j.js"></script>
     <!--声明js代码域  -->
     <script type="text/javascript">
     	//页面加载成功请求省的信息
     	$(function(){
     		
     		//发起ajax请求，请求所有的省信息
     			getData(0,"pre");
     		//页面加载成功给省下拉框添加onchange事件:请求选择的省下的市信息
     			$("#pre").change(function(){
     				//获取当前选择的省的areaid
     				var areaid=$("#pre").val();
     				//发起ajax请求，请求当前省的市信息
     				getData(areaid, "city");
     			});
     		//页面加载成功给市下拉框添加onchange事件
     			$("#city").change(function(){
     				//获取当前选择的市的areaid
     				var areaid=$("#city").val();
     				getData(areaid,"town");
     			})
     			//封装公共方法
         		function getData(areaid,sid){
     				//发起ajax请求，请求当前省的市信息
     				$.get("area",{parentid:areaid},function(data){
     					//使用eval方法将数据转换为js对象
     					eval("var areas="+data);
     					//获取下拉框对象
     					var sel=$("#"+sid);
     					//清空原有内容
     					sel.empty();
     					//遍历
     					for(var i=0;i<areas.length;i++){
     						sel.append("<option value='"+areas[i].areaid+"'>"+areas[i].areaname+"</option>")
     					}
     					//触发省下拉框的change事件
         				$("#"+sid).trigger("change");
     				})
         		}
     			
     			
     	})
     </script>
  </head>
  <body style="background-color: gray;">
  	<div style="margin: auto;width: 750px;margin-top: 200px;">
  		 省: <select name="" id="pre" style="width: 200px;height: 30px;"></select>
   	 	 市: <select name="" id="city" style="width: 200px;height: 30px;"></select>
   	 	 区\县: <select name="" id="town" style="width: 200px;height: 30px;"></select>
  	</div>	
  </body>
</html>

```

```jsp
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'select.jsp' starting page</title>
    <!-- 
    	Ajax案例之三级联动：
    		功能需求：
    			页面中有三个下拉框选项，分别为省下拉框，市下拉框，区/县下拉框
    			选择省，则市下拉框中出现对应的该省下的市信息，选择市，则区/县下拉框中
    			出现对应的该市下面的区/县信息
    		技术分析:
    			ajax技术+jsp+servlet+jdbc
    		需求分析(思路):
    			1、创建页面：页面中有三个下拉框，分别为省、市、区/县
    			2、页面加载成功发起ajax请求，请求省的信息，并将响应结果
    			      填充到省下拉框中
    			3、选择省触发一个新的js函数 的执行，该函数中发起新的ajax请求
    			      请求该省下的市信息，并将响应数据填充到市下拉框
    			4、选择市信息触发一个新的js函数的执行，该函数中发起新的ajax请求
    			     请求该市下的区/县信息，并将数据填充到区/县下拉框中
    		数据库设计：
    			创建表(area)：存储了省、市、区/县信息
    			设计表实现一：只存储了数据，但是数据之间的层级关系没有存储。
	    			地区id:areaid
	    			地区名:areaname
	    		设计表实现二：
	    			地区id:areaid
	    			地区名:areaname
	    			地区上级id：parentid
	    	sql语句设计:
	    		查询所有的省信息:
	    			select * from area where parentid=0;
	    		查询选择的省的市信息(假如：选择的山东省的areaid为110000,)
	    			select * from area where parentid=110000;
	    		查询选择的市的区/县信息(假如：选择的山东省的济南市areaid为110001)
	    			select * from area where parentid =110001;
	    		代码中
	    			select * from area where parentid=?;
    		数据库实现:将资料中提供的area.sql文件导入到数据库中即可
    		功能实现：参照源码即可
    		代码缺陷：
    			发现请求省，市，县的代码中基本上是一致的。代码的冗余量有点大
    		解决:
    			考虑使用封装
    		实现:形同的保留，不同的传参。具体参照源码
     -->
     <!--引入jQuery文件  -->
     <script type="text/javascript" src="js/j.js"></script>
     <!--声明js代码域  -->
     <script type="text/javascript">
     	//页面加载成功请求省的信息
     	$(function(){
     		
     		//发起ajax请求，请求所有的省信息
	     		$.get("area",{parentid:0},function(data){
	     			//使用eval方法将数据转换为js对象
	     				eval("var areas="+data);
	     			//将响应省数据填充到省下拉框中
	     				//获取下拉框对象
	     				var sel=$("#pre");
	     				//清空原有内容
	     				sel.empty();
	     				//遍历
	     				for(var i=0;i<areas.length;i++){
	     					//填充
	     					sel.append("<option value='"+areas[i].areaid+"'>"+areas[i].areaname+"</option>");
	     				}
	     				//触发省下拉框的change事件
	     				$("#pre").trigger("change");
     				});
     		//页面加载成功给省下拉框添加onchange事件
     			$("#pre").change(function(){
     				//获取当前选择的省的areaid
     				var areaid=$("#pre").val();
     				//发起ajax请求，请求当前省的市信息
     				$.get("area",{parentid:areaid},function(data){
     					//使用eval方法将数据转换为js对象
     					eval("var areas="+data);
     					//获取下拉框对象
     					var sel=$("#city");
     					//清空原有内容
     					sel.empty();
     					//遍历
     					for(var i=0;i<areas.length;i++){
     						sel.append("<option value='"+areas[i].areaid+"'>"+areas[i].areaname+"</option>")
     					}
     					//触发省下拉框的change事件
	     				$("#city").trigger("change");
     				})
     			});
     		//页面加载成功给市下拉框添加onchange事件
     			$("#city").change(function(){
     				//获取当前选择的市的areaid
     				var areaid=$("#city").val();
     				//发起ajax请求，请求当前市下的区/县信息
     				$.get("area",{parentid:areaid},function(data){
     					//使用eval方法将数据转换为js对象
     						eval("var areas="+data);
     					//获取下拉框对象
     						var sel=$("#town");
     					//清空原有内容
     						sel.empty();
     					//遍历
     						for(var i=0;i<areas.length;i++){
         						sel.append("<option value='"+areas[i].areaid+"'>"+areas[i].areaname+"</option>")
         					}
     				})
     				
     			})
     			
     			
     			//封装公共方法
         		function getData(areaid,sid){
     				//发起ajax请求，请求当前省的市信息
     				$.get("area",{parentid:areaid},function(data){
     					//使用eval方法将数据转换为js对象
     					eval("var areas="+data);
     					//获取下拉框对象
     					var sel=$("#"+sid);
     					//清空原有内容
     					sel.empty();
     					//遍历
     					for(var i=0;i<areas.length;i++){
     						sel.append("<option value='"+areas[i].areaid+"'>"+areas[i].areaname+"</option>")
     					}
     					//触发省下拉框的change事件
         				$("#"+sid).trigger("change");
     				})
         		}
     			
     			
     	})
     </script>
  </head>
  <body style="background-color: gray;">
  	<div style="margin: auto;width: 750px;margin-top: 200px;">
  		 省: <select name="" id="pre" style="width: 200px;height: 30px;"></select>
   	 	 市: <select name="" id="city" style="width: 200px;height: 30px;"></select>
   	 	 区\县: <select name="" id="town" style="width: 200px;height: 30px;"></select>
  	</div>	
  </body>
</html>

```

```JSP
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'regJquery.jsp' starting page</title>
    <!--引入jQuery文件  -->
    <script type="text/javascript" src="js/j.js"></script>
    <!-- 
    	jQuery中的ajax学习:
    		jquery是js的一个轻量型框架，已经将js创建的操作进行了封装，而ajax也是js的
    		一部分，所以jQuery也已经将ajax进行了封装。
    	封装：
    		$.get(url,data,fn)	
    			url:请求地址
    			data:请求参数，参数格式为json对象
    			fn:回调函数，注意函数要声明一个形参，用来接收响应数据。
    		$.post(url,data,fn)
    			url:请求地址
    			data:请求参数，参数格式为json对象
    			fn:回调函数，注意函数要声明一个形参，用来接收响应数据。
    		$.ajax({json格式参数}):参数说明参照api
    			
    		
    		
     -->
    <!--声明js代码域  -->
    <script type="text/javascript">
    	//页面加载成功给HTML元素添加事件
    	$(function(){
    		//给用户名文本框添加失去焦点事件
    		$("#uname").blur(function(){
    			//发起ajax请求，校验用户名是否被注册
    				//get请求方式
		    			/* $.get("data",{uname:$("#uname").val()},function(data){
		    				alert(data);
		    			}); */
	    			//post请求方式
	    				/*  $.post("data",{uname:$("#uname").val()},function(data){
							alert(data);
						}); */
	    			//$.ajax方式
	    				$.ajax({
	    					type:"get",
	    					url:"data",
	    					data:"uname="+$("#uname").val(),
	    					success:function(data){
	    						alert(data);
	    					}
	    				})	
    		})
    	})
    </script>
  </head>
  
  <body>
  	<h3>jQuery中的ajax学习</h3>
  	<hr />
   	 用户名: <input type="text" name="uname" id="uname" value="" />
  </body>
</html>

```



```JSP
<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <title>My JSP 'Fz.jsp' starting page</title>
    <!--
    	ajax封装：
    		问题：
    			我们发现在使用ajax进行业务处理时，ajax的代码其实很多地方是相同的。
    			这样造成编写代码时出现了重复编写，影响了开发的效率。
    		解决：
    			使用封装
    		实现:相同的保留，不同的传参。
    			请求方式：method 
    			请求地址：url
    			请求参数：data 请求参数的格式为键值对格式的字符串，不同的键值对使用&符号隔开.如果没有请求数据传入null
    					示例："a=1&b=2"
    			异步同步设置:ansyc
    			响应处理参数:deal200
    					该参数接收一个js的函数对象，函数对象中声明ajax响应数据的处理逻辑代码。
    					注意：函数对象需要声明一个形参用来接收要处理的响应数据	
      -->
      <!--引入js文件  -->
      <script type="text/javascript" src="js/AjaxUtil.js"></script>
	  <!--声明js代码域  -->
	   <script type="text/javascript">
	    //使用ajax进行处理--演示调用
	    	myAjax("get","data","uname=张三",function(a){
	    		alert(a);
	    	})
    	
    	
    	
    </script>
  </head>
  
  <body>
    <h3>ajax封装学习</h3>
    <hr />
  </body>
</html>

```

```JSP

```

	显示当前在线人数：
			功能分析：
				统计当前系统的session的个数，一个session意味一个在线的用户。
				在session被创建的时候使用计数器+1，session被销毁的时候计数器-1，
				将计数器存储在ServletContext对象。
			问题：
				我怎么能在session创建的时候触发一个计数器进行计数呢？
			解决：
				使用监听器
			使用:
				创建一个普通java类实现Sesion监听接口和application监听接口。