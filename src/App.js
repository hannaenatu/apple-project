import './App.css';
import Header from './components/Header/Header.js';
import Alert from './components/Alert/Alert.js';
import Hero from './components/Hero/Hero.js';
import MacBookAir from './components/MacBookAir/MacBookAir.js';
import Iphone from './components/Iphone/Iphone.js';
import Section1 from './components/Section1/Section1.js';
import Section2 from './components/Section2/Section2.js';
import Section3 from './components/Section3/Section3.js';
import Footer from './components/Footer/Footer.js';

function App() {
   return (
      <div className="App">
         <Header />
         <Alert />
         <Hero />
         <MacBookAir />
         <Iphone />
         <Section1 />
         <Section2 />
         <Section3 />
         <Footer />
      </div>
   );
}

export default App;
