const router = require('express').Router();
const moment = require('moment');
const jwt = require('jwt-simple');

const apiRouterProyectos = require('./api/proyectos');
const middlewares = require('./middlewares');

router.use('/proyectos', middlewares.checkToken, apiRouterProyectos);

router.get('/token', (req, res) => {
    let payload = {
        usuario: 'Juanan',
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'days').unix()
    };
    const token = jwt.encode(payload, process.env.SECRET_KEY);
    console.log(token);
    res.json({ token });
});

module.exports = router;