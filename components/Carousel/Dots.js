import React, { Component } from 'react'
import styled from 'styled-components'

const Point = styled.li`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
  opacity: ${props => props.selected ? 1 : 0.25};
  background-color: #252525;
  margin-left: 6.5px;
  margin-right: 6.5px;
  transition: .3s ease;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
`

const List = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style: none;
`

class Dots extends Component {
  render = () => {
    const { total, selectedIndex } = this.props
    var items = []
    for (var i = 0; i < total; i++){
      items.push(<Point selected={i==selectedIndex} />)
    }
    return <List>
      {items}
    </List>
  }
}

export default Dots