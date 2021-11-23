import { BodyPart } from './body-part.model';
import { Place } from './Place.model';

export class Demon {

    id: number | null;
    name: string;
    defeat: boolean;
    defeatedOn: string | null;
    imageUrl: string;
    bodyPart: BodyPart;
    place: Place;
    image:any;

    constructor(id?: number, name?: string, defeat?: boolean, defeatedOn?: string, imageUrl?: string, bodyPart?: BodyPart, place?: Place){
        this.id = id || null;
        this.name = name || '';
        this.defeat = defeat || false;
        this.defeatedOn = defeatedOn || null;
        this.imageUrl = imageUrl || '';
        this.bodyPart = bodyPart || new BodyPart();
        this.place = place || new Place();
    }

}