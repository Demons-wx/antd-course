/*
* @Author: wangxuan
* @Date:   2019-06-29 17:52:44
* @Last Modified by:   wangxuan
* @Last Modified time: 2019-07-06 20:04:57
*/

import request from '../util/request';  // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise

const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};

export default {
  namespace: 'puzzlecards',
  state: {
    data: [],
    counter: 0,
      },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      const endPointURI = 'https://official-joke-api.appspot.com/random_joke';

      const puzzle = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle });

      yield call(delay, 3000);

      const puzzle2 = yield call(request, endPointURI);
      yield put({ type: 'addNewCard', payload: puzzle2 });
    }
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    }
  },
};