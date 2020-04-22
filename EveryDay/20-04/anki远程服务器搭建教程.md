# 支持服务器下载地址

PC:https://www.lanzous.com/ibn9mni

安卓:https://www.lanzous.com/ibnaoha

# PC端

选择工具-插件-打开插件文件夹

![image-20200420171814501](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420171814501.png)

新建文件mysync.py

![image-20200420171838427](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420171838427.png)

拷贝文件内容

```python
import anki.sync
anki.sync.SYNC_BASE = 'http://39.106.118.93:27701/'
anki.sync.SYNC_MEDIA_BASE = 'http://39.106.118.93:27701/msync/'
```

效果如下

![image-20200420171924835](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420171924835.png)

选择右上角的小圆点

![image-20200420172110019](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420172110019.png)



输入自定义的账号和密码

![image-20200420172125715](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420172125715.png)

# Android端

![image-20200420172655940](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420172655940.png)

![image-20200420172710467](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420172710467.png)

![image-20200420172726820](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420172726820.png)

![image-20200420172737371](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200420172737371.png)

```xml
同步地址:http://39.106.118.93:27701/
媒体文件同步抵制:http://39.106.118.93:27701/msync/
```

