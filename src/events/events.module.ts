import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { EventSchema, Event } from './schemas/event.schema';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [MongooseModule.forFeature([{name: Event.name, schema: EventSchema}])]
})
export class EventsModule {}
