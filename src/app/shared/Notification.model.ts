import { CardDeals } from "./card-deals.interface";

export class Notification{
    constructor(
        public time:string,
        public item:CardDeals
    ){}
}