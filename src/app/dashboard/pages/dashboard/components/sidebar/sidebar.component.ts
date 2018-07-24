import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuItems = [
    {
      title: 'Счет',
      icon: 'building-o',
      link: '/dashboard/bill'
    },
    {
      title: 'История',
      icon: 'flash',
      link: '/dashboard/history'
    },
    {
      title: 'Планирование',
      icon: 'archive',
      link: '/dashboard/planning'
    },
    {
      title: 'Запись',
      icon: 'plus-square',
      link: '/dashboard/records'
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
