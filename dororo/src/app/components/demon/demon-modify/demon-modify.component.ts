import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Demon } from 'src/app/model/demon.model';
import { Place } from 'src/app/model/Place.model';
import { DemonService } from 'src/app/services/demon.service';
import { FileService } from 'src/app/services/file.service';
import { PlaceService } from 'src/app/services/place.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demon-modify',
  templateUrl: './demon-modify.component.html',
  styleUrls: ['./demon-modify.component.css']
})
export class DemonModifyComponent implements OnInit {

  places: Place[] = [];
  isUpdate: boolean = false;
  demon = new Demon();
  selectedFile!: File;

  constructor(private activeRoute: ActivatedRoute, private placeService: PlaceService, private service: DemonService, private route: Router, private fileService: FileService) { }

  ngOnInit(): void {
    let parameter = this.activeRoute.snapshot.paramMap.get('id');
    if (parameter && parameter !== 'new') {
      this.isUpdate = true;
      this.service.getDemonById(parseInt(parameter)).subscribe((demon) => {
        this.demon = demon;
      })
    }

    this.placeService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  create() {
    const uploadFile = new FormData();
    uploadFile.append('file', this.selectedFile, this.selectedFile.name)

    this.fileService.uploadFile(uploadFile).subscribe(res => {
      this.demon.imageUrl = res.message;

      this.findPlaceSelected();

      this.service.create(this.demon).subscribe(() => {
        this.showConfirmDialog();
        this.back();
      });
    });
  }

  onFileAdded(event: any) {
    this.selectedFile = event.target.files[0];
  }

  update() {
    this.findPlaceSelected();

    if (!this.selectedFile) {
      this.service.update(this.demon).subscribe(() => {
        this.showConfirmDialog();
        this.back();
      });
      return;
    }

    const uploadFile = new FormData();
    uploadFile.append('file', this.selectedFile, this.selectedFile.name)
    this.fileService.updateFile(uploadFile, this.demon.imageUrl).subscribe(res => {
      this.demon.imageUrl = res.message;
      this.service.update(this.demon).subscribe(() => {
        this.showConfirmDialog();
        this.back();
      });
    });
  }

  private findPlaceSelected() {
    let placeSelected = this.places.find(place => place.id == this.demon.place.id);

    if (placeSelected) {
      this.demon.place = placeSelected;
    }
  }

  back() {
    this.route.navigate(['demons'])
  }

  private showConfirmDialog() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Demon has been saved',
      showConfirmButton: false,
      timer: 1300
    });
  }

}
