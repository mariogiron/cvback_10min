const router = require('express').Router();

const Proyecto = require('../models/proyecto');

router.get('/', async (req, res) => {
    const proyectos = await Proyecto.find().lean();
    console.log(proyectos);
    res.render('proyectos/index', { proys: proyectos });
});

router.get('/new', async (req, res) => {
    res.render('proyectos/formulario');
});

router.post('/create', async (req, res) => {
    try {
        const proyecto = await Proyecto.create(req.body);
        res.redirect('/proyectos');
    } catch (err) {
        res.json({ error: err });
    }
});

module.exports = router;