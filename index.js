import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.json' with { type: 'json' };
import { conn } from './src/config/database.js';
import { router_bus } from './src/presentation/routes/RouterBus.js';

const app = express();

app.use(express.json());

// Interfaz de Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Rutas del proyecto
app.use('/api', router_bus);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: "API de Gestión de Flota de Buses activa" });
});

const PORT = process.env.PORT || 3000;
const SERVER = "http://localhost:";
const URL = SERVER + PORT;

app.listen(PORT, () => {
  console.log("Servidor funcionando de forma correcta. URL: " + URL);
});

conn.authenticate()
  .then(() => {
    return conn.sync({ alter: true });
  })
  .then(() => console.log("Conexión establecida y tablas sincronizadas en MySQL..."))
  .catch((error) => console.log("Error al conectar con la base de datos:", error));