import express from "express";
import request from "request";

const app = express();

app.use(express.urlencoded({ "extended": true }));

app.use('/', (req, res) => {
    res.send("holas");
});

app.listen(3000, () => {
    console.log("Run Server")
});

app.get('/webhook', (req, res) => {
    if(req.query['hub.verify_token'] == 'text_token_boot'){
        res.send(req.query['hub.challenge']);
    }else{
        res.send('Error, accion no permitida');
    }
});