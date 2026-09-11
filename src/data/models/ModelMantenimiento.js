import { DataTypes } from 'sequelize';
import { conn } from '../../config/database.js';

export const ModelMantenimiento = conn.define('Mantenimiento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bus_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.ENUM('Preventivo', 'Correctivo'),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  costo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  }
}, {
  tableName: 'mantenimientos',
  timestamps: true,
});