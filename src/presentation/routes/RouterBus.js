import { Router } from 'express';
import { ControllerBus } from '../controllers/ControllerBus.js';

export const router_bus = Router();

router_bus.get('/buses', ControllerBus.getBuses);
router_bus.get('/buses/:id', ControllerBus.getBusById);
router_bus.post('/buses', ControllerBus.createBus);
router_bus.put('/buses/:id', ControllerBus.updateBus);
router_bus.delete('/buses/:id', ControllerBus.deleteBus);