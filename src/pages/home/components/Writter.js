 import React,{ PureComponent } from 'react'
 import { WritterInfo,WritterInfoTitle,WritterInfoSwitch,WritterInfoList,WritterWrapper,WritterInfoItem } from '../style'
 import { connect } from 'react-redux'
 import { actionCreators } from '../store'

 class Writter extends PureComponent{
    render(){
        return( <WritterWrapper>
                    {this.getListArea()}
                </WritterWrapper>
                )
    }
    getListArea(){
        const { list,page,totalPage,handleChangePage } = this.props
        const newList = list.toJS();//把Immutable对象换成JS对象
        const pageList = [];
        if (newList.length){
            for (let i=(page-1)*5 ;i<page*5&&newList[i];i++){
            pageList.push(
                <WritterInfoItem key={newList[i].id}>
                    <img src={newList[i].imgUrl} alt='writter-img' className='writter-img'/>
                    <h3 className='writter-name'>{newList[i].name}</h3>
                    <p className='writter-desc'>{newList[i].desc}</p>
                </WritterInfoItem>)
        }
        }
        return (
            <WritterInfo>
                <WritterInfoTitle>
                    推荐作者
                    <WritterInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe600;</i>
                        换一批
                    </WritterInfoSwitch>
                    <WritterInfoList>
                        {
                            pageList
                        }
                    </WritterInfoList>
                </WritterInfoTitle>
            </WritterInfo>
            )
    }
 }
 const mapDispatchToProps=(dispatch)=>{
        return {
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
            }
        }
}
 const mapStateToProps=(state)=>{
        return {
            list:state.getIn(['home','writterList']),
            page:state.getIn(['home','page']),
            totalPage:state.getIn(['home','totalPage']),
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Writter);