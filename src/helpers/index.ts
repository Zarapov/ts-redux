export function monthNumberToString(month: number): string {
    if (month < 10) {
        return "0" + month.toString();
    }
    return month.toString();
}
export const currentMonthYear = ():{month:string;year:string} => {
    const _date = new Date();
    return {
        month: monthNumberToString(_date.getUTCMonth() + 1),
        year: _date.getUTCFullYear().toString()
    }
}