import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { OrgService } from './org.service';

@Controller('org')
export class OrgController {
    constructor(private orgService: OrgService){}


    @Get() 
    getOrg() {
        return 'hello world org'
    }
    @Post()
    createOrg(@Body()org: CreateOrgDto) {
        return this.orgService.createOrg(org);
    }
}
