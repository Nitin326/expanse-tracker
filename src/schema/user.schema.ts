import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { now, Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    fname: string;

    @Prop()
    lname: string;

    @Prop({unique:true})
    phone: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ default: now() })
    createdAt: Date;

    @Prop({ default: now() })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);