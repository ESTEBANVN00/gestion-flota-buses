import { Router } from 'express';
import { ControllerMantenimiento } from '../controllers/ControllerMantenimiento.js';

export const router_mantenimiento = Router();

router_mantenimiento.get('/mantenimientos', ControllerMantenimiento.getMantenimientos);
router_mantenimiento.post('/mantenimientos', ControllerMantenimiento.createMantenimiento);