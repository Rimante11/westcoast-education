import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ListContextProvider } from './store/list-context';
import index from './styles/index.css'
console.log(index);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ListContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </ListContextProvider>
);


