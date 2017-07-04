<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img :src="movie.cover_url">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-6"><strong>{{movie.title}}</strong></p>
          <p class="subtitle is-6">评分：
            <span class="icon">
                <i class="fa fa-star"></i>
              </span>
          </p>
        </div>
      </div>
      <div class="content">
        {{movie.brief}}
        <br>
        <small>上映时间：{{movie.release_date}}</small>
      </div>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        想看
      </p>
      <p class="card-footer-item">
        评分
      </p>
    </footer>
  </div>

</template>
<script>
export default {
  props: ['movie']
}
</script>
<style lang="stylus" scoped>
  .card-content
    padding .8rem
  .card-image
    height 280px
    overflow hidden
  .media
    height: 60px
</style>

