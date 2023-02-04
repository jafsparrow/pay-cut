import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBarcodeDto } from './dto/create-barcode.dto';
import { Barcode } from './model/barcode.schema';

@Injectable()
export class BarcodeService {
  constructor(
    @InjectModel(Barcode.name) private barcodeModel: Model<Barcode>
  ) {}
  async createBarcode(barcodeDto: CreateBarcodeDto) {
    return await this.barcodeModel.create(barcodeDto);
  }

  async getUserIdfromBarcode(barcode: string) {
    // check if the barcode is valid. invalid throw error.
    const barcodeDoc = await this.barcodeModel.findOne({code: barcode});
    if(!barcodeDoc.isActive) {
        throw Error('Barcode is not active.')
    }
     return barcodeDoc.assignedUserId;
  }
}
