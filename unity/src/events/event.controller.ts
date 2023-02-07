import { Controller, Get } from '@nestjs/common';
import { EventService } from './events.service';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getEvents(): string[]{
    return this.eventService.findAll();
  }
  
  @Get(':id')
  getEvent(id: string): string {
    return this.eventService.findOne(id);
  }
}