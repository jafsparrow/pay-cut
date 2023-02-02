import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";



export type RewardDocument = HydratedDocument<Reward>;

@Schema({timestamps: true})
export class Reward {
    @Prop({ enum: ['Redeem', 'Reward'], required: true})
    type: string;

    @Prop({default: 0})
    amount?: number;

    @Prop({required: true})
    userId: string;

    @Prop({default: 0})
    points?: number;

    @Prop({default: ''})
    note?: string

    @Prop({default: ''})
    currentHistory?: string;
}

export const RewardSchma = SchemaFactory.createForClass(Reward)