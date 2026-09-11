import { RepositoryRuta } from '../../data/repositories/RepositoryRuta.js';

export class ServiciosRuta {
  static async listarRutas() {
    return await RepositoryRuta.obtenerTodas();
  }

  static async obtenerRutaPorId(id) {
    const ruta = await RepositoryRuta.obtenerPorId(id);
    if (!ruta) {
      throw new Error('La ruta solicitada no existe.');
    }
    return ruta;
  }

  static async registrarRuta(datosRuta) {
    if (!datosRuta.origen || !datosRuta.destino || !datosRuta.precio_pasaje) {
      throw new Error('El origen, destino y precio del pasaje son obligatorios.');
    }
    return await RepositoryRuta.crear(datosRuta);
  }

  static async actualizarRuta(id, datos) {
    const rutaActualizada = await RepositoryRuta.actualizar(id, datos);
    if (!rutaActualizada) {
      throw new Error('No se encontró la ruta para actualizar.');
    }
    return rutaActualizada;
  }

  static async eliminarRuta(id) {
    const eliminado = await RepositoryRuta.eliminar(id);
    if (!eliminado) {
      throw new Error('No se encontró la ruta para eliminar.');
    }
    return { mensaje: 'Ruta eliminada correctamente' };
  }
}