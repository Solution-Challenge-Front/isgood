//local page import
import Navi from './tool/Navi';
import Introduce from './page/introduce/introduce';
//bootstrap import

//hook import
import {Route, Routes, useNavigate} from 'react-router-dom';

//style import
import './App.css';

function App() {

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navi></Navi>
      <Routes>
        <Route path='/introduce' element={<Introduce/>} />
      </Routes>

    </div>
  );
}

export default App;
