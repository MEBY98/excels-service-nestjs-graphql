// import { PlantillaDto } from "../plantilla/plantilla.dto";
import { ObjectType, Field } from "@nestjs/graphql";
import { ElementoEntrada } from "../../model/entrada/elemento.entrada.model" 

@ObjectType()
export class entradasDto {    
    @Field()
    id: String;

    @Field()
    nombre: String;

    @Field()
    plantilla: String;

    @Field(type => [ElementoEntrada])
    elementosE: ElementoEntrada[]    
}