// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require("../database");

const Reserva = sequelize.define(
  "Reserva",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    destino_partida: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    destino_final: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_ida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_vuelta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    cantidad_niños: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_final: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    hora: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "reservas",
  }
);

Reserva.sync({ force: false }).then(() => {
  console.log("La tabla de reservas fue creada exitosamente");
});

module.exports = Reserva;
