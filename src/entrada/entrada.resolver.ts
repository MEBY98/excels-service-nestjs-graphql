import { Resolver, Query, Root, ResolveField, Mutation, Args } from '@nestjs/graphql';
import { EntradaService } from './entrada.service';
import { entradasDto } from './dto/entrada/entradas.dto';
// import { PlantillaDto } from './dto/plantilla/plantilla.dto';
import { nuevaEntradaDto } from './dto/entrada/nuevaEntrada.dto';
import { ExcelAnalizadoDto } from './dto/excel/excelAnalizado.dto';

@Resolver('Entrada')
export class EntradaResolver {

    constructor (
        private readonly EntradaService: EntradaService
    ) {}

    @Query(returns => [entradasDto])
    async entradas () {
        return await this.EntradaService.entradas();
    }

    @Query(returns => ExcelAnalizadoDto)
    async datosDeFuenteRegistrada( @Args('idDeExcel') idDeExcel: String) {
        return await this.EntradaService.crearExcel('fraseologia en diccionarios_siglo XIX');
    } 

    @Mutation(() => entradasDto)
    async crearEntrada (@Args('nuevaEntrada') nuevaEntrada: nuevaEntradaDto) {
        return await this.EntradaService.creaEntrada(nuevaEntrada);
    }

}
