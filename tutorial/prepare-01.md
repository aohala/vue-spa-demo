### 项目搭建

#### 搭建工作流

Vue.js官方提供了脚手架工具可以很方便的创建一个可扩展的vuejs应用开发的工作流，支持代码热更新、代码检查lint、代码生产环境发布的功能。

```
### 安装脚手架工具vue-cli
npm install --global vue-cli

### 用脚手架工具初始化一个webpack模板项目，运行命令会进入项目创建向导
vue init webpack vue-spa-demo

# 进入项目，安装依赖
cd vue-spa-demo
yarn 
```
项目初始化完毕后可看到脚手架产生的目录文件如下：

```
 - vue-spa-app
   - build          webpack工作流构建代码
   - config         webpack环境配置
   - node_modules   依赖
   - src            业务代码
   - static         静态资源文件
```

**进入开发模式**

`npm run dev`

打开[http://localhost:8080](http://localhost:8080)能看到下面的初始页面

![http://localhost:8080](./image/prepare01.jpg)

现在我们已经用脚手架很简单的完成了前端开发环境工作流的搭建，下一步我们将学习如何在项目处理应用的css样式、及单页面应用中组件的布局方式

#### 样式构建

**添加css预处理器（框架）**

利用css预处理框架可以极大地减轻我们写css样式的工作量，流行的预处理框架有`less`, `sass`, `stylus`等，这里选择了`stylus`

```
# 安装stylus预编译
yarn add stylus stylus-loader
```

**统一不同浏览器之间的样式差异**

```
# 添加normalize
yarn add normalize.css
```
添加全局相关的样式、css常量/宏

-  `src/style/global.styl`
-  `src/style/common.syl`

### 创建第一个组件Topbar

在用Vuejs进行组件化开发单页应用时，往往把整个页面看做一个Vue组件，"多个"页面其实就是顶层组件下不同子组件的视图切换。比如常见的布局里一个页面基本包含头部区（header）、内容区（content）、页面底部区（footer）

```
// 单页面顶层的布局组件 src/App.vue
<template>
  <div id="app">
    <Topbar></Topbar>
    <main class="main-content">
      <router-view></router-view>
    </main>
    <footer>
      底部栏
    </footer>
  </div>
</template>
<script>
import Topbar from './components/topbar'
export default {
  name: 'app',
  components: {
    Topbar
  }
}
</script>

<style lang="stylus">

// 在组件入口引入全局的样式
@import 'style/global.styl'

// 引入定义的常量
@import 'style/common.styl'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
.main-content
  width content-width
  margin: 50px auto
  padding: 20px;
  background #fff

footer
  width content-width
  margin: 50px auto
  text-align center
  font-size 12px
</style>

```


Topbar组件

```
// src/components/topbar/index.vue

<template>
  <div class="header-wrap">
    <header>
      <h3>vuejs-demo</h3>
      <nav>
        <ul>
          <li>首页</li>
        </ul>
      </nav>
    </header>
  </div>
</template>
<style lang="stylus">

  @import '~@/style/common.styl'

  .header-wrap
    overflow hidden
    border-bottom solid 1px #eee
    header
      width content-width
      center-block()
      .center
      h3, nav
        float: left;
</style>

```

下一步：开始编写电影页面组件

