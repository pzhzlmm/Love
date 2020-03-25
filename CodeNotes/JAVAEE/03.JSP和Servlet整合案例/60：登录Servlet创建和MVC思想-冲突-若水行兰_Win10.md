先实现登录功能

## 新建数据

先打开navicat,新建一个数据库

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712161020.png)

设置名称和字符集

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712161043.png)

接着新建查询

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712161116.png)

创建用户表

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712161827.png)

接着全部选中,右键:run selected

这时候用户表还为空

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712162042.png)

开始添加数据

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712162141.png)

完整表

```sql
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `uid` int(10) NOT NULL AUTO_INCREMENT,
  `uname` varchar(100) NOT NULL,
  `pwd` varchar(100) NOT NULL,
  `sex` char(4) NOT NULL,
  `age` int(3) NOT NULL,
  `birthday` date NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO t_user VALUES ('1', '张三', '123', '男', '18', '1988-09-09');
INSERT INTO t_user VALUES ('2', '李四', '456', '男', '18', '1988-09-09');
INSERT INTO t_user VALUES ('3', '李四2', '456', '男', '18', '1988-09-09');
INSERT INTO t_user VALUES ('4', '王五', '12345', '1', '18', '2018-06-12');

```



## 创建userservlet

当按下登录的时候就发给处理请求的servlet

提交的是由form表单的action决定的

### 改名

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712162305.png)

### 创建servlet

改成user,并创建对应的servlet,设置别名为user

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712162527.png)

### 编写servlet

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712163522.png)

完整

```java
package com.bjsxt.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.bjsxt.pojo.User;
import com.bjsxt.service.UserService;
import com.bjsxt.service.impl.UserServiceImpl;
/**
 * 

 * @author MyPC
 *
 */
public class UserServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		//设置请求编码格式
		req.setCharacterEncoding("utf-8");
		//设置响应编码格式
		resp.setContentType("text/html;charset=utf-8");
		//获取请求信息
		String uname=req.getParameter("uname");
		String pwd=req.getParameter("pwd");
		//处理请求信息
			System.out.println(uname+":"+pwd);
			//创建业务层对象
			UserService us=new UserServiceImpl();
			User u=us.getUserInfoService(uname,pwd);
			System.out.println("用户登录查询结果为:"+u);
		//响应处理结果
			//创建或者获取session对象
			HttpSession hs=req.getSession();
			if(u!=null){//登录成功
				//将用户信息存储到session中
				hs.setAttribute("user",u);
				//重定向到main.jsp
				resp.sendRedirect("/project/main.jsp");
			}else{//登录失败
				
				//将登录失败的标记添加到session中
				hs.setAttribute("flag", "loginFalse");
				//重定向到login.jsp
				resp.sendRedirect("/project/login.jsp");
			}
			
	}
}

```

#### 注意

获取请求信息里的getParameter包裹的id必须和jsp里的name保持一致,不然后台拿到的数据都是null

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712162950.png)

登录后可以看到拿到参数

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712163432.png)



## 用户登录逻辑

 * 1、用户点击登录发送请求到UserServlet 

   tomcat服务器接收到请求后调用UserServlet中service方法进行请求处理

   并将封存了相关数据的request对象和response对象作为实参传递给service方法

 * 2、在UserServlet中调用业务层方法进行登录业务处理

 * 3、在业务层方法中调用Dao层方法完成数据库操作

 *  4、完成功能跳转



## MVC分层开发

 *  	M:model  service层和dao层和实体类层
 *  	V:view	  视图层 jsp页面等
 *  	C:controller 控制层  servlet

