我们现在想把查到的所有内容导出到一个excel表格里面,最终表格样式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723142636.png)

其中我们要使用到一个插件叫做POI

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723142657.png)

## 了解插件

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723142747.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723142812.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723142823.png)对excel支持的功能是最多的

为了更好使用我们要了解透这些API

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143016.png)

这个代码我们不会自己去写,只要找到响应的模板做出响应的修改就可以了

## 使用API

首先找到API的jar包

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143042.png)

丢进去

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143108.png)

自动增加到构建路径

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143204.png)

把这个类拷贝进来(可放到工具包里)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143256.png)

## 方法解读

把这三个学生信息放进去

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143342.png)

最终这个数据写到了

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143421.png)

可看到

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143442.png)

还可以修改格式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143521.png)

效果

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143540.png)

### 合并单元格

在第一行的第一个单元格开始创建一个合并单元格

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143903.png)

再指定了单元格的样式

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723143954.png)

### 普通行

表头行

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723144228.png)

表内容行语句相同,只是说这个数据是从list之中读取出来的

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190723144310.png)



 