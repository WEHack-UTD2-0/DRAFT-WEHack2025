import Jumbotron from "./sections/Jumbotron/Jumbotron";
import About from "./sections/About/About";
import Sponsor from "./sections/Sponsor/Sponsor";
import Nav from "./sections/Navbar/Nav";
import Footer from "./sections/Footer/Footer";
import FAQ from "./sections/FAQ/FAQ";
import Testimonials from "@/app/sections/Testimonials/Testimonials";
import Countdown from "./sections/Countdown/Countdown";
import FilmStrip from "./components/FilmStrip/FilmStrip";
import Stats from "./components/Stats/Stats";

export default function Home() {
  return (
    // this is where all our components will go
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <Countdown/>
      <About/>
      <FilmStrip/>
      <Stats/>
      <Testimonials/>
      <Sponsor/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
