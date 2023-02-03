import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrgDocument = HydratedDocument<Org>;

@Schema({ timestamps: true })
export class Org {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: '' })
  address: string;
}

export const OrgSchema = SchemaFactory.createForClass(Org);
