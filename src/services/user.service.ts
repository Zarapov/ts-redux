import axios from 'axios';
import { ICardPayload } from '../types/cards';
import authHeader from './auth-header';
const API_URL = 'http://192.168.31.200:8080/api/';
class CardService {
  getCardState() {
    return axios.get(
      API_URL + 'cards',
      { headers: authHeader() }
    ).then((res) => {
      if (res.data.state) {
        localStorage.setItem("cards", JSON.stringify(res.data.state))
      }
      return res.data;
    })
  }
  addCard(card: ICardPayload) {
    return axios.post(
      API_URL + "cards/add",
      { card },
      { headers: authHeader() }
    ).then((res) => {
      if (res.data.state) {
        localStorage.setItem("cards", JSON.stringify(res.data.state))
      }
      return res.data;
    })
  }
  editCard(cardId: string, card: ICardPayload) {
    return axios.post(
      API_URL + "cards/edit",
      { cardId, card },
      { headers: authHeader() }
    ).then((res) => {
      if (res.data.state) {
        localStorage.setItem("cards", JSON.stringify(res.data.state));
      }
      return res.data;
    })
  }
  deleteCard(cardId: string) {
    return axios.post(
      API_URL + "cards/delete",
      { cardId },
      { headers: authHeader() }
    ).then((res) => {
      if (res.data.state) {
        localStorage.setItem("cards", JSON.stringify(res.data.state));
      }
      return res.data;
    })
  }
  getCardImages() {
    return axios.get(
      API_URL + "cards/images"
    ).then((res) => {
      if (res.data.images) {
        localStorage.setItem("cardImages", JSON.stringify(res.data.images));
      }
      return res.data.images;
    })
  }
}
export default new CardService();