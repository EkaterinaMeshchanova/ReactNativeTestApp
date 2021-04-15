
import { all } from 'redux-saga/effects';
import itemsSagas from './itemsSagas';

export default function* staticSagas() {
    yield all([
      itemsSagas(),
    ])
};