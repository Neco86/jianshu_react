import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
            focus:false,
            mouseIn:false,
            list:[],
            page:1,
            totalPage:1
        })

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.HANDLE_INPUT_FOUCUS:
            return state.set('focus',true)
        case actionTypes.HANDLE_INPUT_BLUR:
            return state.set('focus',false)
        case actionTypes.GET_INIT_LIST:
            return state.merge({list:action.data,'totalPage':action.totalPage})
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false)
        case actionTypes.CHANGE_PAGE_LIST:
            return state.set('page',action.page)
        default: 
            return state
    }
}