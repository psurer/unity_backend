import { Injectable } from "@nestjs/common";

@Injectable()
export class EventService {
    findAll(): string[] {
        return ['Event 1', 'Event 2'];
      }
    
    findOne(id: string) : string{
        return 'Event 1';
    }
}