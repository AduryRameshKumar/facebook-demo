import { AfterViewInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @ContentChild("temp")
  temp!:TemplateRef<any>
  constructor() { 
  
  }


  ngOnInit(): void {
  }
}
