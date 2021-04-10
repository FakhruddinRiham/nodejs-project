const express = require('express');



const app = express();


app.get('/', (req, res) =>{
    res.send("I Know How to open Node Yay!");

})

app.listen(4200, () => console.log('listening to port 4200'));