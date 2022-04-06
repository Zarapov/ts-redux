import { CardImagesActions, CardImagesActionTypes } from '../../types/cardImages';
import { Dispatch } from 'react';
import userService from '../../services/user.service';

export const getCardImages = () =>
    (dispatch: Dispatch<CardImagesActions>) => {
        return userService.getCardImages().then(
            (res) => {
                dispatch({
                    type: CardImagesActionTypes.SET_CARD_IMAGES,
                    payload: res
                })
                return Promise.resolve();
            },
            (err) => {
                const message: string =
                    (err?.response?.message) ||
                    err?.message || err.toString();
                alert(message);
                return Promise.resolve();
            }
        )
    }