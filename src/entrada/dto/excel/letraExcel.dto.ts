import { ObjectType, Field } from "@nestjs/graphql";


@ObjectType()
export class LetraExcel {
    @Field()
    letra: String

    @Field(type => [Number])
    pags: Number[]
}