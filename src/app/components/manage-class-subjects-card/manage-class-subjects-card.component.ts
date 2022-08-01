import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-class-subjects-card',
  templateUrl: './manage-class-subjects-card.component.html',
  styleUrls: ['./manage-class-subjects-card.component.css'],
})
export class ManageClassSubjectsCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() color: string = '';
  @Input() data: object | any;

  constructor() {}

  ngOnInit(): void {}
}
