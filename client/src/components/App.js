
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter'

import Provider from '../context/Provider';


function App() {
  return (
    <Provider>
    <BrowserRouter>
    <MainRouter/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
