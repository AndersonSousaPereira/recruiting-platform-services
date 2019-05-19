import {combineReducers} from 'redux';
import changeModal from './changemodal';
import setProdutos from './setprodutos';

const rootReducer = combineReducers({
	changemodal:changeModal,
	setprodutos:setProdutos,
});

export default rootReducer;
