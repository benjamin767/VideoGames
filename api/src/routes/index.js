const { Router } = require('express');
// Importar todos los routers;
const videoRoutes = require('./videogames.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videoRoutes);


module.exports = router;
