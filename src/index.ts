import express, {type Request, type Response} from "express";
import {home_router} from "./home/home.router";

const app = express();

app.use(express.static('public'));

app.use(home_router);

app.listen(8000, () => {
    console.log("Website available here: http://localhost:8000");
})