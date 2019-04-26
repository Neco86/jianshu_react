import styled from 'styled-components'
export const WriteWrapper = styled.div`
    width:900px;
    margin:0 auto;
`
export const Header = styled.div`
    width:400px;
    background:#fff;
    margin:0 auto;
    text-align:center;
    color:#595959;
    font-size:20px;
    label{
        margin-right:50px;
    }
    input{
        border:none;
        outline:none;
        border-bottom:1px solid #595959;
        text-align:center;
    }
`
export const Content = styled.textarea`
    width:860px;
    margin:20px;
    border:1px solid #595959;
    outline:none;
    height:400px;
    padding:15px;
    resize:none;
`
export const ImgUpload = styled.div`
    margin:0 20px;
    // background:green;
    // text-align:center;
`
export const BottomWrapper = styled.div`
    width:860px;
    margin:20px;
    padding:15px;
    background:#404040;
    overflow:hidden;
    text-align:center;
    position:relative;
    border:1px solid #404040;
    top:-46px;
`
export const Button = styled.div`
    display:inline-block;
    width:135px;
    height:40px;
    text-align:center;
    line-height:40px
    background:#404040;
    border:1px solid #ec7259;
    color:#ec7259;
    font-size:15px;
    border-radius:20px;
`