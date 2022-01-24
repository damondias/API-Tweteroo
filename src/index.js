import express  from "express";
import cors from "cors";

const app = express();

app.listen(5000, () => {
    console.log("Rodando API tweteroo em http://localhost:5000");
})

