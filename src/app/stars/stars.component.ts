import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StarsComponent implements OnInit, OnChanges {
  
  @Input()
  private rating:number = 0;

  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();//必须写成ratingChange才能直接用[()]进行双向绑定

  private stars: boolean[]; 

  @Input()
  private readonly:boolean = true;

  constructor() { }

  ngOnInit() {
    
  }

  ngOnChanges(changes: SimpleChanges){
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index:number){
    if(!this.readonly){
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
