import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
        login:false,
        active:true,
        username:"",
        imgUrl:"",
        userId:""
        })
export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.GETLOGIN:
            if (action.login){
                return state.merge({'login':action.login,'username':action.username,'imgUrl':action.imgUrl,'userId':action.userId})
            }else{
                alert('用户名或密码错误')
                return state
            }
        case actionTypes.GETREGISTER:
            if (action.register){
                return state.merge({'login':action.register,'username':action.username,'imgUrl':action.imgUrl,'userId':action.userId})
            }else{
                alert('用户名已存在')
                return state
            }
        case actionTypes.LOGOUT:
            return state.set('login',false)
        case actionTypes.INITACTIVE:
            return state.set('active',action.active)
        default: 
            return state
    }
}