import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { BootstrapHelper } from '../../helper/bootstrap.helper';

@Component({
  selector: '.row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RowComponent implements OnInit {
  @Output() listColumnChange: EventEmitter<any> = new EventEmitter();
  @Output() removeRow: EventEmitter<any> = new EventEmitter();
  @Input() idx: any;
  @Input() value: number;
  @Input() listColumn: any = [{ value: 0, listRow: [] }];
  constructor() {}

  ngOnInit() {}

  addRow() {}

  addColumn() {
    if (this.listColumn) {
      this.listColumn.push({ value: 0, listRow: [] });
    } else {
      this.listColumn = [{ value: 0, listRow: [] }];
    }
    this.listColumnChange.emit(this.listColumn);
  }
  removeColumn({ idx }) {
    this.listColumn.splice(idx, 1);
    this.listColumnChange.emit(this.listColumn);
  }

  getColMdName(value) {
    return BootstrapHelper.mdNgClassByNumber(value);
  }

  removeThisRow() {
    this.removeRow.emit({ idx: this.idx });
  }

  resizeColumn({ larger, idx }) {
    let col = this.listColumn[idx];
    const length = this.listColumn.length;
    let usedSize = 0;
    let zeroColumnCount = 0;
    for (let el of this.listColumn) {
      usedSize += el.value;
      if (!el.value) {
        zeroColumnCount++;
      }
    }

    const notUseSize = 12 - usedSize;

    let estimatedZeroSize = notUseSize / zeroColumnCount;
    estimatedZeroSize = Math.round(estimatedZeroSize);
    console.log(larger);
    if (col.value == 0) {
      // estimate size of col
      if (estimatedZeroSize > 1) {
        col.value = larger ? estimatedZeroSize + 1 : estimatedZeroSize - 1;
      } else if (estimatedZeroSize <= 0) {
        col.value = 11 + estimatedZeroSize;
      }
    } else {
      if (larger && col.value < 12) {
        col.value++;
      }
      if (!larger && col.value > 0) {
        col.value--;
        console.log('cac');
      }
    }
  }
}
