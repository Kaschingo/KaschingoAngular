import { Component, OnInit, Input } from '@angular/core';

export interface IStreamField {
  type: string,
  value: any,
  id: string,
}

@Component({
  selector: 'app-stream-field',
  templateUrl: './stream-field.component.html',
  styleUrls: ['./stream-field.component.css']
})
export class StreamFieldComponent implements OnInit {
  @Input() streamFields: IStreamField[];

  constructor() { }

  ngOnInit() {
  }

}
