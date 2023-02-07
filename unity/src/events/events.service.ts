import { Injectable } from "@nestjs/common";
import { EventModel } from "./event.model";

@Injectable()
export class EventService {
    private  events : EventModel[] = [
        {
          id: '1',
          name: 'Test Event 1',
          subtitle: 'test subtitle 1',
          date: new Date('11.01.2023').toString(),
          description: 'Volunteer at the soup kitchen',
          imagePath: '../../../assets/soup.png',
        },
        {
          id: '2',
          name: 'Test Event 2',
          subtitle: 'test subtitle 2',
          date:  new Date('11.01.2023,').toString(),
          description: 'Cooking at the soup kitchen',
          imagePath: '../../../assets/cooking.png',
        },
        {
          id: '3',
          name: 'Test Event 3',
          subtitle: 'test subtitle 3',
          date:  new Date('11.01.2023').toString(),
          description: 'Handing out food at the kitchen',
          imagePath: '../../../assets/serving-food-line.png'
        }
      ];

    findAll(): EventModel[] {
        return this.events;
      }
    
}