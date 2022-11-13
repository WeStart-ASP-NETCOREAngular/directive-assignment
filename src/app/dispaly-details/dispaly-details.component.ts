import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispaly-details',
  templateUrl: './dispaly-details.component.html',
  styleUrls: ['./dispaly-details.component.css'],
})
export class DispalyDetailsComponent implements OnInit {
  showParagraph = false;
  log: number[] = [];
  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.showParagraph = !this.showParagraph;
    this.log.push(this.log.length + 1);
    console.log(this.log);
  }
}
