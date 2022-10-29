import express from 'express'

const PORT = process.env.PORT() || 3500;
const app = express();
var cors =require('cors');
app.use(cors)
app.get("/",(req,res) =>{
    const data={
        slackUsername:"Mike",
        backend:true,
        age:20,
        bio:"software developer",
    };
    res.json(data);
} );
app.listen(PORT,() =>{
    console.log("The server is running on:",+PORT)
});