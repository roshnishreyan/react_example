
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
 import TextForm from './component/TextForm';
 import React,{useState} from 'react';

function App() {
  const [mode,setMode]= useState('dark');

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
       
      {/* { <Navbar/>} */}
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
       <TextForm heading="enter the text"/> 
      {/* <About/> */}
      </div>
      </>
    );
}

export default App;
