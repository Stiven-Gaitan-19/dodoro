import { Power } from './power.model';
import { Artefact } from './arterfac.model';

export class Character {

    name: string;
    imageUrl: string;
    gender: string;
    powers: Power[];
    artefacts: Artefact[];
    image: any;

    constructor(name?: string, imageUrl?: string, gender?: string, powers?: Power[], artefacts?: Artefact[]) {
        this.name = name || '';
        this.imageUrl = imageUrl || '';
        this.gender = gender || '';
        this.powers = powers || [];
        this.artefacts = artefacts || [];
    }
}
