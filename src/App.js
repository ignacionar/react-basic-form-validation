import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styles from './App.module.css' // HASHING STYLES
import Header from './components/header/Header';
import Home from './pages/home/Home.jsx';
import Posts from './pages/posts/Posts.jsx';
import Auth from "./pages/auth/Auth.jsx";

export default function App() {
  return (
      <Router>
        <div className={styles.App}>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />}> 
            </Route>
            <Route exact path="/posts" element={<Posts />}>
            </Route>
            <Route exact path="/login" element={<Auth />}>
            </Route>
        </Routes>
        </div>
    </Router>
  );
}
