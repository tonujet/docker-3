import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

const message = "Hello from server"

app.use(cors());

app.get('/', (req, res) => {
    console.log("Request");
    res.json(message);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});