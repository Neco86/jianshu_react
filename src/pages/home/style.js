import styled from 'styled-components'
export const HomeWrapper = styled.div`
    width: 1350px;
    margin: 0 auto;
    overflow:hidden;
` 
export const HomeLeft = styled.div`
    width: 650px;
    margin-left:180px;
    padding-top: 30px;
    float:left;
` 
export const HomeRight = styled.div`
    width: 500px;
    float:right;
` 
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;   
    border-radius:4px;
    padding-right:10px;
    margin-left:18px;
    margin-bottom:18px;
    .topic-pic {
        height:32px;
        width:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .listItem-img{
        width:125px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }
` 
export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`
export const CarouselWrapper = styled.div`
    z-index:-1;
    .banner-img{
        width: 625px;
        height: 270px;
        border-radius:4px;
    }
`
export const RecommendWrapper = styled.div`
    margin-top:25px;
    width:280px;
    .pic{
        width:100%;
        margin-bottom:8px
    }
`
export const WritterWrapper=styled.div`
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
export const WritterInfo=styled.div`
    position:absolute;
    left:0;
    width:280px;
    background:#fff;
`
export const WritterInfoTitle=styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const WritterInfoSwitch=styled.span`
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
export const WritterInfoList=styled.div`
    overflow:hidden;
    width:240px;
`
export const WritterInfoItem=styled.div`
    height:60px;
    .writter-img{
        border-radius:50%;
        width:44px;
        float:left;
        margin-top:8px;
        margin-left:5px;
        margin-right:10px;
    }
    .writter-name{
        margin-top:8px;
        font-size:14px;
    }
    .writter-desc{
        font-size:12px;
    }
`
export const LoadMore = styled.div`
    width:95%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    margin:30px auto;
    cursor:pointer;
`
export const BackTop = styled.div`
    position:fixed;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border: 1px solid #ccc;
    font-size:35px
    right:50px;
    bottom:50px;
`