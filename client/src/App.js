import { RouterProvider } from 'react-router-dom';

import './app.css'
import router from './router';
import { createContext } from 'react';
import { useState } from 'react';
// import ParallaxComponent from './Components/ParallaxComponent';

const NewsContext = createContext()




function App() {
  const [latestNews, setLatestNews] = useState(null)
  return (
    <div className="App">

      {/* <NewsContext.Provider value={{ latestNews, setLatestNews }}>
        
      </NewsContext.Provider> */}
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
