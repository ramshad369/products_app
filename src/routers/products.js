var express = require('express')
var router = new express.Router()
var Product = require('../models/product')

//Create
router.post('/products', async(req,res) => {
    const product = new Product({...req.body})
    try{
        await product.save()
        res.status(201).send(product)
    }
    catch(e){
        res.status(400).send(e)
    }
})

//ListAll
router.get('/products', async(req,res) => {
   try{
    var products = await Product.find({})
    res.send(products)
   }
    catch(e){
        res.status(500).send(e)
    }
})

//FindByName
router.get('/products/search', async(req, res) => {
    var products = await Product.find({ name: req.body.name})
    try{
        if(!products){
        return res.status(404).send("Product not found!")
    }
    res.send(products)
    }
    catch(e){
        res.status(500).end(e)
    }
})

//Update
router.patch('/products/:id', async(req,res)=>{
    try{
        let cont = {}
                if (req.body.name)
                    cont.name = req.body.name
                if (req.body.price)
                    cont.price = req.body.price
                if (req.body.description)
                    cont.description = req.body.description
        var products = await Product.findByIdAndUpdate(req.params.id, { $set: cont},{new: true})
        res.send(products)
    }
    catch(e){
        res.status(400).send(e)
    }
})

//delete
router.delete('/products/:id', async(req, res)=>{
    try{
        var products = await Product.findOneAndDelete({_id: req.params.id})
        if(!products){
            return res.status(404).send("product not found!")
        }
        res.send(products)
    }
    catch(e){
        res.status(500).send(e)
    }
})

module.exports = router


