 import React,{ PureComponent } from 'react'
 import { RecommendWrapper } from '../style'
 import { connect } from 'react-redux'
 class Recommend extends PureComponent{
    render(){
        const { recommendList } = this.props
        return(
            <RecommendWrapper>
                {
                    recommendList.map((item)=>{return (
                        <img key={item.get('id')} className='pic' alt="pic" src={item.get('imgUrl')}/>
                        )})
                }
            </RecommendWrapper>
            )
    }
 }
 const mapStateToProps=(state)=>{
    return {
            recommendList:state.getIn(['home','recommendList']),
        }
 }
 export default connect(mapStateToProps,null)(Recommend)