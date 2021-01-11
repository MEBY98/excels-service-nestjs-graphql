import { ObjectType, Field, InputType } from "@nestjs/graphql";

@ObjectType()
export class ElementoEntrada {
    @Field()
    nombre: String;

    @Field()
    descripcion: String;
}