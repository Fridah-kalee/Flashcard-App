import { Component, OnInit, Input } from '@angular/core';
import { Flash } from '../flash'
@Component({
  selector: 'app-flash-detail',
  templateUrl: './flash-detail.component.html',
  styleUrls: ['./flash-detail.component.css']
})
export class FlashDetailComponent implements OnInit {
@Input() flash:Flash;

  constructor() { }

  ngOnInit(): void {
  }

}
