import { Controller, Get, } from '@nestjs/common';
import { EventModel } from './event.model';
import { EventService } from './events.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getEvents(): EventModel[]{
    return this.eventService.findAll();
  }
  
}
