import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { EventsModule } from './events/events.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, EventsModule, MongooseModule.forRoot('mongodb+srv://admin:123456@cluster0.qpl25.mongodb.net/nestjs-course?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
