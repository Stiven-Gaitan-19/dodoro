export class Artefact {

    id!: number;
    name: string;
    origin: string;
    remove:boolean = false;

    constructor( name?: string, origin?: string) {
        this.name = name || '';
        this.origin = origin || '';
    }
}