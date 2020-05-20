const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./src/routes/routes'));

app.listen(port, () => {
    console.log("listen on port " + port);
});