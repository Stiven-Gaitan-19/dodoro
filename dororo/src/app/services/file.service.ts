import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private URI = environment.serverHost + '/api/files';

  constructor(private http: HttpClient) { }

  uploadFile(file:FormData):Observable<any>{
    return this.http.post(this.URI, file);
  }

  updateFile(file:FormData, fileName: string):Observable<any>{
    return this.http.put(`${this.URI}/${fileName}`, file);
  }

  getFile(fileName:string):Observable<Blob>{
    return this.http.get(`${this.URI}/${fileName}`, {responseType: 'blob'});
  }
}
