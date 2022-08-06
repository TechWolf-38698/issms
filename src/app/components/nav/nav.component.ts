import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  navCheck = 0;

  showHide() {
    if (this.navCheck == 0) {
      document.getElementById('mainMenu')?.classList.add('d-block');
      document.getElementById('mainMenu')?.classList.remove('d-none');
      this.navCheck = 1;
    } else {
      document.getElementById('mainMenu')?.classList.add('d-none');
      document.getElementById('mainMenu')?.classList.remove('d-block');
      this.navCheck = 0;
    }
  }

}
