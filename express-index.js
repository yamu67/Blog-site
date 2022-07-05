const http = require('http');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const server = http.createServer(app);

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

var port = '5600';
var ip = 'localhost';

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {    
        console.log('Connected to MongoDB');
    })

var userSchema = new mongoose.Schema({
    imgurl:String,
    title:String,
    description:String,
    date:String,
    author:{
        authorid:Number,
        imgUrl:String,
        name:String
    }
})

const course= mongoose.model('blog', userSchema);   

app.get('/', async (req, res) => {    
    try{

        var getCollection = await course.find();
        res.json(getCollection);
        res.status(200);
    }
    catch(err){
        res.json({message: err});
        res.status(400);
    }
});

app.post('/save', async (req, res) => {
    try{
        console.log(req.body.imgurl);
        await course(req.body).save()
        res.json({"status":200});
    }
    catch{
        res.json({message: 'Error'});
    }
});

app.post('/update', async (req, res) => {
    try{
        await course.updateOne({_id: req.body._id}, {$set: req.body})
        res.json({"status":200});
    }
    catch{
        res.json({message: 'Error'});
    }
});

app.post('/delete', async (req, res) => {
    try{
        await course.deleteOne({_id: req.body._id})
        res.json({"status":200});
    }
    catch{
        res.json({message: 'Error'});
    }
});

server.listen(port, ip, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server is running on port " + port);
    }
})