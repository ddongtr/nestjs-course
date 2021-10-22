import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [EventsModule, MongooseModule.forRoot('mongodb+srv://dun:1234Qwer@cluster0.qpl25.mongodb.net/nestjs-course?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
