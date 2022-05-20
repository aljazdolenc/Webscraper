import { CardDeals } from "./card-deals.interface";

export class WatchlistTemplate{
    constructor(
        public name:string,
        public minPrice:number,
        public maxPrice:number,
        public location:string,
        public offerType:string,
    ){}
}

export class WatchlistGroup{
    constructor(
        public searchParams: WatchlistTemplate,
        public itemsArray: CardDeals[]
    ){}
}