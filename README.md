# 安装NodeJS

https://nodejs.org/

# 设置REGISTRY

设置REGISTRY到国内镜像，加快安装速度。

```
npm config set registry https://registry.npm.taobao.org
```

# 使用本Starter

```
git clone https://git.cloud.alipay.com/sjtu-minialipay-2018/minialipay-frontend.git
cd minialipay-frontend
npm i
```

## 开始本地开发

```
npm start
```

## 添加antd-mobile的组件
https://mobile.ant.design/

## 给组件添加交互
https://reactjs.org/docs/getting-started.html

## 创建新的子页面
```
npm run create-page PageName
```

使用方法
```javascript
showPage(XxxPage, {...props}, {...options}).then(result => console.log("Page result:", result));
````

## 和后台交互
参考`ExampleService.js`和`home.js`中对其的使用。

## 使用原生功能
参考`QrService.js`（带PC端mock）和`home.js`中对其的使用。

# 手机端执行

## 安装 Cordova 

https://cordova.apache.org

```
npm i -g cordova
cd cordova
cordova prepare
```

## Android 端运行 （推荐）

通过[Android Studio](https://developer.android.com/studio/)安装SDK和Android Virtual Machine。

然后运行：
```
npm run android
```

*可以用Chrome调试，`chrome://inspect`。*

## iOS 端运行 （不推荐）

*不推荐大家做iOS端，本Starter iOS端验证比较少，可能会遇到一些比较难解决的问题，必须要有iOS原生开发经验才能解决。*

*如果要做iOS端，请确保组内有懂iOS的同学，iOS遇到的坑和部署APP时的问题我无法技术支持。*

```
npm run ios
```

*只能用[safari调试](https://medium.com/@mattcroak718/debugging-your-iphone-mobile-web-app-using-safari-development-tools-71240657c487)。*

# 如何做登入
有多种解决方案，建议使用`每次请求时附带 token`的方法（类似Session）。

1. 调用登入接口，用户名密码换取`token`。
2. 前端本地保存`token`和`token`的过期时间（如果需要跨重启，可以存在`localStorage`里）。
3. 前端在发送任何请求的时候，如果有`token`，则在`headers`中附带发送`token`。
4. 后端通过解析`token`，来获得用户的登入信息。
5. 如果`token`无效或者已经失效，则抛出一个特定的错误码。
6. 前端在HTTP层（最好用拦截器等设计模式）捕获这个错误码，提示用户重新登入。
7. 做得更好的话，前端设计一套`token`刷新机制。

# XMLHttpRequest cannot load...

这是因为发起了跨域请求。Chrome的安全策略会阻止跨域请求，而运行到手机上后，这不成问题（在手机上这个安全机制被设置为忽略）。

## 解决方法1 （比较方便）

Chrome上安装插件：https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en

## 解决方法2 （正统）

* https://stackoverflow.com/questions/10143093/origin-is-not-allowed-by-access-control-allow-origin
* https://security.stackexchange.com/questions/127966/access-control-allow-origin-with-a-bearer-token
* https://stackoverflow.com/questions/13994507/how-do-you-send-a-custom-header-in-a-cross-domain-cors-xmlhttprequest

# 注意
请在 IDE 里把 `/build` 和 `/cordova` 设置为 **Excluded**，否则每次 build 都会很卡。 

# 其他
* 上课时的[讲义.md](./讲义.md) （参考用，但做Project时以本文档（README.md）为准就行）
* 要自定义样式的同学注意：CSS使用了[SASS](https://sass-lang.com/)和[CSS Modules](https://github.com/css-modules/css-modules)，必须以`.module.scss`结尾
* 这个Starter附赠很多有用的前端代码，请多研究、多实验
* 小ICON：https://fontawesome.com/v4.7.0/
* 如果给的Starter有bug，微信上联系（但工作时间不保证及时回复）
* Chrome上开发的时候一定要用[device mode](https://developers.google.com/web/tools/chrome-devtools/device-mode/)
* 如果没有先前的经验，这个Project会很有挑战，但做成功后会收获满满！建议多花时间，认真研究