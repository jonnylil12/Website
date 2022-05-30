import {Component, EventEmitter, OnInit, Input , Output} from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Input() text:string;
  @Output() onclick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.onclick.emit();
  }


}
