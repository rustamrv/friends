import { Injectable } from '@nestjs/common';
import { UserDocument } from './user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CommentsService } from 'src/comments/comments.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('user')
    private readonly userModel: Model<UserDocument>,
    private readonly commentService: CommentsService,
  ) {}

  async create(email: string, name: string) {
    return await this.userModel.create({
      email: email,
      name: name,
    });
  }

  async getAll() {
    return await this.userModel.find();
  }

  async addComment(id: string, text: string) {
    const comment = await this.commentService.create(text);
    return await this.userModel.findOneAndUpdate({
        _id: id
    }, {
      $addToSet: { 'comments': comment },
    }, {multi: true});
  }
}
