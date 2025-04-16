import { Component } from '@angular/core';

@Component({
  selector: 'app-mybox',
  templateUrl: './mybox.component.html',
  styleUrls: ['./mybox.component.css']
})
export class MyboxComponent {
  visitorId: string = '';
  visitorName: string = '';
  hostName: string = '';
  tableData: Array<{ visitorId: string; visitorName: string; hostName: string }> = [];
  isPresent: boolean = false;

  AddNewEntry() {
    const duplicate = this.tableData.some(entry => entry.visitorName === this.visitorName);

    if (duplicate) {
      this.isPresent = true;
    } else {
      this.isPresent = false;
      this.tableData.push({
        visitorId: this.visitorId,
        visitorName: this.visitorName,
        hostName: this.hostName
      });

    
      this.visitorId = '';
      this.visitorName = '';
      this.hostName = '';
    }
  }

  RemoveItem(idx: number) {
    this.tableData.splice(idx, 1);
  }
}