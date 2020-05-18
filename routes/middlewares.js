const jwt = require('jwt-simple');
const moment = require('moment');

exports.checkToken = (req, res, next) => {
    if (!req.headers['access-token']) {
        return res.status(403).json({ error: 'Debes incluir la cabecera access-token' });
    }

    const token = req.headers['access-token'];
    let payload = null;
    try {
        payload = jwt.decode(token, process.env.SECRET_KEY);
    } catch (err) {
        return res.status(403).json({ error: 'El token incluido es incorrecto' });
    }

    if (payload.expiredAt < moment().unix()) {
        return res.status(403).json({ error: 'El token ha expirado' });
    }

    if (payload.usuario !== 'Juanan') {
        return res.status(403).json({ error: 'El usuario es incorrecto' });
    }

    req.payload = payload;

    next();
}