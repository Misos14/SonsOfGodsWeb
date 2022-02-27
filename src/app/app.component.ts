import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  title = 'Sons of Gods';

  @ViewChild('secondSection', { static: true })
  secondSection!: ElementRef<HTMLDivElement>;

  @ViewChild('header', { static: true })
  header!: ElementRef<HTMLDivElement>;

  // @ViewChild('menuSecond', { static: true })
  // menuSecond!: ElementRef<HTMLDivElement>;

  @ViewChild('imageFirst', { static: true })
  imageFirst!: ElementRef<HTMLDivElement>;

  // @ViewChild('imageSecond', { static: true })
  // imageSecond: ElementRef<HTMLDivElement>;

  isShowing = true;

  constructor(@Inject(DOCUMENT) private document: Document) {
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
  }

  // SCROLL SECTION //
  ngOnInit(): void {

  } 

  // END SCROLL SECTION //
}
