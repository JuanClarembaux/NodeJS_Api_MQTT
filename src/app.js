import express from "express";
import avisosRoutes from './routes/avisos.routes.js'
//import alertasRoutes from './routes/alertas.routes.js'


const app = express();

// Middlewares
app.use(express.json())

app.use(avisosRoutes)
//app.use(alertasRoutes)

export default app;