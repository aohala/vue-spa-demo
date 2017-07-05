const router = require('express').Router()
const _ = require('lodash')
const db = require('./db').getClient()

/** 获取最近上映影片 */
router.get('/recentMovie', function (req, res) {
  res.send({
    now: require('./db/data/now.json'),
    coming: require('./db/data/coming.json')
  })
})

/** 获取全部影片 */
router.get('/all', function (req, res) {
  let type = req.query.type || '所有'
  if (type !== '所有') {
    db.find({types: type}).limit(30).exec((err, list) => {
      if (!err) return res.send(list)
      res.send([])
    })
  } else {
    db.find({}).limit(50).exec((err, list) => {
      if (!err) return res.send(list)
      res.send([])
    })
  }
})

/** 获取分类 */
router.get('/category', function (req, res) {
  res.send(require('./db/data/category.json'))
})

/** 添加收藏 */
router.post('/favorites', function (req, res) {
  res.send()
})

/** 标记为喜欢 */
router.post('/like', function (req, res) {
  res.send()
})

module.exports = router
