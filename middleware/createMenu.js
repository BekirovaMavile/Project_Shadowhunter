var db = require('../database.js');

module.exports = function(req,res,next){
res.locals.nav = []
    db.query(`SELECT * FROM hunter`, (err, hunters) => {  
        if(err) throw err
        res.locals.nav = hunters
        next()
        
    })
}