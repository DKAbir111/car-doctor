import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Service from "./components/Service";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Contact />
    </div>
  );
}
