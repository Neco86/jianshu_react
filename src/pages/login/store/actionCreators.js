import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')

export const login = (account,password)=>({
    type:actionTypes.LOGIN,
    account:account,
    password:password
})
export const register = (account,password)=>({
    type:actionTypes.REGISTER,
    account:account,
    password:password
})
export const getLogin = (data)=>({
    type:actionTypes.GETLOGIN,
    login:fromJS(data.data),
    username:fromJS(data.username),
    imgUrl:fromJS(data.imgUrl),
    userId:fromJS(data.userId)
})
export const getRegister = (data) =>({
    type:actionTypes.GETREGISTER,
    register:fromJS(data.data),
    username:fromJS(data.username),
    imgUrl:fromJS(data.imgUrl),
    userId:fromJS(data.userId)   
})
export const logout = ()=>({
    type:actionTypes.LOGOUT
})
export const initActive=(active)=>({
    type:actionTypes.INITACTIVE,
    active:active
})