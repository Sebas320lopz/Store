import { Component, EventEmitter, Input, Output, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-img',
  imports: [CommonModule],
  templateUrl: './img.html',
  styleUrl: './img.scss'
})
export class Img implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  image: string = '';
  @Input() 
  set imgUrl(newUrl: string) {
    this.image = newUrl;
    console.log('Set imgUrl Hijo:', this.image);
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = 'https://cdn-icons-png.flaticon.com/512/5220/5220262.png';


  constructor() {
    console.log('Constructor Hijo');
  }

  ngOnInit() {
    console.log('OnInit Hijo, imgUrl:', this.image);
  }

  ngOnChanges() {

    console.log('OnChanges Hijo, imgUrl:', this.image);
  }

  ngAfterViewInit() {
    console.log('AfterViewInit Hijo');
  }

  ngOnDestroy() {
    console.log('OnDestroy Hijo');
  }


  ImgError() {
    this.imageDefault;
  }

  ImgLoad() {
    console.log('Log Hijo');
    this.loaded.emit(this.image);
  }
}
