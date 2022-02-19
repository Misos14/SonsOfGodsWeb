import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoreComponent } from './components/lore/lore.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { BannerComponent } from './components/banner/banner.component';
import { CountdownTimerModule } from './../../projects/countdown-timer/src/lib/countdown-timer.module';
import { TeamComponent } from './components/team/team.component';
import { NgParticlesModule } from "ng-particles";
import { ParticlesComponent } from './components/particles/particles.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SwiperModule } from 'swiper/angular';
import { RoadmapComponent } from './components/roadmap/roadmap.component';
import { FaqComponent } from './components/faq/faq.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoreComponent,
    BannerComponent,
    TeamComponent,
    ParticlesComponent,
    GalleryComponent,
    RoadmapComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    CountdownTimerModule,
    NgParticlesModule,
    MatToolbarModule,
    MatExpansionModule,
    SwiperModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
