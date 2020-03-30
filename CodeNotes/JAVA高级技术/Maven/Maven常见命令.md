五、 Maven 常用命令
1 install
本地安装， 包含编译，打包，安装到本地仓库
编译 - javac
打包 - jar， 将 java 代码打包为 jar 文件
安装到本地仓库 - 将打包的 jar 文件，保存到本地仓库目录中。
2 clean
清除已编译信息。
删除工程中的 target 目录。
3 compile
只编译。 javac 命令(在build里执行)
4 deploy
部署。 常见于结合私服使用的命令。
相当于是 install+上传 jar 到私服。
包含编译，打包，安装到本地仓库，上传到私服仓库。
5 package
打包。 包含编译，打包两个功能。