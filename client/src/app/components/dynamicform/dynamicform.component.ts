import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';
import {FormGroup} from '@angular/forms'

@Component({
  selector: 'app-dynamicform',
  templateUrl: './dynamicform.component.html',
  styleUrls: ['./dynamicform.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() form : FormGroup;
  @Output() formChange = new EventEmitter<FormGroup>();

  @Input() fields : string[];
  @Output() onsubmit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onInput(){
    this.formChange.emit(this.form);
  }

  onSubmit(){
    this.onsubmit.emit();
  }

}
