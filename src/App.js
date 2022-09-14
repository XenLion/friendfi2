import Home from "./Pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
