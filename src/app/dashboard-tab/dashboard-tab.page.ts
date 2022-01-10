import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-dashboard-tab',
  templateUrl: './dashboard-tab.page.html',
  styleUrls: ['./dashboard-tab.page.scss'],
})
export class DashboardTabPage implements OnInit {
  active = '';

  // eslint-disable-next-line @typescript-eslint/naming-convention
  profile = [
    {
      name: 'Mon profile',
      link: '/dashboard-tab/profile-edit',
      icon: 'person-circle',
      position: 'start',
    },
    {
      name: 'Déconnexion',
      link: '',
      icon: 'log-out',
      position: 'start',
    },
  ];
  emplacement = [
    {
      name: 'Mes emplacements',
      link: '',
      icon: 'map',
      position: 'start',
    },
  ];
  donnees = [
    {
      name: 'Tableau de bord',
      link: '/dashboard-tab/dashboard-edit',
      icon: 'analytics',
      position: 'start',
    },
    {
      name: 'Courbes de tendances',
      link: '/dashboard-tab/trend',
      icon: 'trending-up',
      position: 'start',
    },
  ];
  information = [
    {
      name: 'À propos',
      link: '/dashboard-tab/about',
      icon: 'information',
      position: 'start',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      console.log(event.url);
      this.active = event.url;
    });
  }

  ngOnInit() {}
}
