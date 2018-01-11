import React, { Component } from 'react'
import styled from 'styled-components'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import ReactDOM from 'react-dom'
import { Motion, spring } from 'react-motion'
import Dots from './Dots'

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  display: none;
  @media (min-width: 993px){
    display: block;
  }
`

const Container = styled.div`
  position: relative;
  max-width: 1170px;
  margin: 0 auto;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  overflow: hidden;
  & img {
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
  }
`

const ItemWrap = styled.div`
  display: inline-block;
  vertical-align: top;
`

const ItemsWrapper = styled.div`
  position: relative;
  cursor: -webkit-grab;
`

class Carousel extends Component {

  state = {
    width: 1170, // Set a default value
  }

  componentDidMount = () => {

    this.calcWidth()

    document.body.addEventListener('mouseup', this.onMouseUp)
    document.body.addEventListener('touchend', this.onMouseUp)
    document.body.addEventListener('mousemove', this.onMouseMove)
    document.body.addEventListener('touchmove', this.onMouseMove)
    document.body.addEventListener('orientationchange', this.calcWidth)
    document.body.addEventListener('resize', this.calcWidth)
  };

  calcWidth = () => {
    var el = ReactDOM.findDOMNode(this.container_)
    this.setState({
      width: el.clientWidth,
    })
  };

  componentWillUnmount = () => {
    document.body.removeEventListener('mouseup', this.onMouseUp)
    document.body.removeEventListener('touchend', this.onMouseUp)
    document.body.removeEventListener('mousemove', this.onMouseMove)
    document.body.removeEventListener('touchmove', this.onMouseMove)
    document.body.removeEventListener('orientationchange', this.calcWidth)
    document.body.removeEventListener('resize', this.calcWidth)
  };

  onMouseDown = (e) => {
    
    this.setState({
      dragging: true,
      dragStartX: e.touches ? e.touches[0].pageX : e.pageX, // TODO Make compatible with touches
      startTranslateX: this.state.translateX,
      startTime: new Date,
    })
  };

  onMouseMove = (e) => {
    
    const { dragging, dragStartX, startTranslateX } = this.state
    if (!dragging) return

    const diff = (startTranslateX || 0) + ((e.touches ? e.touches[0].pageX : e.pageX) - dragStartX)
    const delta = ((e.touches ? e.touches[0].pageX : e.pageX) - dragStartX) > 0 ? 1 : -1
    this.setState({
      translateX: diff,
      delta,
    })
  }

  onMouseUp = (e) => {

    // Snap to closest item
    var { translateX, startTranslateX, width, startTime, delta } = this.state
    
    // If the mouse down and mouse up both happen within this time
    // frame then consider it a flick and move it on to the next
    // item in the direction
    const flickExpireTime = 1000

    if (((new Date) - startTime) < flickExpireTime){
      this.setTranslateX(Math.round(((startTranslateX || 0) / width) + delta) * width)
    } else { 
      this.setTranslateX(Math.round(translateX / width) * width)
    }

    this.setState({ dragging: false, })
  };

  setTranslateX = (x) => {

    // Set upper and lower bounds
    x = Math.max(
      - ((this.props.items.length - 1) * this.state.width),
      Math.min(0, x),
    )

    this.setState({ translateX: x })
  };

  navigate = (delta) => {
    var { translateX, width } = this.state
    this.setTranslateX(Math.round(((translateX || 0) / width) + delta) * width)
  };

  onNext = () => this.navigate(-1);

  onPrev = () => this.navigate(1);

  render = () => {
    const { items } = this.props
    const { width, translateX, dragging } = this.state
    
    return <Motion 
      defaultStyle={{ translateX: 0, }} 
      style={{
        translateX: spring(translateX || 0, {stiffness: 210, damping: 36})
      }}
    >
      {motionValues => {
        var x = motionValues.translateX
        return <Container ref={el => this.container_ = el}>
          <ItemsWrapper 
            onMouseDown={this.onMouseDown}
            onTouchStart={this.onMouseDown}
            style={{
              width: items.length * width,
              transform: x ? `translateX(${x}px)` : undefined,
            }}
          >
            {items.map(item => <ItemWrap style={{width}}>
              {item}
            </ItemWrap>)}
          </ItemsWrapper>
          <Button style={{left: 0}} onClick={this.onPrev}>
            <ArrowLeft style={{opacity: 0.5}} />
          </Button>
          <Button style={{right: 0}} onClick={this.onNext}>
            <ArrowRight style={{opacity: 0.5}} />
          </Button>
          <Dots 
            total={items.length} 
            selectedIndex={calculateIndex(((translateX || 0) * -1), width)}
          />
        </Container>
      }}
    </Motion>
  }
}

export default Carousel

/**
 * Figured out what index x would be at if each index was represented by the 
 * length of the boundy.
 * For example if x was 750 and the boundaryX was 500, then the index returned
 * would be 1.
 */
function calculateIndex(x, boundaryX){
  var r = x % boundaryX
  return Math.round((x - r) / boundaryX)
}