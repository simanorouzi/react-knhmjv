import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo data={[]} onSelect={} />
      <Demo data={[]} onSelect={} />
    </StyledEngineProvider>
  </React.StrictMode>
);