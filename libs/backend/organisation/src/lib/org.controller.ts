import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOrgDto } from './dto/create-org.dto';
import { OrgService } from './org.service';

// Most of the organistion related are availble onlly for super admin.

@Controller('org')
export class OrgController {
    constructor(private orgService: OrgService){}


    @Get() 
    getOrg() {
        return 'hello world org'
    }
    @Post()
    createOrg(@Body()org: CreateOrgDto) {
        // this is allowed only for super admin.
        return this.orgService.createOrg(org);
    }
}
