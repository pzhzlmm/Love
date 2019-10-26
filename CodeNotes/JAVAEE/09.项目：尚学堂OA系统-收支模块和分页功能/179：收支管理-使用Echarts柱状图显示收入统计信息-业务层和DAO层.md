更改servlet,要求直接从业务层得到返回的json字符串

![1563934197079](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934197079.png)

## service

接口对应实现类

思路:持久层获取数据(List格式),然后把该List转为json字符串最后返回即可

返回的是这两列,因为内容比较少就直接用object数组进行表示

![1563934395586](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934395586.png)

## Dao

接口与对应实现类

找到findALL修改

![1563934466625](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934466625.png)

封装

![1563934513605](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934513605.png)

最后返回这个list即可

我们还可以验证一下这个Dao写得是否正确

把业务层那两行代码拿过来放在下面输出一下就可以了

![1563934567813](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934567813.png)

## 完善业务层

接着把业务层的代码补齐

对着最后的结果我们准备了两个字符串

![1563934647873](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934647873.png)

最后返回这个就可以了

![1563934723579](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934723579.png)

而如何得到这两个字符串呢:用for循环进行遍历:获取数据(注意括号引号逗号等细节)

![1563934882271](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934882271.png)

得到的结果

![1563934931405](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934931405.png)

呈现的效果

![1563934944684](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1563934944684.png)

