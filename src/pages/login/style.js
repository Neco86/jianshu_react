import styled from 'styled-components'
export const LoginWrapper = styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:56px;
    background:#eee;
`
export const LoginBox = styled.div`
    width:400px;
    height:300px;
    margin:100px auto;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,.1);
    padding-top:20px;
`
export const Input = styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px;
    padding:0 10px;
    margin:10px auto;
    color:#777;
    border:1px solid #ddd;
`
export const Button = styled.div`
    width:200px;
    height:30px;
    line-height:30px;
    color:#fff;
    background:#3194d0;
    border-radius:15px;
    margin:10px auto;
    text-align:center;
    cursor:pointer;
    &.zhuce{
        background:#42c02e
    }
`
export const Title = styled.div`
    height:80px;
    padding:0 140px;
    span{
        display:inline-block;
        font-size:18px;
        color:#969696;
    }
`
export const Item = styled.span`
    display:inline-block;
    width:47%;
    margin:30px 0;
    font-size:18px;
    color:#969696;
    text-align:center;
    cursor:pointer;
    &.active{
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
`