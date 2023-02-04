import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BarcodeController } from './barcode.controller';
import { BarcodeService } from './barcode.service';
import { Barcode, BarcodeSchema } from './model/barcode.schema';

@Module({imports: [
  MongooseModule.forFeature([
    { name: Barcode.name, schema: BarcodeSchema}
   ])],
  controllers: [BarcodeController],
  providers: [BarcodeService],
  exports: [BarcodeService],
})
export class BackendBarcodeModule {}
