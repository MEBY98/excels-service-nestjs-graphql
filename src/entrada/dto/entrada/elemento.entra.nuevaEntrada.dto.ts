import { ObjectType, Field, InputType } from "@nestjs/graphql";

@InputType()
export class ElementoEntradaNuevaEntradaDto {
    @Field()
    nombre: String;

    @Field()
    descripcion: String;
}