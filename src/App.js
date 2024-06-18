import './App.css';
import { Routes, Route } from "react-router-dom";
import { ContactPage, LandingPage } from 'views';


function App() {
  return (
    <div className="App">
     <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
