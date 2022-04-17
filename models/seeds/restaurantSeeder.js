const mongoose = require('mongoose')
const env = require('../../env.json')
const Restaurant = require('../restaurant.js') // 載入 model
const restaurantList = require('../../restaurant.json')
mongoose.connect(env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

db.once('open', () => {
  console.log('mongodb connected! run the seeder')
  Restaurant.create(restaurantList.results)
  console.log('done')
})
