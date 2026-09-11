import { RepositoryDespacho } from '../../data/repositories/RepositoryDespacho.js';

export class ServiciosDespacho {
  static async listarDespachos() {
    return await RepositoryDespacho.obtenerTodos();
  }

  static async obtenerDespachoPorId(id) {
    const despacho = await RepositoryDespacho.obtenerPorId(id);
    if (!despacho) {
      throw new Error('El despacho solicitado no existe.');
    }
    return despacho;
  }

  static async registrarDespacho(datosDespacho) {
    if (!datosDespacho.bus_id || !datosDespacho.conductor_id || !datosDespacho.ruta_id || !datosDespacho.fecha_salida) {
      throw new Error('Todos los campos (bus_id, conductor_id, ruta_id, fecha_salida) son obligatorios.');
    }
    return await RepositoryDespacho.crear(datosDespacho);
  }

  static async actualizarDespacho(id, datos) {
    const despachoActualizado = await RepositoryDespacho.actualizar(id, datos);
    if (!despachoActualizado) {
      throw new Error('No se encontró el despacho para actualizar.');
    }
    return despachoActualizado;
  }

  static async eliminarDespacho(id) {
    const eliminado = await RepositoryDespacho.eliminar(id);
    if (!eliminado) {
      throw new Error('No se encontró el despacho para eliminar.');
    }
    return { mensaje: 'Despacho eliminado correctamente' };
  }
}