把原生userList保留,建立UserList2

在DataServlet进行对应的修改

编写

引入资源

写C:forEach(遍历集合(即从DataServlet流转过来的IO流),遍历结果)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716155349.png)

取值简化

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716155510.png)

以下是两种写法的对比

```jsp
<%@ page language="java" import="java.util.*,com.bjsxt.pojo.*" pageEncoding="utf-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
 <base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="css/pintuer.css">
<link rel="stylesheet" href="css/admin.css">
<script src="js/jquery.js"></script>
<script src="js/pintuer.js"></script>
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 用户信息列表</strong></div>
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">ID</th>
      <th width="15%">用户姓名</th>
      <th width="10%">密码</th>
      <th width="10%">性别</th>
      <th width="10%">年龄</th>
      <th width="10%">出生日期</th>
      <th width="10%">操作</th>
    </tr>
    	<c:forEach items="${lu}" var="u">
	    	<tr>
		      <td width="5%">${u.uid}</td>
		      <td width="15%">${u.uname}</td>
		      <td width="10%">${u.pwd}</td>
		      <td width="10%">${u.sex}</td>
		      <td width="10%">${u.age}</td>
		      <td width="10%">${u.birthday}</td>
		     <td><div class="button-group"> <a class="button border-main" href="cateedit.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="data?method=delUserInfo&uid=${u.uid}" onclick="return del(1,2)"><span class="icon-trash-o"></span> 删除</a> </div></td>
	    	</tr>
    	</c:forEach>
  </table>
</div>
<script type="text/javascript">
function del(id,mid){
	if(confirm("您确定要删除吗?")){			
		
	}
}
</script>
</body>
</html>
```

之前

```jsp
<%@ page language="java" import="java.util.*,com.bjsxt.pojo.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html>
<html lang="zh-cn">
<head>
 <base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="renderer" content="webkit">
<title></title>
<link rel="stylesheet" href="css/pintuer.css">
<link rel="stylesheet" href="css/admin.css">
<script src="js/jquery.js"></script>
<script src="js/pintuer.js"></script>
</head>
<body>
<div class="panel admin-panel">
  <div class="panel-head"><strong class="icon-reorder"> 用户信息列表</strong></div>
  <table class="table table-hover text-center">
    <tr>
      <th width="5%">ID</th>
      <th width="15%">用户姓名</th>
      <th width="10%">密码</th>
      <th width="10%">性别</th>
      <th width="10%">年龄</th>
      <th width="10%">出生日期</th>
      <th width="10%">操作</th>
    </tr>
   	 	<%
   		//获取作用域中的用户数据
   		ArrayList<User> lu=(ArrayList<User>)request.getAttribute("lu");
    	//遍历
    	for(int i=0;i<lu.size();i++){
	    %>
	     <tr>
	      <td width="5%"><%=lu.get(i).getUid() %></td>
	      <td width="15%"><%=lu.get(i).getUname() %></td>
	      <td width="10%"><%=lu.get(i).getPwd() %></td>
	      <td width="10%"><%=lu.get(i).getSex() %></td>
	      <td width="10%"><%=lu.get(i).getAge()%></td>
	      <td width="10%"><%=lu.get(i).getBirthday()%></td>
	     <td><div class="button-group"> <a class="button border-main" href="cateedit.html"><span class="icon-edit"></span> 修改</a> <a class="button border-red" href="javascript:void(0)" onclick="return del(1,2)"><span class="icon-trash-o"></span> 删除</a> </div></td>
    	</tr>
	  <%}%>
  </table>
</div>
<script type="text/javascript">
function del(id,mid){
	if(confirm("您确定要删除吗?")){			
		
	}
}
</script>
</body>
</html>
```

登录页面

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716155827.png)

用jstl去做:

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190716160036.png)

阅读起来逻辑性要比原来的要强