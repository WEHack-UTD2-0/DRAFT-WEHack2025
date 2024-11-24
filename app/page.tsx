import Jumbotron from "./sections/Jumbotron/Jumbotron";
import About from "./sections/About/About";
import Nav from "./sections/Navbar/Nav";
import Footer from "./sections/Footer/Footer";
import FAQ from "./sections/FAQ/FAQ";
import Testimonials from "@/app/sections/Testimonials/Testimonials";

export default function Home() {
  return (
    // this is where all our components will go
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <About/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </div>
  );
}
