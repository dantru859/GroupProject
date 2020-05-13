import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-chooser',
  templateUrl: './img-chooser.component.html',
  styleUrls: ['./img-chooser.component.css']
})
export class ImgChooserComponent implements OnInit {
  imgSource: string;
  changeId: string;

  constructor() {
    this.imgSource = '2';
    this.changeId = '';
  }

  ngOnInit(): void {
  }

  onSubmit(e: any){
    e.preventDefault();
    this.imgSource = this.changeId;
  }

  onChangeName(e: any){
    e.preventDefault();
    this.changeId += e.target.value;
  }

}
