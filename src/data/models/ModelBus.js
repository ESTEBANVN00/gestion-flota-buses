import { DataTypes } from 'sequelize';
import { conn } from '../../config/database.js';

export const ModelBus = conn.define('Bus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  placa: {
    type: DataTypes.STRING(10),
    allowNull: false,
    unique: true,
  },
  numero_int: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: 'Número interno asignado al bus',
  },
  capacidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('Activo', 'Inactivo', 'Mantenimiento'),
    defaultValue: 'Activo',
  }
}, {
  tableName: 'buses',
  timestamps: true,
});