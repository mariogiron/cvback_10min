const mongoose = require('mongoose');

const urlMongo = process.env.MONGO_URL;

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
mongoose.connect(urlMongo, config);