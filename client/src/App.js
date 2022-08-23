import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Register, Error, ProtectedRoute } from "./pages";
import {
  Addjob,
  Alljobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout></SharedLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats></Stats>}></Route>
          <Route path="all-jobs" element={<Alljobs></Alljobs>}></Route>
          <Route path="add-job" element={<Addjob></Addjob>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/landing" element={<Landing></Landing>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
