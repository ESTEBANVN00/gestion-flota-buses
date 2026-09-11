import { ModelBus } from './ModelBus.js';
import { ModelConductor } from './ModelConductor.js';
import { ModelRuta } from './ModelRuta.js';
import { ModelDespacho } from './ModelDespacho.js';
import { ModelMantenimiento } from './ModelMantenimiento.js';

export const setupRelaciones = () => {
  // Relaciones de Despacho
  ModelDespacho.belongsTo(ModelBus, { foreignKey: 'bus_id', as: 'bus' });
  ModelDespacho.belongsTo(ModelConductor, { foreignKey: 'conductor_id', as: 'conductor' });
  ModelDespacho.belongsTo(ModelRuta, { foreignKey: 'ruta_id', as: 'ruta' });

  ModelBus.hasMany(ModelDespacho, { foreignKey: 'bus_id' });
  ModelConductor.hasMany(ModelDespacho, { foreignKey: 'conductor_id' });
  ModelRuta.hasMany(ModelDespacho, { foreignKey: 'ruta_id' });

  // Relaciones de Mantenimiento
  ModelMantenimiento.belongsTo(ModelBus, { foreignKey: 'bus_id', as: 'bus' });
  ModelBus.hasMany(ModelMantenimiento, { foreignKey: 'bus_id', as: 'mantenimientos' });
};