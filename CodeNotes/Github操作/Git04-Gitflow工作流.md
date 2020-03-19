# 一、准备阶段

​    1.初始化远程工作区和共享版本库
​    git init --bare

    2.项目经理初始化项目, 并在master定制标记
    添加初始化文件
    git add .
    git commit -m
    git push
    git tag v0.1
    git push origin v0.1
    
    3.项目经理基于master分支创建develop分支
    git switch master
    git branch Develop
    git switch Develop
    git push
    
    4.项目经理给开发人员分配工作任务

# 二、开发阶段

​    1.开发人员基于develop分支创建功能分支
​    git branch feature/home
​    git switch feature/login

    2.开发人员在自己的分支上add commit push
    
    3.开发完成告诉项目经理, 由项目经理审核代码并合并代码到develop
    git pull
    git switch feature/home  检查代码
    git switch Develop
    git merge feature/home
    git switch feature/login  检查代码
    git switch Develop
    git merge feature/login

# 三、准备上线阶段

​    1.项目经理基于develop分支创建release分支
​    git switch Develop
​    git branch Release/v1.0

    2.测试人员获取release分支代码进行测试
    
    3.发现bug由开发人员基于release分支创建bugfix分支进行修复
    git pull
    git switch Release/v1.0
    git branch bugfix/issue32
    修复bug / add / commit
    
    4.修复完成后重新合并到release分支
    git switch Release/v1.0
    git merge bugfix/issue32
    git push
    
    5.将测试和修复完所有bug的最终代码合并到master分支和develop分支
    git switch Develop
    git merge Release/v1.0
    git switch master
    git merge Release/v1.0

# 四、项目上线

​    1.项目经理在master分支定制标记
​    git switch master
​    git tag -a v1.0 -m"项目第一次上线"
​    2.项目经理项目经理将标记提交到远程服务器
​    git push origin v1.0

# 五、上线之后

​    1.项目上线后发现紧急bug
​    2.基于master分支创建hotfix分支, 在该分支上修复bug
​    git switch master
​    git branch hotfix/issue66
​    修复bug / add / commit

    3.修复完成后重新合并到master分支和develop分支
    git switch Develop
    git merge hotfix/issue66
    
    4.项目经理重新在master分支定制标记
    git switch master
    git merge hotfix/issue66
    git tag v1.1
    git push origin v1.1


- master主分支:
    + 负责记录上线版本的迭代，该分支代码与线上代码是完全一致的。
- develop开发分支:
    + 该分支记录相对稳定的版本，所有的feature分支都从该分支创建
- feature/* 特性（功能）分支:
    + 用于开发新的功能，不同的功能创建不同的功能分支，功能分支开发完成并自测通过之后，需要合并到 develop 分支。
- release/*发布分支：
    + 用于代码上线准备，该分支从develop分支创建，创建之后由测试发布到测试环境进行测试，测试过程中发现bug需要开发人员在该release分支上进行bug修复，所有bug修复完后，在上线之前，需要合并该release分支到master分支和develop分支。
- bugfix/* bug修复分支:
    + 用于修复不紧急的bug，普通bug均需要创建bugfix分支开发，开发完成自测没问题后合并到 develop 分支后，删除该分支。
- hotfix/*紧急bug修复分支：
    + 该分支只有在紧急情况下使用，从master分支创建，用于紧急修复线上bug，修复完成后，需要合并该分支到master分支以便上线，同时需要再合并到develop分支。


    https://gitee.com/help/articles/4181