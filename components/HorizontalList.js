import styled from 'styled-components'

export const List = styled.ul`
  list-style: none;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
`
export const Item = styled.li`
  font-family: 'Open Sans',Roboto,Helvetica,Sans-Serif;
  font-size: .857142857142857em;
  line-height: 2.166666666666667em;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: .5px;
  margin-right: 1.23809524em;
  transition: .3s ease;
  -webkit-transition: .3s ease;
  -moz-transition: .3s ease;
  color: #252525;
  opacity: 0.5;
  font-size: .857142857142857em;
  @media(min-width: 768px){
    display: inline-block;
  }
`

export const StyledLink = styled.a`
  font-size: .857142857142857em;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`