import styled from 'styled-components';

const LayoutGrid = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    grid-template-columns: 240px auto 240px;
    grid-template-rows: 52px auto;
    overflow: hidden;
`;

export default LayoutGrid;