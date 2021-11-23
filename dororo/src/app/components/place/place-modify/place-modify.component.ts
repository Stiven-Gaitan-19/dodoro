import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Place } from 'src/app/model/Place.model';
import { FileService } from 'src/app/services/file.service';
import { PlaceService } from 'src/app/services/place.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-place-modify',
  templateUrl: './place-modify.component.html',
  styleUrls: ['./place-modify.component.css']
})
export class PlaceModifyComponent implements OnInit {

  isUpdate: boolean = false;
  place: Place = new Place();
  selectedFile!: File;
  image: any;

  constructor(private activeRoute: ActivatedRoute, private placeService: PlaceService, private fileService: FileService, private route: Router) { }

  ngOnInit(): void {
    let parameter = this.activeRoute.snapshot.paramMap.get('id');
    if (parameter && parameter !== 'new') {
      this.isUpdate = true;
      this.placeService.getById(parseInt(parameter)).subscribe(place => {
        this.place = place;
      });
    }
  }

  onFileAdded(event: any) {
    this.selectedFile = event.target.files[0];
  }

  create() {
    const uploadFile = new FormData();
    uploadFile.append('file', this.selectedFile, this.selectedFile.name)

    this.fileService.uploadFile(uploadFile).subscribe(res => {
      this.place.imageUrl = res.message;
      this.placeService.create(this.place).subscribe(() => {
        this.showConfirmDialog();
        this.back();
      });
    });
  }

  update() {
    if (!this.selectedFile) {
      this.placeService.update(this.place).subscribe(() => {
        this.showConfirmDialog();
        this.back();
      });
      return;
    }

    const uploadFile = new FormData();
    uploadFile.append('file', this.selectedFile, this.selectedFile.name)
    this.fileService.updateFile(uploadFile, this.place.imageUrl).subscribe(res => {
      this.place.imageUrl = res.message;
      this.placeService.update(this.place).subscribe(() => {
        this.showConfirmDialog();
        this.back();
      });
    });
  }

  back() {
    this.route.navigate(['places'])
  }

  private showConfirmDialog() {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'Place has been saved',
      showConfirmButton: false,
      timer: 1300
    });
  }

}
