const { Product } = require('../models/product')

module.exports = {
  addProduct: async (req, res) => {
    try {
      const {name, description, price, imageUrl} = req.body
      await Product.create({name, description, price, imageUrl})
      res.sendStatus(200)
    } catch (error) {
      console.log('ERROR in addProduct')
      console.log(error)
      res.sendStatus(400)
    }
  }
}




