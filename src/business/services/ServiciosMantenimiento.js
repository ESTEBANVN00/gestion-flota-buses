import { RepositoryMantenimiento } from '../../data/repositories/RepositoryMantenimiento.js';
import { RepositoryBus } from '../../data/repositories/RepositoryBus.js';

export class ServiciosMantenimiento {
  static async listarMantenimientos() {
    return await RepositoryMantenimiento.obtenerTodos();
  }

  static async registrarMantenimiento(datos) {
    const { bus_id, tipo, descripcion, costo, fecha } = datos;

    if (!bus_id || !tipo || !descripcion || !costo || !fecha) {
      throw new Error('Todos los campos son obligatorios para registrar un mantenimiento.');
    }

    const busExiste = await RepositoryBus.obtenerPorId(bus_id);
    if (!busExiste) {
      throw new Error('El bus especificado no existe.');
    }

    // Registrar mantenimiento
    const nuevoMantenimiento = await RepositoryMantenimiento.crear(datos);

    // Regla de negocio: Cambiar estado del bus a Inactivo por mantenimiento
    await RepositoryBus.actualizar(bus_id, { estado: 'Inactivo' });

    return nuevoMantenimiento;
  }
}