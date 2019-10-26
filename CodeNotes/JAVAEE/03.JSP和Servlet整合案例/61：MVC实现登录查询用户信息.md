接下来是做service层和实体类层

## 建包dao和service

创建service和dao的接口

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712174021.png)

### 实现类创建

再根据接口创建接口的实现类

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712174139.png)

dao同理

## 创建实体类

优先与表的字段保持一致

取值赋值方法sr

tostring ss

有参构造无参构造hco 04:13什么操作@@@

```java
package com.bjsxt.pojo;

public class User {
	private int uid;
	private String uname;
	private String pwd;
	private String sex;
	private int age;
	private String birthday;
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	@Override
	public String toString() {
		return "User [uid=" + uid + ", uname=" + uname + ", pwd=" + pwd
				+ ", sex=" + sex + ", age=" + age + ", birthday=" + birthday
				+ "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result
				+ ((birthday == null) ? 0 : birthday.hashCode());
		result = prime * result + ((pwd == null) ? 0 : pwd.hashCode());
		result = prime * result + ((sex == null) ? 0 : sex.hashCode());
		result = prime * result + uid;
		result = prime * result + ((uname == null) ? 0 : uname.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		User other = (User) obj;
		if (age != other.age)
			return false;
		if (birthday == null) {
			if (other.birthday != null)
				return false;
		} else if (!birthday.equals(other.birthday))
			return false;
		if (pwd == null) {
			if (other.pwd != null)
				return false;
		} else if (!pwd.equals(other.pwd))
			return false;
		if (sex == null) {
			if (other.sex != null)
				return false;
		} else if (!sex.equals(other.sex))
			return false;
		if (uid != other.uid)
			return false;
		if (uname == null) {
			if (other.uname != null)
				return false;
		} else if (!uname.equals(other.uname))
			return false;
		return true;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(int uid, String uname, String pwd, String sex, int age,
			String birthday) {
		super();
		this.uid = uid;
		this.uname = uname;
		this.pwd = pwd;
		this.sex = sex;
		this.age = age;
		this.birthday = birthday;
	}
	

	
	
}

```



## 创建业务层对象@@@

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712174956.png)

再在实现类里复写该方法(没有验证码,是否被锁,三次锁定,目前 只有登录)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712175258.png)

然后再根据用户账号密码查询用户信息,先声明一下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712193932.png)

编写之前导入工具类

![1562930534071](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1562930534071.png)

创建一个util包,把这个拖进去,再找db.properties,放到相关配置文件目录下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712192320.png)

配置文件更改成mysql的

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712192535.png)

再把jar包放这里

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712192456.png)

开始编写查询用户信息方法 ,完整逻辑如下

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712194343.png)

```java
package com.bjsxt.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.bjsxt.dao.UserDao;
import com.bjsxt.pojo.User;
import com.bjsxt.util.DBUtil;

public class UserDaoImpl implements UserDao {
	//查询用户信息
	@Override
	public User getUserInfoDao(String uname, String pwd) {
		//声明jdbc变量
		Connection conn=null;
		PreparedStatement ps=null;
		ResultSet rs=null;
		//声明变量
		User u=null;
		try {
			//创建连接
			conn=DBUtil.getConnection();
			//创建SQL命令
			String sql="select * from t_user where uname=? and pwd=?";
			//创建SQL命令对象
			ps=conn.prepareStatement(sql);
			//给占位符赋值
			ps.setString(1,uname);
			ps.setString(2, pwd);
			//执行SQL命令
			rs=ps.executeQuery();
			//遍历
			while(rs.next()){
				//给变量赋值
				u=new User();
				u.setUid(rs.getInt("uid"));
				u.setUname(rs.getString("uname"));
				u.setPwd(rs.getString("pwd"));
				u.setSex(rs.getString("sex"));
				u.setAge(rs.getInt("age"));
				u.setBirthday(rs.getString("birthday"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally{//关闭资源
			DBUtil.closeAll(rs, ps, conn);
		}
		//返回结果
		return u;
	}
	//用户注册
	@Override
	public int regUserInfoDao(String uname, String pwd, String sex, int age,
			String birthday) {
		//创建SQL语句
		String sql="insert into t_user values(default,?,?,?,?,?)";
		return 	DBUtil.executeDML(sql, uname,pwd,sex,age,birthday);
	}
	
}

```

如果代码没有遇到问题,那么在UserServlet里已经拿到了对应的对象

这时候可以进行打印查看是否创建成功

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190712195232.png)