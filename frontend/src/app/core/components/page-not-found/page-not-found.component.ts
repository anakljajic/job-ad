import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class="parent">
      <div class="child">
        <h1>Error 404! Please go back to <a routerLink="/">dashboard</a></h1>
      </div>
    </div>
  `,
  styles: [
    `
      .parent {
        display: grid;
        place-items: center;
        height: 100vh;
      }

      .child {
        text-align: center;
        color: dimgray;
      }
    `,
  ],
  standalone: true,
  imports: [RouterModule],
})
export class PageNotFoundComponent {}
