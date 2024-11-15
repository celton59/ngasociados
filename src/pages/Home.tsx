import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Team />
      <Blog />
    </>
  );
}