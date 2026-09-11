import { Router } from 'express';
import { ControllerConductor } from '../controllers/ControllerConductor.js';

export const router_conductor = Router();

router_conductor.get('/conductores', ControllerConductor.getConductores);
router_conductor.get('/conductores/:id', ControllerConductor.getConductorById);
router_conductor.post('/conductores', ControllerConductor.createConductor);
router_conductor.put('/conductores/:id', ControllerConductor.updateConductor);
router_conductor.delete('/conductores/:id', ControllerConductor.deleteConductor);