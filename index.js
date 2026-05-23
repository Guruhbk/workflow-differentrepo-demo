const express = require('express')
const app = express();
const os = require('os');
app.get('/',(req, res)=>{
res.send("Hi Stranger");
})
app.listen(8080,()=>{
    console.log(`
    Hostname: ${os.hostname()}
    User ID: ${process.getuid()}`);

})
