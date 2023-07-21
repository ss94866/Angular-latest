import { Component } from "@angular/core";
import { ICellRendererParams } from "ag-grid-community";

@Component({
    selector: "cell-renderer-actions",
    template: `<button class="btn btn-primary py-0 px-2 me-1 mt-1 fs-16 cell-renderer-button d-flex align-items-center">
    <img src="assets/view.png" width="19px" height="19px"/>
    <div class="ms-1 mb-1">view</div>
    </button>`
})
export class CellRendererActions {
    cellValue: any;

    agInit(params: ICellRendererParams): void {
        this.cellValue = this.getValueToDisplay(params);
    }

    getValueToDisplay(params: ICellRendererParams) {
        return params.valueFormatted ? params.valueFormatted : params.value;
    }
}