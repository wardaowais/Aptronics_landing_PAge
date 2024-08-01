// import Navbar from './components/Navbar';
// import Ban from './components/Bannr';
// import Service from './components/Services'




// function App() {
//   return (
//     <>
//     <div className='body-container'>
//       <Navbar />
//       <Ban/>
//       </div>

//       <Service/>







//     </>

//   );
// }

// export default App;\


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Service from './components/Services';
import Ban from "./components/Bannr"
import Landing from './pages/landing';

const App = () => {
  return (
    <Router>
     

      <Routes>
      <Route path="/" element={<Landing/>} />
       

        {/* <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimate" element={<Estimate />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
