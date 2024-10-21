import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  @ViewChild('coomentBox')
  coomentBox:ElementRef | any
  
  @ViewChild('commentsEmojis')
  commentsEmojis:ElementRef | any
  inputHeight(){
   
    this.coomentBox.nativeElement.style.height="76px"
        this.commentsEmojis.nativeElement.style.display="block"
  }
  ngOnInit(): void {
  }

}
