var express = require('express')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var path = require('path')
var app = express()

app.disable('x-powered-by')

// // 设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

module.exports = app;
