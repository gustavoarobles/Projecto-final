import { Component } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any []=[];
  
  constructor(private apiService:ApiService) {}
  ngOnInit(){
    this.apiService.getPhoto().subscribe(photos=>{this.data=photos;})
  }

}
