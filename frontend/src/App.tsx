import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Homepage } from './components/Homepage';
import { BreedDetection } from './components/BreedDetection';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { ProtectedRoute } from "./components/ProtectedRoute";
// import { Services } from './components/Services';
// import { WhyUs } from './components/WhyUs';
// import { About } from './components/About';
// import { Contact } from './components/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
                path="/breed-detection"
                element={
               <ProtectedRoute>
               <BreedDetection />
              </ProtectedRoute>
            }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/services" element={<Services />} /> */}
            {/* <Route path="/why-us" element={<WhyUs />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}