import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import ResumeBuilder from './components/resumeBuilder/ResumeBuilder';
import Courses from './components/courses/Courses';
import Contact from './components/contact/Contact';
import Explore from './components/explore/Explore';
import Login from './components/login/Login';
import SignUp from './components/signUp/SignUp';
import Footer from './components/footer/Footer';
import Payment from './components/payment/Payment';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home ></Home>} />
        <Route path='/resumeBuilder' element={<ResumeBuilder ></ResumeBuilder>} />
        <Route path='/courses' element={<Courses ></Courses>} />
        <Route path='/contact' element={<Contact ></Contact>} />
        <Route path='/explore' element={<Explore ></Explore>} />
        <Route path='/login' element={<Login ></Login>} />
        <Route path='/signUp' element={<SignUp ></SignUp>} />
        <Route path='/paymentSection' element={<Payment ></Payment>} />
        

      </Routes>
      <Footer />

    </div>
  );
}

export default App;
