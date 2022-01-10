import { Component, OnInit } from '@angular/core';

import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: 'data.page.html',
  styleUrls: ['data.page.scss'],
})
export class DataPage implements OnInit {

  active = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url;
    });
  }

  ngOnInit() { }

}
