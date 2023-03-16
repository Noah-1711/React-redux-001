import { createContext, useState } from 'react';
import './App.css';
import { Content } from './Components/Content';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { About } from './Components/About';
import { Button } from './Components/Button';
import { Services } from './Components/Services';




export const Mycontext = createContext()

function App() {
  const [theme, setTheme] = useState(false)
  const value1="hello"

  return (
    <div className="App">
      <Mycontext.Provider value={{theme,setTheme,value1}}>
      <Navbar />
      <Button />
      <Routes>
        <Route path='/' element={<Content />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Routes>
      </Mycontext.Provider>
  
    
    </div>
  );
}

export default App;
