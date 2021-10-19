import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: '.col-sm-12',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ColComponent implements OnInit {
  @Input() idx: any;
  @Input() listRow: any = [];
  @Output() removeColumn: EventEmitter<any> = new EventEmitter();
  @Output() resizeColumn: EventEmitter<any> = new EventEmitter();
  @Output() listRowChange: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  addRow() {
    this.listRow.push({
      value: 0,
      listColumn: []
    });
    this.listRowChange.emit(this.listRow);
  }

  removeRow({ idx }) {
    this.listRow.splice(idx, 1);
  }

  resize({ larger }) {
    this.resizeColumn.emit({ larger, idx: this.idx });
  }

  removeThisColumn() {
    this.removeColumn.emit({ idx: this.idx });
  }
}
