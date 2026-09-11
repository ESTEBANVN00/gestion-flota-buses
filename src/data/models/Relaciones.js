import { ModelBus } from './ModelBus.js';
import { ModelConductor } from './ModelConductor.js';
import { ModelRuta } from './ModelRuta.js';
import { ModelDespacho } from './ModelDespacho.js';

export const setupRelaciones = () => {
  // Un despacho pertenece a un Bus, a un Conductor y a una Ruta
  ModelDespacho.belongsTo(ModelBus, { foreignKey: 'bus_id', as: 'bus' });
  ModelDespacho.belongsTo(ModelConductor, { foreignKey: 'conductor_id', as: 'conductor' });
  ModelDespacho.belongsTo(ModelRuta, { foreignKey: 'ruta_id', as: 'ruta' });

  // Un Bus, Conductor o Ruta puede tener muchos despachos
  ModelBus.hasMany(ModelDespacho, { foreignKey: 'bus_id' });
  ModelConductor.hasMany(ModelDespacho, { foreignKey: 'conductor_id' });
  ModelRuta.hasMany(ModelDespacho, { foreignKey: 'ruta_id' });
};