import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Comment, commentSchema } from 'src/comments/comment.model';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;

  @Prop()
  name: string;

  @Prop({ type: [commentSchema] })
  comments: [Comment];
}

export const userSchema = SchemaFactory.createForClass(User);
