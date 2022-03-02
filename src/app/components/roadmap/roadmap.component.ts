import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {

  selectedLang = localStorage.getItem('lang') || 'en';
  constructor() { }
  ngOnInit(): void {
    this.selectedLang = localStorage.getItem('lang') || 'en';
  }

}
