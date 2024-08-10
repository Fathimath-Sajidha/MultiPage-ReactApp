
import './App.css';
import TodoListMain from './Components/TodoList/TodoListitems/Todolist.jsx';
import CountryBox from './Components/Countries/CountryBox/CountryBox';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './Pages/Error/Error.jsx';
import Rootlayout from './Components/RootLayout/Rootlayout.jsx';



function App() {
 
  
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Home/>}></Route>
      <Route path='todo' element={<TodoListMain/>}></Route>
      <Route path='country' element={<CountryBox/>}></Route>
      </Route>
      <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
