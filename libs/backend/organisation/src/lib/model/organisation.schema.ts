import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type OrgDocument = HydratedDocument<Org>;

@Schema({timestamps: true})
export class Org {
    @Prop()
    name: string;
  
    @Prop()
    email: string;

    @Prop()
    phone: string
  
    @Prop()
    address: string;
  }
  
  export const OrgSchema = SchemaFactory.createForClass(Org);