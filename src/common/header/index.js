import React,{ Component,Fragment } from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,
        SearchInfoItem,SearchInfoList } from './style.js'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
import { actionCreators }   from './store'
import { actionCreators as  loginActionCreators} from '../../pages/login/store'
import { Link } from 'react-router-dom'
class Header extends Component {
    render(){
        const { focus,handleInputFocus,handleInputBlur,list,login,logout,username,imgUrl } = this.props
        return(
            <Fragment>
                <HeaderWrapper>
                    <Link to="/">
                        <Logo/>
                    </Link>
                    <Nav>
                        <Link to="/"><NavItem className='left active'>首页</NavItem></Link>
                        <NavItem className='left'>下载App</NavItem>
                        {
                            login?
                            <NavItem className='right' onClick={logout}>退出</NavItem>:
                            <Link to='/login/in'><NavItem className='right'>登录</NavItem></Link>
                        }
                        <NavItem className='right'>
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition  timeout={200} in={focus} classNames='slide'>
                                <NavSearch 
                                className={focus?'focused':''} 
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focus?'iconfont focused zoom':'iconfont zoom'}>&#xe623;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to='/write'>
                            <Button className='writting'>
                                <i className='iconfont'>&#xe603;</i>
                                写文章
                            </Button>
                        </Link>
                        {
                             login?
                             <Button className="user"><img src={imgUrl} alt=""/><span>{username}</span></Button>:
                             <Link to='/login/up'><Button className='reg'>注册</Button></Link>   
                        }
                    </Addition>
                </HeaderWrapper>
            </Fragment>
        )
    }
    getListArea(){
        const { focus,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage } = this.props
        const newList = list.toJS();//把Immutable对象换成JS对象
        const pageList=[];
        if (newList.length){
            for (let i=(page-1)*10 ;i<page*10;i++){
            pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
        }
        if (focus||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe600;</i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {
                                pageList
                            }
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
                )
        }else{
            return null
        }
    }
}
const mapStateToProps=(state)=>{
        return {
            focus:state.getIn(['header','focus']),
            list:state.getIn(['header','list']),
            page:state.getIn(['header','page']),
            mouseIn:state.getIn(['header','mouseIn']),
            totalPage:state.getIn(['header','totalPage']),
            login:state.getIn(['login','login']),
            username:state.getIn(['login','username']),
            imgUrl:state.getIn(['login','imgUrl'])
        }
    }
const mapDispatchToProps=(dispatch)=>{
        return {
            handleInputFocus(list){
                if (list.size===0){
                    dispatch(actionCreators.getListAction())
                }
                dispatch(actionCreators.getInputFoucusAction())
            },
            handleInputBlur(){
                dispatch(actionCreators.getInputBlurAction())
            },
            handleMouseEnter(){
                dispatch(actionCreators.mouseEnter())
            },
            handleMouseLeave(){
                dispatch(actionCreators.mouseLeave())
            },
            handleChangePage(page,totalPage,spin){
                let originAngle=spin.style.transform.replace(/[^0-9]/ig,'')
                if (originAngle){
                    originAngle=parseInt(originAngle,10);//转化10进制数字
                }else{
                    originAngle=0
                }
                spin.style.transform='rotate('+(originAngle+360)+'deg)'
                if (page<totalPage) {
                    dispatch(actionCreators.changePageList(page+1))
                }else{
                    dispatch(actionCreators.changePageList(1))
                }
            },
            logout(){
                dispatch(loginActionCreators.logout())
            }
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Header);