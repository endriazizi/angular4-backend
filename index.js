'user strict'

//create variable for mongoose
var mongoose =require ('mongoose');
var app= require('./app');
//service port
//up to you number of port
var port = process.env.PORT || 3000;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo', { useMongoClient: true })
    .then(() => {
        console.log('connected to mongo databse correctly!');

        //lunch service
        app.listen(port, () => {
            console.log("Node and Express service is Working Correctly");
            //on browser for APIRestFul http://localhost:3000/
        });
})
.catch(err => console.log(err));

