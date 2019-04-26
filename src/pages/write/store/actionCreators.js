import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')

export const setTime = (time)=>({
    type:actionTypes.SETTIME,
    time:time
})
export const changeHeader = (v)=>({
    type:actionTypes.CHANGEHEADER,
    value:v
})
export const changeContent = (v)=>({
    type:actionTypes.CHANGECONTENT,
    value:v
})
export const uploadPassage = (header,content,userId)=>({
    type:actionTypes.UPLOADPASSAGE,
    header:header,
    content:content,
    userId:userId
})
export const getUpload = (data)=>({
    type:actionTypes.GETUPLOAD,
    data:fromJS(data)
})