var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

/** 部署到leancloud上的配置 */
var AV = require('leanengine')
AV.init({
  appId: process.env.LEANCLOUD_APP_ID,
  appKey: process.env.LEANCLOUD_APP_KEY
})
app.get('/1.1/functions/_ops/metadatas', (req, res) => {
  res.sendStatus(404)
})

// 设置模板引擎
app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

app.use('/static', express.static('static'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use('/api', require('./routes'))

var PORT = parseInt(process.env.LEANCLOUD_APP_PORT || 3000)

app.get('*', function (req, res) {
  res.render('index')
})

app.listen(PORT, () => {
  console.log('Node app is running on port:', PORT)
})

module.exports = app
