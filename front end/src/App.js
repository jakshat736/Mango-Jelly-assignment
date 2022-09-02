import Home from "./AddItems";
import DashBoard from "./DashBoard";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <div >
   <Router>
      <Routes>
      <Route element={<DashBoard/>} path="/" />
              <Route element={<DashBoard/>} path="/dashboard/*" />
           
      </Routes>
    </Router>
    </div>
  );
}

export default App;
