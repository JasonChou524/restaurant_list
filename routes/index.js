// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組程式碼
const home = require('./modules/home')
const search = require('./modules/search')
const restaurants = require('./modules/restaurants')
const users = require('./modules/users')

router.use('/', home)
router.use('/search', search)
router.use('/restaurants', restaurants)
router.use('/users', users)

// 匯出路由器
module.exports = router
