import { Router } from 'express';
import { ControllerRuta } from '../controllers/ControllerRuta.js';

export const router_ruta = Router();

router_ruta.get('/rutas', ControllerRuta.getRutas);
router_ruta.get('/rutas/:id', ControllerRuta.getRutaById);
router_ruta.post('/rutas', ControllerRuta.createRuta);
router_ruta.put('/rutas/:id', ControllerRuta.updateRuta);
router_ruta.delete('/rutas/:id', ControllerRuta.deleteRuta);