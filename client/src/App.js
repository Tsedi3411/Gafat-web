import { RouterProvider } from 'react-router-dom';
import './app.css'
import router from './router';
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import Loader from './Components/Loader';




function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false); 
      }, 3000);

      return () => clearTimeout(timer); 
  }, []);
  return (
    <>
    <div>
    {isLoading ? (
                <Loader /> 
            ) : (
    <div className="App">  
      <RouterProvider router={router} />
    </div>
    )}
    </div>
    </>);
}

export default App;
