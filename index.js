import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import request from "request";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ "extended": true }));

app.use('/', (req, res) => {
    res.send("Funcionando :)");
});

app.listen(port, () => {
    console.log("Run Server")
});

app.get('/webhook', (req, res) => {
    if(req.query['hub.verify_token'] == 'text_token_boot'){
        res.send(req.query['hub.challenge']);
    }else{
        res.send('Error, accion no permitida');
    }
});