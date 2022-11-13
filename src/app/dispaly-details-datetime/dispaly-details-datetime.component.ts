import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispaly-details-datetime',
  templateUrl: './dispaly-details-datetime.component.html',
  styleUrls: ['./dispaly-details-datetime.component.css'],
})
export class DispalyDetailsDatetimeComponent implements OnInit {
  showParagraph = false;
  log: Date[] = [];
  constructor() {}

  ngOnInit(): void {}

  toggleDisplay() {
    this.showParagraph = !this.showParagraph;
    this.log.push(new Date());
    console.log(this.log);
  }
}
