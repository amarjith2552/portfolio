import './App.css';
import About from './Pages/About';
import Project from './Project/Project';
import Skills from './Pages/Skills';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './Pages/Contact';
import { useState } from 'react';
// import { Route, Routes } from 'react-router-dom';


function App() {
  const[mode,setMode]  =useState(false);
  return (
    <div className="App" >
      <section>
        <Header mode={mode} setMode={setMode}/>
      </section>
<section>
  <Home mode={mode} />
</section> 
<section>
  <About mode={mode} />
</section> 

<section>
  <Skills mode={mode}/>
</section> 

<section>
  <Project mode={mode}/>
</section>
<section>
<Contact mode={mode}/>
</section>
    <section>
      <Footer mode={mode}/>
    </section>
   {/* <Routes>
    <Route path='contact' element={<Contact/>}/>
   </Routes> */}
    </div>
  );
}

export default App;
