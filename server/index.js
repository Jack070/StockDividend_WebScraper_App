const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const ScraperRouter = require("./routes/scraper-router");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors());

app.use("/api", ScraperRouter)

app.get("/", function(req, res){
    res.send("HEllO");
});

app.listen(3000, function(){
    console.log("Server is running at port 3000");
});