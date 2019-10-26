```java
package com.bjsxt.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
/**
 * Servlet重定向jsp
resp.sendRedirect("jsp的相对路径/servlet的别名");//重定向jsp页面
Servlet请求转发jsp
req.getRequestDispatcher("jsp的相对路径/servlet的别名").forward(req, resp);//请求转发到jsp页面
 * 	服务器根目录    服务器的webapps目录路径             localhost:8080/
 *  项目根目录       服务器的webapps目录下项目路径    localhost:8080/jsp/
 * 注意：
 * 	以上两种写法其实都是相对路径，相对路径指的是从当前请求路径查找jsp所经过的路径。
 * 请求转发和重定向的绝对路径写法总结:
 * 	重定向:
 * 		在重定向中的路径中第一个/表示服务器根目录(绝对路径,建议)。
 * 		示例：
 * 			resp.sendRedirect("/虚拟项目名/资源路径");//重定向jsp页面
 *  请求转发：
 *  	在请求转发中第一个/表示项目根目录
 *  	示例:
 *  		req.getRequestDispatcher("/资源路径").forward(req, resp);//请求转发到jsp页面
 * 
 * @author MyPC
 *	http://localhost:8080/jsp/one/my
 * http://localhost:8080/jsp/one/user/main.jsp
 */
public class MyServlet extends HttpServlet {
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		//设置请求编码格式
		req.setCharacterEncoding("utf-8");
		//设置响应编码格式
		resp.setContentType("text/html;charset=utf-8");
		//获取请求信息
		String choice=req.getParameter("choice");
		//处理请求信息
		if("main".equals(choice)){
			//响应
				//resp.sendRedirect("/jsp/user/main.jsp");//重定向jsp页面
				req.getRequestDispatcher("/user/main.jsp").forward(req, resp);//请求转发到jsp页面
		}
		//响应处理结果
	}
}

```

服务器根目录

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712113226.png)

/jsp:项目根目录

不推荐相对路径,因为一个路径改了联动着别的相对路径也会改

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712113836.png)

所以请求转发写绝对路径就不会出问题了