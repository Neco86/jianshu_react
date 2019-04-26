import {  put,takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { actionTypes as headerActionTypes,actionCreators as headerActionCreators }   from '../common/header/store'
import { actionTypes as homeActionTypes,actionCreators as homeActionCreators }   from '../pages/home/store'
import { actionTypes as detailActionTypes,actionCreators as detailActionCreators }   from '../pages/detail/store'
import { actionTypes as loginActionTypes,actionCreators as loginActionCreators }   from '../pages/login/store'
import { actionTypes as writeActionTypes,actionCreators as writeActionCreators } from '../pages/write/store'

import settings from '../etc/settings';
const Url = settings.url;

function* getHeaderList() {
  try {
      const res=yield axios.get(`${Url}headerList`);
      const data=res.data
      const action=headerActionCreators.initListAction(data.data)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* getHomeList(){
   try {
      //const res=yield axios.get('/api/homeList.json');
      const res=yield axios.get(`${Url}homeList`);
      const data=res.data
      const action=homeActionCreators.initListAction(data.data)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* getMoreHomeList(param){
   try {
      const res=yield axios.get(`${Url}moreHomeList?page=${param.page}`);
      const data=res.data
      const action=homeActionCreators.getMoreListAction(data.data,param.page+1)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* getDetail(param){
   try {
      const res=yield axios.get(`${Url}getDetail?id=${param.id}`);
      // const res=yield axios.get('/api/detail.json?id='+param.id)
      const data=res.data
      const action=detailActionCreators.detailText(data.data)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* login(param){
   try {
      //const res=yield axios.get('/api/login.json?account='+param.account+'&password='+param.password);
      const jsonParam=`{"username":"${param.account}","password":"${param.password}"}`
      const res=yield axios.post(`${Url}login/`, jsonParam)
      const data=res.data
      // console.log(data);
      const action=loginActionCreators.getLogin(data)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* register(param){
   try {
      //const res=yield axios.get('/api/register.json?account='+param.account+'&password='+param.password);
      const jsonParam=`{"username":"${param.account}","password":"${param.password}"}`
      const res=yield axios.post(`${Url}register/`, jsonParam)
      const data=res.data
      const action=loginActionCreators.getRegister(data)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* uploadpassage(param){
  try {
      const jsonParam=`{"title":"${param.header}","content":"${param.content}","user_id":"${param.userId}"}`
      const res=yield axios.post(`${Url}passage/`, jsonParam)
      const data=res.data
      const action=writeActionCreators.getUpload(data)
      yield put(action)
  }catch(e){
      console.log('json请求失败');
  }
}
function* mySaga() {
  yield takeEvery(headerActionTypes.HANDLE_GET_LIST, getHeaderList);
  yield takeEvery(homeActionTypes.GET_INIT_LIST, getHomeList);
  yield takeEvery(homeActionTypes.GET_MORE_LIST, getMoreHomeList);
  yield takeEvery(detailActionTypes.GET_DETAIL, getDetail);
  yield takeEvery(loginActionTypes.LOGIN, login);
  yield takeEvery(loginActionTypes.REGISTER, register);
  yield takeEvery(writeActionTypes.UPLOADPASSAGE,uploadpassage);
}


export default mySaga;