import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";


export type BarcodeDocument = HydratedDocument<Barcode>;


@Schema({timestamps: true})
export class Barcode {
    @Prop({unique: true})
    code: string;

    @Prop({default: true})
    isActive: boolean;

    @Prop()
    assignedUserId: string;
}

export const BarcodeSchema = SchemaFactory.createForClass(Barcode)