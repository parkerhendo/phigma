import React from 'react'
import styled from 'styled-components';

const LayerPanel = () => {
  return (
    <StyledLayerPanel>LayerPanel</StyledLayerPanel>
  )
}

const StyledLayerPanel = styled.div`
  background-color: #fff;
  grid-row: 2 / 4;
  grid-column: 0 / 1;
`;

export default LayerPanel;
