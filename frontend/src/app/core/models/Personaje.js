import mongoose, { model } from "mongoose";

const personajeSchema = new mongoose.Schema({
    
    nombre: { type: String, required: true },
    tipo:  { type: String, required: true },
    nivel:  { type: Number, required: true }
})

export default mongoose.model('Personajes', personajeSchema);
