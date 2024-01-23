import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  gender: string;

  @Prop({ default: false })
  onboarding: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
