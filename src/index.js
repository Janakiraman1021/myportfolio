import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App';
import './index.css'; // Import your global styles if applicable

// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root and render the App component
const root = createRoot(container); // Use createRoot instead of ReactDOM.render
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your app in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
