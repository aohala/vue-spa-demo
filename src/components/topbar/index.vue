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
