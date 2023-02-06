import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain={import.meta.env.VITE_APP_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_APP_CLIENT_SECRET}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation="localstorage">
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
)
