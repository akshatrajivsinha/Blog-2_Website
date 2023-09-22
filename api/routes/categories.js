const router = require("express").Router();
const category = require("../models/Category");
const Category = require("../models/Category");

//POST

router.post("/", async (req,res)=>{
    const newcat = new Category(req.body);
    try{
        const savedCat = await newcat.save();
        res.status(200).json(savedCat);s

    }catch(err){
        res.status(500).json("error")
    }
})

router.get("/", async (req,res)=>{
    try{
        const cats = await category.find();
        res.status(200).json(cats);

    }catch(err){
        res.status(500).json(err)
    }
})






module.exports = router