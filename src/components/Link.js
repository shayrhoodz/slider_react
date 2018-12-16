import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.active ? 'pink' : '#fff'}; /*если есть свойство актив, то цвет розовый, иначе белый*/
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  padding-right: 33px;
  border-right: 1px dotted #fff

  &:hover {
    color: #8d8d8d;
    text-decoration: none;
    cursor: pointer;
  }
  &:last-child {
    border-right: none;
  }
`

class Link extends React.Component {
  render() {
    return (
      <StyledLink href={this.props.Link}> {this.props.text} </StyledLink>
    )
  }
}

export default Link