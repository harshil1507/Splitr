import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getAll({
    skip = 0,
    take = 10,
    cursor,
    isActive = true,
  }: {
    skip?: number;
    take?: number;
    cursor?: string;
    isActive?: boolean;
  }): Promise<User[]> {
    const res = await this.prisma.user.findMany({
      where: { isActive },
      skip,
      take,
      ...(cursor && { cursor: { id: cursor } }),
    });
    return res;
  }

  async getUserById(id: string): Promise<User | null> {
    const res = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    return res;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    const res = await this.prisma.user.create({
      data,
    });
    return res;
  }
}
