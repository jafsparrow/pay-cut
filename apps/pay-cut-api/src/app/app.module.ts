import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { BackendOrganisationModule } from '@pay-cut/backend/organisation'
import { BackendUserModule } from '@pay-cut/backend/user'
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), MongooseModule.forRoot('mongodb+srv://tableqr:Temp1234@cluster0.y7xyc.mongodb.net/paycut?retryWrites=true&w=majority'),
  BackendOrganisationModule,
  BackendUserModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
