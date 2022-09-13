import Home from "./Pages/Home/Home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/">
              <Route index element={<Home/>}/>
          </Route>
      </Routes>
    </div>
  );
}

export default App;
