import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner';
import CoursePartners from './components/CoursePartners/CoursePartners';
import CoursesNav from './components/CoursesNav/CoursesNav.jsx';


function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <CoursePartners/>
   <CoursesNav/>
   </>
  );
}

export default App;
