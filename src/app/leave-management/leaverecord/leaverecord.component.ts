import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { AppService } from 'src/app/app.service';
import { CellRendererActions } from './leaverecord-actions';

@Component({
  selector: 'app-leaverecord',
  templateUrl: './leaverecord.component.html',
  styleUrls: ['./leaverecord.component.css']
})
export class LeaverecordComponent {
  isFullWidthRow: boolean = true;
  filterShift: string = "";
  public columnDefs: any = [{ headerName: "Employee", field: "empName" },
  { headerName: "No of Days", field: "noOfDays" },
  { headerName: "Date", field: "date" },
  { headerName: "Lead's Approval", cellRenderer: CellRenderer, minWidth: 230 },
  { headerName: "Head's Approval", cellRenderer: CellRenderer, minWidth: 230 },
  { headerName: "Actions", cellRenderer: CellRendererActions }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    suppressMovable: true,
  };

  public rowData: any;
  private gridApi!: GridApi;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private appService: AppService) { }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit()
    this.rowData = this.appService
      .getLeaveData();
  }

  shiftFilterChange(e: any) {

  }
}

@Component({
  selector: "cell-renderer-approval",
  template: `<div class="d-flex align-items-center mt-1"><button class="btn btn-outline-success py-0 px-2 me-1 cell-renderer-button d-flex align-items-center">
  <img src="assets/tick.svg" width="19px" height="19px"/>
  <div class="ms-1 mb-1">Approve</div>
  </button><button class="btn btn-outline-danger cell-renderer-button py-0 px-2 d-flex align-items-center">
  <img src="assets/wrong.svg" width="19px" height="19px"/>
  <div class="ms-1 mb-1">Reject</div>
  </button></div>
  `
})
class CellRenderer {
  cellValue: any;

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
}
