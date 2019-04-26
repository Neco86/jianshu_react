 import React,{ Component } from 'react'
 import { LoginWrapper,LoginBox,Input,Button,Title,Item } from './style'
 import { connect } from 'react-redux'
 import { actionCreators }   from './store'
 import { Redirect } from 'react-router-dom'
 import { Link } from 'react-router-dom'
 class Login extends Component{
    render(){
        const { loginStatus,active } =this.props
        if ( !loginStatus ) {
             return(
            <LoginWrapper>
                <LoginBox>
                    <Title>
                        <Link to='/login/in'>
                            <Item className={active?"active":""}>登录</Item>
                        </Link>
                        <span>·</span>
                        <Link to='/login/up'>
                            <Item className={active?"":"active"}>注册</Item>
                        </Link>
                    </Title>
                    <Input placeholder='账号' ref={(input)=>{this.account=input}}/>
                    <Input placeholder='密码' type='password' ref={(input)=>{this.password=input}}/>
                    <Button onClick={active?()=>this.props.login(this.account,this.password):()=>this.props.register(this.account,this.password)} className={active?"":"zhuce"}>{active?"登录":"注册"}</Button>
                </LoginBox>
            </LoginWrapper>
            )
         }else {
            return <Redirect to='/'/>
         }
       
    }
    componentDidMount(){
        this.props.setActive(this.props.match.params.type)
    }
    componentDidUpdate(){
        this.props.setActive(this.props.match.params.type)
    }
 }
const mapDispatchToProps=(dispatch)=>{
    return {
        login(accountElem,passwordElem){
            dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        },
        register(accountElem,passwordElem){
            dispatch(actionCreators.register(accountElem.value,passwordElem.value))
        },
        setActive(type){
            const active=type==='in'?true:false
            dispatch(actionCreators.initActive(active))
        }
    }
}
const mapStateToProps=(state)=>{
    return {
        loginStatus:state.getIn(['login','login']),
        active:state.getIn(['login','active'])
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Login);