import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyPart } from '../model/body-part.model';

@Injectable({
  providedIn: 'root'
})
export class BodyPartService {

  private URI = environment.serverHost + '/api/body-parts';

  constructor(private http: HttpClient) { }

  getBodyParts(): Observable<BodyPart[]> {
    return this.http.get<BodyPart[]>(this.URI);
  }
}
