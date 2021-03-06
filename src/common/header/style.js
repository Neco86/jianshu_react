import styled from 'styled-components'
import logPic from '../../statics/logo.png'
export const HeaderWrapper=styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0
    position:relative
    width:1350px;

`
export const Logo=styled.div`
    display: block;
    height:56px;
    width: 100px;
    position:absolute;
    top: 0;
    left: 0;
    background: url(${logPic});
    background-size: contain;
`
export const Nav=styled.div`
    box-sizing:border-box; 
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right:70px;
`
export const NavItem=styled.div`
    line-height: 56px;
    padding:0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color: #969696;
        cursor:pointer;
    }
    &.active {
        color:#ea6f5a;
    }         
`
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    box-sizing:border-box;
    background: #eee;
    margin-top: 9px;
    padding: 0 30px 0 20px;
    font-size: 14px;
    margin-left: 20px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter{
        transition:all .2s ease-out;
        width:160px;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all .2s ease-out;
        width:240px;
    }
    &.slide-exit-active{
        width:160px;
    }
`
export const Addition=styled.div`
    position:absolute;
    right: 0;
    top: 0;
    height:56px;
`
export const Button=styled.div`
    float:right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    border: 1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg {
        color:#ec6149;
    }
    &.writting {
        color:#fff;
        background: #ec6149;
    }
    &.user{
        border:none;
        img{
            border-radius: 50%;
            width: 44px;
            width: 32px;
            margin-right: 10px;
        }
        span{
            display:inline-block;
            width:3rem;
            height:1rem;
            line-height:1rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
            position:relative;
            top:3px;
        }
    }
`
export const SearchWrapper=styled.div`
    float:left;
    position:relative;
    .zoom {
        position:absolute;
        right:5px;
        bottom: 5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`
export const SearchInfo=styled.div`
    position:absolute;
    left:0;
    top: 56px;
    width:260px;
    padding: 0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
    background:#fff;
    z-index:999;
    margin-left:20px;
`
export const SearchInfoTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch=styled.span`
    float:right;
    font-size:13px;
    cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition: all .2s ease-in;
        transform-origin:center center;
    }
`
export const SearchInfoItem=styled.a`
    display: block;
    float:left;
    font-size:12px;
    padding: 0 5px;
    line-height: 20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    margin-right:10px;
    margin-top:15px;
`
export const SearchInfoList=styled.div`
    overflow:hidden;
    width:240px;
`