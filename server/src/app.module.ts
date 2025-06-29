import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ExpenseService } from './expense/expense.service';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseController } from './expense/expense.controller';
@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PrismaModule, ExpenseModule],
  controllers: [AppController, ExpenseController],
  providers: [AppService, PrismaService, ExpenseService],
})
export class AppModule {}
