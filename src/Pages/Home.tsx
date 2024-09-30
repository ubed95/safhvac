import { About, Accomplishments, Applications, Clients, Featured, Hero, Testimonials } from '../components';

const Home = () => {
  return (
    <main className="home">
      <Hero />
      <About />
      <Featured />
      <Applications />
      <Accomplishments />
      <Testimonials />
      <Clients />
    </main>
  );
};

export default Home;
