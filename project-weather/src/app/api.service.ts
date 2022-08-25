import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  path:string="";
longitude:number=-58.381557;
latitude:number=-34.603683;
  constructor(private http:HttpClient) { }
  getInfo(){
    this.getPath(this.longitude,this.latitude);
    return this.http.get<any>(this.path);
  }
  getPath(long:any,lat:any){
this.path=`https://www.7timer.info/bin/civillight.php?lon=${long}&lat=${lat}&ac=0&unit=metric&output=json`
  }
}
