import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';


function App() {
  return (
    <>
     <Navbar title= "Text Utils" aboutText='about'/>
     <div className="container my-3">
     {/* <TextForm heading = "Enter the Text To Analyze Below : "/> */}
      <About/>
     </div>
       
    </>
 
  );
}

export default App;
