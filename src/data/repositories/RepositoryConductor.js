import { ModelConductor } from '../models/ModelConductor.js';

export class RepositoryConductor {
  static async obtenerTodos() {
    return await ModelConductor.findAll();
  }

  static async obtenerPorId(id) {
    return await ModelConductor.findByPk(id);
  }

  static async obtenerPorCedula(cedula) {
    return await ModelConductor.findOne({ where: { cedula } });
  }

  static async crear(datosConductor) {
    return await ModelConductor.create(datosConductor);
  }

  static async actualizar(id, datosActualizados) {
    const conductor = await ModelConductor.findByPk(id);
    if (!conductor) return null;
    return await conductor.update(datosActualizados);
  }

  static async eliminar(id) {
    const conductor = await ModelConductor.findByPk(id);
    if (!conductor) return null;
    await conductor.destroy();
    return true;
  }
}