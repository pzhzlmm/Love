由于博主在使用npm命令安装gitbook的过程中一直提示installing gitbook 3.2.3，如下图所示

![1565328638370](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565328638370.png)

被这个问题折磨了一天，特将这个问题记录下来，不让遇到这个问题的兄弟迷路。
问题的来源由于安装过程默认使用国外镜像，我们可以将其切换为国内镜像，有下面两个方法：

方法1：打开nodejs安装文件夹下面的子目录E:\nodejs\node_modules\npm，找到里面的npmrc文件，添加配置 registry=http://registry.npm.taobao.org

![1565328646656](C:\Users\1\AppData\Roaming\Typora\typora-user-images\1565328646656.png)

方法2：懒得查找可利用npm config set registry=http://registry.npm.taobao.org命令直接设置镜像


--- 