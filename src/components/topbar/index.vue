<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item site-logo">
          VuejsDemo
        </a>
        <router-link to="/" class="nav-item is-tab is-hidden-mobile" active-class="is-active" exact>首页</router-link>
        <router-link to="/all" class="nav-item is-tab is-hidden-mobile" active-class="is-active">所有电影</router-link>
        <router-link to="/favorites" class="nav-item is-tab is-hidden-mobile" active-class="is-active">我的收藏</router-link>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <router-link to="/" class="nav-item is-tab is-hidden-tablet" active-class="is-active" exact>首页</router-link>
        <router-link to="/all" class="nav-item is-tab is-hidden-tablet" active-class="is-active">所有电影</router-link>
        <router-link to="/favorites" class="nav-item is-tab is-hidden-tablet" active-class="is-active">我的收藏</router-link>        
        <!--<a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          我的账号
        </a>-->
        <a class="nav-item is-tab">退出</a>
      </div>
    </div>
  </nav>
</template>
<style lang="stylus" scoped>

  .site-logo
    margin-right 20px

</style>
