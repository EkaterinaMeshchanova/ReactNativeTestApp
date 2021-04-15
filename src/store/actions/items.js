import { createActions } from 'redux-actions';

const TYPES = [
  'GET_ITEMS_REQUEST_ACTION',
  'GET_ITEMS_FAILURE_ACTION',
  'GET_ITEMS_SUCCESS_ACTION',
  'SHOW_ITEM_INFO_ACTION',
];

const creator = createActions(...TYPES);

export default creator;