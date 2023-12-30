import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Your Receipt one';

  now = new Date();

  constructor(private titleService: Title, @Inject(LOCALE_ID) locale: string) {
    console.log(locale);
    // this.titleService.setTitle(
    //   $localize`Your Receipt ${this.title}:my_place_holder:`
    // );

    this.titleService.setTitle($localize`${this.title}`);
    console.log(this.title);
  }

  gender = 'other';
  minutes = 1;
}
