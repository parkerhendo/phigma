import React from 'react'
import styled from 'styled-components';

const InfoSidebar = () => {
  return (
    <StyledInfoPanel>InfoSidebar</StyledInfoPanel>
  )
}

const StyledInfoPanel = styled.div`
  z-index: 999;
  background-color: #fff;
  grid-row: 2 / 4;
  grid-column: 3 / 4;
`;


export default InfoSidebar;
