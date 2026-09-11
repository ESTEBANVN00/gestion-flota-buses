import { DataTypes } from 'sequelize';
import { conn } from '../../config/database.js';

export const ModelDespacho = conn.define('Despacho', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bus_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  conductor_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ruta_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fecha_salida: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Programado', 'En Camino', 'Finalizado', 'Cancelado'),
    defaultValue: 'Programado',
  }
}, {
  tableName: 'despachos',
  timestamps: true,
});