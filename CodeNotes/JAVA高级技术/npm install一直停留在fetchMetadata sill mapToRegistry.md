你可以首先检查一下你的源是不是淘宝的镜像源

```
npm config get registry
```

如果不是的，
更换成淘宝的源

```
npm config set registry https://registry.npm.taobao.org
```

配置后再通过下面方式来验证是否成功

```
npm config get registry
```

这样还不行的话 用cnpm

```
npm install -g cnpm --registry=http://registry.npm.taobao.org
```

安装完后，`cnpm install`

这两个原理实际上是一样的