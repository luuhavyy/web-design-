import { HttpClient, HttpEvent, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadgroupService {
  private apiUrl = 'http://localhost:3001'; 

  constructor(private http: HttpClient) {}

  // Upload hình ảnh theo nhóm
  uploadImage(file: File, group: string): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('group', group);

    return this.http.post(`${this.apiUrl}/upload`, formData, { reportProgress: true, observe: 'events' });
  }

  // Lấy danh sách ảnh theo nhóm
  getImages(group: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/upload/images`, {
      params: new HttpParams().set('group', group)
    });
  }
}
