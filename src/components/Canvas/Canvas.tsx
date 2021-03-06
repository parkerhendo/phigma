import * as React from 'react'
import styled from 'styled-components';
import { useAtom } from 'jotai';

import { Camera, getViewport, panCamera, resetZoom, zoomCamera } from '../../utils/camera';
import pageStateAtom from '../../state/page-state';
import cameraStateAtom from '../../state/camera-state';
import LayerItem from '../Layer';

const Canvas = () => {


    const canvasRef = React.useRef<HTMLDivElement>(null);

    const [pageState, setPageState] = useAtom(pageStateAtom);

    const [viewport, setViewport] = React.useState({
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
        width: 0,
        height: 0,
    })

    const [camera, setCamera] = useAtom(cameraStateAtom);


    const handleWheel = (e: WheelEvent) => {
        e.preventDefault();

        const { clientX: x, clientY: y, deltaX, deltaY, ctrlKey } = e;

        if (ctrlKey) {
            setCamera((camera) => zoomCamera(camera, { x, y }, deltaY / 100));
        } else {
            setCamera((camera) => panCamera(camera, deltaX, deltaY));
        }
    };

    React.useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        canvas.addEventListener('wheel', handleWheel);

        console.log(camera)

        return () => {
            canvas.removeEventListener('wheel', handleWheel);
        }

    }, [canvasRef]);

    const transform = `scale(${camera.z}) translate(${camera.x}px, ${camera.y}px)`;

    return (
        <StyledCanvas ref={canvasRef}>
            <Layers transform={transform}>
                <LayerItem id="hello" />
            </Layers>
        </StyledCanvas>
    )
};

const Layers = styled.div<{ transform: string }>`
    height: 100%;
    width: 100%;
    transform: ${props => props.transform || 'none'};
`;

const StyledCanvas = styled.div`
    position: absolute;
    z-index: -999;
    height: 100vh;
    width: 100vw;
    background: #e5e5e5;
`;

export default Canvas;