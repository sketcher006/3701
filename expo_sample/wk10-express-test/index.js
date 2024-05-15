const express = require("express");
const app = express();

const port = 3000;
let counter = 0;

const switchCase = (str) =>{
    let result = "";
    for(let i = 0 ; i < str.length ; i++){
        if(str[i] === str[i].toUpperCase()){
            result += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
};

const dummyMiddleware = (req, res, next) =>{
    console.log("I am in dummy middleware");
    // console.log("\n req:", req);
    next();
}

const increaseCount = (req, res, next) =>{
    counter++;
    next();
}

const slowDown = (req, res, next) =>{
    setTimeout(()=> next(), 1000);
}

app.use(dummyMiddleware);
app.use(increaseCount);
// app.use(slowDown);

app.get('/',(req, res)=>{
    res.json({id:counter, name:'Tom'});
    // res.send(`This is a test server. ${counter}`);
});

app.get('/users',(req, res)=>{
    res.send("This is the users.");
});

app.get('/echo/:text', (req, res) => {
    const text = req.params.text;
    const result = switchCase(text);
    res.json({ "status":"OK","message":result });
});

app.get('/echo', (req, res) => {
    const query = req.query.msg;
    if(!query){
        res.json({"status":"error", "message":"no message"});
    }
    const result = switchCase(query);
    res.json({ "status":"OK","message":result });
});

app.listen(port, ()=>{
    console.log("Express server is up");
});

