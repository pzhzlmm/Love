# 一、如何查看有多少个分支?

​    1.通过git branch指令就可以查看当前版本库中有多少个分支
​    注意点:
​    1.如果当前的版本库是空的, 那么无法查看
​    2.如果通过git branch指令查看当前版本库中有多少个分支, 输出的内容中哪一个分支前面有*号
​    就代表当前的HEADER指针指向哪一个分支, 我们提交的代码就会提交到指向的分支中

# 二、如何创建一个分支

​    1.通过git branch 分支名称 来创建一个新的分支
​    注意点:
​    在哪个分支中创建了新的分支, 那么创建出来的新的分支就会继承当前分支的所有状态
​    例如:
​    在master分支中做了两个操作, 然后在master分支中创建了Dev分支
​    那么创建出来的Dev分支就会继承master分支中的这两个操作
​    注意点:
​    一旦分支被创建出来之后, 分支就是独立的, 分支之间不会相互影响

![image-20200319115219262](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319115219262.png)

# 三、如何切换分支?

​    1.通过git switch 分支名称 来修改HEADER指针的指向
​    注意点: 只要HEADER指针的指向发生了改变, 那么commit的代码就会发生改变
​    HEADER指针指向谁commit提交的代码就提交到谁里面

![image-20200319115240958](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319115240958.png)

# 四、如何将分支提交到远程服务器

​    1.通过git branch -r 来查看远程服务器上有多少个分支
​    2.首先需要在本地切换到新建的分支中, 然后通过git push指令提交新建的分支到远程的服务器
​    git push --set-upstream origin Dev

![image-20200319115402789](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319115402789.png)

![image-20200319115454822](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319115454822.png)

成功添加

![image-20200319115517198](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/image-20200319115517198.png)

# 五、如何合并分支

​    可以通过 git merge 分支名称 来合并分支
​    例如:
​    在master分支中执行  git merge Dev 就代表需要将Dev分支中的代码都合并到master分支中
​    例如:
​    在Dev分支中执行 git merge master 就代表需要将master分支中的代码都合并到Dev分支中

# 六、如何删除分支

​    1.可以通过git branch -d 分支名称 来删除本地的分支
​    2.可以通过git push origin --delete 分支名称 来删除远程服务器的分支