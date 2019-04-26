import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
        time:"",
        header:"",
        content:""
        })
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.SETTIME:
            return state.set('time',action.time)
        case actionTypes.CHANGEHEADER:
            return state.set('header',action.value)
        case actionTypes.CHANGECONTENT:
            return state.set('content',action.value)
        case actionTypes.GETUPLOAD:
            if(action.data){
                alert("上传成功")
                return state.merge({'header':"",'content':""})
            }else{
                alert("上传失败")
                return state
            }
        default:
            return state
    }
}