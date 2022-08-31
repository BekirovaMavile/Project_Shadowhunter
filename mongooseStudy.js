var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose')

var hunters = mongoose.model('hunters', { name: String })

var hunt = new hunters({ name: 'Alec' })
hunt.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('Парабатай')
    }
})
