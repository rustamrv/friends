import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CommentDocument } from './comment.model';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel('comments')
    private readonly commentsModel: Model<CommentDocument>,
  ) {}

  async create(text: string) {
    return await this.commentsModel.create({
      text: text,
    });
  }
}
