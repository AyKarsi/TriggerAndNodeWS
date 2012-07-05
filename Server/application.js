var express = require("express");
var app = express.createServer();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.configure(function()
    {
        app.use(allowCrossDomain);
    }
);


var counter=0;
app.get("/helloword", function(req,res,next){
    counter++;
    console.log("request recieved");
    res.send({msg:"Auch hallo" +counter});
    return;
});

app.listen(99);
console.log("Express started");