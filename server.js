const express = require('express');
const path = require('path');
const app = express();
//Middleware
app.use('/static', express.static(path.resolve(__dirname, "frontend","static")));
//Se mostrara, no importa qué direccion este
app.get('/*', (req,res)=>{
    res.sendFile(path.resolve(path.resolve(__dirname,'frontend', 'index.html')))
})
app.listen(3000);
console.log('Servidor corriendo...')