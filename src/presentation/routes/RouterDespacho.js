import { Router } from 'express';
import { ControllerDespacho } from '../controllers/ControllerDespacho.js';

export const router_despacho = Router();

router_despacho.get('/despachos', ControllerDespacho.getDespachos);
router_despacho.get('/despachos/:id', ControllerDespacho.getDespachoById);
router_despacho.post('/despachos', ControllerDespacho.createDespacho);
router_despacho.put('/despachos/:id', ControllerDespacho.updateDespacho);
router_despacho.delete('/despachos/:id', ControllerDespacho.deleteDespacho);