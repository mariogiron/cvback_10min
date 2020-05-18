const mongoose = require('mongoose');

const urlMongo = process.env.MONGO_URL;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(urlMongo, config);