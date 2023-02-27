//local page import
import Navi from "./tool/Navi";
import Introduce from "./page/introduce/introduce";
import SignupSelect from "./page/Signup/SignupSelect.js";
import Signup1 from "./page/Signup/Signup1";
import Signup2 from "./page/Signup/Signup2";
import Profile from "./page/profile/profile";
import Posts from "./page/Posts/posts.js";
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
        <Route path="/introduce" element={<Introduce />} />
        <Route path="/signupselect" element={<SignupSelect />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>

      <footer className="py-3 my-4">
        <hr />
        <p className="text-center text-muted">© 2022 Company, Inc</p>
      </footer>
    </div>
  );
}

export default App;
