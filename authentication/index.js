const authRouter = require("./route/auth");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
app.use("/api/user", authRouter);

mongoose.connect("mongodb://localhost/auth",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connection is ok with DB");
})
.catch((err) => {
    console.log("Oops! Error, connection with DB ", err);
}) 

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Hey, I am listening the port ${port}`);
})
