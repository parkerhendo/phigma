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
        height: 128,
        width: 128,
        backgroundColor: '#18A0FB',
      }}>Hello World</div>
    // </Draggable>
  )
}

export default LayerItem;