import { Component, OnInit } from '@angular/core';
import { Flash } from '../flash'
@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {
  flashs:Flash[]=[
    new Flash(1, 'splice','lets you change the content of an array by removing or replacing existing element with new words '),
    new Flash(2, 'module','it refers to a place where you can group the components,directives,pipes and services which are related to the application '),
    new Flash(3, 'controller','is a javascript function that maintains application data and behaviour using $scope object')
    // {id:1, title:'Splice',explanation}
    // {id:2, title:'Module'}
    // {id:3, title:'Controller'}
  ]
  toggleDetails(index){
    this.flashs[index].showExplanation = !this.flashs[index].showExplanation ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
