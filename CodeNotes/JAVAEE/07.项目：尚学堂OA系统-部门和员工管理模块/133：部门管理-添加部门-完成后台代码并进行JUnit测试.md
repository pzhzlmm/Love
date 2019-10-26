登录功能后面做,先做添加部门的功能,仍旧是使用MVC模式去操作

## 效果

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720150304.png)

## 需求说明：

●实体类Department
●数据库访问层Department Dao DepartmentDaolmpl (接口及其实现类)
●业务层：Department Service DepartmentServicelmpl
●Junit测试 ：
●控制层：DepartmentServlet extends BaseServlet
视图层：system/deptAdd.jsp
●将HTML修改为JSP

## 新技能点：

●Junit测试 ：使用JUnit4 ；更加专业、规范；使用注解实现
●将HTML修改为JSP （修改方法、路径的处理）

# 新建实体类

观察数据表中的字段,确认其类型

## 成员变量

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720150736.png)根据字段再添加对应的成员变量![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720150827.png)

## 成员方法

getset,构造,无参,string,hashcode,实现serializable和comparable接口,并实现其中的compareTo方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151010.png)

并添加序列化模块号

## ![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151051.png)整体效果

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151127.png)

# 新建Dao

先整一个部门的Dao接口,并添加保存的操作,导入![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151410.png)

然后再创建一个对应的实现类,增加一个没有实现的方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151521.png)

# 新建Service

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151720.png)

再创建对应的实现类

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720151806.png)

# 实现Dao

实现工具类里的方法

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720152043.png)

# 实现Service

定义一个成员变量,所有方法都可以直接调用

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720152319.png)

到此为止,Dao和service就搞定了

# Junit测试

目前我们就可以对齐效果进行局部测试

随意写个方法,名字不重要![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720152802.png)

接着进行测试(方法名上面加上注解,在方法名单击右键 )

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720152924.png)也可以在所在行添加断点进行检测观测其运行情况

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720153011.png)

如果不想测试该方法在上面加个ignore忽略即可

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190720153323.png)

