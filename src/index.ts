import express, {type Request, type Response} from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send("Test")
})

app.listen(8000, () => {
    console.log("Website available here: http://localhost:8000");
})