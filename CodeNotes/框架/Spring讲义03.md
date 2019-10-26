    04         Spring的事务管理

```
        PART Four
             四、Spring的事务管理
```

      事务原本是数据库中的概念，在Dao层。但一般情况下，需要将事务提升到
    业务层，即Service层。这样做是为了能够使用事务的特性来管理具体的业务。  
    
      1.Spring事务管理API介绍
            1.1 事务管理器是PlatformTransactionManager接口对象。其主要
                 用于完成事务的提交、回滚，及获取事务的状态信息。
      PlatformTransactionManager接口常用的两个实现类 
      DataSourceTransactionManager：使用JDBC或MyBatis 进行持久化数据时使用。  
      HibernateTransactionManager：使用Hibernate进行持久化数据时使用。
            1.2 Spring的回滚方式 
      Spring事务的默认回滚方式是：发生运行时异常时回滚，发生受查异常时提交。
                    四、Spring的应用
      1.3 事务定义接口事务定义接口TransactionDefinition中定义了事务描述
    相关的三类常量：事务隔离级别、事务传播行为、事务默认超时时限，及对它们的
    操作。
      所谓事务传播行为是指，处于不同事务中的方法在相互调用时，执行期间事
    务的维护情况。如，A事务中的方法doSome()调用B事务中的方法doOther()，在调
    用执行期间事务的维护情况，就称为事务传播行为。
      REQUIRED：指定的方法必须在事务内执行。若当前存在事务，就加入到当前
    事务中；若当前没有事务，则创建一个新事务。这种传播行为是最常见的选择
    2 环境搭建(导入jar包、添加约束)
    3 使用AspectJ的AOP配置管理事务（重点）
    4 使用事务注解管理事务
    【代码示例】
    感谢您的支持与信任
     THANK YOU FOR WATCHING