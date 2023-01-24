import { Prop, Schema } from "@nestjs/mongoose";



@Schema()
export class User {
    @Prop()
    firstName: string

    @Prop()
    lastName: string;

    @
}