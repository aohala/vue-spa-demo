const router = require('express').Router()

/** 获取最近上映影片 */
router.get('/recentMovie', function (req, res) {
  res.send({
    now: require('./data/now.json'),
    coming: require('./data/coming.json')
  })
})

/** 获取全部影片 */
router.get('/all', function (req, res) {
  res.send(require('./data/all.json').slice(Math.random() * 10, 20))
})

/** 获取分类 */
router.get('/category', function (req, res) {
  res.send(require('./data/category.json'))
})

module.exports = router
