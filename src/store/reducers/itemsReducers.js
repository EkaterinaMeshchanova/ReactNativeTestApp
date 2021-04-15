import { handleActions } from 'redux-actions';
import actions from '../actions/itemsActions';


const {
  getItemsSuccessAction,
  showItemInfoAction
} = actions;

const initialState = {
  items: [],
};
const getItemsSuccess = (state, action) => (
  {
    ...state,
    items: action.payload
  }
);
const showItemInfo = (state, action) => {
  const itemIdx = state.items.findIndex(item => item.id === action.payload);
  state.items[itemIdx].infoVisible = !state.items[itemIdx].infoVisible;
  return state;
};

export default handleActions({
  [getItemsSuccessAction]: getItemsSuccess,
  [showItemInfoAction]: showItemInfo,
}, initialState);


