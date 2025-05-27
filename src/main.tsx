import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN!}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID!}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >

        
        <TaskProvider>
          <App />
        </TaskProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
