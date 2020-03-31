整个安装过程分两大步，第一步装机器，第二步装系统.

**第一步: 装机器**

1)   检查物理机虚拟化支持是否开启，需要进入到BIOS中设置，因各种电脑型号进入BIOS

方式不同，同学们自行查找对应品牌电脑如何进入BIOS

建议: 先安装，如果安装中提示虚拟化未开启，再进入BIOS设置，如安装一切顺序，则不需要进行任何设置。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659130649-0ca6dd64-e438-4ac2-a59e-92918c99bd45.jpeg)

2)   在VMware中新建虚拟机

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659130775-1345e8d0-c8f8-47b3-8a6c-e657cc7a47ed.jpeg)

3)    默认即可,不需要做任何修改，直接下一步

 ![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659130967-cca3d992-ff38-48f8-8250-ef12e4dfd648.jpeg)

4)   选择稍后安装操作系统，然后下一步

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131115-cfa1d419-e86d-4fc2-a9d6-d95666a68a1d.jpeg)

5)   选择安装的操作系统为Linux,版本为CentOS7 64位

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131230-3c002d76-9a7f-48b9-8a5c-4e474e319dd0.jpeg)

6)   虚拟机命名，可随意取， 安装位置最好选择固态硬盘(有固态的情况..)，快的飞起

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131342-98227739-2d1b-4ba7-a9a3-08d691986a2a.jpeg) 

7)   按照物理机CPU实际情况，选择处理器配置, 处理器数量*每个处理器内存数量要小于等于物理机CPU的数量，否则报错.

查看物理机CPU数量:

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131471-3696de6f-df34-4f29-91f8-a8b66e73bea1.jpeg)

选择虚拟机CPU配置

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131607-43c9553e-20d6-4388-9bc6-ce590bdeb4ba.jpeg)

8)   选择分配给虚拟机的内存，最少2G,后续Hadoop阶段建议适当调大, 土豪机可任性一把

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131770-f43183b3-6871-4781-815a-618ddca2cc16.jpeg)

9)   网络类型选择NAT

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659131920-19d670fb-938e-43cc-a356-338fb356e80c.jpeg)

10)   I/O控制器类型选择默认推荐即可，同学们无须纠结不同处，不重要。

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132036-646b8eae-7151-4a23-99ec-5961b27af07a.jpeg" alt="img" style="zoom: 150%;" />

11)  磁盘类型选择SCSI， 同学们无须纠结不同处，不重要。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132168-31f69d27-b49f-421c-a105-5da2b8ccd8d3.jpeg) 

12)   选择创建新虚拟磁盘

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132303-bcec84fd-f042-4762-b084-3c124ee170b4.jpeg)

13)  磁盘容量指定50G，选择将虚拟磁盘拆分成多个文件. 不要勾选立即分配所有磁盘空间,否则会直接占用50G大小的磁盘空间。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132446-4ffc70f8-1a19-4890-aad6-36127f09c0e9.jpeg)

14)  选择Linux文件的存储位置，建议选择到Linux的安装位置，存储到第6步选择的目录下

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132559-9c312a78-cc19-48e6-b9f2-b71867372c5a.jpeg)

15)  至此，装机器完成。 点击完成即可。如果想更改配置，可点击自定义硬件。对之前步骤的选择进行更改。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132680-5b269f28-9e3d-43b1-8f6a-cb7b69f0b136.jpeg)

**第二步  装系统**

1)   选择系统盘位置

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132809-eced6fa2-11d5-4430-a5cd-ecfd29628e99.jpeg)

 

2)   加电，开启虚拟机

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659132956-69ab804d-8b1f-4489-9923-c5b6472b8094.jpeg)

3)   进入倒计时,鼠标点进去, 键盘上下键可以选择，选择Install CentOS 7 ，然后回车即可.

不要选择Test this media & install CentOS 7, 然后就没有然后了……

  TIPS: Ctrl+Alt可以实现Windows主机和VM之间窗口的切换

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659133068-cd96a8bf-f050-46ce-aac9-6972ec113b47.jpeg)

4)   选择安装语言为简体中文，虽然我知道大家英语都很好，但是不要浪…… 汉语是最NB的语言，不接受任何反驳。![img](%E5%AE%89%E8%A3%85CentOS.assets/1585659133214-2d754f71-8941-41fd-b33b-a91f634143ba.jpeg) ![img](%E5%AE%89%E8%A3%85CentOS.assets/1585659133347-a8ad21c3-efbe-4178-9d01-2fe012c09e11.jpeg) ![img](https://cdn.nlark.com/yuque/0/2020/jpeg/349894/1585659133347-a8ad21c3-efbe-4178-9d01-2fe012c09e11.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659133469-c754b483-7b3a-4006-bc9c-d4a174b9cb7e.jpeg)

5)   设置日期和时间  选择亚洲/上海

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659133627-976c76c6-3864-48c5-9181-84f36d45eea1.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659133825-cba1fe5d-21eb-4f8b-acdd-446a66a90e48.jpeg)

6)   设置软件选择 GNOME桌面,

TIPS：第一次安装建议选择GNOME桌面，实际以后真实服务器中不会带桌面,都是最小化安装，进入系统就是Shell界面，全部通过命令操作。 等学习完Linux命令，能使用命令熟练操作Linux后，可选择最小安装.

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659133945-70b35ccb-f261-4ed9-9a7d-75966b99c077.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659134161-7e5af12e-ac8c-4725-acb8-768be81bfea9.jpeg)

7)   设置安装位置,即进行分区。（可选）

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659134314-72b512e5-0129-4a1d-8638-14ffa13082f4.jpeg) 

选择我要配置分区,然后点左上角完成进入分区界面

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659134491-18921855-a6ce-4066-9b4f-83da597bb68c.jpeg)

第一个分区: /boot  引导分区,建议给1G

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659134650-41b66ceb-d731-42e4-9634-2304f8f53294.jpeg)

修改设备类型为标准分区,文件系统为ext4

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659134784-091e0151-f452-48ad-b210-d3c4e2c2986e.jpeg)

第二个分区 swap , 交换分区，建议设置与内存大小一致. 2G

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659134967-d111dd76-5089-45cb-a7d4-7224b8a5e354.jpeg" alt="img" style="zoom:200%;" />

修改设备类型为标准分区,文件系统为swap

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135111-ff9f8d03-dcad-45f5-b1a4-297e0d8119e0.jpeg" alt="img" style="zoom:200%;" />

第三个分区 / , 剩余的磁盘大小全部分配。 /为linux文件系统的根目录。

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135219-d262378e-19d8-43db-ab26-b4b661c07ec0.jpeg" alt="img" style="zoom:200%;" />

修改设备类型为标准分区,文件系统为ext4

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135337-a9321aae-e1dd-4419-a7de-03666d3b0b7e.jpeg" alt="img" style="zoom:200%;" />

确认最终分区后的情况,点击左上角完成即可。

<img src="https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135490-a898d154-48cd-47bf-b105-5720ff3ce3ab.jpeg" alt="img" style="zoom:200%;" />

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135621-aac343e5-4538-40c2-9362-030cb679647a.jpeg)

8)   关闭KDUMP(节省内存使用)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135735-a37b1962-9ffb-411a-bc86-2e2bd5003c83.jpeg) 

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135860-9116f743-c915-4aef-94e3-fe1c66e77428.jpeg)

9)   配置网络和主机名(可选,也可在安装好后进入到系统中配置).

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659135999-b65e3224-415f-4c40-b3ff-0d66cf59bade.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659136142-cab27418-038a-4c2b-9608-d3a5ac29ffdb.jpeg)

10)  最后确认配置的各个选项无误,点击开启安装即可.

11)  配置ROOT密码。Linux会默认提供一个超级管理员用户，就是root. 类似于Windows

的admin用户

TIPS: 设置的root用户密码一定要记住，因此设置一个别人能帮你记住的密码，如123456.你们懂的!!!!! 

 

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659136272-91c8b8ac-e78b-492f-a3bb-5813ec67e810.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659136449-9000087e-6412-43bf-a7ad-a90480b90f79.jpeg)

12)   等等等……等待安装完成，预估10分钟左右……

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659136596-620f8e47-b76f-439b-9a6e-556e202f9688.jpeg)

 

13)  安装完成，重启虚拟机

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659136735-7f829f65-806a-4f0e-8b87-f07c28fd0022.jpeg)

14)  初始设置,接受许可证即可， 其他的不用配置。

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659136888-00816844-01f0-4782-b5d6-a4c5e73501fa.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659137044-444c86fc-2f63-4f6f-90c4-90be6b7c4558.jpeg)

15)  点击完成配置

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659137189-40410613-2ecb-4671-a1d2-e30fb89b70bf.jpeg)

 

16)   进入欢迎界面，选择汉语 ，点击右上角 前进

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659137372-48ed005f-d10e-4d27-a47d-46ee46af0a6d.jpeg) 

 

17)  选择键盘布局为汉语

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659137519-823bb369-8fd0-4f0e-83ca-f393a28c4b0b.jpeg)

18)   隐私设置 ，根据自己的喜好选择即可

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659137643-5273dcc9-7c49-4c04-afc1-0618ad290c1d.jpeg)

19)  确定时区

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659137874-86a74ff3-8535-4f5b-8370-c2e4c6bf5011.jpeg)

 

20)  跳过关联账号

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138050-48880aad-206f-4b1f-afff-0a907f3ee3a7.jpeg)

21)  CentOS要求必须设置一个普通账户,可随意设置

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138213-ca3dbe3d-55c5-4ebc-af87-d55f82069ebd.jpeg)

 

22)  设置普通账户密码

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138353-80e747b6-5aa9-4618-8f19-d2312736cd57.jpeg)

23)  终于可以开始使用了

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138470-72cd19e6-b579-4075-8195-fafc1b7fd060.jpeg)

24)  关闭Getting Started

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138631-ef0dae7a-9172-4218-b1fc-13fce5a6f455.jpeg)

25)  注销当前普通用户，使用root用户登录

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138776-282238c6-d79f-4c28-8d39-c075e1124ae7.jpeg)

26)   选择未列出,使用root登录

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659138886-32a2f882-01f6-4bfc-b509-1bf54993f6aa.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659139061-b4773cdb-0e09-4414-943d-cf955b8786a5.jpeg)

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659139190-bafff4cd-854a-4404-acb2-86a4b404dfbc.jpeg)

27)  为root用户配置欢迎设置。参考上面设置的步骤

![img](https://sumomoriaty.oss-cn-beijing.aliyuncs.com/1585659139333-68810b94-e26c-44b1-ac40-a29b7d38bec8.jpeg)

28)  安装总结:

整个Linux的安装分两大步，第一个大步装机器，也就是要虚拟一台机器出来,这里需要注意的是以后工作中不需要装虚拟机，全部都是真实的服务器，直接装系统即可.

第二大步就是装系统。

步骤比较多，大家安装时一定要仔细,如果安装过程出错，可选择删除重新安装.多试几次也好，毕竟慢慢就熟练了。

到此，可以开心的使用Linux了.