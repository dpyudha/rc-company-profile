export const actionTypes = {
  FAILURE: 'FAILURE',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  START_CLOCK: 'START_CLOCK',
  TICK_CLOCK: 'TICK_CLOCK',
  SET_CAROUSEL : 'SET_CAROUSEL',
  SET_CAROUSEL_SUCCESS : 'SET_CAROUSEL_SUCCESS',
  SET_CAROUSEL_FAILURE : 'SET_CAROUSEL_FAILURE',
  GET_HOME : 'GET_HOME',
  GET_HOME_SUCCESS : 'GET_HOME_SUCCESS',
  GET_HOME_FAILURE : 'GET_HOME_FAILURE',
  GET_HOME_SLIDERS : 'GET_HOME_SLIDERS',
  GET_HOME_SLIDERS_SUCCESS : 'GET_HOME_SLIDERS_SUCCESS',
  GET_HOME_SLIDERS_FAILURE : 'GET_HOME_SLIDERS_FAILURE',
  GET_FOOTER : 'GET_FOOTER',
  GET_FOOTER_SUCCESS : 'GET_FOOTER_SUCCESS',
  GET_FOOTER_FAILURE : 'GET_FOOTER_FAILURE',
  GET_HOME_CLIENT : 'GET_HOME_CLIENT',
  GET_HOME_CLIENT_SUCCESS : 'GET_HOME_CLIENT_SUCCESS',
  GET_HOME_CLIENT_FAILURE : 'GET_HOME_CLIENT_FAILURE',
  GET_MANIFESTO : 'GET_MANIFESTO',
  GET_MANIFESTO_SUCCESS : 'GET_MANIFESTO_SUCCESS',
  GET_MANIFESTO_FAILURE : 'GET_MANIFESTO_FAILURE',
  GET_STUDIO : 'GET_STUDIO',
  GET_STUDIO_SUCCESS : 'GET_STUDIO_SUCCESS',
  GET_STUDIO_FAILURE : 'GET_STUDIO_FAILURE',
  GET_WWD : 'GET_WWD',
  GET_WWD_SUCCESS : 'GET_WWD_SUCCESS',
  GET_WWD_FAILURE : 'GET_WWD_FAILURE',
  GET_WORKS : 'GET_WORKS',
  GET_WORKS_SUCCESS : 'GET_WORKS_SUCCESS',
  GET_WORKS_FAILURE : 'GET_WORKS_FAILURE',
  GET_WORKS_LIST : 'GET_WORKS_LIST',
  GET_WORKS_LIST_SUCCESS : 'GET_WORKS_LIST_SUCCESS',
  GET_WORKS_LIST_FAILURE : 'GET_WORKS_LIST_FAILURE',
  GET_WORKS_LIST_SINGLE : 'GET_WORKS_LIST_SINGLE',
  GET_WORKS_LIST_SINGLE_SUCCESS : 'GET_WORKS_LIST_SINGLE_SUCCESS',
  GET_WORKS_LIST_SINGLE_FAILURE : 'GET_WORKS_LIST_SINGLE_FAILURE',
  GET_WWD_PROCESS : 'GET_WWD_PROCESS',
  GET_WWD_PROCESS_SUCCESS : 'GET_WWD_PROCESS_SUCCESS',
  GET_WWD_PROCESS_FAILURE : 'GET_WWD_PROCESS_FAILURE',
  GET_WORK_CATEGORIES : 'GET_WORK_CATEGORIES',
  GET_WORK_CATEGORIES_SUCCESS : 'GET_WORK_CATEGORIES_SUCCESS',
  GET_WORK_CATEGORIES_FAILURE : 'GET_WORK_CATEGORIES_FAILURE',
  
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function increment () {
  return { type: actionTypes.INCREMENT }
}

export function setCarousel (data) {
  console.log('SET carousel');
  return { type: actionTypes.SET_CAROUSEL,activeCarousel:data }
}

export function decrement () {
  return { type: actionTypes.DECREMENT }
}

export function reset () {
  return { type: actionTypes.RESET }
}

export function loadData () {
  console.log('load')
  return { type: actionTypes.LOAD_DATA }
}

export function loadDataSuccess (data) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    data
  }
}

export function startClock () {
  return { type: actionTypes.START_CLOCK }
}

export function tickClock (isServer) {
  return {
    type: actionTypes.TICK_CLOCK,
    light: !isServer,
    ts: Date.now()
  }
}

export function getHome (){
  console.log('gethome action')
  return {
    type : actionTypes.GET_HOME
  }
}
export function getHomeSuccess (data) {
  return {
    type :actionTypes.GET_HOME_SUCCESS,
    data
  }
}
export function getHomeSliders (){
  return {
    type : actionTypes.GET_HOME_SLIDERS
  }
}
export function getHomeSlidersSuccess (data) {
  return {
    type :actionTypes.GET_HOME_SLIDERS_SUCCESS,
    data
  }
}
export function getHomeClient (){
  return {
    type : actionTypes.GET_HOME_CLIENT
  }
}
export function getHomeClientSuccess (data) {
  return {
    type :actionTypes.GET_HOME_CLIENT_SUCCESS,
    data
  }
}
export function getManifesto (){
  return {
    type : actionTypes.GET_MANIFESTO
  }
}
export function getManifestoSuccess (data) {
  return {
    type :actionTypes.GET_MANIFESTO_SUCCESS,
    data
  }
}
export function getFooter (){
  return {
    type : actionTypes.GET_FOOTER
  }
}
export function getFooterSuccess (data) {
  return {
    type :actionTypes.GET_FOOTER_SUCCESS,
    data
  }
}
export function getStudio (){
  return {
    type : actionTypes.GET_STUDIO
  }
}
export function getStudioSuccess (data) {
  return {
    type :actionTypes.GET_STUDIO_SUCCESS,
    data
  }
}
export function getWwd (){
  return {
    type : actionTypes.GET_WWD
  }
}

export function getWwdSuccess (data) {
  return {
    type :actionTypes.GET_WWD_SUCCESS,
    data
  }
}

export function getWwdProcess (){
  return {
    type : actionTypes.GET_WWD_PROCESS
  }
}

export function getWwdProcessSuccess (data){
  return {
    type : actionTypes.GET_WWD_PROCESS_SUCCESS,
    data
  }
}

export function getWorks (){
  return {
    type : actionTypes.GET_WORKS
  }
}
export function getWorksSuccess (data) {
  return {
    type :actionTypes.GET_WORKS_SUCCESS,
    data
  }
}
export function getWorksList (id){
  return {
    type : actionTypes.GET_WORKS_LIST,
    payload : {
      "id" : id
    }
  }
}
export function getWorksListByCat (id){
  return {
    type : actionTypes.GET_WORKS_LIST,
    payload : {
      "id" : id
    }
  }
}
export function getWorksListSuccess (data) {
  return {
    type :actionTypes.GET_WORKS_LIST_SUCCESS,
    data
  }
}
export function getWorksListSingle (id){
  return {
    type : actionTypes.GET_WORKS_LIST_SINGLE,
    payload : {
      "id": id
    }
  }
}
export function getWorksListSingleSuccess (data) {
  return {
    type :actionTypes.GET_WORKS_LIST_SINGLE_SUCCESS,
    data
  }
}

export function getWorkCategories (){
  return {
    type : actionTypes.GET_WORK_CATEGORIES
  }
}
export function getWorkCategoriesSuccess (data) {
  return {
    type :actionTypes.GET_WORK_CATEGORIES_SUCCESS,
    data
  }
}