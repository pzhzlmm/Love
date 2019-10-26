## Eclipse自动生成返回值对象的窗口

Alt+Shift+L快捷键:打开Extract Local Variable。
Extract Local Variable 起作用的前提是：表达式必须是正确的

参考其他网友的博客写的
示例1：输入光标停在saxReader.read(“src/cn/xml/schema/web.xml”);这行代码前面时用此键会生成
SAXReader saxReader2 = saxReader;
saxReader2.read(“src/cn/xml/schema/web.xml”);
![img](http://img.wandouip.com/crawler/article/201971/c8b1109488fcaaa4dc4df53e54c751b4)
示例2：输入光标停在saxReader.read(“src/cn/xml/schema/web.xml”);这行代码后面时用此键会生成
Document read = saxReader.read(“src/cn/xml/schema/web.xml”);
![img](http://img.wandouip.com/crawler/article/201971/95a0fbe6ce6f24b4f009d2414b1f82f0)
如果放在read中间就会报错
![img](http://img.wandouip.com/crawler/article/201971/c99fec830707eb1ff40f7b9407364e54)