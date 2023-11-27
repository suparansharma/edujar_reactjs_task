import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner';
import CoursePartners from './components/CoursePartners/CoursePartners';


function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <CoursePartners/>
   </>
  );
}

export default App;
