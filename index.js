const express = require('express')
const app = express()
const port = 3000;

app.use(require('./components/routes/routes'))

app.listen(port, () => {
    console.log("listen on port " + port);
})