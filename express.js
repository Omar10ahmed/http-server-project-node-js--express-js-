const express = require('express')
const app = express();

app.use(express.static('./views'))

app.get('/',(req,res)=>{
    res.send("HomePage")
})
app.get('/about',(req,res)=>{
    res.send("AboutPage")
})
app.get('/products',(req,res)=>{
    res.send([
        {id:1,title:'phones'},
        {id:2,title:'tablets'},
    ]);
})


app.listen(3000,()=>{
    console.log('listening in port 3000');
})