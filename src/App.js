
import './App.css';
import Router from 'react-router'

import Navbar from './components/navbar'
import Footer from './components/footer'
import Webpages from './pages/index'

function App() {
  return (
    <div >
      <Navbar ></Navbar>
      <Webpages ></Webpages>
      <Footer ></Footer>

    </div>
  );
}

export default App;
