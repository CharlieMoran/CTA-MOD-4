const express = require('express');
const { correctBanana, checkName , isBoolean } = require('../validations');
const bananas = express.Router();

const {getAllBananas, getOneBanana, createBanana , deleteBanana, updateBanana} = require("../queries/Banana.js");
  
bananas.get("/", async (req,res)=>{

    try{
        const allBananas = await getAllBananas();
        if(allBananas.length){
            res.status(200).json({success: true, payload: allBananas});
        } else {
            res.status(404).json({error: "No Bananas were returned from db"});
        }
    }catch(err){
        console.log(err)
    }
});

bananas.get("/:id", async (req,res)=>{
    const { id } = req.params;
    try{
        const banana = await getOneBanana(id);
        if(banana.id){
            res.status(200).json({success: true, payload: banana});
        } else {
            res.status(404).json({success: false, payload: "Banana not found"});
        }
    }catch(err){
        console.log(err)
    }
});

bananas.post("/", async (req,res)=>{
    const { body } = req;
    const postBanana = await createBanana(body);
    try{
        if(postBanana.id && !postBanana.image){
            let correctedBanana = correctBanana(postBanana);
            res.status(200).json(
                {
                    success: true, 
                    payload: {
                        id: postBanana.id,
                        name: correctedBanana,
                        image: "../front-end/public/images/no-banana.png",
                        fiber: postBanana.fiber,
                        protein: postBanana.protein,
                    }
            });

        } else if(postBanana.id && postBanana.image){
            let correctedBanana = correctBanana(postBanana)
            res.status(200).json(
                {
                    success: true, 
                    payload: {
                        id: postBanana.id,
                        name: correctedBanana,
                        image: postBanana.image,
                        fiber: postBanana.fiber,
                        protein: postBanana.protein,   
                    }
            });

        } else {
            res.status(404).json({success: false, payload: "Banana not found"});
        }

    }catch(err){
        console.log(err);
    }
});

bananas.delete("/:id", async (req,res)=>{
    const { id } = req.params;
    try{
        const deletedBanana = await deleteBanana(id);
        if(deletedBanana.id){
            res.status(200).json({success: true, payload: deletedBanana})
        }else{
            res.status(404).json({success: false, payload: "Banana not found"})
        }
    }catch(err){
        console.log(err)
    }
});

bananas.put("/:id", async (req,res)=>{
    const { id } = req.params;
    const { body } = req;
    const updatedBanana = await updateBanana(id, body);
    if(updatedBanana.id){
        res.status(200).json(updatedBanana)
    }else{
        res.status(404).json({success: false, payload: "Banana not found"})
    }
})

module.exports = bananas;
