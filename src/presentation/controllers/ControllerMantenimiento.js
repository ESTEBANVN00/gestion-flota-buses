import { ServiciosMantenimiento } from '../../business/services/ServiciosMantenimiento.js';

export class ControllerMantenimiento {
  static async getMantenimientos(req, res) {
    try {
      const mantenimientos = await ServiciosMantenimiento.listarMantenimientos();
      res.status(200).json(mantenimientos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createMantenimiento(req, res) {
    try {
      const nuevoMantenimiento = await ServiciosMantenimiento.registrarMantenimiento(req.body);
      res.status(201).json(nuevoMantenimiento);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}