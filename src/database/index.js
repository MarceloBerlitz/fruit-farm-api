const mongoose = require('mongoose');

mongoose.connect('mongodb://fruit-farm-shard-00-00-ukqma.gcp.mongodb.net:27017,fruit-farm-shard-00-01-ukqma.gcp.mongodb.net:27017,fruit-farm-shard-00-02-ukqma.gcp.mongodb.net:27017/test?ssl=true&replicaSet=fruit-farm-shard-0&authSource=admin&retryWrites=true&w=majority', 
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true,
        auth: {
            user: process.env.MONGO_USER,
            password: process.env.MONGO_PASSWORD
        }
    }).catch(error => {
        console.error(error);
    });

module.exports = mongoose;
