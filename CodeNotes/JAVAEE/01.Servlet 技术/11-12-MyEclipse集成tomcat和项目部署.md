# 11-12-MyEclipse集成tomcat和项目部署


<a name="487e736d"></a>
# 课程介绍：

通过对 Servlet 的 web.xml 配置，我们知道 Servlet 的配置方式有很多种，也很多需要注意的地方。但是同时我们也发现每次在Myeclipse 中更改了代码后，都需要重新复制代码到服务器中，太过麻烦。不方便我们对代码进行实时地浏览查看

<a name="a0e85fe6"></a>
# Myeclipse 集成 Tomcat:

<a name="gtcrI"></a>
## 集成 Tomcat：

将 tomcat 的目录和 Myeclipse 集成起来，这样 Myeclipse 在帮我们复制更改的代码的时候，就知道复制到哪个服务器中。

<a name="OqOaP"></a>
### 第一步
选中 window---->preferences

![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562675651812-ffc95996-05d7-479d-8d68-3ab8738a3e20.jpeg#align=left&display=inline&height=519&originHeight=419&originWidth=670&status=done&width=830)


<a name="5C1xt"></a>
### 第二步


[]()![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562675651866-b4b4aa5f-74d1-4018-a8c5-bd203be28d1d.jpeg#align=left&display=inline&height=755&originHeight=709&originWidth=794&status=done&width=845)

<a name="VmLnm"></a>
## 部署项目到 Tomcat(项目部署)：
<a name="pUWxg"></a>
### 第一步
![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562675651931-3fb1a325-7edf-4e71-9854-0a0e9405a8d2.jpeg#align=left&display=inline&height=220&originHeight=210&originWidth=794&status=done&width=831)

<a name="tXyRw"></a>
### 第二步

![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562675651995-c5940711-56f1-464b-824e-ba5154b4fcc1.jpeg#align=left&display=inline&height=975&originHeight=597&originWidth=501&status=done&width=818)

<a name="Ru4tu"></a>
### 第三步

[]()然后选择默认就可以了![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652056-487883c5-aeca-4736-b8bb-6e9bb3b74cdd.png#align=left&display=inline&height=591&originHeight=667&originWidth=1018&status=done&width=902)<br />然后就自动把这个项目复制过来了<br />以后只要myeclipse发生变更,就自动回把变更弄过来![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652129-5bc5597d-2b0a-4ad1-9d97-647a3469e64f.png#align=left&display=inline&height=503&originHeight=352&originWidth=631&status=done&width=902)

<a name="rT5Bx"></a>
## 注意

部署好的项目，每次在 Myeclipse 中进行更改后只要点击 ctrl+s进行保存，Myeclipse 会自动重新复制文件到服务器，并覆盖原有在服务器中的文件。
<a name="gTaC9"></a>
# 发布项目：
在 Myeclipse 的 servers 窗口中选择集成的 tomcat 然后点击启动按钮启动即可：

变更后重启可用

<a name="a9f94dcd"></a>
# 修改别名
选择要部署的项目然后右键，选择 properties。然后按图修改部署名

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652196-51ace093-294a-4590-a9b7-28dc0488978c.png#align=left&display=inline&height=131&originHeight=87&originWidth=205&status=done&width=308)<br />服务器关闭的前提下remove<br />注意一定要在服务器关闭的前提下<br />在项上右键<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652273-41a2a3ee-3faa-4188-9da4-589cf01254c9.png#align=left&display=inline&height=1121&originHeight=1206&originWidth=970&status=done&width=902)![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652415-6426ac63-03e6-47ec-ac22-e1f3f9ff53d4.png#align=left&display=inline&height=485&originHeight=545&originWidth=1013&status=done&width=902)

![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652506-bfd2b024-3a8f-456b-abdf-cdf96c3a775d.png#align=left&display=inline&height=484&originHeight=1005&originWidth=1872&status=done&width=902)<br />这时候再重新部署项目<br />这时候就没这个文件夹了![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652589-430f0167-d059-4773-9bc1-7ff345d93350.png#align=left&display=inline&height=377&originHeight=518&originWidth=1240&status=done&width=902)<br />![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652689-61ba21be-7a5b-4ad2-b847-531a00858ae9.png#align=left&display=inline&height=93&originHeight=62&originWidth=525&status=done&width=788)<br />但这时候正在运行的servlet没改变,只是更改了硬盘中的内容,我们不能实时监测我们写代码的效果(每次改变都要重启)(服务器真正调用的是进内存的而不是硬盘的)<br />每次重启服务器看变更很麻烦<br />Myeclipse能集成启动和关闭<br />选中<br />[]()![](https://cdn.nlark.com/yuque/0/2019/jpeg/349894/1562675652769-85c7b7c6-866b-4859-a451-e2eeb0b02dc4.jpeg#align=left&display=inline&height=296&originHeight=284&originWidth=797&status=done&width=830)

有变更重启即可![](https://cdn.nlark.com/yuque/0/2019/png/349894/1562675652823-6960cf0c-299d-45ef-803d-db4ffcd661e3.png#align=left&display=inline&height=166&originHeight=165&originWidth=899&status=done&width=902)<br />
<br />
<br />


