import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demon } from 'src/app/model/demon.model';
import { environment } from 'src/environments/environment';
import { FileService } from './file.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemonService {

  private URI = environment.serverHost + '/api/demons';

  constructor(private http: HttpClient, private fileService: FileService) { }

  getDemons(): Observable<Demon[]> {
    return this.http.get<Demon[]>(this.URI).pipe(map(demons=>{
      demons.map(demon => {
        return this.setImageToDemon(demon);
      });
      return demons;
    }));
  }

  getDemonsByPlace(placeId: number | null): Observable<Demon[]> {
    return this.http.get<Demon[]>(`${this.URI}/place/${placeId}`).pipe(map(demons=>{
      console.log(demons);
      
      demons.map(demon => {
        return this.setImageToDemon(demon);
      });
      return demons;
    }));
  }

  create(data: Demon): Observable<Demon> {
    return this.http.post<Demon>(this.URI, data);
  }

  getDemonsDefeated(): Observable<Demon[]> {
    return this.http.get<Demon[]>(`${this.URI}/defeated`).pipe(map(demons=>{
      demons.map(demon => {
        return this.setImageToDemon(demon);
      });
      return demons;
    }));
  }

  getDemonById(id: number | null): Observable<Demon> {
    return this.http.get<Demon>(`${this.URI}/${id}`).pipe(map((demon:Demon)=>{
      this.fileService.getFile(demon.imageUrl).subscribe(res => {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
          return demon.image = reader.result;
        }, false);
        if (res) {
          reader.readAsDataURL(res);
        }
      })
      return demon;
    }));
  }

  update(demon: Demon): Observable<Demon> {
    return this.http.put<Demon>(`${this.URI}/${demon.id}`, demon);
  }

  delete(id: number | null) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  private setImageToDemon(demon:Demon) {
    this.fileService.getFile(demon.imageUrl).subscribe(res => {
      let reader = new FileReader();
      reader.addEventListener('load', () => {
        return demon.image = reader.result;
      }, false);
      if (res) {
        reader.readAsDataURL(res);
      }
    })
  }
}
