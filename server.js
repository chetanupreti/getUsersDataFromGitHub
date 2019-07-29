//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(function(req, res, next) {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Serve only the static files form the dist directory
app.use(express.static('./dist/fe-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/fe-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);