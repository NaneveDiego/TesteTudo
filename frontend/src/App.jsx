import {Routes, Route } from "react-router";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NewPage from "./pages/NewPost";
import Post from "./pages/Post";
import PostEdit from "./pages/PostEdit";

function App() {
  return (
    <>
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/edit/:id" element={<PostEdit />} />
        </Routes>
    </main>
      </>
  );
}

export default App;
