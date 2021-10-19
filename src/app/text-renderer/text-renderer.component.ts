import { Component, Input, OnInit } from '@angular/core';
import { BootstrapHelper } from '../../helper/bootstrap.helper';

@Component({
  selector: 'text-renderer',
  templateUrl: './text-renderer.component.html',
  styleUrls: ['./text-renderer.component.css']
})
export class TextRendererComponent implements OnInit {
  @Input() listRow = [];
  @Input() listColumn = [];
  @Input() nodeIndex: number;
  tab = [];
  constructor() {}

  ngOnInit() {
    this.nodeIndex++;
    console.log(this.nodeIndex);
    this.tab.length = this.nodeIndex;
  }
  getColumnClassByValue(value) {
    return BootstrapHelper.mediumByNumber(value);
  }
}
