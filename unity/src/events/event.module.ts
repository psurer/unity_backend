import { Module } from "@nestjs/common";
import { EventController } from "./event.controller";
import { EventService } from "./events.service";

@Module({
    controllers: [EventController],
    providers:[EventService]
})
export class EventModule {

}