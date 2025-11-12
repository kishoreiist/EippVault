import Hero from "../components/sections/hero/Hero";
import ContactUs from "../components/sections/contact/Contact";
import About from "../components/sections/about/About";
import Price from "../components/sections/price/Price";
import Certifications from "../components/sections/certifications/Certificates";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Certifications />
      <Price />
      <ContactUs />
    </main>
  );
}
