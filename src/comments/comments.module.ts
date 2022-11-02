import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { commentSchema } from './comment.model';
import { CommentsService } from './comments.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'comments', schema: commentSchema }]),
  ],
  providers: [CommentsService],
})
export class CommentsModule {}
