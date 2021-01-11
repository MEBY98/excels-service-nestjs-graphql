import { InputType, Field } from "@nestjs/graphql";
import { ElementoEntrada } from "../../model/entrada/elemento.entrada.model" 
import { ElementoEntradaNuevaEntradaDto } from "./elemento.entra.nuevaEntrada.dto";

@InputType()
export class nuevaEntradaDto {
    @Field()
    nombre:String;

    @Field()
    plantilla:String;

    @Field(type => [ElementoEntradaNuevaEntradaDto])
    elementosE: ElementoEntradaNuevaEntradaDto[]
}