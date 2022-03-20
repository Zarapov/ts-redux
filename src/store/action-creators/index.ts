import * as ItemCardsActionCreators from './cards';
import * as ModalWindowActionCreators from './modalWindow';

const ActionCreators={
    ...ItemCardsActionCreators,
    ...ModalWindowActionCreators,
}
export default ActionCreators;