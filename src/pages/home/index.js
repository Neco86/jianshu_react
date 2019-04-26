import React,{ PureComponent } from 'react'
import { HomeWrapper,HomeLeft,HomeRight,BackTop } from './style.js'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writter from './components/Writter'
import Carousel from './components/Carousel'
import { actionCreators } from './store'
import { connect } from 'react-redux'

 class Home extends PureComponent{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Carousel/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writter/>
                </HomeRight>
                { this.props.showScroll?<BackTop onClick={this.handleScrollTop}>⇑</BackTop>:null  }
                
            </HomeWrapper>
            )
    }
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    bindEvents(){
        window.addEventListener("scroll",this.props.changeScrollTopShow)
    }
    componentDidMount(){
        this.props.handleDidMount();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.props.changeScrollTopShow)
    }
 }
 const mapDispatchToProps=(dispatch)=>{
        return {
            handleDidMount(){
                dispatch(actionCreators.getInitList())
            },
            changeScrollTopShow(){
                if (document.documentElement.scrollTop>200) {
                    dispatch(actionCreators.toggleTopShow(true))
                }else {
                    dispatch(actionCreators.toggleTopShow(false))
                }
            }
        }
}
const mapStateToProps=(state)=>{
        return {
            showScroll:state.getIn(['home','showScroll'])
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Home);