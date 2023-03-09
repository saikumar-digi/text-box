
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
 import About from './components/About';
import { Navbar } from './components/Navbar';
import TextForm from './components/TextForm';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [mode, setMode ] = useState('light');


  const [alert, setAlert ] = useState(null);

  const showAlert = (message,type) =>{
        setAlert({
                message: message,
                type:type
        })

        setTimeout(() => {
              setAlert(null)
        } , 1500)

        
  }

  const enableDarkMode = () => {
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#6539a3';
        showAlert('Dark Mode Has Been Enabled' , 'success')
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = 'white ';
        showAlert('Light Mode Has Been Enabled' , 'success')

      }
  }

  return (
    <>
    <Router>

      <Navbar title ="TextUils" about="AboutUs" mode={mode} enableDarkMode={enableDarkMode}/>
      <Alert alert={alert} />
      <div className='container my-3' >
      <Routes>
      <Route path="/" element={ <TextForm path ="/" heading="Enter Text here" mode={mode}  />} />
      <Route path="/about" element={ <About path ="/"  mode={mode}  />} />

      </Routes> 
      </div>
      </Router>

    </>
  );
}

export default App;
