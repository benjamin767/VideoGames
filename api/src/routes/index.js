const { Router } = require('express');
// Importar todos los routers;
const videoRoutes = require('./videogames.js');
const genreRoutes = require('./genres.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoRoutes);

router.use('/genres', genreRoutes);


module.exports = router;
