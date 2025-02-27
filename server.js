const express= require("express");
const app = express();
const dotenv = require("dotenv");

const usuarioRouter=require("./router/usuarioRouter");

dotenv.config();
app.use(express.json());

app.use("/api",usuarioRouter);

const PORT=  process.env.PORT;
app.listen(PORT,()=>{
    console.log("Servidor corriendo ");
});