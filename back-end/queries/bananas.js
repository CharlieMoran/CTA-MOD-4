const db = require("../db/dbConfig.js");

const getAllBananas = async () =>{
    try{
        const allBananas = await db.any("SELECT * FROM Bananas");
        return allBananas;
    }catch(err){
        return err;
    }
}
const getOneBanana = async (id) =>{

    try{
        const banana = await db.one("SELECT * FROM Bananas WHERE id=$1", id);
        return banana;
    }catch(err){
        return err;
    }
}
const createBanana = async (Banana) =>{

    try{
        const newBanana = await db.one(
            "INSERT INTO Bananas(name, image, fiber, protein, added_sugar, is_healthy) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [Banana.name, Banana.image,Banana.fiber,Banana.protein,]
        )
        return newBanana
    }catch(err){
        return err;
    }
}

const deleteBanana = async (id)=>{
    try{
        const deletedBanana = await db.one(
            "DELETE FROM Bananas WHERE id = $1 RETURNING *",
            id
        )
        return deletedBanana
    }catch(err){
        return err;
    }
}

const updateBanana = async (id, Banana)=>{
    try{
        const updateBanana = await db.one(
            "UPDATE Bananas SET name=$1, image=$2, fiber=$3, protein=$4, added_sugar=$5, is_healthy=$6 where id=$7 RETURNING *",
            [Banana.name, Banana.image,Banana.fiber,Banana.protein, id]
        )
        return updateBanana
    }catch(err){
        return err;
    }
}


module.exports = {
    getAllBananas,
    getOneBanana, 
    createBanana,
    deleteBanana,
    updateBanana,
};
