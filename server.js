const express = require('express');
const sequelize = require('./src/config/database');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON en las peticiones
app.use(express.json());

// Ruta inicial de prueba
app.get('/', (req, res) => {
  res.json({ message: 'Servidor Express corriendo correctamente' });
});

// Función para conectar a la BD e iniciar el servidor
async function main() {
  try {
    await sequelize.authenticate();
    console.log(' Conexión a la base de datos MySQL establecida correctamente.');
    
    // Sincroniza los modelos con la BD
    await sequelize.sync({ force: false });

    app.listen(PORT, () => {
      console.log(` Servidor ejecutándose en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(' No se pudo conectar a la base de datos:', error);
  }
}

main();