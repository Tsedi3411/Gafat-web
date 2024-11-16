import {  RouterProvider } from 'react-router-dom';

import './app.css'
import router from './router';




function App() {
  return (
    <div className="App">

<RouterProvider router={router} />

    </div>
  );
}

export default App;
