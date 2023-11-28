import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner';
import CoursePartners from './components/CoursePartners/CoursePartners';
import CoursesNav from './components/CoursesNav/CoursesNav.jsx';
import Courses from './components/Courses/Courses';


function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <CoursePartners/>
   <CoursesNav/>
   <Courses/>
   </>
  );
}

export default App;
