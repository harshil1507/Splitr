import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Prisma } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(
    @Query()
    query: {
      skip?: number;
      take?: number;
      cursor?: string;
      isActive?: boolean;
    },
  ) {
    return this.usersService.getAll(query);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(id);
  }

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput) {
    return await this.usersService.createUser(data);
  }
}
