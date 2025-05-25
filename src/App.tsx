// filepath: d:\Developer Projects\vite pitch deck 2\project\src\App.tsx  
import { useEffect } from 'react';  
import Navbar from './components/Navbar';  
import Hero from './components/Hero';  
import Problem from './components/Problem';  
import Solution from './components/Solution';  
import Package from './components/Package';  
import About from './components/About';  
import Footer from './components/Footer';  
import BackgroundEffect from './components/BackgroundEffect';  
import MouseFollower from './components/MouseFollower';  
import GoToTopButton from './components/GoToTopButton';
import { useAnimation } from './hooks/useAnimation';
  
function App() {  
  useAnimation();  
    useEffect(() => {
    // Update document title  
    document.title = 'Website & Branding Package | Professional Web Design';  
  }, []);
  
  return (  
    <div className="app min-h-screen bg-black text-white overflow-hidden">  
      <BackgroundEffect />  
      <MouseFollower />  
      <Navbar />  
  
      <main>  
        <Hero />  
        <Problem />  
        <Solution />  
        <Package />  
        <About />  
      </main>        <Footer />  
      <GoToTopButton />
    </div>  
  );
}  
  
export default App;  
