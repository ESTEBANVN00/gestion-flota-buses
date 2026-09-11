import { ModelMantenimiento } from '../models/ModelMantenimiento.js';
import { ModelBus } from '../models/ModelBus.js';

export class RepositoryMantenimiento {
  static async obtenerTodos() {
    return await ModelMantenimiento.findAll({
      include: [{ model: ModelBus, as: 'bus' }]
    });
  }

  static async obtenerPorId(id) {
    return await ModelMantenimiento.findByPk(id, {
      include: [{ model: ModelBus, as: 'bus' }]
    });
  }

  static async crear(datosMantenimiento) {
    return await ModelMantenimiento.create(datosMantenimiento);
  }
}