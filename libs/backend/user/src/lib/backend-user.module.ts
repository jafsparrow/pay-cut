import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BackendBarcodeModule } from '@pay-cut/backend/barcode'
import { User, UserSchema } from './model/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({imports: [
  MongooseModule.forFeature([
   { name: User.name, schema: UserSchema}
  ]), 
  BackendBarcodeModule
],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class BackendUserModule {}
