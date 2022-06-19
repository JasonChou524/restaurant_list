const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')
const user = require('../../models/user')

router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  const data = { userId: req.user._id, ...req.body }
  return Restaurant.create(data)
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch((error) => console.log(error))
})

router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch((error) => console.log(error))
})

router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const {
    name,
    en_name,
    category,
    image,
    location,
    phone,
    google_map,
    rating,
    description,
  } = req.body
  return Restaurant.findOne({ _id, userId })
    .then((restaurant) => {
      restaurant.name = name
      restaurant.en_name = en_name
      restaurant.category = category
      restaurant.image = image
      restaurant.location = location
      restaurant.phone = phone
      restaurant.google_map = google_map
      restaurant.rating = rating
      restaurant.description = description
      return restaurant.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch((error) => console.log(error))
})

router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .then((restaurant) => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.log(error))
})

module.exports = router
