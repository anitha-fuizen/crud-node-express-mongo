
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users';
import Createuser from './Createuser';
import Update from './Update';

function App() {
  return (
   <div>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Users/>}/>
      <Route path='/create' element={<Createuser/>}/>
      <Route path='/update/:id' element={<Update/>}/>
     </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
