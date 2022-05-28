import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent implements OnInit {
  @Input() items;
  constructor() { }

  ngOnInit(): void {
  }

}
