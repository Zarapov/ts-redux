import * as ItemCardsActionCreators from './cards';
import * as ModalWindowActionCreators from './modalWindow';
import * as EditCardDialogActionCreators from './editCardDialog';

const ActionCreators={
    ...ItemCardsActionCreators,
    ...ModalWindowActionCreators,
    ...EditCardDialogActionCreators,
}
export default ActionCreators;