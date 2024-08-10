import Header from "./header/Header";
import {Routes,Route} from 'react-router-dom';
import Home from "./home/Home";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Patients from "./patient/Patients";
import Doctors from "./doctor/Doctors";
import Appoinments from "./appoinment/Appoinments";



function App() {
  return (
    <div >
      
      <Header/>

      <Routes>

       <Route path='/' element={ <Home/>} />
       <Route path='/about' element={ <About/>} />
       <Route path='/contact' element={ <Contact/>} />
       <Route path='/patients' element={<Patients/>}/>
       <Route path='/doctors'  element={<Doctors/>}/>
       <Route path='/appoinments' element={<Appoinments/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
