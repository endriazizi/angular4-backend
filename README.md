"# angular4-backend" 

conncet mongodb from shell
npm start

output:

[nodemon] 1.12.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node index.js`
(node:15348) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, u
se `openUri()` instead, or set the `useMongoClient` option if using `connect()`
or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mon
go-client
connected to mongodb correctly!

warnig fixing:

'user strict'

//create variable for mongoose
var mongoose =require ('mongoose')

1)Web Services Node & Express
2)Our first APIRest
3)Create Models


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/zoo', { useMongoClient: true })
    .then(() => {
        console.log('connected to mongo databse correctly!');
})
.catch(err => console.log(err));
