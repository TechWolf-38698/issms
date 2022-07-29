import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  // title = 'Dashboard';
  // icon = 'wave-square';

  miniCardData = [
    {
      stdCount: 200,
      staffCount: 199,
      eventCount: 24,
      penddingReqCount: 17,
    },
  ];

  noticeBoard = [
    {
      school: [
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
      ],
      admin: [
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
      ],
      teacher: [
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
        {
          title: 'Time Table',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
          date: '01 May',
        },
      ],
    },
  ];

  classSchedule = [
    {
      title: 'Time Table',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
      date: '01 May',
    },
    {
      title: 'Time Table',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
      date: '01 May',
    },
    {
      title: 'Time Table',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
      date: '01 May',
    },
    {
      title: 'Time Table',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo ut veritatis consequatur nisi, exercitationem voluptatem distinctio, minima iusto alias in mollitia, labore architecto doloremque molestias. Magni error temporibus inventore veniam.',
      date: '01 May',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
