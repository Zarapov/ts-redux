import React, { useState } from 'react';
import TariffCalc from '../../components/TariffCalc/TariffCalc';
import TariffTable from '../../components/TariffTable/TariffTable';
import { useActions } from '../../hooks/useAction';
import { ITariffSum, ITariffData, IDate, ITariffEl } from '../../types/payments';
import "./Payments.css";
import { currentMonthYear, monthNumberToString } from "../../helpers";
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';
import paymentsService from '../../services/payments.service';
const yearsArr: string[] = [];
const monthsArr: string[] = [];
for (let i = 2000; i <= Number(currentMonthYear().year); i++) {
    yearsArr.push(i.toString());
}
for (let i = 1; i <= 12; i++) {
    monthsArr.push(monthNumberToString(i));
}
const Payments: React.FC<{ id: string }> = ({ id }) => {
    const [tariffs, setTariffs] = useState<ITariffSum[]>([{ PP: "", PT: "", T: "", result: 0 }]);
    const [date, setDate] = useState<IDate>(currentMonthYear());
    const [data, setData] = useState<ITariffData>({});
    const { showModalWindow } = useActions();
    const addTariff = (): void => {
        setTariffs(prev => {
            return [...prev, { PP: "", PT: "", T: "", result: 0 }];
        })
    }
    const deleteTariff = (index: number): void => {
        setTariffs(prev => {
            const nextState = [...prev];
            nextState.splice(index, 1);
            return nextState;
        })
    }
    const changeTariff = (index: number, newValue: ITariffSum): void => {
        setTariffs(prev => {
            const nextState = [...prev];
            nextState[index] = newValue;
            return nextState;
        })
    }
    const changeDate = (key: string, value: string): void => {
        setDate(prev => { return { ...prev, [key]: value } })
    }
    const sum = tariffs.reduce((sum: number, tariff: ITariffSum): number => {
        sum += tariff.result;
        return sum;
    }, 0);
    const saveTariff = () => {
        const newData: ITariffEl = { date, tariffs, sum };
        const textDate = newData.date.year + '/' + newData.date.month;
        if (date.year + "/" + date.month in data) {
            showModalWindow({
                title: `???????????? ${textDate} ?????? ????????????????????`,
                children: <ConfirmDialog
                    confirmText='????????????????'
                    confirmFC={/* () => setData(prev => {return { ...prev, [textDate]: newData }}) */
                        () => paymentsService.addPaymentData(id, newData)
                            .then(
                                res => setData(res.state)
                            )
                            .catch(err => alert(err))
                    }
                />
            });
            return;
        }
        //setData(prev => { return { ...prev, [textDate]: newData } });
        paymentsService.addPaymentData(id, newData)
            .then(
                res => setData(res.state)
            )
            .catch(err => alert(err))
    }
    const tableRowClick = (date: IDate): void => {
        setDate({ month: date.month, year: date.year });
        setTariffs(data[date.year + "/" + date.month].tariffs);
    }
    const deleteRow = (date: IDate): void => {
        const textDate = date.year + "/" + date.month;
        paymentsService.deletePaymentData(id, textDate)
            .then(res => {
                setData(res.state);
            })
            .catch(err => alert(err))

        /* setData(prev => {
            let nextState = { ...prev };
            delete nextState[textDate];
            return nextState;
        }) */
    }

    return (
        <div className='payments'>
            <h3>?????????????? ?????????????????? ????????????????????????????</h3>
            <div className='flex-wrapper'>
                <div>
                    <label htmlFor='monthSelect'>??????????</label>
                    <select id='monthSelect' value={date.month} onChange={e => changeDate("month", e.target.value)}>
                        {
                            monthsArr.map(m => <option key={m} value={m}>{m}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor='yearSelect'>??????</label>
                    <select id='yearSelect' value={date.year} onChange={e => changeDate("year", e.target.value)}>
                        {
                            yearsArr.map(y => <option key={y} value={y}>{y}</option>)
                        }
                    </select>
                </div>
            </div>
            <div>
                <span>???? - ?????????????? ?????????????????? ???????????????? (??????*??); </span>
                <span>???? - ?????????????????? ???????????????? ???? ???????????????????? ?????????? (??????*??); </span>
                <span>?? - ?????????? (??????/??????*??); </span>
            </div>
            {
                tariffs.map((tariff, index) => {
                    return <div key={"key" + index} className="tariff">
                        <span>?????????? {index + 1}
                            {index > 0 &&
                                <span className='trashbin' onClick={e => deleteTariff(index)}></span>
                            }
                        </span>
                        <TariffCalc state={
                            { PP: tariff.PP, PT: tariff.PT, T: tariff.T }
                        }
                            onChange={value => changeTariff(index, value)}
                        />
                    </div>
                })
            }
            <div>??????????: {sum.toLocaleString("ru-RU")} ??????.</div>
            <div className='btn-group'>
                <button className="btn" onClick={e => addTariff()}>???????????????? ??????????</button>
                <button className='btn btn-confirm' onClick={e => saveTariff()}>??????????????????</button>
            </div>

            <TariffTable data={Object.values(data)} onRowClick={tableRowClick} onDelete={deleteRow} />
        </div>
    )
}
export default Payments;