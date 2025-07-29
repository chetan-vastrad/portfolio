import './App.css'
import Myskills from './component/Myskills';
import Navbar from './component/Navbar';
import TopHeading from './component/Topheading';
import Myeduction from "./component/Myeduction"
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
return(
  <div className='maincontainer'>
    <TopHeading/>
    <Navbar/>
    <Myskills/>
    <Myeduction/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
)
}

export default App
