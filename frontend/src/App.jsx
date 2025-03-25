import {Routes, Route } from "react-router";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import NewPage from "./pages/NewPost";

function App() {
  return (
    <>
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>
    </main>
      </>
  );
}

export default App;
