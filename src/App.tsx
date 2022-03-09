import * as React from 'react';

// import pageStateAtom, { Layer } from './state/page-state';

import LayoutGrid from './components/ui/LayoutGrid';

import Header from './components/Header';
import LayerPanel from './components/LayerPanel';
import Canvas from './components/Canvas';
import InfoSidebar from './components/InfoSidebar';





function App() {
  return (
    <LayoutGrid>
      <Canvas />
      <Header />
      <LayerPanel />
      <InfoSidebar />
    </LayoutGrid>
  );
}

export default App;
