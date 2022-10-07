const express =require("express");
const bodyParser = require("body-parser");
const { render } = require("ejs");

const app = express();

let items=["Buy food","Cook food","Eat food"];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){

    console.log();
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-us",options);

    // var currentDay = today.getDay();
        // var day="";
    // var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var day=weekday[currentDay];

    // if (currentDay===6 || currentDay===0){
    //     day="Weekend!";
      
    // }else{
    //     day="weekday";
    
    // }

    res.render("list",{kindofDay:day,New_Item:items});

   });

   app.post("/",function(req,res){
    let item = req.body.NewItem;
    items.push(item);
    res.redirect("/");
   });

   app.get("/",function(req,res){
    res,redirect("/");
   });

app.listen(3000,function(){
    console.log("Server started on port 3000");
});