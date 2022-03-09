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

  const layer = pageState.find((layer) => layer.id === id);

  if (!layer) {
    throw new Error(`Layer with id ${id} not found`);
  }

  const handleStart = () => {
    setDragging(true);
  };

  const handleStop = () => {
    setDragging(false);
  };

  //@ts-ignore 
  const handleDrag = (e, ui) => {
    e.stopPropagation();
    e.preventDefault();

    const { x, y } = e;
    
    setPageState((pageState) => ([
      ...pageState.filter((layer) => layer.id !== id),
      {
        ...layer,
        pos: {
          x: layer.pos.x + ui.deltaX,
          y: layer.pos.y + ui.deltaY,
        }
      }
    ]));
  };

  React.useEffect(() => {
    console.log(dragging);
  }, [dragging])
  

  return (
    <Draggable
      handle=".handle"
      defaultPosition={layer.pos}
      position={layer.pos}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}>
      <div style={{
        height: 128,
        width: 128,
        backgroundColor: '#18A0FB',
      }}>Hello World</div>
    </Draggable>
  )
}

export default LayerItem;