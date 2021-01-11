import * as mongoose from 'mongoose';
// import { ElementoEntradaSchema } from './elemento.entrada.model';
// import { PlantillaDto } from 'src/entrada/dto/plantilla/plantilla.dto';


export const EntradaSchema = new mongoose.Schema({
    nombre: {type: String, required: true, unique: true},
    plantilla: {type: String, required: true },
    elementos: {type: [{nombre: String, descripcion: String}] , required: true },
});

// export const Entrada = mongoose.model('Entrada', EntradaSchema);

export interface Entrada extends mongoose.Document {
    id: string;
    nombre:string;
    plantilla: String;
    elementos: [{nombre: String, descripcion: String}];
}