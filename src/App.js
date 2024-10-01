
import './App.css';

import CountryBox from './Components/Countries/CountryBox/CountryBox';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homepage from '../src/Pages/Homepage/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Pages/Errorpage/Error';
import Rootlayout from './Components/RootLayout/Rootlayout.jsx';
import Todopage from './Pages/Todopage/Todo.jsx';



function App() {
 
  
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Homepage/>}></Route>
      <Route path='todo' element={<Todopage/>}></Route>
      <Route path='country' element={<CountryBox/>}></Route>
      </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
