import * as actionTypes from './actionTypes'
const { fromJS } = require('immutable')
const defaultState=fromJS({
            topicList:[],
            articleList:[],
            recommendList:[],
            carouselList:[],
            writterList:[],
            page:1,
            totalPage:1,
            articlePage: 1,
            showScroll:false
        })
const changeHomeData = (state,action) => {
    return state.merge({
                topicList:action.topicList,
                articleList:action.articleList,
                recommendList:action.recommendList,
                carouselList:action.carouselList,
                writterList:action.writterList,
                totalPage:action.totalPage
            })
}

export default (state=defaultState,action)=>{
    switch (action.type){
        case actionTypes.CHANGE_PAGE_LIST:
            return state.set('page',action.page)
        case actionTypes.INIT_LIST:
            return changeHomeData(state,action)
        case actionTypes.MORE_LIST:
            return state.set('articleList',state.get('articleList').concat(action.data)).set('articlePage',action.page)
        case actionTypes.TOGGLE_SCROLL_SHOW:
            return state.set('showScroll',action.flag)
        default: 
            return state
    }
}