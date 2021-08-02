const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise
const url = 'mongodb://localhost:27017/jersey';
mongoose.connect(url,{useNewUrlParser: true})

const {Kit} = require('./models/Kits');
const {User} = require('./models/user');
const {auth} = require('./middleware/auth');



app = express();

app.use(bodyParser.json());
app.use(cookieParser());

//GET REQUESTS
app.get('/api/logout',auth,(req,res)=>{
    req.user.deleteToken(req.token,(err,user)=>{
        if(err) return res.status(400).send(err);
        res.send(200)
    })
})

app.get('/api/clubkits',(req,res)=>{
    Kit.find({level:"club"},(err,doc)=>{
        if(err) return err;
        res.send(doc);
    })
})

app.get('/api/intkits',(req,res)=>{
    Kit.find({level:"inter"},(err,doc)=>{
        if(err) return err;
        res.send(doc);
    })
})

app.get('/api/otherkits',(req,res)=>{
    Kit.find({level:"other"},(err,doc)=>{
        if(err) return err;
        res.send(doc);
    })
})

//POSTS
app.post('/api/register',(req,res)=>{
    console.log(req.body)
    const user = new User(req.body)
    user.save((err,doc)=>{
        if(err) return res.send({success: false});
        res.status(200).json({
            success: true,
            isAuth: true,
            user: doc
        })
    })
})

app.get('/api/auth',auth,(req,res)=>{
    res.send({
        wasAuth: true
    })

})


app.post('/api/login',(req,res)=>{
    User.findOne({username: req.body.username},(err,user)=>{
        if(!user) return res.json({isAuth: false,message: "Auth false,Message Authentication failed"})
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(!isMatch) return res.json({
                isAuth: false,
                message: "Wrong Password"
            })
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);
                res.cookie('auth',user.token).send({
                    isAuth: true
                })
            })
            
        })
    })
})
app.post('/api/kit',(req,res)=>{
    const kit = new Kit(req.body);
    kit.save((err,doc)=>{
        if(err) res.status(400).send(err);
        res.send(doc);
    })
})

const port = process.env.PORT || 5002;
app.listen(port,()=>{
    console.log("server running successfully")
})