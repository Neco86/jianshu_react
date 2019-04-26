import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')

export const getDetail = (id)=>({
    type:actionTypes.GET_DETAIL,
    id:id
})
export const detailText = (data)=>({
    type:actionTypes.DETAIL_TEXT,
    title:fromJS(data.title),
    content:fromJS(data.content)
})
