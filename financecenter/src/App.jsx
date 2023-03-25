import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "./layouts";
import { Book } from "./pages/Book";
import { SignIn,SignUp } from "./pages/auth";
import { userContext } from "./context/usermodel";
import { whoContext } from "./context/whocontext";
import { Quickpay } from "./pages/dashboard/quickpay";
import {Editprofile} from "./pages/auth/editprofile"


function App() {
  const[person,setperson]=useState(JSON.parse(sessionStorage.getItem('user')));
  const[who,setwho]=useState(JSON.parse(sessionStorage.getItem('w')))

  return (
    <whoContext.Provider value={{who,setwho}}>
    <userContext.Provider value={{person,setperson}}>
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/auth/sign-in" element={<SignIn />} />
      <Route path="/auth/editprofile" element={<Editprofile/>}/>
      <Route path="/dashboard/quickpay" element={<Quickpay/>}/>
      <Route path="/dashboard/book" element={<Book/>}/>
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
    </userContext.Provider>
    </whoContext.Provider>
  );
}

export default App;
