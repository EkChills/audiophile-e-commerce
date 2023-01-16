import React from 'react'
import styled from 'styled-components'

const DarkButton = ({text,bgColor,hover,bs,bc,solid, textCol,textColHover}) => {
  return (
    <Wrapper bgColor={bgColor} hover={hover} solid={solid} bs={bs} bc={bc} textCol={textCol} textColHover={textColHover} >
      <span className="butt">
        {text}
      </span>
    </Wrapper>
  )
}

const Wrapper = styled.button`
  color: ${(props) => props.textCol};
  font-size: 13px;
  text-transform: uppercase;
  padding: 0 1rem;
  height: 48px;
  background-color: ${(props) => props.bgColor};
  width: 11rem;
  transition: all .3s ease-in-out;
  border: ${(props) => props.bs} ${(props) => props.solid} ${(props => props.bc)};

  .butt {
    color: ${(props) => props.textCol} ;
  }

  .butt:hover {
    color: ${(props) => props.textColHover};
  }

  &:hover {
    background-color: ${(props) => props.hover}}
`

export default DarkButton