import { formatDate } from '@angular/common'
import { Demon } from './demon.model';

export class Fight{

    id: number;
    foughtOn: string;
    defeated: boolean;
    demon: Demon;

    constructor(id?: number, foughtOn?: string, defeated?: boolean, demon?: Demon){
        this.id = id || 0;
        this.foughtOn = foughtOn || '';
        this.defeated = defeated || false;
        this.demon = demon || new Demon();
    }

    setFoughtOn(date: Date){
        let dateFormated = formatDate(date, 'yyyy MMM d hh:mm:ss aaa', 'en-US');
        this.foughtOn = dateFormated;
    }
}