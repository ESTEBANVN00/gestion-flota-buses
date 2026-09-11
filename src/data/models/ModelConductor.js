import { DataTypes } from 'sequelize';
import { conn } from '../../config/database.js';

export const ModelConductor = conn.define('Conductor', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cedula: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  licencia: {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: 'Categoría de la licencia de conducción (ej: C2, C3)',
  },
  estado: {
    type: DataTypes.ENUM('Disponible', 'En Ruta', 'Licencia', 'Inactivo'),
    defaultValue: 'Disponible',
  }
}, {
  tableName: 'conductores',
  timestamps: true,
});