# NPM

**`npm`** ：全称 **Node Package Manager** ，node 包管理工具

包就是别人写的 nodejs 模块

---

### `设置淘宝镜像`

> 设置镜像源

- 临时使用
```shell
npm --registry https://registry.npm.taobao.org install xxx
```

- 永久使用
配置：
```shell
npm config set registry https://registry.npm.taobao.org
```
可通过以下命令查看是否配置成功

```shell
npm config get registry     # 

npm config list             # 查看配置信息
npm config list -l          # 查看所有默认的配置信息

npm info express
```

```shell

npm config -h   # 命令帮助，查看二级指令

```

说明：永久配置修改的是 `.npmrc` 文件（在npm的安装目录下）

- 恢复官方源
```shell
npm config set registry https://registry.npmjs.org
```
---

> cnpm 的使用

安装淘宝的cnpm，然后在使用时直接将npm命令替换成cnpm命令即可

```shell
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

---

> npm指令
- npm -h ：
- npm config -h ：二级指令，配置指令
    - npm config list ：查看配置
    - npm config set ：设置相关配置