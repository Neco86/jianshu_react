 import React,{ PureComponent } from 'react'
 import { DetailWrapper,Header,Content } from './style'
 import { connect } from 'react-redux'
 import { actionCreators }   from './store'
 import { withRouter } from 'react-router-dom'
 class Detail extends PureComponent{
    render(){
        const { title,content } =this.props
        return(
            <div>
                <DetailWrapper>
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{__html: content}}/>
                </DetailWrapper>
            </div>
            )
    }

    componentDidMount(){
        this.props.getDetail(this.props.match.params.id)
        window.scrollTo(0,0);
    }
 }
const mapDispatchToProps=(dispatch)=>{
        return {
            getDetail(id){
                dispatch(actionCreators.getDetail(id))
            }
        }
}
const mapStateToProps=(state)=>{
        return {
            title:state.getIn(['detail','title']),
            content:state.getIn(['detail','content'])
        }
    }
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));