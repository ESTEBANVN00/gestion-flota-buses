import { ServiciosBus } from '../../business/services/ServiciosBus.js';

export class ControllerBus {
  static async getBuses(req, res) {
    try {
      const buses = await ServiciosBus.listarBuses();
      res.status(200).json(buses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBusById(req, res) {
    try {
      const { id } = req.params;
      const bus = await ServiciosBus.obtenerBusPorId(id);
      res.status(200).json(bus);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async createBus(req, res) {
    try {
      const nuevoBus = await ServiciosBus.registrarBus(req.body);
      res.status(201).json(nuevoBus);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateBus(req, res) {
    try {
      const { id } = req.params;
      const busActualizado = await ServiciosBus.actualizarBus(id, req.body);
      res.status(200).json(busActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteBus(req, res) {
    try {
      const { id } = req.params;
      const respuesta = await ServiciosBus.eliminarBus(id);
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}