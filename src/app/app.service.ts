import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Data } from './interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  data: Array<Data> = [{
    id: 1,
    empName: "John",
    shift: "Night Shift",
    loginDetails: [
      {date: "Thu, June 1", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Fri, June 2", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Sat, June 3", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Sun, June 4", isHoliday: true, login: 0, logout: 0, isWFH: false, isAbsent: false},
      {date: "Mon, June 1", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Tue, June 1", isHoliday: false, login: 6.00, logout: 3.20, isWFH: false, isAbsent: false},
      {date: "Wed, June 1", isHoliday: false, login: 5.50, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Thu, June 1", isHoliday: false, login: 6.50, logout: 3.40, isWFH: false, isAbsent: false}
    ]
  },{
    id: 2,
    empName: "Rose",
    shift: "Night Shift",
    loginDetails: [
      {date: "Thu, June 1", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Fri, June 2", isHoliday: false, isWFH: true, login: 0, logout: 0, isAbsent: false},
      {date: "Sat, June 3", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Sun, June 4", isHoliday: true, login: 0, logout: 0, isWFH: false, isAbsent: false},
      {date: "Mon, June 1", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Tue, June 1", isHoliday: false, login: 6.00, logout: 3.20, isWFH: false, isAbsent: false},
      {date: "Wed, June 1", isHoliday: false, login: 5.50, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Thu, June 1", isHoliday: false, login: 6.50, logout: 3.40, isWFH: false, isAbsent: false}
    ]
  } ,{
    id: 3,
    empName: "James",
    shift: "Day Shift",
    loginDetails: [
      {date: "Thu, June 1", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Fri, June 2", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Sat, June 3", isHoliday: false, isAbsent: true, login: 0, logout: 0, isWFH: false},
      {date: "Sun, June 4", isHoliday: true, login: 0, logout: 0, isWFH: false, isAbsent: false},
      {date: "Mon, June 1", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Tue, June 1", isHoliday: false, login: 6.00, logout: 3.20, isWFH: false, isAbsent: false},
      {date: "Wed, June 1", isHoliday: false, login: 5.50, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Thu, June 1", isHoliday: false, login: 6.50, logout: 3.40, isWFH: false, isAbsent: false}
    ]
  },{
    id: 4,
    empName: "WIlliam",
    shift: "Day Shift",
    loginDetails: [
      {date: "Thu, June 1", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Fri, June 2", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Sat, June 3", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Sun, June 4", isHoliday: true, login: 0, logout: 0, isWFH: false, isAbsent: false},
      {date: "Mon, June 1", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Tue, June 1", isHoliday: false, login: 6.00, logout: 3.20, isWFH: false, isAbsent: false},
      {date: "Wed, June 1", isHoliday: false, login: 5.50, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Thu, June 1", isHoliday: false, login: 6.50, logout: 3.40, isWFH: false, isAbsent: false}
    ]
  },{
    id: 5,
    empName: "Dharma",
    shift: "Day Shift",
    loginDetails: [
      {date: "Thu, June 1", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Fri, June 2", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Sat, June 3", isHoliday: false, login: 5.50, logout: 3.10, isWFH: false, isAbsent: false},
      {date: "Sun, June 4", isHoliday: true, login: 0, logout: 0, isWFH: false, isAbsent: false},
      {date: "Mon, June 1", isHoliday: false, login: 6.30, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Tue, June 1", isHoliday: false, login: 6.00, logout: 3.20, isWFH: false, isAbsent: false},
      {date: "Wed, June 1", isHoliday: false, login: 5.50, logout: 3.00, isWFH: false, isAbsent: false},
      {date: "Thu, June 1", isHoliday: false, login: 6.50, logout: 3.40, isWFH: false, isAbsent: false}
    ]
  }]

  leaveData: any = [{
    id:1,
    empName: "Rose",
    noOfDays: 2,
    date: "06-05-2023 to 07-05-2023" 
  }]

  constructor(private http: HttpClient) { }

  getTableData() {
    return (this.data)
  }

  getLeaveData() {
    return this.leaveData
  }

}
