import { ServiciosDespacho } from '../../business/services/ServiciosDespacho.js';

export class ControllerDespacho {
  static async getDespachos(req, res) {
    try {
      const despachos = await ServiciosDespacho.listarDespachos();
      res.status(200).json(despachos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getDespachoById(req, res) {
    try {
      const { id } = req.params;
      const despacho = await ServiciosDespacho.obtenerDespachoPorId(id);
      res.status(200).json(despacho);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async createDespacho(req, res) {
    try {
      const nuevoDespacho = await ServiciosDespacho.registrarDespacho(req.body);
      res.status(201).json(nuevoDespacho);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateDespacho(req, res) {
    try {
      const { id } = req.params;
      const despachoActualizado = await ServiciosDespacho.actualizarDespacho(id, req.body);
      res.status(200).json(despachoActualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteDespacho(req, res) {
    try {
      const { id } = req.params;
      const respuesta = await ServiciosDespacho.eliminarDespacho(id);
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}