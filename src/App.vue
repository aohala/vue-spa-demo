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
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
.main-content
  width content-width
  margin: 50px auto
  padding: 20px
  background #fff

footer
  width content-width
  margin: 50px auto
  text-align center
  font-size 12px
</style>
