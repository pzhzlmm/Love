## 代码模式

按三下**```**再按**回车**可以输入代码,接着可以选择语言

(`:1位置的左边)

也可以选择**ctrl+/**在**代码模式**中进行编辑

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711164800.png)

也可以直接==```java==回车直接获得(会有提示出现)

```java
package com.bjsxt.servlet;

import java.io.IOException;
/** 
 * @author MyPC
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

## 图片

默认是本地格式,只能本地观看,不能上传到网络上(要上传只能一张张复制)

使用图床:对应的上传工具picgo+阿里云oss+snipaste

### OSS

#### 概念

Operation Support Systems,运营支撑系统,电信运营商的一体化、信息资源共享的支持系统，它主要由网络管理、系统管理、计费、营业、账务和客户服务等部分组成，系统间通过统一的信息总线有机整合在一起。操作与支持系统包括操作维护中心和网络管理中心。它负责全网的通信质量及运行的检验和管理，记录和收集全网运行中的各种数据的情况。它对全网内各设备之间都有连接线，并对各设备执行监视和控制的职能

#### 购买oss服务

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711170035.png)

#### 新建bucket



![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711170059.png)

#### 新建目录

做下调整和设置归档就好了



### picgo

#### 配置访问途径

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190711164503.png)

