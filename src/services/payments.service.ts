import axios from 'axios';
import { ITariffEl } from '../types/payments';
import authHeader from './auth-header';
const API_URL = 'http://192.168.31.200:8080/api/payments';
class PaymentsService {
  getPaymentsData(id:string) {
    return axios.post(
      API_URL,
      {id},
      {headers:authHeader()}
    ).then(res=>{
      if (res.data.state) {
        localStorage.setItem("payments", JSON.stringify(res.data.state))
      }
      return res.data;
    })
  }
  addPaymentData(id:string,data: ITariffEl) {
    return axios.post(
      API_URL+"/add",
      { id, data },
      { headers: authHeader() }
    ).then((res) => {
      if (res.data.state) {
        localStorage.setItem("payments", JSON.stringify(res.data.state ))
      }
      return res.data;
    })
  }
  deletePaymentData(id:string,date: string) {
    return axios.post(
      API_URL,
      { id, date },
      { headers: authHeader() }
    ).then(res => {
      if (res.data.state) {
        localStorage.setItem("payments", JSON.stringify(res.data.state ))
      }
      return res.data;
    })
  }
  
}
export default new PaymentsService();