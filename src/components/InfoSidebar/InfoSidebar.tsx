import React from 'react'
import styled from 'styled-components';

const InfoSidebar = () => {
  return (
    <StyledInfoPanel>InfoSidebar</StyledInfoPanel>
  )
}

const StyledInfoPanel = styled.div`
  background-color: #fff;
  grid-row: 2 / 4;
  grid-column: 0 / 1;
`;


export default InfoSidebar;
