const correctBanana = (postBanana)=>{
    let bananaName = postBanana.name.split(' ');

    for (let i = 0; i < bananaName.length; i++ ){
    bananaName[i] = bananaName[i].length> 2 ? bananaName[i][0].toUpperCase() + bananaName[i].slice(1).toLowerCase() : bananaName[i];
    }
    return bananaName.join(' ');
}
const checkName = (req, res, next) => {
    if (req.body.name) {
        console.log({bananaName: req.body.name});
        next();
      } else {
        res.status(400).json({ error: "Name is required" });
      }
      
};


module.exports = 
{ 
    correctBanana,
    checkName,
};