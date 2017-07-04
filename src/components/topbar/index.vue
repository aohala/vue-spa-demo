<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <a class="nav-item site-logo">
          VuejsDemo
        </a>
        <router-link to="/" class="nav-item is-tab is-hidden-mobile" active-class="is-active" exact>首页</router-link>
        <router-link to="/all" class="nav-item is-tab is-hidden-mobile" active-class="is-active">所有电影</router-link>
        <a class="nav-item is-tab is-hidden-mobile">我想看的</a>
        <a class="nav-item is-tab is-hidden-mobile">我的评分</a>
      </div>
      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>
      <div class="nav-right nav-menu">
        <a class="nav-item is-tab is-hidden-tablet is-active">首页</a>
        <a class="nav-item is-tab is-hidden-tablet">今日电影</a>
        <a class="nav-item is-tab is-hidden-tablet">我想看的</a>
        <a class="nav-item is-tab is-hidden-tablet">我的评分</a>
        <a class="nav-item is-tab">
          <figure class="image is-16x16" style="margin-right: 8px;">
            <img src="http://bulma.io/images/jgthms.png">
          </figure>
          我的账号
        </a>
        <a class="nav-item is-tab">退出</a>
      </div>
    </div>
  </nav>
</template>
<style lang="stylus" scoped>

  .site-logo
    margin-right 20px

</style>
