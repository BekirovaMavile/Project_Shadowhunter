module.exports = function(req,res,next){
    console.log("kjj")
    if(!req.session.user){
        res.redirect("/")
    }
    next()
}