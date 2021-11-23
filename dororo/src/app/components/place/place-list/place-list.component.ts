import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Place } from 'src/app/model/Place.model';
import { PlaceService } from 'src/app/services/place.service';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places:Place[]=[];

  constructor(private service: PlaceService, private route:Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getPlaces().subscribe(places=>{
      this.places = places;
    })
  }

  back(){
    this.route.navigate(['/'])
  }

  create(){
    this.route.navigate(['places/modify/','new'])
  }

  delete(id:number | null, name:string){
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
            title: 'Place has been Deleted',
            showConfirmButton: false,
            timer: 1300
          });
          this.getData();
        });
      }
    });
  }

  update(id:number | null){
    this.route.navigate(['places/modify/',id])
  }
}
