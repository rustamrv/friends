import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.model';
import { CommentsModule } from 'src/comments/comments.module';
import { CommentsService } from 'src/comments/comments.service';
import { commentSchema } from 'src/comments/comment.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'user', schema: userSchema },
      { name: 'comments', schema: commentSchema }
    ]), 
  ],
  providers: [UsersService, CommentsService],
  controllers: [UsersController],
})
export class UsersModule {}
