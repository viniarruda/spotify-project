import React from 'react'
import styled from 'styled-components'
import theme from '../../../../components/theme'

const Range = styled.div`
  flex: 1;
  text-align: center;
  
  @media (max-width: ${theme.viewports.tablet}) {
    padding-right: 10px;
  }
`;

const Input = styled.input`
  -webkit-appearance: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: ${theme.colors.primary};
    cursor: pointer;
    margin-top: -5px;
    transition : all .3s;
    border:0;
  }
  &:hover::-webkit-slider-thumb{
    box-shadow: 0px 0px 0px 4px rgba(29, 185, 84, 0.49);
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    cursor: pointer;
    background: #d8d8d8;
  }
`;

const PlayerRange = (props) => (
  <Range>
    <Input type="range" step="any" min="0" max="1" onChange={(e) => props.onChange(e.target.value)}  value={props.volume} />
  </Range>
);

export default PlayerRange