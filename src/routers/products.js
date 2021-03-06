var express = require('express')
var router = new express.Router()
var Product = require('../models/product')

router.get('/helth', (req, res)=>{
    res.send({message:"succees"})
})

//Create
router.post('/products', async(req,res) => {
    try{
        const product = new Product({...req.body})
        await product.save()
        res.status(201).send({message:"success", data:product})
    }
    catch(e){
        res.status(400).send({error:e})
    }
})

//ListAll
router.get('/products', async(req,res) => {
   try{
    var products = await Product.find({})
    res.send({message:"success", data:products})
   }
    catch(e){
        res.status(500).send({error:e})
    }
})

//FindByName
router.post('/products/search', async(req, res) => {
    var products = await Product.find({ name: req.body.name})
    try{
        if(!products){
        return res.status(404).send({error:"Product not found!"})
    }
    res.send({message:"success", data:products})
    }
    catch(e){
        res.status(500).end({error:e})
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
        res.send({message:"success", data:products})
    }
    catch(e){
        res.status(400).send({error:e})
    }
})

//delete
router.delete('/products/:id', async(req, res)=>{
    try{
        var products = await Product.findOneAndDelete({_id: req.params.id})
        if(!products){
            return res.status(404).send({error: "product not found!"})
        }
        res.send({message:"success", data:products})
    }
    catch(e){
        res.status(500).send({error:e})
    }
})

module.exports = router


