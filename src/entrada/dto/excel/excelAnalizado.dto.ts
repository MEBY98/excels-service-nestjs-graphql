import { ObjectType, Field } from "@nestjs/graphql";
import { LetraExcel } from "./letraExcel.dto"

@ObjectType()
export class ExcelAnalizadoDto {    
    @Field()
    id: String;

    @Field()
    nombre: String;

    @Field()
    cantPags: Number

    @Field(type => [LetraExcel])
    letras: LetraExcel[]    
}