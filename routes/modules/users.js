const express = require('express')
const { redirect } = require('express/lib/response')
const router = express.Router()

// Login
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  res.redirect('/')
})

// Register
router.get('/register', (req, res) => {
  res.render('register')
})

module.exports = router
