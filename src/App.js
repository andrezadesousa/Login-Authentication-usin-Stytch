import "./App.css";
// import { useCallback } from "react";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { StytchProvider } from "@stytch/react";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ResetPassword } from "./pages/resetPassword/ResetPassword";

function App() {

  const stytchClient = new StytchHeadlessClient(
    ""
  );

  const logout = () => {
    stytchClient.session.revoke()
  };

  return (
    <div className="App">
     <Router>
      <Link to="/signup">SignUp</Link>
      <Link to="/auth">Login</Link>c
      <StytchProvider stytch={stytchClient}>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/resetpassword/*" element={<ResetPassword />}></Route>
        </Routes>
        <button onClick={logout}>Logout</button>
      </StytchProvider>
     </Router>
    </div> 
  );
}

export default App;
