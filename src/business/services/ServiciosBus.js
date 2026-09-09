import { RepositoryBus } from '../../data/repositories/RepositoryBus.js';

export class ServiciosBus {
  static async listarBuses() {
    return await RepositoryBus.obtenerTodos();
  }

  static async obtenerBusPorId(id) {
    const bus = await RepositoryBus.obtenerPorId(id);
    if (!bus) {
      throw new Error('El bus solicitado no existe.');
    }
    return bus;
  }

  static async registrarBus(datosBus) {
    if (!datosBus.placa || !datosBus.numero_int) {
      throw new Error('La placa y el número interno son obligatorios.');
    }
    return await RepositoryBus.crear(datosBus);
  }

  static async actualizarBus(id, datos) {
    const busActualizado = await RepositoryBus.actualizar(id, datos);
    if (!busActualizado) {
      throw new Error('No se encontró el bus para actualizar.');
    }
    return busActualizado;
  }

  static async eliminarBus(id) {
    const eliminado = await RepositoryBus.eliminar(id);
    if (!eliminado) {
      throw new Error('No se encontró el bus para eliminar.');
    }
    return { mensaje: 'Bus eliminado correctamente' };
  }
}