import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demon } from 'src/app/model/demon.model';
import { DemonService } from 'src/app/services/demon.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-demon-list',
  templateUrl: './demon-list.component.html',
  styleUrls: ['./demon-list.component.css']
})
export class DemonListComponent implements OnInit {

  demons:Demon[]=[];
  constructor(private service:DemonService, private route: Router) { }

  ngOnInit(): void {
    this.getDemons();
  }

  getDemons(){
    this.service.getDemons().subscribe(demons=>{
      this.demons = demons;
    });
  }

  back(){
    this.route.navigate(['/'])
  }

  create(){
    this.route.navigate(['demons/modify/','new'])
  }

  update(id:number | null){
    this.route.navigate(['demons/modify/',id])
  }

  delete(id: number | null, name: string){
    Swal.fire({
      title: 'Delete?..',
      text: `Are you sure you want to remove ${name}?`,
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#DC3545',
      confirmButtonColor: '#0D6EFD'
    }).then(result=>{
      if(result.isConfirmed){
        this.service.delete(id).subscribe(()=>{
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Demon has been Deleted',
            showConfirmButton: false,
            timer: 1300
          });
          this.getDemons();
        });
      }
    });
  }

}
