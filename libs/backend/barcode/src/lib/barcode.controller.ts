import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { BarcodeService } from "./barcode.service";
import { CreateBarcodeDto } from "./dto/create-barcode.dto";

@Controller('barcode')
export class BarcodeController {
    constructor(private barcodeService: BarcodeService){}
    @Post()
     createBarcode(@Body() barcodeDto: CreateBarcodeDto) {
        return  this.barcodeService.createBarcode(barcodeDto)
    }

    @Get()
    getBarcode() {
        return 'barcode shit works'
    }

    @Get('all/:userId')
    getBarcodesForUser(@Param('userId') userId) {
        return this.barcodeService.getBarcodesForTheUser(userId);
    }

    
}