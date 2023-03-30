//local page import
import Navi from "./tool/Navi";
import MainPage from "./page/main/main.js";
import Introduce from "./page/introduce/introduce";
import SignupSelect from "./page/Signup/SignupSelect.js";
import Signup1 from "./page/Signup/Signup1";
import Signup2 from "./page/Signup/Signup2";
import Profile from "./page/profile/profile";
import ProfileEdit from "./page/profile/profileEdit";
import Login from "./page/Login/Login";
import Posts from "./page/Posts/posts.js";
import Idealist from "./page/Posts/idea_list";
import Chat from "./page/ChatTest/chat.js";
import ChatList from "./page/ChatTest/chatlist";
import subject from "./subject.js";
import TranslatePage from "./tool/transfer";

import PostCreate from "./page/Posts/posts_create.js";
import PostDetail from "./page/Posts/posts_detail.js";

//bootstrap import

//hook import
import { Route, Routes, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

//style import
import "./App.css";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <div id="app_wrap">
      <Navi></Navi>

      <GoogleOAuthProvider
        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
      >
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/signupselect" element={<SignupSelect />} />
          <Route path="/signup1" element={<Signup1 />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/signupselect" element={<SignupSelect />} />
          <Route path="/posts/:id" element={<Posts />} />
          <Route path="/idea_list" element={<Idealist />} />
          <Route path="idea_list/:id" element={<PostDetail />} />
          <Route path="/posts_create" element={<PostCreate />} />
          <Route path="/posts_update" element={<PostCreate />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profileEdit" element={<ProfileEdit />} />

          <Route path="/chatlist" element={<ChatList />} />


        </Routes>
      </GoogleOAuthProvider>

      <footer className="footer">
        <hr />
        <p className="text-center text-muted">© 2023 Life Better, Idea Connection</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
