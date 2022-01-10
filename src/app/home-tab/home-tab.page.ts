import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {
  href = '';
  url = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}
