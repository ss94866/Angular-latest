import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AppService } from '../app.service';

@Component({
  selector: 'app-biometricreport',
  templateUrl: './biometricreport.component.html',
  styleUrls: ['./biometricreport.component.css']
})
export class BiometricreportComponent {
  isFullWidthRow: boolean = true;
  public columnDefs: any;

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    suppressMovable: true
  };

  public rowData: any;
  private gridApi!: GridApi;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit()
    this.rowData = this.appService
      .getTableData();
    this.columnDefs = this.createColumnDefs(this.rowData[0])
  }

  createColumnDefs(data: any): any[] {
    const empNameShiftHeader = { headerName: '', children: [{ headerName: 'Employee Name', field: 'empName' }] };

    const dateHeaders = data.loginDetails.map((item: any) => ({
      headerName: item.isHoliday ? 'Sunday' : item.date,
      headerClass: item.isHoliday ? 'sunday-header' : '',
      children: item.isHoliday ? [{ headerName: "Sunday", headerClass: "holiday-header", cellRenderer: (params: any) => this.renderHolidayCell(params, item.date, 'login') }] : [
        { headerName: 'Login', field: 'loginDetails', valueGetter: (params: any) => params.data.loginDetails.find((d: any) => d.date === item.date)?.login || '', cellRenderer: (params: any) => this.renderHolidayCell(params, item.date, 'login') },
        { headerName: 'Logout', field: 'loginDetails', valueGetter: (params: any) => params.data.loginDetails.find((d: any) => d.date === item.date)?.logout || '', cellRenderer: (params: any) => this.renderHolidayCell(params, item.date, 'logout') }
      ]
    }));

    return [empNameShiftHeader, ...dateHeaders];
  }

  renderHolidayCell(params: any, targetDate: string, type: 'login' | 'logout'): string {
    const loginDetail = params.data.loginDetails.find((d: any) => d.date === targetDate);
    const value = loginDetail ? loginDetail[type] : '';

    if (loginDetail && loginDetail.isHoliday) {
      // Add any custom styling you want for the holiday cell (e.g., green background color)
      return `<span style="color: green; font-weight: bold;">Holiday</span>`;
    } else if (loginDetail && loginDetail.isWFH) {
      return `<span style="color: red; font-weight: bold;">WFH</span>`;
    } else if (loginDetail && loginDetail.isAbsent) {
      return `<span style="color: red; font-weight: bold;">Absent</span>`;
    }
    return value;
  }

  
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  globalFilter(e: any) {
    this.gridApi.setQuickFilter(e.target.value)
  }
}
