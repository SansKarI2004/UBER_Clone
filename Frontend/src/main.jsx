import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import your styles
import App from './App.jsx'; // Import the main App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { UserProvider } from './context/UserContext.jsx'; // Use UserProvider
import { CaptainContext } from './context/CaptainContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CaptainContext>
    <UserProvider> {/* Wrap App in UserProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>

    </CaptainContext>
    
  </StrictMode>
);