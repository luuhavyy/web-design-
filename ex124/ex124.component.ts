import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { finalize, Subscription } from 'rxjs';

@Component({
  selector: 'app-ex124',
  standalone: false,
  templateUrl: './ex124.component.html',
  styleUrl: './ex124.component.css'
})
export class Ex124Component {
  @Input()
  requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  imageList: { filename: string; url: string }[] = [];
  errMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadImages(); // Load danh sách ảnh khi vào trang
  }

  //  Load danh sách ảnh từ server
  loadImages() {
    this.http.get<{ filename: string; url: string }[]>('/upload/images').subscribe({
      next: (data) => {
        this.imageList = data;
      },
      error: (err) => {
        this.errMessage = err.message;
        console.error('Lỗi khi tải danh sách ảnh:', err);
      }
    });
  }

  //  Upload ảnh
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append('image', file);

      const upload$ = this.http.post('/upload', formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(finalize(() => this.reset()));

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        } else if (event.type === HttpEventType.Response) {
          setTimeout(() => this.loadImages(), 500); // Load ảnh sau khi upload xong
        }
      });
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
}
