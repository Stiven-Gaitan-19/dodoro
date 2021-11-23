export class Place{

    id: number | null;
    name: string;
    imageUrl: string;
    image: any;

    constructor(id?: number, name?: string, imageUrl?: string){
        this.id = id || null;
        this.name = name || '';
        this.imageUrl = imageUrl || '';
    }
}