const mongoose = require('mongoose');

const urlMongo = 'mongodb://heroku_nrmsc41m:qhcout39rc70vvl1sedahf78sb@ds253960.mlab.com:53960/heroku_nrmsc41m';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(urlMongo, config);