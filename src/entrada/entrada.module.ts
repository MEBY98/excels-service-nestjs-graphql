import { Module } from '@nestjs/common';
import { EntradaService } from './entrada.service';
import { EntradaResolver } from './entrada.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { EntradaSchema } from './model/entrada/entrada.model';
import { ExcelSchema } from './model/excel/excel.model'


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Entrada', schema: EntradaSchema},
                                {name: 'Excel', schema: ExcelSchema}])],
  providers: [EntradaService, EntradaResolver]
})
export class EntradaModule {}
