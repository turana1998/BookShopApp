
const router=require('./server/MainRoute');
const cors = require('cors')
const db=require('./server/database');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const fileUpload = require('express-fileupload');
const fs=require('fs');
const path=require('path');

app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload({
    limits: { fileSize: 3 * 1024 * 1024 },
  }));


app.use(router);



const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/images/:dir/:name', (req, res) => {
  let fileName=path.join(__dirname,'./client/images/'+req.params.dir+'/'+req.params.name)
  res.sendFile(fileName,(err)=>{
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})



app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


