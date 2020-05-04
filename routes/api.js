const router = require('express').Router();

const apiRouterProyectos = require('./api/proyectos');

router.use('/proyectos', apiRouterProyectos);

module.exports = router;