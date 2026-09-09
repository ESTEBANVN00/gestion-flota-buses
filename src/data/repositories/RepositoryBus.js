import { ModelBus } from '../models/ModelBus.js';

export class RepositoryBus {
  static async obtenerTodos() {
    return await ModelBus.findAll();
  }

  static async obtenerPorId(id) {
    return await ModelBus.findByPk(id);
  }

  static async crear(datosBus) {
    return await ModelBus.create(datosBus);
  }

  static async actualizar(id, datosActualizados) {
    const bus = await ModelBus.findByPk(id);
    if (!bus) return null;
    return await bus.update(datosActualizados);
  }

  static async eliminar(id) {
    const bus = await ModelBus.findByPk(id);
    if (!bus) return null;
    await bus.destroy();
    return true;
  }
}