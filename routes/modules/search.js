const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keywords = req.query.keyword
  const keyword = keywords.trim().toLowerCase()

  Restaurant.find()
    .lean()
    .then((restaurantsData) => {
      const filterRestaurantsData = restaurantsData.filter(
        (data) =>
          data.name.toLowerCase().includes(keyword) ||
          data.name_en.toLowerCase().includes(keyword) ||
          data.category.includes(keyword)
      )
      res.render('index', {
        restaurants: filterRestaurantsData,
        keyword: keywords,
      })
    })
})

module.exports = router
