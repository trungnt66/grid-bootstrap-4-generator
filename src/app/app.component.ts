import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isUpgrading = false;
  listRow = [];
  copied = false;
  addRow() {
    this.listRow.push({
      value: 0,
      listColumn: []
    });
  }

  removeRow({ idx }) {
    this.listRow.splice(idx, 1);
  }

  ngOnInit() {
    console.log('trung');
  }
  copyMessage() {
    const source = document.querySelector('#outputContent').textContent;
    console.log(source);
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = source;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }
}
