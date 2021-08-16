const express=require("express")
const app=express()
const port=process.env.PORT||8080

// Serve a static website using a middleware
app.use(express.static('static'))


// Page not found
app.all("*",(req,res)=>{
    res.status(400).send(`The resource is not available at ${req.url}`)
})

// App listens at port 
app.listen(port,()=>{
    console.log(`The server is listening at port ${port}`)
})