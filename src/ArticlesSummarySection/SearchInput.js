import React from 'react'
import styled from 'styled-components'

const SearchInput = styled.input`
  background-color: #f2f2f2;
  color: #737373;
  width: 400px;
  height: 50px;
  display: inline-block;
  vertical-align: middle;
  border: none;
  font-size: 18px;
  font-family: OpenSans;
  padding-left: 20px;
  padding-right: 63px;
  background-image: url(${require('./search-icn.png')});
  background-repeat: no-repeat;
  background-position: right 20px center;
  text-transform: uppercase;
`

export default SearchInput