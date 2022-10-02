import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardPage } from '../models/dashboard-page';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private tmpPages: DashboardPage[] = [
    {
      id: 1,
      title: 'Home',
      icon: 'home',
      groups: [
        {
          id: 1,
          title: 'Messwerte',
          icon: 'poll',
        },
        {
          id: 2,
          title: 'Batterien',
          icon: 'battery_std',
        },
        {
          id: 3,
          title: 'Test',
          icon: '',
        },
      ],
    },
    {
      id: 2,
      title: 'Seite 2',
      icon: 'home',
      groups: [
        {
          id: 1,
          title: 'Blub bla',
          icon: 'abc',
        },
      ],
    },
  ];

  constructor() {}

  getDashboardPage(pageId: number): Observable<DashboardPage | undefined> {
    return of(this.tmpPages.find((x) => x.id === pageId));
  }
}
