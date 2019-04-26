 import React,{ Component } from 'react'
 import { connect } from 'react-redux'
 import { Redirect } from 'react-router-dom'
 import { WriteWrapper,Header,Content,Button,BottomWrapper } from './style.js'
 // import { ImgUpload } from './style.js'
 import { actionCreators } from './store'
 class Write extends Component{
    render(){
        const { loginStatus,time,upload,header,content,changeHeader,changeContent,userId  } =this.props
        if ( loginStatus ) {
            return(
                <WriteWrapper>
                    <Header>
                        <input type="text" id="header" placeholder={time} value={header} onChange={changeHeader}/>
                    </Header>
                    <Content placeholder="文章正文" value={content} onChange={changeContent}/>
                    {/*<ImgUpload>
                        上传图片: <input type="file" accept="image/gif, image/jpeg, image/png, image/jpg"/>
                    </ImgUpload>*/}
                    <BottomWrapper>
                        <Button onClick={()=>upload(header,content,userId,time)}>提交</Button>
                    </BottomWrapper>
                </WriteWrapper>
            )  
         }else {
            return <Redirect to='/login/in'/>
         }
    }
    componentDidMount(){
        this.props.initTime()
    }
 }
const mapStateToProps=(state)=>{
    return {
        loginStatus:state.getIn(['login','login']),
        time:state.getIn(['write','time']),
        header:state.getIn(['write','header']),
        content:state.getIn(['write','content']),
        userId:state.getIn(['login','userId'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        initTime(){
            var myDate = new Date();
            myDate.toLocaleDateString(); 
            var time=`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
            dispatch(actionCreators.setTime(time))
        },
        changeHeader(e){
            dispatch(actionCreators.changeHeader(e.target.value))
        },
        changeContent(e){
            dispatch(actionCreators.changeContent(e.target.value))
        },
        upload(header,content,userId,time){
            header=header?header:time
            content=content?content:"文章正文"
            dispatch(actionCreators.uploadPassage(header,content,userId))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Write);