import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-students',
  templateUrl: './index-students.component.html',
  styleUrls: ['./index-students.component.css'],
})
export class IndexStudentsComponent implements OnInit {
  constructor() {
    this.changeOfRoutes();
  }

  ngOnInit(): void {}
  changeOfRoutes() {
    const location =
      window.location.pathname.split('/')[
        window.location.pathname.split('/').length - 1
      ];
    var li = document.getElementsByClassName('mars-0017');

    if (li.length !== 0) {
      for (let i = 0; i < li.length; i++) {
        if (li[i].id === location) {
          li[i].classList.add('mars-active-001');
        } else {
          li[i].classList.remove('mars-active-001');
        }
      }
    }
  }
}
