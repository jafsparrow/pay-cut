import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  phone: string; 

  @Prop({default: {
    is_superAdmin: false,
    is_admin: false,
    is_partner: false,
   }})
  role: Map<string, boolean>;

  @Prop({default: 0})
  rewards: number

  @Prop({required: true})
  org: string;

}


  export const UserSchema = SchemaFactory.createForClass(User);