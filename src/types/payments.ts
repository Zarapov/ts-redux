export interface ITariffState {
    PT: string;
    PP: string;
    T: string;
}
export interface ITariffSum extends ITariffState {
    result: number;
}
export interface ITariffCalc {
    state: ITariffState;
    onChange: (value: ITariffSum) => void;
}
export interface IDate {
    month: string;
    year: string;
}
export interface ITariffEl {
    date: IDate;
    tariffs: ITariffSum[];
    sum: number;
}
export interface ITariffData {
    [index: string]: ITariffEl;
}
export interface ITariffTableProps {
    data: ITariffEl[];
    onRowClick: (date:IDate) => void;
    onDelete: (date: IDate) => void;
}