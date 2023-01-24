import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateOrgDto } from "./dto/create-org.dto";
import { Org, OrgDocument } from "./model/organisation.schema";




@Injectable()
export class OrgService { 

    constructor(@InjectModel(Org.name) private orgModel: Model<OrgDocument>){}

    async createOrg(org: CreateOrgDto)  {
        return await this.orgModel.create(org);
    }

    
}