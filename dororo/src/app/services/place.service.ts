import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place } from '../model/Place.model';
import { map } from 'rxjs/operators';
import { FileService } from './file.service';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private URI = environment.serverHost + '/api/places';

  constructor(private http: HttpClient, private fileService: FileService) { }

  getPlaces():Observable<Place[]>{
    return this.http.get<Place[]>(this.URI).pipe(map(places=>{
      places.map(place => {
        this.fileService.getFile(place.imageUrl).subscribe(res=>{
          let reader = new FileReader();
          reader.addEventListener('load', ()=>{
            return place.image = reader.result;
          }, false);
          if (res) {
            reader.readAsDataURL(res);
          }
        })   
      })
      return places;
    }))
  }

  create(data: Place):Observable<Place>{
    return this.http.post<Place>(this.URI, data);
  }

  update(data:Place){
    return this.http.put(`${this.URI}/${data.id}`, data);
  }

  delete(id:number | null){
    return this.http.delete(`${this.URI}/${id}`);
  }

  getById(id:number | null):Observable<Place>{
    return this.http.get<Place>(`${this.URI}/${id}`);
  }
}
