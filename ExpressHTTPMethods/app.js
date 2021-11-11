const express = require('express'); // requiring express from
const app = express(); // express() is a methof of express 

app.get("/",(req,res)=>{

    res.send("From get");
    res.end();
    
});
app.post("/",(req,res)=>{

    res.send("From post");
    res.end();

});
app.put("/",(req,res)=>{

    res.send("From put");
    res.end();

});
app.delete("/",(req,res)=>{

    res.send("From delete");
    res.end();

})

module.exports =app;
 

