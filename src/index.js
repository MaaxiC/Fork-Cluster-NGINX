import os from "os";
import express from "express";

const app = express();
const PORT = process.env.PORT;

const CPUs = os.cpus().length;

app.listen(PORT);
console.log(`server listening on port ${PORT}`);

app.get('/port', (req, res) => {
    res.send(`Servidor con pid ${process.pid} atendiendo peticion en el puerto ${PORT}`);
});

app.get('/info', (req, res) => {
    res.send(`Numero de nucleos: ${CPUs}`);
});