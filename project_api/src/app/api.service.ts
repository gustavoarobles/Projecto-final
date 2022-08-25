import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  
})
export class ApiService {
  path:string='https://picsum.photos/v2/list';
  constructor(private http:HttpClient) { }
  getPhoto(){
    return this.http.get<any>(this.path);
  }
}
