import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import Personaje from "./src/app/core/models/Personaje.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Angular puede hacer peticiones
app.use(express.json()); // Mapeo de json
app.use(express.urlencoded({ extended: true })); // Acepta formularios

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("¡¡¡Conectado a MongoDB!!!"))
  .catch(err => console.log("Error al conectarse a MongoDB :(", err));
  
  mongoose.connection.once("open", () => {
  console.log("DB name:", mongoose.connection.name);
});

//// GET - ADD personaje /////
/*app.get("/api/personajes", async (req, res) => {
    try {
        const personajes = await Personaje.find();
        res.status(200).json(personajes);
    } catch (error) {
        res.status(500).json({ message: "Error obteniendo pokemons" });
    }
}); */


//// POST - ADD personaje /////
app.post("/api/personajes", async (req, res) => {
  try {
    const newPersonaje = await Personaje.create(req.body);
    console.log("Personaje guardado:", newPersonaje);
    res.status(201).json(newPokemon);
  } catch (err) {
    res.status(400).json({ 
      message: "Error creando personaje",
      error: err
    });
  }
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);