## 方法/步骤

1. 

   Linux系统中复制目录到另一个目录下面，用cp命令时会出现报错

   1、在/home/目录下，创建一个新目录，例如：123

   [![Linux中复制目录报错cp:omitting directory](https://imgsa.baidu.com/exp/w=500/sign=58355c7e49c2d562f208d0edd71190f3/810a19d8bc3eb135d2f745a5a01ea8d3fd1f44f8.jpg)](http://jingyan.baidu.com/album/da1091fb37c581027849d627.html?picindex=1)

2. 

   2、拷贝目录123 到/tmp/目录中，使用cp命令

   [![Linux中复制目录报错cp:omitting directory](https://imgsa.baidu.com/exp/w=500/sign=a6e193c930d12f2ece05ae607fc2d5ff/9d82d158ccbf6c815d07def6ba3eb13533fa40f8.jpg)](http://jingyan.baidu.com/album/da1091fb37c581027849d627.html?picindex=2)

3. 

   3、系统报错，cp:omitting directory '123' 

   [![Linux中复制目录报错cp:omitting directory](https://imgsa.baidu.com/exp/w=500/sign=78e2b1e8a1efce1bea2bc8ca9f51f3e8/a9d3fd1f4134970ad843e23193cad1c8a7865df8.jpg)](http://jingyan.baidu.com/album/da1091fb37c581027849d627.html?picindex=3)

4. 

   4、使用cp -r命令进行复制（注：cp命令默认是不能复制目录的，需要加参数 -r）。

   [![Linux中复制目录报错cp:omitting directory](https://imgsa.baidu.com/exp/w=500/sign=94e07499d6a20cf44690fedf46094b0c/3b292df5e0fe992571539a4e32a85edf8db17155.jpg)](http://jingyan.baidu.com/album/da1091fb37c581027849d627.html?picindex=4)

5. 

   5、查看拷贝结果，目录123已经复制成功。

   [![Linux中复制目录报错cp:omitting directory](https://imgsa.baidu.com/exp/w=500/sign=b7218cc328738bd4c421b231918a876c/b3fb43166d224f4a4d31800d0ff790529822d100.jpg)](http://jingyan.baidu.com/album/da1091fb37c581027849d627.html?picindex=5)

6. 

   6、备注：cp后参数

   \- a 该选项通常在拷贝目录时使用。它保留链接、文件属性，并递归地拷贝目录，其作用等于dpR选项的组合。

   \- d 拷贝时保留链接。

   \- f 删除已经存在的目标文件而不提示。

   \- i 和f选项相反，在覆盖目标文件之前将给出提示要求用户确认。回答y时目标文件将被覆盖，是交互式拷贝。

   \- p 此时cp除复制源文件的内容外，还将把其修改时间和访问权限也复制到新文件中。

   \- r 若给出的源文件是一目录文件，此时cp将递归复制该目录下所有的子目录和文件。此时目标文件必须为一个目录名。

   \- l 不作拷贝，只是链接文件。

   注意事项：

   1、cp -a命令 同样也可以完成目录复制。

   2、格式cp -r 目录名 新目录名。