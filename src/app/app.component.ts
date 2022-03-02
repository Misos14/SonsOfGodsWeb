import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'Sons of Gods';

  isShowing = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService
  ) {
    // LOADER SECCION //
    setTimeout(() => {
      let element = document.getElementById('loader_div');
      if (element != null) {
        element.className = 'notShow';
      }
    }, 1000);

    setTimeout(() => {
      let element = document.getElementById('head');
      if (element != null) {
        element.className = 'show';
      }
    }, 1800);

    setTimeout(() => {
      this.isShowing = false;
      let element = document.getElementById('master');
      if (element != null) {
        element.className = 'master_container show';
      }
    }, 2200);

    // END LOADER SECCION //

    translateService.setDefaultLang('en');
    translateService.use(localStorage.getItem('lang') || 'en');
  }
}
