import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')

export const getInputFoucusAction = ()=>({
    type:actionTypes.HANDLE_INPUT_FOUCUS
})

export const getInputBlurAction = ()=>({
    type:actionTypes.HANDLE_INPUT_BLUR
})
export const getListAction = ()=>({
    type:actionTypes.HANDLE_GET_LIST
})
export const initListAction = (data)=>({
    type:actionTypes.GET_INIT_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const mouseEnter = ()=>({
    type:actionTypes.MOUSE_ENTER,
})
export const mouseLeave = ()=>({
    type:actionTypes.MOUSE_LEAVE,
})
export const changePageList = (page)=>({
    type:actionTypes.CHANGE_PAGE_LIST,
    page
})

