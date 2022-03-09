import * as React from 'react';
import { Layer } from '../../state/page-state';

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

export default LayerItem;