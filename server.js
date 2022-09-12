const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT || 3000
const router = express.Router()
const routes = require('./index')
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
app.use('/*', router);
app.use(routes)