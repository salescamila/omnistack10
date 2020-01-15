const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

//mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://camila:camila@cluster0-shard-00-00-wj1qa.mongodb.net:27017,cluster0-shard-00-01-wj1qa.mongodb.net:27017,cluster0-shard-00-02-wj1qa.mongodb.net:27017/week10?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }).then(()=>console.log("DB server connect"))
    .catch(e => console.log("DB error", e));

app.use(express.json());
app.use(routes);

app.listen(3333);
