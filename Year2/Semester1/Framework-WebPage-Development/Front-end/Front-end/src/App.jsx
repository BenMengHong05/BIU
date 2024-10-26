import { useEffect, useState } from 'react';

import './App.css'
import Nav from './components/header/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Main from './components/body/main.jsx'
import Aos  from 'aos';
import 'aos/dist/aos.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    Aos.init({duration: 2000});
    Aos.refresh();
}, []);

  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  )
}

export default App
