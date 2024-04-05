import logo from './logo.svg';
import './App.css';
import Home from './Page/Home';
import About from './Page/About';
import Service from './Page/Service';
import Contact from './Page/Contact';
import Error from './Page/Error';
import Layout from './Page/Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
   
   
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Service" element={<Service />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
