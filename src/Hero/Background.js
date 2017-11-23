import React, { Component } from 'react'
import styled from 'styled-components'

class Background extends Component {

  state = {};

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll)
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.onScroll)
  };

  /* Do some really simple parallax */
  onScroll = (e) => this.setState({
    offset: window.scrollY * 0.5,
  })

  render = () => {

    const { style, ...otherProps } = this.props
    const { offset } = this.state

    const newStyle = Object.assign({}, style, {
      transform: `translate3d(0px, ${offset}px, 0px)`,
    })

    return <div {...otherProps} style={newStyle} />
  }
}

const StyledBackground = styled(Background)`
  background-image: url(${require('./serverroom_1600_0_84.jpg')});
  background-size: cover;
  z-index: 0;
  position: absolute;
  top: -90px;
  left: 0;
  right: 0;
  bottom: 0;

  transition: opacity .3s ease!important;
  transition-property: opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: initial;
  -webkit-transition: opacity .3s ease!important;
  -webkit-transform-style: preserve-3d;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
    z-index: 0;
  }
`

export default StyledBackground