import styled from 'styled-components'

const Tag = styled.label`
  height: 26px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${props => props.pink ? '#e46784' : '#66457c'};
  color: white;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-size: ${props => props.pink ? '13px' : '15px'};
  line-height: 26px;
  font-weight: ${props => props.pink ? '500' : '600'};
  margin-bottom: 15px;
  margin-right: 15px;
`

export default Tag