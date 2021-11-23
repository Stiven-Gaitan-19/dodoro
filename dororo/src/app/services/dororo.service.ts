import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/model/character.model';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { FileService } from 'src/app/services/file.service';

@Injectable({
  providedIn: 'root'
})
export class DororoService {

  private URI: string = environment.serverHost + '/api/characters';

  constructor(private http: HttpClient, private fileService: FileService) { }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.URI}/${id}`).pipe(map((character)=>{
      this.fileService.getFile(character.imageUrl).subscribe(res => {
        let reader = new FileReader();
        reader.addEventListener('load', () => {
          return character.image = reader.result;
        }, false);
        if (res) {
          reader.readAsDataURL(res);
        }
      })
      return character;
    }));;
  }
}
