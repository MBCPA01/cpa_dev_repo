import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {
  active = '';

  constructor() {

  }

  ngOnInit() { }

}
