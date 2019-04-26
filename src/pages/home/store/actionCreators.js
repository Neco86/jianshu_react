import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')

export const changePageList = (page)=>({
    type:actionTypes.CHANGE_PAGE_LIST,
    page
})

export const getInitList = ()=>({
    type:actionTypes.GET_INIT_LIST,
})

export const initListAction = (data)=>({
    type:actionTypes.INIT_LIST,
    topicList:fromJS(data.topicList),
    articleList:fromJS(data.articleList),
    recommendList:fromJS(data.recommendList),
    carouselList:fromJS(data.carouselList),
    writterList:fromJS(data.writterList),
    totalPage:fromJS(Math.ceil(data.writterList.length/5))
})

export const getMoreList = (page)=> ({
    type:actionTypes.GET_MORE_LIST,
    page
})

export const getMoreListAction = (data,page) => ({
    type:actionTypes.MORE_LIST,
    data:fromJS(data),
    page:fromJS(page)
})

export const toggleTopShow = (flag) => ({
    type:actionTypes.TOGGLE_SCROLL_SHOW,
    flag
})