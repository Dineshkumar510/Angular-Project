const express = require('express');
const app = express();
const path = require('path'); 
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Client/src/assets/pdf/sample.pdf')))

app.get('/', (req, res)=> {
    res.send(`Listening to Demo Project at port ${port}`);
})

app.get('/download', (req, res)=>{
    const file = 'Client/src/assets/pdf/sample.pdf';
    res.download(file);
    res.send("Download File");
})


app.listen(port, ()=> {
    console.log(`Now Listening on Port ${port}`);
})

module.exports = app;