import { Component, OnInit } from '@angular/core';
import { UploadgroupService } from '../uploadgroup.service';

@Component({
  selector: 'app-uploadgroup',
  standalone: false,
  templateUrl: './uploadgroup.component.html',
  styleUrl: './uploadgroup.component.css'
})
export class UploadgroupComponent implements OnInit {
  selectedFile: File | null = null;
  selectedGroup: string = '1'; // Mặc định nhóm 1
  imagesGroup1: { filename: string, url: string }[] = [];
  imagesGroup2: { filename: string, url: string }[] = [];
  uploading: boolean = false;
  progress: number = 0;

  constructor(private uploadService: UploadgroupService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  // Chọn file
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  // Upload ảnh
  uploadImage() {
    if (!this.selectedFile) {
      alert("Vui lòng chọn một hình ảnh!");
      return;
    }

    this.uploading = true;
    this.progress = 0;

    this.uploadService.uploadImage(this.selectedFile, this.selectedGroup).subscribe(
      (event) => {
        if (event.type === 1) { // Đang upload (progress)
          this.progress = Math.round((event.loaded / event.total!) * 100);
        } else if (event.type === 4) { // Upload thành công
          alert("Tải lên thành công!");
          this.uploading = false;
          this.selectedFile = null;
          this.progress = 0;
          this.loadImages();
        }
      },
      (error) => {
        alert("Lỗi khi tải lên!");
        this.uploading = false;
      }
    );
  }

  // Load danh sách ảnh
  loadImages() {
    this.uploadService.getImages('1').subscribe(data => this.imagesGroup1 = data);
    this.uploadService.getImages('2').subscribe(data => this.imagesGroup2 = data);
  }
}