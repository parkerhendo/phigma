import * as React from 'react';
import { useAtom } from 'jotai';
import Draggable from 'react-draggable';

import pageStateAtom, { Layer } from '../../state/page-state';

interface LayerItemProps {
  id: string;
}

const LayerItem = ({ id }: LayerItemProps) => {
  const [dragging, setDragging] = React.useState(false);
  const [pageState, setPageState] = useAtom(pageStateAtom);


  return (
    // <Draggable
    //   handle=".handle"
    //   defaultPosition={layer.pos}
    //   position={layer.pos}
    //   onStart={handleStart}
    //   onDrag={handleDrag}
    //   onStop={handleStop}>
      <div style={{
        height: 400,
        width: 400,
        position: 'absolute',
        top: window.innerHeight / 2,
        left: window.innerWidth / 2,
        fontSize: 64,
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#18A0FB',
      }}>Welcome to Phigma</div>
    // </Draggable>
  )
}

export default LayerItem;