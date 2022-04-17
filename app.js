// require packages used in the project
const express = require('express')
const mongoose = require('mongoose')
const env = require('./env.json')
const bodyParser = require('body-parser')
const Restaurant = require('./models/restaurant') // 載入 Restaurant model

const app = express()
const port = 3000
mongoose.connect(env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

// setting template engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

//  取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

// routes setting
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then((restaurants) => res.render('index', { restaurants }))
    .catch((error) => console.error(error))
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter((restaurant) => {
    return (
      restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(keyword)
    )
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

app.post('/restaurants', (req, res) => {
  console.log('送出表單')
  console.log(req.body)
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch((error) => console.log(error))
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
