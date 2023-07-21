export interface Data {
    id: number,
    empName: string,
    shift: string,
    loginDetails: Array<loginDetail>
}

export interface loginDetail {
    date: string,
    isHoliday: boolean,
    login: number,
    logout: number,
    isWFH: boolean,
    isAbsent: boolean
}

