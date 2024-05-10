/* global fetch */

import { all, call, delay, put, take, takeLatest ,takeEvery} from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadDataSuccess,getWorksListSuccess, tickClock,setCarousel,getWorksSuccess,getStudioSuccess,getFooterSuccess ,getHomeClientSuccess,getManifestoSuccess, getHomeSuccess,getWwdSuccess,getWorksListSingleSuccess, getWwdProcessSuccess, getWorkCategoriesSuccess, getHomeSlidersSuccess} from '../actions/actions'

es6promise.polyfill()

function * runClockSaga () {
  yield take(actionTypes.START_CLOCK)
  while (true) {
    yield put(tickClock(false))
    yield delay(1000)
  }
}
function * setCarouselSaga (action) {
  // yield take(actionTypes.SET_CAROUSEL)
  // const action = yield takeLatest(actionTypes, doSomething);
  yield delay(1000)
  yield put(action)
  // while (true) {
  //   yield put(action)
  //   yield delay(1000)
  // }
}

function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    yield put(failure(err))
  }
}

function * getHomeSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'homes');
    const data = yield rest.json();
    yield put(getHomeSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getHomeSlidersSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'home-sliders');
    const data = yield rest.json();
    yield put(getHomeSlidersSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getHomeClientSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'home-client-lists');
    const data = yield rest.json();
    yield put(getHomeClientSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getManifestoSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'manifestos');
    const data = yield rest.json();
    yield put(getManifestoSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getFooterSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'footers');
    const data = yield rest.json();
    yield put(getFooterSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getStudioSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'studios');
    const data = yield rest.json();
    yield put(getStudioSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getWwdSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'what-we-dos');
    const data = yield rest.json();
    yield put(getWwdSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getWorksSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'works');
    const data = yield rest.json();
    yield put(getWorksSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getWorksListSaga (payload){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'work-lists');
    let data = yield rest.json();
    if(typeof payload.payload.id !== "undefined"){
      var dataFiltered = data.filter(dt => {
        return dt.work_category && dt.work_category.id === payload.payload.id
      }) 
      data = dataFiltered;
    }
    yield put(getWorksListSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getWorksListSingleSaga (payload){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'work-lists/'+payload.payload.id);
    const data = yield rest.json();
    yield put(getWorksListSingleSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getWwdProcessSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'what-we-do-the-processes');
    const data = yield rest.json();
    yield put(getWwdProcessSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * getWorkCategoriesSaga (){
  try {
    const rest = yield fetch(process.env.API_ENDPOINT+'work-categories');
    const data = yield rest.json();
    yield put(getWorkCategoriesSuccess(data));
  } catch (err) {
    yield put(failure(err))
  }
}
function * rootSaga () {
  yield all([
    call(runClockSaga),
    // call(setCarouselSaga),
    takeLatest(actionTypes.SET_CAROUSEL, setCarouselSaga),
    takeLatest(actionTypes.GET_HOME, getHomeSaga),
    takeLatest(actionTypes.GET_HOME_CLIENT, getHomeClientSaga),
    takeLatest(actionTypes.GET_MANIFESTO, getManifestoSaga),
    takeLatest(actionTypes.GET_FOOTER, getFooterSaga),
    takeLatest(actionTypes.GET_STUDIO, getStudioSaga),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.GET_WWD, getWwdSaga),
    takeLatest(actionTypes.GET_WORKS, getWorksSaga),
    takeLatest(actionTypes.GET_WORKS_LIST, getWorksListSaga),
    takeLatest(actionTypes.GET_WORKS_LIST_SINGLE, getWorksListSingleSaga),
    takeLatest(actionTypes.GET_WWD_PROCESS, getWwdProcessSaga),
    takeLatest(actionTypes.GET_WORK_CATEGORIES, getWorkCategoriesSaga),
    takeLatest(actionTypes.GET_HOME_SLIDERS, getHomeSlidersSaga)
  ])
}

export default rootSaga
