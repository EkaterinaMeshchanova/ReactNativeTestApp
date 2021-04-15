import {
  put,
  call,
  takeEvery,
  select
} from 'redux-saga/effects';
import axios from 'axios';

import actions from '../actions/items';
const sortId = (a, b) => b.id - a.id;

const {
  getItemsRequestAction,
  getItemsSuccessAction,
  getItemsFailureAction,
} = actions;

const HANDLERS = {
  *[getItemsRequestAction](action) {
    try {
      const { data } = yield call(axios, {
        method: 'get',
        url: 'https://run.mocky.io/v3/8f202e8d-dce3-4613-8154-d469fc98fb36',
        headers: { 'content-type': 'application/json' },
      });
      const items = data.response.map(item => ({...item, infoVisible: false }));
      if (action.payload) {
        items.sort(sortId);
      }
      yield put(getItemsSuccessAction(items));
    } catch (e) {
      yield put(getItemsFailureAction(e));
    }
  },
};

export default function* watch() {
  for (const key in HANDLERS) {
    if (Object.prototype.hasOwnProperty.call(HANDLERS, key)) {
      yield takeEvery(key, HANDLERS[key]);
    }
  }
}
