import { Component, OnInit } from '@angular/core';
import { Artefact } from 'src/app/model/arterfac.model';
import { ArtefactService } from 'src/app/services/artefact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dororo-bag',
  templateUrl: './dororo-bag.component.html',
  styleUrls: ['./dororo-bag.component.css']
})
export class DororoBagComponent implements OnInit {

  arterfacts:Artefact[]=[];
  newArtefacts:Artefact[]=[];

  constructor(private service: ArtefactService) { }

  ngOnInit(): void {
    this.loadArtefacts();
  }

  loadArtefacts(){
    this.service.getArtefacts().subscribe((artefacts)=>{
      this.arterfacts = artefacts;
    })
  }

  addArtefact(){
    this.newArtefacts.unshift(new Artefact());
  }

  removeArtefact(){
    this.removeNewArtefacts();
    this.removeExistsArtefacts();
  }

  save(){
    this.service.create(this.newArtefacts).subscribe(()=>{
      this.newArtefacts = [];
      this.loadArtefacts();
    });
  }

  removeExistsArtefacts(){
    if(this.arterfacts.some(art=>art.remove)){
      let itemsSelcted = this.arterfacts.filter(art=>art.remove);
      let ids:number[] = [];

      itemsSelcted.forEach(item=>{
        if(item.id){
          ids.push(item.id);
        }
      })

      Swal.fire({
        title: 'Delete?..',
        text: `Are you sure you want to remove ${ids.length} Artefacts?`,
        icon: 'warning',
        showCancelButton: true,
        cancelButtonColor: '#DC3545',
        confirmButtonColor: '#0D6EFD'
      }).then(result=>{
        if(result.isConfirmed){
          
          this.service.delete(ids).subscribe(()=>{
            this.arterfacts = this.arterfacts.filter(item => !item.remove);
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Artefacts have been Deleted',
              showConfirmButton: false,
              timer: 1300
            });
            
          });
        }
      });
    }
  }

  removeNewArtefacts(){
    this.newArtefacts = this.newArtefacts.filter(art=>!art.remove);
  }

}
