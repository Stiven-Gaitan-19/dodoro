import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artefact } from '../model/arterfac.model';

@Injectable({
  providedIn: 'root'
})
export class ArtefactService {

  private URI = environment.serverHost + '/api/artefacts';

  constructor(private http: HttpClient) { }

  getArtefacts():Observable<Artefact[]>{
    return this.http.get<Artefact[]>(this.URI);
  }

  create(artefacts:Artefact[]){
    return this.http.post(this.URI+'/all', artefacts);
  }

  delete(ids: number[]){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: ids
    };
    return this.http.delete(this.URI+'/all', httpOptions);
  }
}
