import express, {json}  from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

app.listen(5000, () => {
    console.log("Rodando API tweteroo em http://localhost:5000");
})

