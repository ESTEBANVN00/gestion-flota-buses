import { ServiciosConductor } from '../../business/services/ServiciosConductor.js';

export class ControllerConductor {
  static async getConductores(req, res) {
    try {
      const conductores = await ServiciosConductor.listarConductores();
      res.status(200).json(conductores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getConductorById(req, res) {
    try {
      const { id } = req.params;
      const conductor = await ServiciosConductor.obtenerConductorPorId(id);
      res.status(200).json(conductor);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async createConductor(req, res) {
    try {
      const nuevoConductor = await ServiciosConductor.registrarConductor(req.body);
      res.status(201).json(nuevoConductor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateConductor(req, res) {
    try {
      const { id } = req.params;
      const conductorActualizado = await ServiciosConductor.actualizarConductor(id, req.body);
      res.status(200).json(conductorActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteConductor(req, res) {
    try {
      const { id } = req.params;
      const respuesta = await ServiciosConductor.eliminarConductor(id);
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}