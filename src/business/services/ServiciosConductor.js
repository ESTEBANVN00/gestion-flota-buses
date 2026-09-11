import { RepositoryConductor } from '../../data/repositories/RepositoryConductor.js';

export class ServiciosConductor {
  static async listarConductores() {
    return await RepositoryConductor.obtenerTodos();
  }

  static async obtenerConductorPorId(id) {
    const conductor = await RepositoryConductor.obtenerPorId(id);
    if (!conductor) {
      throw new Error('El conductor solicitado no existe.');
    }
    return conductor;
  }

  static async registrarConductor(datosConductor) {
    if (!datosConductor.cedula || !datosConductor.nombre || !datosConductor.apellido) {
      throw new Error('La cédula, el nombre y el apellido son obligatorios.');
    }

    const existe = await RepositoryConductor.obtenerPorCedula(datosConductor.cedula);
    if (existe) {
      throw new Error('Ya existe un conductor registrado con esa cédula.');
    }

    return await RepositoryConductor.crear(datosConductor);
  }

  static async actualizarConductor(id, datos) {
    const conductorActualizado = await RepositoryConductor.actualizar(id, datos);
    if (!conductorActualizado) {
      throw new Error('No se encontró el conductor para actualizar.');
    }
    return conductorActualizado;
  }

  static async eliminarConductor(id) {
    const eliminado = await RepositoryConductor.eliminar(id);
    if (!eliminado) {
      throw new Error('No se encontró el conductor para eliminar.');
    }
    return { mensaje: 'Conductor eliminado correctamente' };
  }
}