import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EventHighlights from "./components/EventHighlights";
import Events from "./components/Events";
import DaySwitcher from "./components/DaySwitcher";
import Venue from "./components/Venue";
import Register from "./components/Register";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Divider from "./components/Divider";
import Aurora from "./components/Aurora";
import Reveal from "./components/Reveal";
import CursorGlow from "./components/CursorGlow";
import MouseSpotlight from "./components/MouseSpotlight";
import FloatingParticles from "./components/FloatingParticles";


function App() {
  return (
    <div className="relative overflow-hidden">

<FloatingParticles />
<MouseSpotlight />
<CursorGlow />

      <Aurora />

      <Navbar />

<Hero />

<Divider />

<Reveal>

<About />

</Reveal>

<Divider />

<Reveal>

<EventHighlights />

</Reveal>

<Divider />

<Reveal>

<Events />

</Reveal>

<Divider />

<Reveal>

<DaySwitcher />

</Reveal>

<Divider />

<Reveal>

<Venue />

</Reveal>

<Divider />

<Reveal>

<Register />

</Reveal>

<Divider />

<Reveal>

<FAQ />

</Reveal>

<Footer />

    </div>
    
  );
}

export default App;