import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
