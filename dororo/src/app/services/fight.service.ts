import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fight } from '../model/fight.model';
import { map } from 'rxjs/operators';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class FightService {

  private URI = environment.serverHost + '/api/fights';

  constructor(private http:HttpClient, private fileService: FileService) { }

  saveFight(fight: Fight): Observable<Fight> {
    return this.http.post<Fight>(this.URI, fight);
  }

  getFights(): Observable<Fight[]> {
    return this.http.get<Fight[]>(this.URI).pipe(map(fights=>{
      fights.map(fight => {
        this.fileService.getFile(fight.demon.imageUrl).subscribe(res=>{
          let reader = new FileReader();
          reader.addEventListener('load', ()=>{
            return fight.demon.image = reader.result;
          }, false);
          if (res) {
            reader.readAsDataURL(res);
          }
        })   
      })
      return fights;
    }));
  }
}
