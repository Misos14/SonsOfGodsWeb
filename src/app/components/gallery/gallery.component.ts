import { Component, ViewEncapsulation } from "@angular/core";
import SwiperCore, { Zoom, Navigation, Pagination, Swiper } from "swiper";

SwiperCore.use([Zoom, Navigation, Pagination]);
  
  SwiperCore.use([Navigation, Pagination]);
  
  @Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss'],
    encapsulation: ViewEncapsulation.None
  })

  export class GalleryComponent  {
  
    constructor() { }

    
  
  }
  