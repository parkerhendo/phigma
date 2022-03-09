import * as React from 'react';
import { useAtom } from 'jotai';

import {
  bringToFront,
  sendToBack,
  bringForward,
  sendBackward,
} from './utils/repositionLayers';

import pageStateAtom, { Layer } from './state/page-state';



const LayerItem = ({
  layer,
  key,
  onBTFClick,
  onBFClick,
  onSBClick,
  onSTBClick
}: {
  layer: Layer,
  key: any,
  onBTFClick: () => void,
  onBFClick: () => void,
  onSBClick: () => void,
  onSTBClick: () => void
}) => {
  const [md, setMd] = React.useState(false);
  return (
    <div key={key} style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: 512,
      padding: "8px 16px",
      borderBottom: '1px solid #ccc',
      backgroundColor: md ? '#eee' : '#fff',
    }}
      onMouseDown={() => setMd(true)}
      onMouseUp={() => setMd(false)}>
      <p>{layer.name}</p>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 8,
      }}>
        <button onClick={onBTFClick}>Bring to front</button>
        <button onClick={onBFClick}>Bring forward</button>
        <button onClick={onSBClick}>Send backward</button>
        <button onClick={onSTBClick}>Send to back</button>
      </div>
    </div>
  )
}

function App() {
  const [val, setVal] = React.useState("");
  const [pageState, setPageState] = useAtom(pageStateAtom);

  const updatePageState = () => {
    setPageState([
      ...pageState,
      {
        id: val,
        name: val
      }
    ]);
    setVal('');
  };

  const handleBTFClick = (ids: string[]) => {
    const s = bringToFront(pageState, ids);
    setPageState(s);
  };

  const handleBFClick = (ids: string[]) => {
    const s = bringForward(pageState, ids);
    setPageState(s);
  };

  const handleSBClick = (ids: string[]) => {
    const s = sendBackward(pageState, ids);
    setPageState(s);
  };

  const handleSTDClick = (ids: string[]) => {
    const s = sendToBack(pageState, ids);
    setPageState(s);
  };

  return (
    <div className="App">
      <div className='input-container'>
        <input type='text' value={val} onChange={(e) => setVal(e.target.value)} onKeyPress={(e) => {
          if (e.key === 'Enter') {
            updatePageState();
          }
        }} />
        <button onClick={() => updatePageState()}>Add layer</button>
      </div>
      {pageState.map((layer, index) => (
        <LayerItem
          key={index}
          layer={layer}
          onBTFClick={() => handleBTFClick([layer.id])}
          onBFClick={() => handleBFClick([layer.id])}
          onSBClick={() => handleSBClick([layer.id])}
          onSTBClick={() => handleSTDClick([layer.id])}
        />
      ))}
    </div>
  );
}

export default App;
