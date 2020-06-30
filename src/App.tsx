import React from 'react';
import { ThemeProvider } from './context/themeContext';
import Dashboard from './components/dashboard';


function App() {


  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
