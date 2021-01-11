import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { mongooseConfig } from './config/mongoose.config'
import { GraphQLModule } from '@nestjs/graphql'
import { EntradaModule } from './entrada/entrada.module';

const connMongoDB = new mongooseConfig

@Module({
  imports: [ 
    MongooseModule.forRoot(connMongoDB.connection), 
    EntradaModule,    
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })
    ],
  controllers: [],
  providers: [],
})
export class AppModule {

}