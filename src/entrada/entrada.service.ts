import { Injectable } from '@nestjs/common';
import { Entrada } from './model/entrada/entrada.model';
import { Excel } from './model/excel/excel.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nuevaEntradaDto } from './dto/entrada/nuevaEntrada.dto';
import * as exceljs from 'exceljs'
import * as fs from 'fs'



@Injectable()
export class EntradaService {    

    constructor (
        @InjectModel( 'Entrada' )
        private readonly EntradaModel: Model<Entrada>,

        @InjectModel( 'Excel' )
        private readonly ExcelModel: Model<Excel>
    ){}

    async entradas() {
        const entradas = await this.EntradaModel.find().exec() 
        console.log(entradas);  
        return entradas.map(entrada => ({
            id: entrada.id,
            nombre: entrada.nombre,
            plantilla: entrada.plantilla,
            elementosE: entrada.elementos,
        }));
    }

    async creaEntrada(nuevaEntrada: nuevaEntradaDto) {
        const entrada = new this.EntradaModel({
            nombre: nuevaEntrada.nombre,
            plantilla: nuevaEntrada.plantilla,
            elementos: nuevaEntrada.elementosE
          });
        
        return await entrada.save();
    }

    //###########################ExcelService######################################################
    async crearExcel( nombre:String ) {
        const workBook = await new exceljs.Workbook().xlsx.readFile('E:/Escuela/PW/NestJS/nestjs-task-management/excels/'+nombre+'.xlsx');
        const excel = new this.ExcelModel()
        let i = 1;
        // while(i < workBook.worksheets.length){
            const ht = workBook.worksheets[i];
            const filas = ht.rowCount
            const cols = ht.columnCount
            const htNombre = ht.name
            const numero = i
            const htPlantilla = ht.getRow(0);
            const htImagenes = []
            let j = 11
            const buffer64: any = workBook.getImage(235).buffer
            fs.writeFile('test.png',buffer64, function(){})
            // while( j < ht.getImages().length ){
                const img = ht.getImages();
                console.log(img[j]);
                
            // }

        // }
        // const ws1 =  workBook.getWorksheet('B')
        // const imgs = ws1.getImages()
        // const img1 = imgs[0];
        // const buffer64: any = workBook.getImage(218).buffer
        // var buffer2 = new Buffer(buffer, 'binary')
        // console.log("BUFFER:" + buffer)
        // fs.writeFile('test.jpg', buffer, function(err,written){
        // if(err) console.log(err);
        //     else {
        //     console.log("Successfully written");
        //     }
        // });
        // fs.writeFile('test.png',buffer64, function(){})
        // console.log(workBook.getImage(246).buffer);
        // console.log(workBook.getImage(246).filename);
    }
}
