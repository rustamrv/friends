import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(
    @Body() createUser: { email: string; name: string },
  ): Promise<any> {
    return await this.usersService.create(createUser.email, createUser.name);
  }

  @Get()
  async getAll() {
    return await this.usersService.getAll();
  }

  @Post(':id/comment')
  async addComment(
    @Param('id') id: string,
    @Body() createComment: { text: string },
  ) {
    return await this.usersService.addComment(id, createComment.text);
  }
}
