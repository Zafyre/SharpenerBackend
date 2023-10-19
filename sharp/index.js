
import  express from "express";
const app = express();
const port = 3000;

app.get("/home",(req,res) => {
    
    res.send("Welcome to Home");
});
app.get("/node",(req,res) => {
    
    res.send("Welcome to my Node Js project");
});
app.get("/about",(req,res) => {
    
    res.send("Welcome to About Us page");
});

app.listen(port,()=>{
    console.log('Server is listening on port ' + port   );
})
