import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Section from './components/Section';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Authenticated from './Authenticated/Authenticated'
import Desktop3 from './Desktop-3/Desktop3';
import Home from './Authenticated/Home';
import Login from './components/Login';
import Bookmark from './Authenticated/Bookmark';
import Edit from './Authenticated/Edit';
import Profile from './Authenticated/Profile';
import Sozlamalar from './Authenticated/Sozlamalar';
import Maqola_yozish from './Authenticated/Maqola_yozish';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  return (
    <div className="App">
      {isAuthenticated ? (
        <>
          <Authenticated />
        </>
      )
    :
    (
      <>
        <Navbar />
        <Header />
        <Section />
      </>
    )}
      <Routes>
        <Route path="/authenticated/home/card" element={<Desktop3 />} />
        <Route path="/authenticated" element={<Authenticated />} />
        <Route path="/authenticated/home" element={<Home />} />
        <Route path="/authenticated/bookmark" element={<Bookmark />} />
        <Route path="/authenticated/maqola_yozish" element={<Maqola_yozish />} />
        <Route path="/authenticated/edit" element={<Edit />} />
        <Route path="/authenticated/profile" element={<Profile />} />
        <Route path="/authenticated/sozlamalar" element={<Sozlamalar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
