import { ServiciosRuta } from '../../business/services/ServiciosRuta.js';

export class ControllerRuta {
  static async getRutas(req, res) {
    try {
      const rutas = await ServiciosRuta.listarRutas();
      res.status(200).json(rutas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getRutaById(req, res) {
    try {
      const { id } = req.params;
      const ruta = await ServiciosRuta.obtenerRutaPorId(id);
      res.status(200).json(ruta);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  static async createRuta(req, res) {
    try {
      const nuevaRuta = await ServiciosRuta.registrarRuta(req.body);
      res.status(201).json(nuevaRuta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateRuta(req, res) {
    try {
      const { id } = req.params;
      const rutaActualizada = await ServiciosRuta.actualizarRuta(id, req.body);
      res.status(200).json(rutaActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteRuta(req, res) {
    try {
      const { id } = req.params;
      const respuesta = await ServiciosRuta.eliminarRuta(id);
      res.status(200).json(respuesta);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}