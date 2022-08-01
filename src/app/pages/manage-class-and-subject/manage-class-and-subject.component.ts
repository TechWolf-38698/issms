import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-class-and-subject',
  templateUrl: './manage-class-and-subject.component.html',
  styleUrls: ['./manage-class-and-subject.component.css'],
})
export class ManageClassAndSubjectComponent implements OnInit {
  title = 'Campus';
  color = 'sc';

  cards = [
    {
      title: 'Campus',
      color: 'sc',
      data: {
        title: 'Name1',
        ul: ['Campuse', 'Karachi', 'Lahore'],
      },
    },
    {
      title: 'Class',
      color: 'pm',
      data: {
        title: 'Name2',
        ul: ['Campuse2', 'Karachi2', 'Lahore2'],
      },
    },
    {
      title: 'Section',
      color: 'gr',
      data: {
        title: 'Name3',
        ul: ['Campuse3', 'Karachi3', 'Lahore3'],
      },
    },
    {
      title: 'Subjects',
      color: '',
      data: {
        title: 'Name4',
        ul: ['Campuse4', 'Karachi4', 'Lahore4'],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
