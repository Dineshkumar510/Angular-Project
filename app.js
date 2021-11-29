const express = require('express');
const app = express();
const path = require('path'); 
const cors = require('cors');
const port = 3200;


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'Client/src/assets/pdf/sample.pdf')))

app.get('/', (req, res)=> {
    res.send(`Listening to Demo Project at port ${port}`);
})


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/download', (req, res)=>{
    const file = 'Client/src/assets/pdf/sample.pdf';
    res.download(file);
    res.send("Download File");
})


app.use(cors());

app.listen(port, ()=> {
    console.log(`Now Listening on Port ${port}`);
})
