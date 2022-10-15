import { call,all, put, takeEvery, takeLatest } from 'redux-saga/effects'
// 引入网络请求 
// import Api from '...'
import axios from "axios"
// 常量引入
import {FETCH_HOME_MULTIDATA } from "@/store/constants.js"
// action引入
import {changeBanners} from "@/store/actionCreators.js"


// worker Saga : 将在 fetchHomeData action 被 dispatch 时调用
function* fetchHomeData(action) {
  const result = yield  axios.get("http://123.207.32.32:8000/home/multidata");
  
  const banners = result.data.data.banner.list
 
  yield put(changeBanners(banners))
//all 所有都执行
  yield all([
    yield put (changeBanners(banners)),
    // yield put (changexxxxxAciotn( params ))
  ])


  //  try {
  //     const user = yield call(Api.fetchUser, action.payload.userId);
      
  //     yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  //  } catch (e) {
  //     yield put({type: "USER_FETCH_FAILED", message: e.message});
  //  }
}

/*
  在每个 `fetchHomeData` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery(FETCH_HOME_MULTIDATA , fetchHomeData);
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `fetchHomeData` action 时，
  如果在这之前已经有一个 `fetchHomeData` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的(只拦截最新的)
*/
// function* mySaga() {
//   yield takeLatest(fetchHomeMultidataAction, fetchHomeData);
// }

export default mySaga;