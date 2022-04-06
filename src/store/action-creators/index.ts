import * as ItemCardsActionCreators from './cards';
import * as ModalWindowActionCreators from './modalWindow';
import * as EditCardDialogActionCreators from './editCardDialog';
import * as AuthFormActionCreators from './authForm';
import * as AuthActionCreators from './auth'
import * as CardImagesActionCreators from './cardImages';
const ActionCreators={
    ...ItemCardsActionCreators,
    ...ModalWindowActionCreators,
    ...EditCardDialogActionCreators,
    ...AuthFormActionCreators,
    ...AuthActionCreators,
    ...CardImagesActionCreators

}
export default ActionCreators;