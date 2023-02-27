//local page import
import Navi from './tool/Navi';
import MainPage from './page/main/main.js'
import Introduce from './page/introduce/introduce';
import SignupSelect from './page/Signup/SignupSelect.js';
import Signup1 from './page/Signup/Signup1';
import Signup2 from './page/Signup/Signup2';
import Profile from "./page/profile/profile";
import Login from "./page/Login/Login";
import Posts from "./page/Posts/posts.js";
import PostCreate from './page/Posts/posts_create.js';
//bootstrap import

//hook import
import { Route, Routes, useNavigate } from "react-router-dom";

//style import
import "./App.css"; 

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navi></Navi>
      <Routes>
        <Route path='/' element={<MainPage /> } />
        <Route path='/introduce' element={<Introduce/>} />
        <Route path='/signupselect' element={<SignupSelect/>} />
        <Route path='/signup1' element={<Signup1/>} />
        <Route path='/signup2' element={<Signup2/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path="/posts" element={<Posts />} />
        <Route path='/posts_create' element={<PostCreate />} />
        <Route path='/posts_update' element={<Posts />} />
      </Routes>

      <footer className="py-3 my-4">
        <hr />
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default App;
