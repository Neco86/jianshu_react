import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
        title:'',
        content:''
        })
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.DETAIL_TEXT:
            return state.merge({title:action.title,'content':action.content})
        default: 
            return state
    }
}