import { useAtom } from 'jotai';
import { useHotkeys } from 'react-hotkeys-hook';
import { toast } from 'react-hot-toast';
import cameraStateAtom from '../state/camera-state';

import { resetZoom, zoomCameraTo, zoomIn, zoomOut } from '../utils/camera';


const useKeyboardShortcuts = () => {
    const [camera, setCamera] = useAtom(cameraStateAtom);

    useHotkeys('shift+0', () => {
        console.log("reset zoom");
        toast("Zoom to 100%");
        setCamera(camera => resetZoom(camera));
    });

    useHotkeys('shift+=', () => {
        console.log("zoom in");
        setCamera(camera => zoomIn(camera));
    })

    useHotkeys('shift+-', () => {
        console.log("zoom out");
        setCamera(camera => zoomOut(camera));
    })

    useHotkeys('shift+2', () => {
        console.log('zoom to fit');
        toast("Zoom to fit");
        setCamera(camera => zoomCameraTo(camera, { x: window.innerWidth / 2, y: window.innerHeight / 2 }, 1));
    })
}

export default useKeyboardShortcuts;