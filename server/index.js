require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {sequelize} = require('./util/database')
const {PORT} = process.env
const {Product} = require('./models/product')
const {addProduct} = require('./controllers/products')
const { seed } = require("./seed.js");

const app = express()

app.use(express.json())
app.use(cors())

app.post("/seed", seed);
app.post('/products', addProduct)

//app.get('/products', getProducts)


sequelize.sync({force: false})
.then(() => {
  app.listen(PORT, () => console.log(`database synced, server running on port ${PORT}`))
})