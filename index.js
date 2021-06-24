const express = require("express");
const app = express();
const port = 3000;

// const bodyParser = require("body-parser");

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// const path = require("path");
// var xx = require("./routes/dbTools.js");

// Create a views folder and put html file in it with the following code
// see https://www.geeksforgeeks.org/express-js-app-engine-function/
app.engine('html', require('ejs').renderFile);

// app.get('/requestform', function (req, res) {
//     res.render("requestform.html")
// });
const path = require("path");
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));


const routers = require("./routes/routers.js");
app.use("/", routers);

//Add these headers, very important!
app.use(function (req, res, next) {
    //allow all origins
    res.header("Access-Control-Allow-Origin", "*");

    //allow headers "Origin", "X-Requested-With", "Content-Type"
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.listen(port, (err) => {
    if (err) {
        console.log(`Unable to start the server on port ${port}`);
    }
    console.log(`This HTTP server is running on port ${port}`);
});