import { ModelRuta } from '../models/ModelRuta.js';

export class RepositoryRuta {
  static async obtenerTodas() {
    return await ModelRuta.findAll();
  }

  static async obtenerPorId(id) {
    return await ModelRuta.findByPk(id);
  }

  static async crear(datosRuta) {
    return await ModelRuta.create(datosRuta);
  }

  static async actualizar(id, datosActualizados) {
    const ruta = await ModelRuta.findByPk(id);
    if (!ruta) return null;
    return await ruta.update(datosActualizados);
  }

  static async eliminar(id) {
    const ruta = await ModelRuta.findByPk(id);
    if (!ruta) return null;
    await ruta.destroy();
    return true;
  }
}