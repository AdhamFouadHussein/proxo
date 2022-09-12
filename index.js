const express = require('express')
const router = express.Router()
router.get('/', function(req, res) {
    res.send('welcome home');
}),
router.get('/index/', function(req, res) {
    res.send('welcome index');
}),
module.exports = router
