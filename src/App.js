import "./App.css";
import Nav from "./Component/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Hr/register";
import LeaveApply from "./Component/Users/LeaveApply"
import PrivateComponent from "./Component/PrivateComponent";





function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
          <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route element={<PrivateComponent />} >
            <Route path="/register" element={<Register />}></Route>
            <Route path="/my-account" element={<h1>my-account</h1>}></Route>
            </Route>
            
            <Route path="/leave-apply" element={<LeaveApply />}></Route>
            <Route path="/logout" element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
