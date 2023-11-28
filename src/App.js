import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Banner from './components/Banner/Banner';
import CoursePartners from './components/CoursePartners/CoursePartners';
import CoursesNav from './components/CoursesNav/CoursesNav.jsx';
import Courses from './components/Courses/Courses';
import Category from './components/Category/Category';
import DifferenceCon from './components/DifferenceCon/DifferenceCon';


function App() {
  return (
   <>
   <Navbar/>
   <Banner/>
   <CoursePartners/>
   <CoursesNav/>
   <Courses/>
   <Category/>
   <DifferenceCon/>
   </>
  );
}

export default App;
