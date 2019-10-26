常用注解

## RequestParam

### 使用说明


作用：

把请求中指定名称的参数给控制器中的形参赋值。

属性：

value：请求参数中的名称。

required：请求参数中是否必须提供此参数。默认值：true。表示必须提供，如果不提供将报错。

### 使用示例

![1564664332698](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564664332698.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801205912.png)

后台拿到的username的值为哈哈，要求jsp和传参名称相同（都是username），如果不同拿不到值，也可以使用注解

现已经把jsp中的参数改为name

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801210217.png)

如果就把jsp中那么的值拿出来赋给方法里的username

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801210025.png)



## RequestBody

### 使用说明


作用：

用于获取请求体内容。直接使用得到是 key=value&key=value...结构的数据。

get 请求方式不适用（没有请求体，都在地址栏）。

异步的时候会用到

属性：

required：是否必须有请求体。默认值是:true。当取值为 true 时,get 请求方式会报错。如果取值

为	false，get 请求得到是 null。

### 使用示例

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801210612.png)

代表拿到整个请求体里的值

效果：表单里的数据一次性全部都拿到了

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801210648.png)

## PathVaribale

### 使用说明


作用：

用于绑定 url 中的占位符。例如：请求 url 中 /delete/{id}，这个{id}就是 url 占位符。

url 支持占位符是 spring3.0 之后加入的。是 springmvc 支持 rest 风格 URL 的一个重要标志。

属性：

value：用于指定 url 中占位符名称。

required：是否必须提供占位符。

### REST 风格 URL

#### 什么是 rest：

REST（英文：Representational State Transfer，简称 REST）描述了一个架构样式的网络系统，比如 web 应用程序。它首次出现在 2000 年 Roy Fielding 的博士论文中，他是 HTTP 规范的主要编写者之一。在目前主流的三种 Web 服务交互方案中，REST 相比于 SOAP（Simple Object Access protocol，简单对象访问协议）以及 XML-RPC 更加简单明了，无论是对 URL 的处理还是对 Payload 的编码，REST 都倾向于用更

加简单轻量的方法设计和实现。值得注意的是 REST 并没有一个明确的标准，而更像是一种设计的风格。

它本身并没有什么实用性，其核心价值在于如何设计出符合 REST 风格的网络接口。

#### restful 的优点

它结构清晰、符合标准、易于理解、扩展方便，所以正得到越来越多网站的采用。

#### restful 的特性：

资源（Resources）：网络上的一个实体，或者说是网络上的一个具体信息。

它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的存在。可以用一个 URI（统一

资源定位符）指向它，每种资源对应一个特定的 URI 。要获取这个资源，访问它的 URI 就可以，因此 URI 即为每一个资源的独一无二的识别符。

表现层（Representation）：把资源具体呈现出来的形式，叫做它的表现层 （Representation）。

比如，文本可以用 txt 格式表现，也可以用 HTML 格式、XML 格式、JSON 格式表现，甚至可以采用二进制格式。

状态转化（State Transfer）：每 发出一个请求，就代表了客户端和服务器的一次交互过程。

根据不同的调用方法然后去决定调用哪个方法，同一方法或许有id可以进行区分

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801211055.png)

### 使用示例

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801211420.png)

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801211449.png)

## 基于 HiddentHttpMethodFilter 的示例

### 作用

由于浏览器 form 表单只支持 GET 与 POST 请求，而 DELETE、PUT 等 method 并不支持，Spring3.0 添加了一个过滤器，可以将浏览器请求改为指定的请求方式，发送给我们的控制器方法，使得支持 GET、POST、PUT与 DELETE 请求。

WebClient也可使用静态方法发送请求，模拟各种请求方式，还不需要做任何配置，比这个简洁得多

### 使用方法

第一步：在 web.xml 中配置该过滤器。

第二步：请求方式必须使用 post 请求。

第三步：按照要求提供_method 请求参数，该参数的取值就是我们需要的请求方式。

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801212134.png)

会把post请求改成put请求

## RequestHeader

用处不大

### 使用说明


作用：

用于获取请求消息头。


属性：


value：提供消息头名称


required：是否必须有此消息头


注：


在实际开发中一般不怎么用。

### 使用示例

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801212420.png)

## CookieValue

### 使用说明


作用：

用于把指定 cookie 名称的值传入控制器方法参数(即拿到cookie的值）。

属性：

value：指定 cookie 的名称。

required：是否必须有此 cookie。

### 使用示例

![](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/markdown/20190801212645.png)

以cookie形式把session给返回来@@@

## ModelAttribute

### 使用说明


作用：

该注解是 SpringMVC4.3 版本以后新加入的。它可以用于修饰方法和参数。

出现在方法上，表示当前方法会在控制器的方法执行之前，先执行。它可以修饰没有返回值的方法，也可

以修饰有具体返回值的方法。

出现在参数上，获取指定的数据给参数赋值。

属性：

value：用于获取数据的 key。key 可以是 POJO 的属性名称，也可以是 map 结构的 key。

应用场景：

当表单提交数据不是完整的实体类数据时，保证没有提交数据的字段使用数据库对象原来的数据。

例如：

我们在编辑一个用户时，用户有一个创建信息字段，该字段的值是不允许被修改的。在提交表单数据是肯定没有此字段的内容，一旦更新会把该字段内容置为 null，此时就可以使用此注解解决问题。

### 使用示例

![1564667794782](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564667794782.png)

Date用其本身存在的值

![1564667969282](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564667969282.png)

法二

![1564668082658](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564668082658.png)



## SessionAttribute

### 使用说明


作用：

用于多次执行控制器方法间的参数共享。

属性：

value：用于指定存入的属性名称

type：用于指定存入的数据类型。

### 使用示例

![1564668323573](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564668323573.png)

这样就存在requestScope中了

![1564668456469](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564668456469.png)

存到session中

![1564668432299](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564668432299.png)

如此request和session中都会有美美的msg

能存同时也可以取值

![1564668596844](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564668596844.png)

清除

做完了把session给清除掉

![1564668668125](C:\Users\RuicyQuan\AppData\Roaming\Typora\typora-user-images\1564668668125.png)

