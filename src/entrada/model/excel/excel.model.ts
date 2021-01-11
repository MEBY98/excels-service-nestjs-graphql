import * as mongoose from 'mongoose';

export const ExcelSchema = new mongoose.Schema({
    nombre: {type: String, required: true, unique: true},
    hojas: {type: [{
        numero: Number,
        nombre: String,
        cantCol: Number,
        cantFilas: Number,
        imagenes: {
            posicion: [ { celda: String } ],
            buffer: Buffer
        },
        primeraFila: {
            fila: [ {celda: String} ]
        },
        cargada: Boolean
    }] },
});


export interface Excel extends mongoose.Document {
    id: string;
    nombre: String;
    hojas: [{
        numero: Number,
        nombre: String,
        cantCol: Number,
        cantFilas: Number,
        imagenes: {
            posicion: [ { celda: String } ],
            buffer: Buffer
        },
        primeraFila: {
            type: [ {celda: String} ]
        },
        cargada: Boolean
    }] 
}