import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './swagger.json' with { type: 'json' };
import { conn } from './src/config/database.js';

// Modelos
import { ModelBus } from './src/data/models/ModelBus.js';
import { ModelConductor } from './src/data/models/ModelConductor.js';
import { ModelRuta } from './src/data/models/ModelRuta.js';

// Rutas
import { router_bus } from './src/presentation/routes/RouterBus.js';
import { router_conductor } from './src/presentation/routes/RouterConductor.js';
import { router_ruta } from './src/presentation/routes/RouterRuta.js';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/api', router_bus);
app.use('/api', router_conductor);
app.use('/api', router_ruta);

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