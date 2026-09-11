import { ModelDespacho } from '../models/ModelDespacho.js';
import { ModelBus } from '../models/ModelBus.js';
import { ModelConductor } from '../models/ModelConductor.js';
import { ModelRuta } from '../models/ModelRuta.js';

export class RepositoryDespacho {
  static async obtenerTodos() {
    return await ModelDespacho.findAll({
      include: [
        { model: ModelBus, as: 'bus' },
        { model: ModelConductor, as: 'conductor' },
        { model: ModelRuta, as: 'ruta' }
      ]
    });
  }

  static async obtenerPorId(id) {
    return await ModelDespacho.findByPk(id, {
      include: [
        { model: ModelBus, as: 'bus' },
        { model: ModelConductor, as: 'conductor' },
        { model: ModelRuta, as: 'ruta' }
      ]
    });
  }

  static async crear(datosDespacho) {
    return await ModelDespacho.create(datosDespacho);
  }

  static async actualizar(id, datosActualizados) {
    const despacho = await ModelDespacho.findByPk(id);
    if (!despacho) return null;
    return await despacho.update(datosActualizados);
  }

  static async eliminar(id) {
    const despacho = await ModelDespacho.findByPk(id);
    if (!despacho) return null;
    await despacho.destroy();
    return true;
  }
}