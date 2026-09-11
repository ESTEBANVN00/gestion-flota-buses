import { DataTypes } from 'sequelize';
import { conn } from '../../config/database.js';

export const ModelRuta = conn.define('Ruta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  origen: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  destino: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  distancia_km: {
    type: DataTypes.DECIMAL(6, 2),
    allowNull: false,
  },
  duracion_estimada: {
    type: DataTypes.STRING(50),
    allowNull: false,
    comment: 'Ejemplo: 2 horas 30 mins',
  },
  precio_pasaje: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  tableName: 'rutas',
  timestamps: true,
});