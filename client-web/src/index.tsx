
// import ReactDOM from "react-dom"; deprecated
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "App";

// MUI Context Provider
import { MaterialUIControllerProvider } from "context";
import { RecoilRoot } from "recoil";

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <RecoilRoot>
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
    </BrowserRouter>
  </RecoilRoot>,
  // document.getElementById("root")
);
