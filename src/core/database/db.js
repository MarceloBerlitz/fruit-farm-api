const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL, 
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD
        }
    }).then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(error => {
        console.error(error);
    });

module.exports = mongoose;
