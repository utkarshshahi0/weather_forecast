import { Component } from '@angular/core';
import { UtilityService } from '../utility.service';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private utility:UtilityService) {}
  ngOnInit(){
    this.utility.data.subscribe(data=>{
      console.log(data)
    })
  }
}
