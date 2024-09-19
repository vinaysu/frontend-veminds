import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import About from './components/about/About'
import Courses from './components/courses/Courses'
import Contact from './components/contact/Contact'
import Explore from './components/explore/Explore'
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home ></Home>} />
        <Route path='/about' element={<About ></About>} />
        <Route path='/courses' element={<Courses ></Courses>} />
        <Route path='/contact' element={<Contact ></Contact>} />
        <Route path='/explore' element={<Explore ></Explore>} />
        <Route path='/login' element={<Login ></Login>} />
        <Route path='/signUp' element={<SignUp ></SignUp>} />
        
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
