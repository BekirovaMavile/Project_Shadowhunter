var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose')

var schema = mongoose.Schema({name:String})

schema.methods.say = function(){
    console.log(this.get("name") + " сказал, что у него есть парабатай")
}
var hunters = mongoose.model('hunters', schema)

var hunt = new hunters({ name: 'Алек' })
hunt.save(function (err) {
    hunt.say()
})
