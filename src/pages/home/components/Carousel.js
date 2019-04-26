 import React,{ PureComponent } from 'react'
 import { CarouselWrapper } from '../style'
 import { Carousel as CarouselInner } from 'antd';
 import { connect } from 'react-redux'
 class Carousel extends PureComponent{
    render(){
        const { carouselList } = this.props
        return(
                 <CarouselWrapper>
                    <CarouselInner autoplay>
                        {
                            carouselList.map((item)=>{
                                return (
                                    <img key={item.get('id')} className='banner-img' src={item.get('imgUrl')} alt="banner-img" />
                                    )
                            })
                        }
                    </CarouselInner>
                </CarouselWrapper>
            )
    }
 }
  const mapStateToProps=(state)=>{
        return {
            carouselList:state.getIn(['home','carouselList']),
        }
    }
export default connect(mapStateToProps,null)(Carousel);